import os
import subprocess

os.makedirs('public/images/products', exist_ok=True)
os.makedirs('src/assets/images/products', exist_ok=True)

# 1. Aluminium Block
svg_aluminium_block = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="blockTop" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="blockFront" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="blockSide" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="orangeGlow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <!-- Workshop floor grid -->
  <g opacity="0.15" stroke="#94a3b8" stroke-width="1">
    <line x1="50" y1="450" x2="750" y2="450"/>
    <line x1="80" y1="480" x2="720" y2="480"/>
    <line x1="120" y1="520" x2="680" y2="520"/>
    <line x1="200" y1="380" x2="100" y2="550"/>
    <line x1="400" y1="380" x2="400" y2="550"/>
    <line x1="600" y1="380" x2="700" y2="550"/>
  </g>
  <!-- Cast Aluminium Block (Isometric 3D) -->
  <g transform="translate(400, 310)">
    <!-- Shadow -->
    <polygon points="-240,110 0,190 240,110 0,40" fill="#000000" opacity="0.6"/>
    <!-- Top Face -->
    <polygon points="0,-120 220,-30 0,60 -220,-30" fill="url(#blockTop)" stroke="#f1f5f9" stroke-width="2"/>
    <!-- Machined surface lines -->
    <path d="M -180,-15 L -20,50 M -140,0 L 20,65 M -100,15 L 60,80" stroke="#94a3b8" stroke-width="1" opacity="0.4"/>
    <!-- Front Left Face -->
    <polygon points="-220,-30 0,60 0,160 -220,70" fill="url(#blockFront)" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Front Right Face -->
    <polygon points="0,60 220,-30 220,70 0,160" fill="url(#blockSide)" stroke="#64748b" stroke-width="1.5"/>
    <!-- Metallic chamfers / edge highlights -->
    <line x1="0" y1="-120" x2="0" y2="60" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
    <line x1="-220" y1="-30" x2="0" y2="60" stroke="#ffffff" stroke-width="2" opacity="0.9"/>
    <!-- Foundry Heat / Batch Stamp -->
    <g transform="translate(-110, 30) rotate(22)">
      <rect x="0" y="0" width="80" height="24" rx="3" fill="#1e293b" opacity="0.8"/>
      <text x="40" y="16" fill="#f8fafc" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">AL-LM25</text>
    </g>
    <!-- Right side inspection markings -->
    <g transform="translate(60, 30) rotate(-22)">
      <rect x="0" y="0" width="70" height="20" rx="2" fill="#0f172a" opacity="0.7"/>
      <text x="35" y="14" fill="#fb923c" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle">DISHANT</text>
    </g>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="180" height="28" rx="6" fill="#0369a1" opacity="0.3"/>
    <text x="12" y="19" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">SOLID CAST TOOLING BLOCK</text>
  </g>
  <g transform="translate(640, 50)">
    <text x="120" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">MAX 500 KG</text>
  </g>
</svg>'''

# 2. Aluminium Pattern Casting
svg_pattern = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgPatt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="metalPlate" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="matchpattern" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgPatt)"/>
  <!-- Foundry Matchplate Base Frame -->
  <g transform="translate(400, 310)">
    <!-- Base Plate Shadow -->
    <polygon points="-280,60 0,160 280,60 0,-40" fill="#000000" opacity="0.5"/>
    <!-- Plate Top -->
    <polygon points="0,-120 260,-20 0,80 -260,-20" fill="url(#metalPlate)" stroke="#e2e8f0" stroke-width="2"/>
    <!-- Guide Pin Bushings (Flask Alignment) -->
    <circle cx="-230" cy="-20" r="14" fill="#334155" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="230" cy="-20" r="14" fill="#334155" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="-230" cy="-20" r="6" fill="#0f172a"/>
    <circle cx="230" cy="-20" r="6" fill="#0f172a"/>
    <!-- Central Pattern Mould Contours (Pump Impeller / Housing Pattern) -->
    <!-- Runner & Gating System -->
    <path d="M 0,-80 L 0,40" stroke="#f97316" stroke-width="8" stroke-linecap="round"/>
    <path d="M -90,-20 L 90,-20" stroke="#f97316" stroke-width="6" stroke-linecap="round"/>
    <!-- Left Cavity Mould -->
    <g transform="translate(-80, -20)">
      <polygon points="0,-35 45,-10 0,15 -45,-10" fill="url(#matchpattern)" stroke="#ffffff" stroke-width="2"/>
      <circle cx="0" cy="-10" r="16" fill="#475569" stroke="#cbd5e1" stroke-width="2"/>
    </g>
    <!-- Right Cavity Mould -->
    <g transform="translate(80, -20)">
      <polygon points="0,-35 45,-10 0,15 -45,-10" fill="url(#matchpattern)" stroke="#ffffff" stroke-width="2"/>
      <circle cx="0" cy="-10" r="16" fill="#475569" stroke="#cbd5e1" stroke-width="2"/>
    </g>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="200" height="28" rx="6" fill="#ea580c" opacity="0.3"/>
    <text x="12" y="19" fill="#fb923c" font-family="sans-serif" font-size="12" font-weight="bold">FOUNDRY MATCHPLATE PATTERN</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">±0.2mm TOLERANCE</text>
  </g>
</svg>'''

