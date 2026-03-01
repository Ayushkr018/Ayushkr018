<div align="center">

<!-- ============================================================
     HERO BANNER — inline SVG, renders 100% on GitHub
     ============================================================ -->
<svg width="900" height="280" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="50%"  stop-color="#0f1b2d"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
    <!-- Blue accent line gradient -->
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="30%"  stop-color="#1f6feb"/>
      <stop offset="70%"  stop-color="#58a6ff"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
    <!-- Glow filter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Subtle glow for name -->
    <filter id="nameglow">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Fade-in animation -->
    <style>
      .char { opacity: 0; animation: fadeUp 0.6s ease forwards; }
      .c1  { animation-delay: 0.1s; }
      .c2  { animation-delay: 0.2s; }
      .c3  { animation-delay: 0.3s; }
      .c4  { animation-delay: 0.4s; }
      .c5  { animation-delay: 0.5s; }
      .c6  { animation-delay: 0.6s; }
      .c7  { animation-delay: 0.7s; }
      .c8  { animation-delay: 0.8s; }
      .c9  { animation-delay: 0.9s; }
      .c10 { animation-delay: 1.0s; }
      .c11 { animation-delay: 1.1s; }
      .c12 { animation-delay: 1.2s; }
      .subtitle { opacity: 0; animation: fadeUp 0.8s ease 1.4s forwards; }
      .tagline  { opacity: 0; animation: fadeUp 0.8s ease 1.8s forwards; }
      .accentline { opacity: 0; animation: expand 1.2s ease 0.6s forwards; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(12px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes expand {
        from { opacity: 0; transform: scaleX(0); }
        to   { opacity: 1; transform: scaleX(1); }
      }
    </style>
  </defs>

  <!-- BG -->
  <rect width="900" height="280" fill="url(#bg)"/>

  <!-- Top accent dots -->
  <circle cx="60"  cy="40" r="1.5" fill="#1f6feb" opacity="0.6"/>
  <circle cx="80"  cy="30" r="1"   fill="#58a6ff" opacity="0.4"/>
  <circle cx="820" cy="35" r="1.5" fill="#1f6feb" opacity="0.6"/>
  <circle cx="845" cy="50" r="1"   fill="#58a6ff" opacity="0.4"/>
  <circle cx="100" cy="220" r="1"  fill="#58a6ff" opacity="0.3"/>
  <circle cx="800" cy="230" r="1"  fill="#1f6feb" opacity="0.3"/>

  <!-- Corner bracket TL -->
  <path d="M 30 20 L 30 60 M 30 20 L 70 20" stroke="#1f6feb" stroke-width="1.5" fill="none" opacity="0.7"/>
  <!-- Corner bracket TR -->
  <path d="M 870 20 L 870 60 M 870 20 L 830 20" stroke="#1f6feb" stroke-width="1.5" fill="none" opacity="0.7"/>
  <!-- Corner bracket BL -->
  <path d="M 30 260 L 30 220 M 30 260 L 70 260" stroke="#1f6feb" stroke-width="1.5" fill="none" opacity="0.7"/>
  <!-- Corner bracket BR -->
  <path d="M 870 260 L 870 220 M 870 260 L 830 260" stroke="#1f6feb" stroke-width="1.5" fill="none" opacity="0.7"/>

  <!-- NAME — letter by letter -->
  <text font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-weight="700" font-size="58" fill="#e6edf3" filter="url(#nameglow)" text-anchor="middle">
    <tspan x="450" y="130">
      <tspan class="char c1">A</tspan><tspan class="char c2">y</tspan><tspan class="char c3">u</tspan><tspan class="char c4">s</tspan><tspan class="char c5">h</tspan><tspan class="char c6"> </tspan><tspan class="char c7">K</tspan><tspan class="char c8">u</tspan><tspan class="char c9">m</tspan><tspan class="char c10">a</tspan><tspan class="char c11">r</tspan>
    </tspan>
  </text>

  <!-- Accent line under name -->
  <line x1="225" y1="148" x2="675" y2="148" stroke="url(#line)" stroke-width="1.5" class="accentline" transform-origin="450 148"/>

  <!-- Subtitle -->
  <text class="subtitle" font-family="'Courier New', monospace" font-size="13" fill="#58a6ff" text-anchor="middle" x="450" y="180" letter-spacing="3">
    FULL STACK ENGINEER  ·  AI BUILDER  ·  DATA STRATEGIST
  </text>

  <!-- Tagline -->
  <text class="tagline" font-family="'Segoe UI', Helvetica, sans-serif" font-size="12" fill="#8b949e" text-anchor="middle" x="450" y="215" font-style="italic">
    Building systems that think, scale, and perform.
  </text>

  <!-- Bottom scan line effect -->
  <line x1="30" y1="248" x2="870" y2="248" stroke="#1f6feb" stroke-width="0.4" opacity="0.3"/>
</svg>

<br/>

<!-- Social Badges -->
<a href="https://ayushkrprofile018.netlify.app/">
  <img src="https://img.shields.io/badge/PORTFOLIO-0d1117?style=for-the-badge&logo=vercel&logoColor=58a6ff&labelColor=0d1117"/>
</a>&nbsp;
<a href="https://www.linkedin.com/in/ayush-kumar-148412258/">
  <img src="https://img.shields.io/badge/LINKEDIN-0d1117?style=for-the-badge&logo=linkedin&logoColor=0A66C2&labelColor=0d1117"/>
</a>&nbsp;
<a href="mailto:ayushkr1974@gmail.com">
  <img src="https://img.shields.io/badge/EMAIL-0d1117?style=for-the-badge&logo=gmail&logoColor=EA4335&labelColor=0d1117"/>
</a>&nbsp;
<a href="https://github.com/Ayushkr018/Ai-Voice-Assistant-source-code-">
  <img src="https://img.shields.io/badge/FLAGSHIP_PROJECT-0d1117?style=for-the-badge&logo=github&logoColor=ffffff&labelColor=0d1117"/>
</a>

<br/><br/>

</div>

<!-- ============================================================
     SECTION DIVIDER — inline SVG
     ============================================================ -->
<div align="center">
<svg width="900" height="2" viewBox="0 0 900 2" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="div1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="20%"  stop-color="#1f6feb"/>
      <stop offset="50%"  stop-color="#58a6ff"/>
      <stop offset="80%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="900" height="2" fill="url(#div1)" rx="1"/>
</svg>
</div>

<br/>

<!-- ============================================================
     ABOUT + STATS
     ============================================================ -->

<img align="right" width="420" src="https://github-readme-stats.vercel.app/api?username=Ayushkr018&show_icons=true&theme=github_dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9&border_radius=10&rank_icon=github&custom_title=GitHub+Intelligence&include_all_commits=true"/>

### `< About />`

I design and build **intelligent systems** — fusing scalable backend architecture with precision frontend engineering.

My focus sits at the intersection of **AI · performance · product**, building applications that don't just work, but think, adapt, and hold under real-world load.

Currently deep in **AI voice systems**, **real-time ML pipelines**, and **high-performance SaaS platforms** — always moving fast, always shipping clean.

> B.Tech 2022–2026 &nbsp;·&nbsp; New Delhi &nbsp;·&nbsp; Open to Opportunities

<br/><br/><br/><br/>

<div align="center">
<svg width="900" height="2" viewBox="0 0 900 2" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="div2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="20%"  stop-color="#1f6feb"/>
      <stop offset="50%"  stop-color="#58a6ff"/>
      <stop offset="80%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="900" height="2" fill="url(#div2)" rx="1"/>
</svg>
</div>

<br/>

<!-- ============================================================
     TECH STACK — SVG CARDS inline
     ============================================================ -->

### `< Tech Stack />`

<br/>

<div align="center">

<!-- Frontend Row -->
<svg width="860" height="52" viewBox="0 0 860 52" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="row1bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f1923" stop-opacity="0"/>
      <stop offset="10%" stop-color="#0f1923"/>
      <stop offset="90%" stop-color="#0f1923"/>
      <stop offset="100%" stop-color="#0f1923" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="52" rx="8" fill="url(#row1bg)"/>
  <text font-family="'Courier New',monospace" font-size="10" fill="#58a6ff" x="20" y="20" letter-spacing="2" opacity="0.8">FRONTEND</text>
  <text font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="20" y="40">
    HTML5 &nbsp;&nbsp;·&nbsp;&nbsp; CSS3 &nbsp;&nbsp;·&nbsp;&nbsp; JavaScript &nbsp;&nbsp;·&nbsp;&nbsp; TypeScript &nbsp;&nbsp;·&nbsp;&nbsp; React &nbsp;&nbsp;·&nbsp;&nbsp; Next.js &nbsp;&nbsp;·&nbsp;&nbsp; Tailwind CSS
  </text>
</svg>

<br/>

<!-- Backend Row -->
<svg width="860" height="52" viewBox="0 0 860 52" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="row2bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f1923" stop-opacity="0"/>
      <stop offset="10%" stop-color="#0f1923"/>
      <stop offset="90%" stop-color="#0f1923"/>
      <stop offset="100%" stop-color="#0f1923" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="52" rx="8" fill="url(#row2bg)"/>
  <text font-family="'Courier New',monospace" font-size="10" fill="#3ECF8E" x="20" y="20" letter-spacing="2" opacity="0.8">BACKEND</text>
  <text font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="20" y="40">
    Node.js &nbsp;&nbsp;·&nbsp;&nbsp; Express &nbsp;&nbsp;·&nbsp;&nbsp; Python &nbsp;&nbsp;·&nbsp;&nbsp; Flask &nbsp;&nbsp;·&nbsp;&nbsp; Supabase &nbsp;&nbsp;·&nbsp;&nbsp; MongoDB &nbsp;&nbsp;·&nbsp;&nbsp; MySQL
  </text>
</svg>

<br/>

<!-- Intelligence Row -->
<svg width="860" height="52" viewBox="0 0 860 52" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="row3bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f1923" stop-opacity="0"/>
      <stop offset="10%" stop-color="#0f1923"/>
      <stop offset="90%" stop-color="#0f1923"/>
      <stop offset="100%" stop-color="#0f1923" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="860" height="52" rx="8" fill="url(#row3bg)"/>
  <text font-family="'Courier New',monospace" font-size="10" fill="#a371f7" x="20" y="20" letter-spacing="2" opacity="0.8">INTELLIGENCE</text>
  <text font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="20" y="40">
    Machine Learning &nbsp;&nbsp;·&nbsp;&nbsp; NLP &nbsp;&nbsp;·&nbsp;&nbsp; TensorFlow &nbsp;&nbsp;·&nbsp;&nbsp; Power BI &nbsp;&nbsp;·&nbsp;&nbsp; Analytics &nbsp;&nbsp;·&nbsp;&nbsp; Git
  </text>
</svg>

</div>

<br/>

<div align="center">
<svg width="900" height="2" viewBox="0 0 900 2" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="div3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="20%"  stop-color="#1f6feb"/>
      <stop offset="50%"  stop-color="#58a6ff"/>
      <stop offset="80%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="900" height="2" fill="url(#div3)" rx="1"/>
</svg>
</div>

<br/>

<!-- ============================================================
     PROJECTS — SVG CARDS
     ============================================================ -->

### `< Signature Projects />`

<br/>

<div align="center">

<!-- Project Card 1: Ellyse -->
<svg width="272" height="220" viewBox="0 0 272 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="card1bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#0f1b2d"/>
    </linearGradient>
    <linearGradient id="card1top" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#58a6ff"/>
    </linearGradient>
  </defs>
  <!-- Card bg + border -->
  <rect width="272" height="220" rx="10" fill="url(#card1bg)" stroke="#1f6feb" stroke-width="0.8" stroke-opacity="0.5"/>
  <!-- Top accent bar -->
  <rect width="272" height="3" rx="3" fill="url(#card1top)"/>
  <!-- Star badge -->
  <rect x="200" y="16" width="56" height="20" rx="4" fill="#1a1400"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11" fill="#F2C811" x="210" y="30">★  2</text>
  <!-- Live badge -->
  <circle cx="16" cy="26" r="4" fill="#00d26a"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#00d26a" x="24" y="30" letter-spacing="1">LIVE</text>
  <!-- Project name -->
  <text font-family="'Segoe UI',sans-serif" font-weight="700" font-size="20" fill="#e6edf3" x="14" y="62">ELLYSE</text>
  <!-- Category -->
  <text font-family="'Courier New',monospace" font-size="10" fill="#58a6ff" x="14" y="80" letter-spacing="1">AI VOICE ASSISTANT</text>
  <!-- Divider -->
  <line x1="14" y1="90" x2="258" y2="90" stroke="#1f6feb" stroke-width="0.5" opacity="0.5"/>
  <!-- Description -->
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="110">Voice-controlled AI assistant with</text>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="127">emotion recognition, WhatsApp</text>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="144">integration &amp; multilingual NLP.</text>
  <!-- Tags -->
  <rect x="14"  y="162" width="46" height="16" rx="3" fill="#1a0f00"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#FF6F00" x="19"  y="174">Python</text>
  <rect x="66"  y="162" width="54" height="16" rx="3" fill="#120a22"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#a371f7" x="72"  y="174">TensorFlow</text>
  <rect x="126" y="162" width="30" height="16" rx="3" fill="#0a0f22"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#58a6ff" x="131" y="174">NLP</text>
  <!-- View link -->
  <rect x="14" y="190" width="244" height="22" rx="5" fill="#161b22" stroke="#1f6feb" stroke-width="0.8"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11" fill="#58a6ff" text-anchor="middle" x="136" y="205">View Repository →</text>
</svg>
&nbsp;&nbsp;

<!-- Project Card 2: SCMS -->
<svg width="272" height="220" viewBox="0 0 272 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="card2bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#0d1a10"/>
    </linearGradient>
    <linearGradient id="card2top" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"  stop-color="#238636"/>
      <stop offset="100%" stop-color="#3ECF8E"/>
    </linearGradient>
  </defs>
  <rect width="272" height="220" rx="10" fill="url(#card2bg)" stroke="#238636" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect width="272" height="3" rx="3" fill="url(#card2top)"/>
  <!-- Badges -->
  <rect x="182" y="16" width="40" height="20" rx="4" fill="#1a1400"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11" fill="#F2C811" x="192" y="30">★  1</text>
  <rect x="228" y="16" width="30" height="20" rx="4" fill="#0a0f1a"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11" fill="#58a6ff" x="234" y="30">⑂  1</text>
  <circle cx="16" cy="26" r="4" fill="#3ECF8E"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#3ECF8E" x="24" y="30" letter-spacing="1">FORKED</text>
  <!-- Title -->
  <text font-family="'Segoe UI',sans-serif" font-weight="700" font-size="20" fill="#e6edf3" x="14" y="62">SCMS</text>
  <text font-family="'Courier New',monospace" font-size="10" fill="#3ECF8E" x="14" y="80" letter-spacing="1">CLASSROOM PLATFORM</text>
  <line x1="14" y1="90" x2="258" y2="90" stroke="#238636" stroke-width="0.5" opacity="0.5"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="110">Real-time platform with live</text>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="127">sessions, QR attendance, interactive</text>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="144">whiteboards &amp; grade analytics.</text>
  <!-- Tags -->
  <rect x="14"  y="162" width="20" height="16" rx="3" fill="#1a0800"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#E34F26" x="19"  y="174">H</text>
  <rect x="40"  y="162" width="22" height="16" rx="3" fill="#08122a"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#1572B6" x="44"  y="174">CS</text>
  <rect x="68"  y="162" width="22" height="16" rx="3" fill="#1a1600"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#F7DF1E" x="72"  y="174">JS</text>
  <rect x="96"  y="162" width="60" height="16" rx="3" fill="#0a1a12"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#3ECF8E" x="102" y="174">Real-time</text>
  <rect x="14" y="190" width="244" height="22" rx="5" fill="#161b22" stroke="#238636" stroke-width="0.8"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11" fill="#3ECF8E" text-anchor="middle" x="136" y="205">View Repository →</text>
</svg>
&nbsp;&nbsp;

<!-- Project Card 3: Wellness Eirene -->
<svg width="272" height="220" viewBox="0 0 272 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="card3bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#160d20"/>
    </linearGradient>
    <linearGradient id="card3top" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"  stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a371f7"/>
    </linearGradient>
  </defs>
  <rect width="272" height="220" rx="10" fill="url(#card3bg)" stroke="#7c3aed" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect width="272" height="3" rx="3" fill="url(#card3top)"/>
  <!-- Badges -->
  <circle cx="16" cy="26" r="4" fill="#00d26a"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#00d26a" x="24" y="30" letter-spacing="1">LIVE</text>
  <rect x="188" y="14" width="70" height="20" rx="4" fill="#120a22"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#a371f7" x="194" y="28">AI POWERED</text>
  <!-- Title -->
  <text font-family="'Segoe UI',sans-serif" font-weight="700" font-size="17" fill="#e6edf3" x="14" y="62">WELLNESS EIRENE</text>
  <text font-family="'Courier New',monospace" font-size="10" fill="#a371f7" x="14" y="80" letter-spacing="1">MENTAL WELLNESS AI</text>
  <line x1="14" y1="90" x2="258" y2="90" stroke="#7c3aed" stroke-width="0.5" opacity="0.5"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="110">AI wellness platform for Indian</text>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="127">youth — mood prediction, cultural</text>
  <text font-family="'Segoe UI',sans-serif" font-size="11.5" fill="#8b949e" x="14" y="144">counseling &amp; multilingual support.</text>
  <!-- Tags -->
  <rect x="14"  y="162" width="38" height="16" rx="3" fill="#0d0d0d"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#ffffff" x="19"  y="174">Flask</text>
  <rect x="58"  y="162" width="20" height="16" rx="3" fill="#1a1600"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#F7DF1E" x="62"  y="174">JS</text>
  <rect x="84"  y="162" width="20" height="16" rx="3" fill="#1a0f00"/>
  <text font-family="'Courier New',monospace" font-size="9" fill="#FF6F00" x="89"  y="174">ML</text>
  <rect x="14" y="190" width="244" height="22" rx="5" fill="#161b22" stroke="#7c3aed" stroke-width="0.8"/>
  <text font-family="'Segoe UI',sans-serif" font-size="11" fill="#a371f7" text-anchor="middle" x="136" y="205">View Repository →</text>
</svg>

<br/>

<!-- Hidden links (clickable areas via markdown below cards) -->

[**Ellyse →**](https://github.com/Ayushkr018/Ai-Voice-Assistant-source-code-)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[**SCMS →**](https://github.com/Ayushkr018/SCMS-Student-Classroom-Management-System)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[**Wellness Eirene →**](https://github.com/Ayushkr018/wellness-eirene)

</div>

<br/>

<div align="center">
<svg width="900" height="2" viewBox="0 0 900 2" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="div4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="20%"  stop-color="#1f6feb"/>
      <stop offset="50%"  stop-color="#58a6ff"/>
      <stop offset="80%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="900" height="2" fill="url(#div4)" rx="1"/>
</svg>
</div>

<br/>

<!-- ============================================================
     GITHUB STATS
     ============================================================ -->

### `< GitHub Activity />`

<div align="center">

<img src="https://github-readme-streak-stats.herokuapp.com?user=Ayushkr018&theme=github-dark-blue&hide_border=true&background=0d1117&ring=58a6ff&fire=ff6b35&currStreakLabel=58a6ff&sideLabels=8b949e&dates=8b949e&stroke=1f2937" width="48%"/>&nbsp;&nbsp;<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ayushkr018&layout=compact&theme=github_dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&border_radius=10&langs_count=6" width="48%"/>

<br/><br/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=Ayushkr018&bg_color=0d1117&color=58a6ff&line=1f6feb&point=58a6ff&area=true&area_color=1f6feb&hide_border=true&radius=6&custom_title=Contribution+Architecture" width="100%"/>

</div>

<br/>

<div align="center">
<svg width="900" height="2" viewBox="0 0 900 2" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="div5" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="20%"  stop-color="#1f6feb"/>
      <stop offset="50%"  stop-color="#58a6ff"/>
      <stop offset="80%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="900" height="2" fill="url(#div5)" rx="1"/>
</svg>
</div>

<br/>

<!-- ============================================================
     BUILDING TOWARD
     ============================================================ -->

### `< Currently Building Toward />`

<br/>

<div align="center">

<svg width="700" height="160" viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .goal { opacity: 0; animation: slideIn 0.5s ease forwards; }
      .g1 { animation-delay: 0.2s; }
      .g2 { animation-delay: 0.5s; }
      .g3 { animation-delay: 0.8s; }
      .g4 { animation-delay: 1.1s; }
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(-10px); }
        to   { opacity: 1; transform: translateX(0); }
      }
    </style>
  </defs>
  <rect width="700" height="160" rx="10" fill="#0f1923" stroke="#1f6feb" stroke-width="0.6" stroke-opacity="0.4"/>

  <!-- Row 1 -->
  <text class="goal g1" font-family="'Courier New',monospace" font-size="11" fill="#1f6feb" x="20" y="36">01</text>
  <line class="goal g1" x1="44" y1="30" x2="44" y2="42" stroke="#1f6feb" stroke-width="0.8" opacity="0.4"/>
  <text class="goal g1" font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="54" y="38">AI-first products that think, learn, and adapt in real time</text>

  <!-- Row 2 -->
  <text class="goal g2" font-family="'Courier New',monospace" font-size="11" fill="#1f6feb" x="20" y="72">02</text>
  <line class="goal g2" x1="44" y1="66" x2="44" y2="78" stroke="#1f6feb" stroke-width="0.8" opacity="0.4"/>
  <text class="goal g2" font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="54" y="74">Scalable SaaS architectures built for compounding growth</text>

  <!-- Row 3 -->
  <text class="goal g3" font-family="'Courier New',monospace" font-size="11" fill="#1f6feb" x="20" y="108">03</text>
  <line class="goal g3" x1="44" y1="102" x2="44" y2="114" stroke="#1f6feb" stroke-width="0.8" opacity="0.4"/>
  <text class="goal g3" font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="54" y="110">High-performance web platforms with sub-second experiences</text>

  <!-- Row 4 -->
  <text class="goal g4" font-family="'Courier New',monospace" font-size="11" fill="#1f6feb" x="20" y="144">04</text>
  <line class="goal g4" x1="44" y1="138" x2="44" y2="150" stroke="#1f6feb" stroke-width="0.8" opacity="0.4"/>
  <text class="goal g4" font-family="'Segoe UI',sans-serif" font-size="13" fill="#c9d1d9" x="54" y="146">Data-driven systems that solve problems at meaningful scale</text>
</svg>

</div>

<br/><br/>

<!-- ============================================================
     FOOTER
     ============================================================ -->

<div align="center">
<svg width="900" height="2" viewBox="0 0 900 2" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="div6" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1117"/>
      <stop offset="20%"  stop-color="#1f6feb"/>
      <stop offset="50%"  stop-color="#58a6ff"/>
      <stop offset="80%"  stop-color="#1f6feb"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="900" height="2" fill="url(#div6)" rx="1"/>
</svg>
</div>

<br/>

<div align="center">

<img src="https://komarev.com/ghpvc/?username=Ayushkr018&style=for-the-badge&color=1f6feb&label=PROFILE+VIEWS&labelColor=161b22"/>

<br/><br/>

<svg width="860" height="50" viewBox="0 0 860 50" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .footer-text { opacity: 0; animation: fadeUp 1s ease 0.5s forwards; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    </style>
  </defs>
  <text class="footer-text" font-family="'Segoe UI',sans-serif" font-size="14" fill="#484f58" text-anchor="middle" x="430" y="22" font-style="italic">Building systems that think, scale, and perform.</text>
  <text class="footer-text" font-family="'Courier New',monospace" font-size="10" fill="#1f6feb" text-anchor="middle" x="430" y="44" letter-spacing="3" opacity="0.6">AYUSH KUMAR · 2025</text>
</svg>

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:0f1923,100:0d1117&height=100&section=footer&animation=fadeIn" width="100%"/>

</div>
