import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.argv[2];
mkdirSync(out, { recursive: true });

const themes = {
  dark: { bg1: "#0b1020", bg2: "#111a2e", muted: "#9fb0c3", chip: "#16213a", chipText: "#c9d6e3", a1: "#2dd4bf", a2: "#8b5cf6", a3: "#38bdf8", line: "#2b3b5c" },
  light: { bg1: "#f6f8fc", bg2: "#eef2fa", muted: "#475569", chip: "#ffffff", chipText: "#1e293b", a1: "#0d9488", a2: "#7c3aed", a3: "#0284c7", line: "#d4dcea" },
};
const font = "'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif";
const mono = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
const roles = [
  "Full-stack TypeScript developer",
  "Open-source contributor · LibreDB · Lingui",
  "Next.js · Node.js · Supabase · Three.js",
];

function header(t) {
  const chips = [["5", "merged OSS PRs"], ["7", "live projects"], ["TS", "first"]];
  let x = 72;
  const chipSvg = chips
    .map(([n, label], i) => {
      const w = 34 + (n.length + label.length) * 8.6;
      const g = `<g class="chip" style="animation-delay:${(0.9 + i * 0.15).toFixed(2)}s">
  <rect x="${x}" y="214" rx="15" width="${w}" height="30" fill="${t.chip}" stroke="${t.line}"/>
  <text x="${x + 14}" y="234" font-family="${mono}" font-size="13" fill="${t.a1}" font-weight="700">${n}</text>
  <text x="${x + 22 + n.length * 8.4}" y="234" font-family="${font}" font-size="13" fill="${t.chipText}">${label}</text>
</g>`;
      x += w + 12;
      return g;
    })
    .join("\n");
  const roleSvg = roles
    .map((r, i) => `<text class="role r${i}" x="72" y="176" font-family="${font}" font-size="24" fill="${t.muted}">${r}</text>`)
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" width="1200" height="300" role="img" aria-label="Jeevan, full-stack TypeScript developer and open-source contributor">
<title>Jeevan, full-stack TypeScript developer and open-source contributor</title>
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.bg1}"/><stop offset="1" stop-color="${t.bg2}"/></linearGradient>
  <linearGradient id="name" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="${t.a1}"><animate attributeName="stop-color" values="${t.a1};${t.a2};${t.a3};${t.a1}" dur="8s" repeatCount="indefinite"/></stop>
    <stop offset="1" stop-color="${t.a2}"><animate attributeName="stop-color" values="${t.a2};${t.a3};${t.a1};${t.a2}" dur="8s" repeatCount="indefinite"/></stop>
  </linearGradient>
  <radialGradient id="glowA"><stop offset="0" stop-color="${t.a1}" stop-opacity="0.55"/><stop offset="1" stop-color="${t.a1}" stop-opacity="0"/></radialGradient>
  <radialGradient id="glowB"><stop offset="0" stop-color="${t.a2}" stop-opacity="0.5"/><stop offset="1" stop-color="${t.a2}" stop-opacity="0"/></radialGradient>
  <radialGradient id="glowC"><stop offset="0" stop-color="${t.a3}" stop-opacity="0.4"/><stop offset="1" stop-color="${t.a3}" stop-opacity="0"/></radialGradient>
  <clipPath id="card"><rect width="1200" height="300" rx="20"/></clipPath>
  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="${t.line}" stroke-width="1" opacity="0.45"/></pattern>
</defs>
<style>
  .blob { transform-box: fill-box; transform-origin: center; }
  .b1 { animation: drift1 14s ease-in-out infinite; }
  .b2 { animation: drift2 18s ease-in-out infinite; }
  .b3 { animation: drift3 22s ease-in-out infinite; }
  @keyframes drift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-90px,40px) scale(1.15); } }
  @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(110px,-30px) scale(0.9); } }
  @keyframes drift3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-60px,-50px); } }
  .hello { opacity: 0; animation: rise .8s cubic-bezier(.2,.7,.2,1) .1s forwards; }
  .name { opacity: 0; animation: rise .9s cubic-bezier(.2,.7,.2,1) .25s forwards; }
  .underline { stroke-dasharray: 260; stroke-dashoffset: 260; animation: draw 1.2s ease-out .7s forwards; }
  @keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
  @keyframes draw { to { stroke-dashoffset: 0; } }
  .role { opacity: 0; animation: cycle 12s infinite; }
  .r1 { animation-delay: 4s; }
  .r2 { animation-delay: 8s; }
  @keyframes cycle { 0% { opacity: 0; transform: translateY(10px); } 4%,29% { opacity: 1; transform: none; } 33%,100% { opacity: 0; transform: translateY(-10px); } }
  .chip { opacity: 0; animation: rise .6s ease-out forwards; }
  .dot { transform-box: fill-box; transform-origin: center; animation: pulse 2s ease-in-out infinite; }
  @keyframes pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: .35; } }
  .orbit { transform-origin: 1010px 150px; animation: spin 26s linear infinite; }
  .orbit2 { transform-origin: 1010px 150px; animation: spin 40s linear infinite reverse; }
  @keyframes spin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; }
    .hello, .name, .chip, .r0 { opacity: 1 !important; }
    .underline { stroke-dashoffset: 0 !important; }
  }