# 3. Thermocol Pattern (Lost Foam)
svg_thermocol = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgThermo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="foamWhite" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgThermo)"/>
  <!-- Multi-port Engine Manifold Thermocol Pattern -->
  <g transform="translate(400, 300)">
    <!-- Shadow -->
    <ellipse cx="0" cy="140" rx="220" ry="40" fill="#000000" opacity="0.5"/>
    <!-- Main Evaporative Cluster Runner -->
    <path d="M -180,60 C -120,-30 -40,-60 0,-60 C 40,-60 120,-30 180,60" fill="none" stroke="url(#foamWhite)" stroke-width="36" stroke-linecap="round"/>
    <!-- 4 Manifold Ports -->
    <circle cx="-150" cy="40" r="28" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
    <circle cx="-50" cy="0" r="28" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
    <circle cx="50" cy="0" r="28" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
    <circle cx="150" cy="40" r="28" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
    <!-- Evaporative Foam Texture Dots -->
    <circle cx="-150" cy="40" r="14" fill="#94a3b8" opacity="0.4"/>
    <circle cx="-50" cy="0" r="14" fill="#94a3b8" opacity="0.4"/>
    <circle cx="50" cy="0" r="14" fill="#94a3b8" opacity="0.4"/>
    <circle cx="150" cy="40" r="14" fill="#94a3b8" opacity="0.4"/>
    <!-- Central Riser Feeder -->
    <path d="M 0,-60 L 0,-140" stroke="#ea580c" stroke-width="16" stroke-linecap="round"/>
    <polygon points="0,-160 -24,-135 24,-135" fill="#f97316"/>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="220" height="28" rx="6" fill="#6366f1" opacity="0.3"/>
    <text x="12" y="19" fill="#a5b4fc" font-family="sans-serif" font-size="12" font-weight="bold">LOST FOAM THERMOCOL PATTERN</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">FULL-MOULD CASTING</text>
  </g>
</svg>'''

# 4. No-Bake Casting (Heavy Gearbox/Compressor Casing)
svg_nobake = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgNoBake" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="castIron" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgNoBake)"/>
  <!-- Heavy Industrial Compressor Housing -->
  <g transform="translate(400, 310)">
    <!-- Shadow -->
    <ellipse cx="0" cy="140" rx="240" ry="45" fill="#000000" opacity="0.6"/>
    <!-- Outer Flanged Enclosure -->
    <path d="M -180,-80 L 180,-80 L 220,100 L -220,100 Z" fill="url(#castIron)" stroke="#e2e8f0" stroke-width="2"/>
    <!-- Cooling Fins -->
    <line x1="-160" y1="-60" x2="160" y2="-60" stroke="#334155" stroke-width="4"/>
    <line x1="-170" y1="-30" x2="170" y2="-30" stroke="#334155" stroke-width="4"/>
    <line x1="-180" y1="0" x2="180" y2="0" stroke="#334155" stroke-width="4"/>
    <line x1="-190" y1="30" x2="190" y2="30" stroke="#334155" stroke-width="4"/>
    <line x1="-200" y1="60" x2="200" y2="60" stroke="#334155" stroke-width="4"/>
    <!-- Center Bore Flange -->
    <circle cx="0" cy="0" r="60" fill="#334155" stroke="#f8fafc" stroke-width="6"/>
    <circle cx="0" cy="0" r="35" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Bolt Circle (6 perimeter bolts) -->
    <circle cx="0" cy="-48" r="6" fill="#f8fafc"/>
    <circle cx="42" cy="-24" r="6" fill="#f8fafc"/>
    <circle cx="42" cy="24" r="6" fill="#f8fafc"/>
    <circle cx="0" cy="48" r="6" fill="#f8fafc"/>
    <circle cx="-42" cy="24" r="6" fill="#f8fafc"/>
    <circle cx="-42" cy="-24" r="6" fill="#f8fafc"/>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="210" height="28" rx="6" fill="#0d9488" opacity="0.3"/>
    <text x="12" y="19" fill="#2dd4bf" font-family="sans-serif" font-size="12" font-weight="bold">NO-BAKE RESIN SAND CASTING</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">HEAVY DENSITY ENVELOPE</text>
  </g>
</svg>'''

