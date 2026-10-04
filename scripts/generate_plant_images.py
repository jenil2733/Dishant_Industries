import os
import subprocess

os.makedirs('public/images/plant', exist_ok=True)

# 1. Melt Deck & Reverberatory Furnace
svg_melt = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgMelt" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="furnaceFlame" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="50%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#facc15"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bgMelt)"/>
  <!-- Industrial Furnace Silhouette & Molten Bath Glow -->
  <g transform="translate(400, 260)">
    <!-- Furnace Wall -->
    <rect x="-240" y="-120" width="480" height="240" rx="16" fill="#1e293b" stroke="#334155" stroke-width="3"/>
    <!-- Furnace Door Opening -->
    <rect x="-140" y="-70" width="280" height="150" rx="12" fill="#090d16" stroke="#ea580c" stroke-width="4"/>
    <!-- Molten Aluminium Bath Glow -->
    <ellipse cx="0" cy="50" rx="120" ry="25" fill="url(#furnaceFlame)"/>
    <!-- Biomass White Coal Burner Flare -->
    <path d="M -80,40 Q 0,-60 80,40 Q 0,10 -80,40 Z" fill="url(#furnaceFlame)" opacity="0.9"/>
    <circle cx="0" cy="-10" r="30" fill="#fef08a" opacity="0.8"/>
  </g>
  <!-- HUD Header Overlay -->
  <g transform="translate(30, 40)">
    <rect x="0" y="0" width="180" height="26" rx="6" fill="#ea580c" opacity="0.3"/>
    <text x="12" y="18" fill="#fb923c" font-family="sans-serif" font-size="12" font-weight="bold">MELT DECK &amp; FURNACE</text>
  </g>
  <g transform="translate(770, 40)">
    <text x="0" y="18" fill="#fdba74" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">720°C - 740°C</text>
  </g>
</svg>'''

# 2. Rotary Degassing & Refining
svg_degas = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgDegas" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="moltenBath" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bgDegas)"/>
  <!-- Refining Crucible & Graphite Impeller -->
  <g transform="translate(400, 270)">
    <!-- Crucible Pot -->
    <path d="M -180,-60 L 180,-60 L 140,140 L -140,140 Z" fill="#1e293b" stroke="#475569" stroke-width="4"/>
    <!-- Molten Metal Layer -->
    <path d="M -160,-20 L 160,-20 L 130,120 L -130,120 Z" fill="url(#moltenBath)"/>
    <!-- Graphite Rotor Shaft -->
    <rect x="-14" y="-180" width="28" height="230" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <!-- Impeller Head at Bottom -->
    <rect x="-60" y="50" width="120" height="24" rx="6" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <!-- Nitrogen Micro-Bubbles -->
    <circle cx="-40" cy="20" r="6" fill="#f8fafc" opacity="0.8"/>
    <circle cx="30" cy="10" r="8" fill="#f8fafc" opacity="0.8"/>
    <circle cx="-10" cy="-5" r="5" fill="#f8fafc" opacity="0.8"/>
    <circle cx="50" cy="35" r="6" fill="#f8fafc" opacity="0.8"/>
  </g>
  <!-- HUD Header Overlay -->
  <g transform="translate(30, 40)">
    <rect x="0" y="0" width="190" height="26" rx="6" fill="#0284c7" opacity="0.3"/>
    <text x="12" y="18" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">NITROGEN ROTARY DEGASSING</text>
  </g>
  <g transform="translate(770, 40)">
    <text x="0" y="18" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">HYDROGEN PURGE</text>
  </g>
</svg>'''

# 3. Precision Moulding & Matchplates
svg_mould = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgMould" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="sandBox" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="100%" stop-color="#451a03"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bgMould)"/>
  <!-- Foundry Flask / Mould Box -->
  <g transform="translate(400, 260)">
    <!-- Base Plate -->
    <rect x="-240" y="80" width="480" height="30" rx="4" fill="#334155"/>
    <!-- Cope & Drag Flask Frame -->
    <rect x="-200" y="-100" width="400" height="180" rx="10" fill="url(#sandBox)" stroke="#94a3b8" stroke-width="4"/>
    <!-- Mould Parting Line -->
    <line x1="-200" y1="-10" x2="200" y2="-10" stroke="#f97316" stroke-width="3"/>
    <!-- Matchplate Core Cavity Cutout -->
    <path d="M -120,-10 C -80,-60 80,-60 120,-10 C 80,40 -80,40 -120,-10 Z" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Sprue Runner -->
    <polygon points="-140,-90 -120,-90 -130,-10" fill="#f97316"/>
  </g>
  <!-- HUD Header Overlay -->
  <g transform="translate(30, 40)">
    <rect x="0" y="0" width="200" height="26" rx="6" fill="#10b981" opacity="0.3"/>
    <text x="12" y="18" fill="#34d399" font-family="sans-serif" font-size="12" font-weight="bold">SAND &amp; MATCHPLATE MOULDING</text>
  </g>
  <g transform="translate(770, 40)">
    <text x="0" y="18" fill="#34d399" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">AFS 55-65 SILICA</text>
  </g>
</svg>'''

# 4. Spectrometer & Quality Inspection
svg_spec = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgSpec" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c4a6e"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bgSpec)"/>
  <!-- Optical Spectrometer Device & Spark Stand -->
  <g transform="translate(400, 260)">
    <!-- Instrument Console -->
    <rect x="-240" y="-120" width="480" height="240" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <!-- Digital Screen -->
    <rect x="-210" y="-95" width="260" height="150" rx="8" fill="url(#screenGrad)" stroke="#0284c7" stroke-width="2"/>
    <!-- Spectral Peaks Spectrum -->
    <path d="M -190,10 L -160,-40 L -140,-10 L -110,-70 L -80,0 L -50,-50 L -20,-10 L 10,-30 L 30,10" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="-190" y="-70" fill="#f0f9ff" font-family="monospace" font-size="11" font-weight="bold">SPECTRO VERIFIED: PASS</text>
    <!-- Spark Electrode Stand -->
    <rect x="90" y="-60" width="90" height="140" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <!-- Spark Flash -->
    <circle cx="135" cy="10" r="14" fill="#38bdf8"/>
    <circle cx="135" cy="10" r="6" fill="#ffffff"/>
  </g>
  <!-- HUD Header Overlay -->
  <g transform="translate(30, 40)">
    <rect x="0" y="0" width="220" height="26" rx="6" fill="#0284c7" opacity="0.3"/>
    <text x="12" y="18" fill="#38bdf8" font-family="sans-serif" font-size="12" font-weight="bold">SPECTROMETER LAB QUALITY</text>
  </g>
  <g transform="translate(770, 40)">
    <text x="0" y="18" fill="#38bdf8" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">100% ALLOY VERIFIED</text>
  </g>
</svg>'''

plant_images = {
    'plant-melting': svg_melt,
    'plant-degassing': svg_degas,
    'plant-moulding': svg_mould,
    'plant-quality': svg_spec,
}

for name, svg in plant_images.items():
    svg_path = f'public/images/plant/{name}.svg'
    png_path = f'public/images/plant/{name}.png'
    with open(svg_path, 'w') as f:
        f.write(svg)
    cmd = f'rsvg-convert -w 800 -h 500 -f png -o {png_path} {svg_path}'
    subprocess.run(cmd, shell=True, check=True)
    print(f'Rendered {name}.png successfully!')

print('ALL PLANT IMAGES GENERATED!')