</style>
<g clip-path="url(#card)">
  <rect width="1200" height="300" fill="url(#bg)"/>
  <rect width="1200" height="300" fill="url(#grid)"/>
  <circle class="blob b1" cx="980" cy="70" r="220" fill="url(#glowA)"/>
  <circle class="blob b2" cx="760" cy="290" r="240" fill="url(#glowB)"/>
  <circle class="blob b3" cx="1150" cy="260" r="180" fill="url(#glowC)"/>
  <g class="orbit"><circle cx="1010" cy="150" r="92" fill="none" stroke="${t.a1}" stroke-opacity=".45" stroke-dasharray="4 10"/><circle cx="1102" cy="150" r="7" fill="${t.a1}"/></g>
  <g class="orbit2"><circle cx="1010" cy="150" r="58" fill="none" stroke="${t.a2}" stroke-opacity=".5" stroke-dasharray="2 8"/><circle cx="952" cy="150" r="5" fill="${t.a2}"/></g>
  <circle cx="1010" cy="150" r="26" fill="${t.chip}" stroke="${t.line}"/>
  <text x="1010" y="157" text-anchor="middle" font-family="${mono}" font-size="18" font-weight="700" fill="${t.a1}">&lt;/&gt;</text>
</g>
<text class="hello" x="74" y="76" font-family="${font}" font-size="20" fill="${t.muted}">Hi, I&#39;m</text>
<text class="name" x="70" y="132" font-family="${font}" font-size="64" font-weight="800" fill="url(#name)" letter-spacing="-1">Jeevan</text>
<path class="underline" d="M74 146 C 140 156, 230 140, 312 148" fill="none" stroke="url(#name)" stroke-width="4" stroke-linecap="round"/>
${roleSvg}
${chipSvg}
<g><circle class="dot" cx="${x + 18}" cy="229" r="5" fill="#22c55e"/><text x="${x + 30}" y="234" font-family="${font}" font-size="13" fill="${t.muted}">open to freelance &amp; junior roles</text></g>
<rect x="0.5" y="0.5" width="1199" height="299" rx="20" fill="none" stroke="${t.line}"/>
</svg>
`;
}

function footer(t) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 90" width="1200" height="90" role="img" aria-label="Decorative wave">
<title>Decorative wave</title>
<defs><linearGradient id="w" x1="0" x2="1"><stop offset="0" stop-color="${t.a1}"/><stop offset=".5" stop-color="${t.a3}"/><stop offset="1" stop-color="${t.a2}"/></linearGradient></defs>
<style>
  .w1 { animation: slide 10s linear infinite; }
  .w2 { animation: slide 16s linear infinite reverse; }
  /* Both paths span 0..1800 with a 600px wavelength, so sliding by one wavelength loops seamlessly
     in either direction while the visible 0..1200 stays covered. */
  @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-600px); } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<g class="w1" opacity=".35"><path d="M0 50 Q150 20 300 50 T600 50 T900 50 T1200 50 T1500 50 T1800 50 V90 H0Z" fill="url(#w)"/></g>
<g class="w2" opacity=".55"><path d="M0 62 Q150 82 300 62 T600 62 T900 62 T1200 62 T1500 62 T1800 62 V90 H0Z" fill="url(#w)"/></g>
</svg>
`;
}

for (const [name, t] of Object.entries(themes)) {
  writeFileSync(join(out, `header-${name}.svg`), header(t));
  writeFileSync(join(out, `footer-${name}.svg`), footer(t));
}
console.log("written to", out);