# 5. Commercial Ingots
svg_commercial_ingots = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgIngot" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="ingotSilver" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f1f5f9"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="ingotSide" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgIngot)"/>
  <!-- Stack of Aluminium Remelt Ingots (Trapezoidal notched bars) -->
  <g transform="translate(400, 360)">
    <!-- Base Pallet -->
    <rect x="-240" y="80" width="480" height="30" rx="4" fill="#78350f" opacity="0.8"/>
    
    <!-- Tier 1: Bottom 3 ingots -->
    <!-- Left -->
    <polygon points="-220,70 -100,70 -80,40 -200,40" fill="url(#ingotSilver)" stroke="#e2e8f0" stroke-width="1.5"/>
    <polygon points="-220,70 -200,40 -200,20 -220,50" fill="url(#ingotSide)"/>
    <!-- Mid -->
    <polygon points="-70,70 50,70 70,40 -50,40" fill="url(#ingotSilver)" stroke="#e2e8f0" stroke-width="1.5"/>
    <!-- Right -->
    <polygon points="80,70 200,70 220,40 100,40" fill="url(#ingotSilver)" stroke="#e2e8f0" stroke-width="1.5"/>

    <!-- Tier 2: Middle 2 cross ingots -->
    <polygon points="-160,20 160,20 130,-15 -130,-15" fill="url(#ingotSilver)" stroke="#ffffff" stroke-width="1.5"/>
    <polygon points="-160,20 -130,-15 -130,-35 -160,0" fill="url(#ingotSide)"/>

    <!-- Tier 3: Top single ingot with central notch -->
    <polygon points="-120,-40 120,-40 100,-75 -100,-75" fill="url(#ingotSilver)" stroke="#ffffff" stroke-width="2"/>
    <line x1="0" y1="-40" x2="0" y2="-75" stroke="#475569" stroke-width="3"/>
    
    <!-- Dishant Brand Stamp on Top Ingot -->
    <g transform="translate(0, -58)">
      <text x="0" y="4" fill="#1e293b" font-family="monospace" font-size="12" font-weight="900" letter-spacing="2" text-anchor="middle">DISHANT AL-INGOT</text>
    </g>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="220" height="28" rx="6" fill="#ea580c" opacity="0.3"/>
    <text x="12" y="19" fill="#fb923c" font-family="sans-serif" font-size="12" font-weight="bold">ALUMINIUM COMMERCIAL INGOTS</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">5-7 KG NOTCHED BARS</text>
  </g>
</svg>'''

# 6. Soft Ingots (Pure 99.7% EC Grade)
svg_soft_ingots = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgSoft" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="pureSilver" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="mirrorGleam" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgSoft)"/>
  <!-- High Purity Silver Metallic Ingots -->
  <g transform="translate(400, 320)">
    <!-- Base Shadow -->
    <ellipse cx="0" cy="110" rx="250" ry="35" fill="#000000" opacity="0.6"/>
    <!-- Stack of 3 high-mirror ingots -->
    <polygon points="-200,60 200,60 170,10 -170,10" fill="url(#pureSilver)" stroke="#ffffff" stroke-width="2"/>
    <polygon points="-160,0 160,0 130,-50 -130,-50" fill="url(#pureSilver)" stroke="#ffffff" stroke-width="2"/>
    <polygon points="-120,-60 120,-60 90,-110 -90,-110" fill="url(#pureSilver)" stroke="#ffffff" stroke-width="2"/>
    <!-- Specular Highlight Lines -->
    <line x1="-110" y1="-85" x2="80" y2="-85" stroke="#ffffff" stroke-width="3" opacity="0.9"/>
    <text x="0" y="-80" fill="#0f172a" font-family="monospace" font-size="12" font-weight="900" letter-spacing="3" text-anchor="middle">99.7% PURITY EC</text>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="210" height="28" rx="6" fill="#3b82f6" opacity="0.3"/>
    <text x="12" y="19" fill="#60a5fa" font-family="sans-serif" font-size="12" font-weight="bold">HIGH-PURITY SOFT INGOTS</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">EC GRADE &amp; 1000 SERIES</text>
  </g>
</svg>'''

# 7. 6063 Extrusion Scrap
svg_6063 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg6063" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="profileSilver" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg6063)"/>
  <!-- Bundle of 6063 Extruded Profiles (Cross-section view) -->
  <g transform="translate(400, 310)">
    <!-- Shadow -->
    <ellipse cx="0" cy="140" rx="260" ry="40" fill="#000000" opacity="0.5"/>
    
    <!-- Profile 1: Rectangular Box Section -->
    <rect x="-180" y="-80" width="100" height="180" rx="8" fill="url(#profileSilver)" stroke="#ffffff" stroke-width="2"/>
    <rect x="-160" y="-60" width="60" height="140" rx="4" fill="#0f172a"/>

    <!-- Profile 2: T-Slot Architectural Profile -->
    <rect x="-50" y="-120" width="100" height="220" rx="8" fill="url(#profileSilver)" stroke="#ffffff" stroke-width="2"/>
    <rect x="-30" y="-100" width="60" height="60" rx="4" fill="#0f172a"/>
    <rect x="-30" y="20" width="60" height="60" rx="4" fill="#0f172a"/>

    <!-- Profile 3: Heavy Window Jamb Profile -->
    <rect x="80" y="-60" width="110" height="160" rx="8" fill="url(#profileSilver)" stroke="#ffffff" stroke-width="2"/>
    <circle cx="135" cy="20" r="30" fill="#0f172a"/>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="220" height="28" rx="6" fill="#10b981" opacity="0.3"/>
    <text x="12" y="19" fill="#34d399" font-family="sans-serif" font-size="12" font-weight="bold">ALUMINIUM 6063 EXTRUSION SCRAP</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">CLEAN SEGREGATED 'TOTO'</text>
  </g>
</svg>'''

# 8. TT Scrap (Tense / Tabor)
svg_tt = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgTT" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="scrapShred" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgTT)"/>
  <!-- Shredded & Compacted Secondary Metal Pieces -->
  <g transform="translate(400, 320)">
    <!-- Shadow -->
    <ellipse cx="0" cy="120" rx="250" ry="40" fill="#000000" opacity="0.6"/>
    <!-- Chunks and cut pieces -->
    <polygon points="-160,20 -80,-50 20,-20 -40,60" fill="url(#scrapShred)" stroke="#ffffff" stroke-width="2"/>
    <polygon points="10,-60 120,-80 160,-10 60,30" fill="url(#scrapShred)" stroke="#cbd5e1" stroke-width="2"/>
    <polygon points="-60,40 40,30 90,90 -20,100" fill="url(#scrapShred)" stroke="#e2e8f0" stroke-width="2"/>
    <polygon points="-180,60 -100,50 -120,110 -190,100" fill="url(#scrapShred)" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="110,10 180,-20 220,50 150,80" fill="url(#scrapShred)" stroke="#ffffff" stroke-width="2"/>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="190" height="28" rx="6" fill="#f59e0b" opacity="0.3"/>
    <text x="12" y="19" fill="#fbbf24" font-family="sans-serif" font-size="12" font-weight="bold">ALUMINIUM TT SCRAP</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">ISRI TENSE &amp; TABOR</text>
  </g>
</svg>'''

# 9. 7000 Series Aerospace Ingots
svg_7000 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg7000" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="alloy7000" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="40%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg7000)"/>
  <!-- High Strength Aerospace Ingot Bar -->
  <g transform="translate(400, 320)">
    <!-- Shadow -->
    <polygon points="-240,110 0,180 240,110 0,40" fill="#000000" opacity="0.7"/>
    <!-- Top Face -->
    <polygon points="0,-100 220,-20 0,60 -220,-20" fill="url(#alloy7000)" stroke="#ffffff" stroke-width="2"/>
    <!-- Front Face -->
    <polygon points="-220,-20 0,60 0,140 -220,60" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="0,60 220,-20 220,60 0,140" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
    <!-- Laser Etched Certification Badge -->
    <g transform="translate(0, -20) rotate(-5)">
      <rect x="-100" y="-15" width="200" height="30" rx="4" fill="#0284c7" opacity="0.3" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="0" y="5" fill="#f0f9ff" font-family="monospace" font-size="13" font-weight="900" letter-spacing="3" text-anchor="middle">AL 7075-T6 SPEC</text>
    </g>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="240" height="28" rx="6" fill="#0284c7" opacity="0.3"/>
    <text x="12" y="19" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">AEROSPACE 7000 SERIES INGOTS</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">ULTRA-HIGH YIELD STRENGTH</text>
  </g>
</svg>'''

# 10. Automobile Scrap
svg_auto = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgAuto" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="autoCast" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="60%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgAuto)"/>
  <!-- Automotive Cast Cylinder Head & Housing Fragment -->
  <g transform="translate(400, 310)">
    <!-- Shadow -->
    <ellipse cx="0" cy="140" rx="240" ry="40" fill="#000000" opacity="0.6"/>
    <!-- Cylinder Head Body -->
    <rect x="-180" y="-70" width="360" height="160" rx="12" fill="url(#autoCast)" stroke="#e2e8f0" stroke-width="2"/>
    <!-- 4 Combustion Chamber Bores -->
    <circle cx="-120" cy="10" r="32" fill="#1e293b" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="-40" cy="10" r="32" fill="#1e293b" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="40" cy="10" r="32" fill="#1e293b" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="120" cy="10" r="32" fill="#1e293b" stroke="#f8fafc" stroke-width="3"/>
    <!-- Valve holes -->
    <circle cx="-120" cy="10" r="12" fill="#475569"/>
    <circle cx="-40" cy="10" r="12" fill="#475569"/>
    <circle cx="40" cy="10" r="12" fill="#475569"/>
    <circle cx="120" cy="10" r="12" fill="#475569"/>
  </g>
  <!-- Technical Spec Watermark Header -->
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="230" height="28" rx="6" fill="#e11d48" opacity="0.3"/>
    <text x="12" y="19" fill="#fb7185" font-family="sans-serif" font-size="12" font-weight="bold">AUTOMOTIVE CAST SCRAP</text>
  </g>
  <g transform="translate(760, 50)">
    <text x="0" y="20" fill="#94a3b8" font-family="monospace" font-size="12" text-anchor="end">ENGINE &amp; GEARBOX CAST</text>
  </g>
</svg>'''

products_svgs = {
    'aluminium-block': svg_aluminium_block,
    'aluminium-pattern-casting': svg_pattern,
    'aluminium-thermocol-pattern': svg_thermocol,
    'no-bake-casting': svg_nobake,
    'aluminium-commercial-ingots': svg_commercial_ingots,
    'aluminium-soft-ingots': svg_soft_ingots,
    'aluminium-6063-extrusion-scrap': svg_6063,
    'aluminium-tt-scrap': svg_tt,
    'aluminium-7000-series-ingots': svg_7000,
    'aluminium-automobile-scrap': svg_auto,
}

for name, svg in products_svgs.items():
    svg_path = f'public/images/products/{name}.svg'
    png_path = f'public/images/products/{name}.png'
    with open(svg_path, 'w') as f:
        f.write(svg)
    cmd = f'rsvg-convert -w 800 -h 600 -f png -o {png_path} {svg_path}'
    subprocess.run(cmd, shell=True, check=True)
    # Also copy to src/assets/images/products/
    subprocess.run(f'cp {png_path} src/assets/images/products/{name}.png', shell=True, check=True)
    subprocess.run(f'cp {svg_path} src/assets/images/products/{name}.svg', shell=True, check=True)
    print(f'Rendered {name}.png and {name}.svg successfully!')

print('ALL 10 PRODUCT IMAGES CREATED AND VERIFIED!')
