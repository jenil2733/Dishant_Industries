import subprocess
import os

svg_content = '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1080" width="1600" height="1080">
  <defs>
    <!-- Vibrant molten metal gradients -->
    <linearGradient id="moltenOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF6B00"/>
      <stop offset="100%" stop-color="#F24B00"/>
    </linearGradient>
    <linearGradient id="ladleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFA233"/>
      <stop offset="100%" stop-color="#FF5500"/>
    </linearGradient>
    <!-- Rich Foundry Blue Gradient -->
    <linearGradient id="foundryBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#234575"/>
      <stop offset="100%" stop-color="#1B365D"/>
    </linearGradient>
  </defs>

  <!-- ==================== CENTRAL EMBLEM ==================== -->
  <g id="emblem" transform="translate(180, 45)">
    <!-- Crucible / Ladle (Top Left Pouring Position) -->
    <g transform="translate(380, 155) rotate(-34)">
      <!-- Outer ladle body (Foundry Blue) -->
      <path d="M -58 0 L 58 0 L 50 135 C 50 175 -50 175 -50 135 Z" fill="#1B365D" stroke="#FFFFFF" stroke-width="4"/>
      <!-- Molten bath inside ladle -->
      <ellipse cx="0" cy="10" rx="54" ry="26" fill="url(#moltenOrange)" stroke="#FFFFFF" stroke-width="3"/>
      <ellipse cx="4" cy="8" rx="42" ry="18" fill="url(#ladleGlow)"/>
    </g>

    <!-- Molten Metal Pour Stream -->
    <path d="M 488 122 C 506 200 522 300 518 410 C 514 475 492 510 460 535 L 575 535 C 542 510 534 475 538 410 C 544 300 524 200 498 122 Z" fill="url(#moltenOrange)"/>

    <!-- Left Vertical Stem of D -->
    <path d="M 320 220 L 398 220 L 398 670 L 320 670 Z" fill="#1B365D"/>

    <!-- Outer Navy/Blue Arc of D -->
    <path d="M 495 55 C 690 55 915 175 915 375 C 915 540 760 660 550 670 C 478 673 398 670 398 670 L 425 635 C 625 635 825 540 825 375 C 825 225 660 128 495 128 Z" fill="#1B365D"/>

    <!-- Inner Fiery Orange Crescent Swoosh -->
    <path d="M 630 195 C 765 255 845 358 845 460 C 845 565 745 655 615 685 C 715 640 775 550 775 460 C 775 358 710 260 630 195 Z" fill="url(#moltenOrange)"/>

    <!-- Ingot Mould at Base -->
    <!-- Mould Outer Shell (Foundry Blue) -->
    <path d="M 360 520 L 610 520 L 655 575 L 655 670 L 360 670 Z" fill="#1B365D"/>
    <!-- Mould Cavity Recess -->
    <path d="M 385 545 L 585 545 L 615 580 L 615 648 L 385 648 Z" fill="#112238"/>
    <!-- Molten Metal Ingot Casting Fill -->
    <path d="M 405 558 L 570 558 L 595 588 L 595 638 L 535 638 L 535 592 L 472 592 L 472 638 L 405 638 Z" fill="url(#moltenOrange)"/>
    <!-- Central T-Spout / Core Glow -->
    <rect x="472" y="582" width="63" height="56" fill="#FFA533"/>
  </g>

  <!-- ==================== TYPOGRAPHY: DISHANT ==================== -->
  <g fill="#1B365D" transform="translate(100, 755)">
    <!-- D -->
    <path d="M 120 0 L 225 0 C 295 0 340 40 340 88 C 340 136 295 175 225 175 L 120 175 Z M 182 45 L 182 130 L 220 130 C 255 130 278 112 278 88 C 278 63 255 45 220 45 Z"/>

    <!-- I -->
    <path d="M 382 0 L 444 0 L 444 175 L 382 175 Z"/>

    <!-- S -->
    <path d="M 490 135 C 504 158 532 178 574 178 C 618 178 646 156 646 130 C 646 92 596 82 558 74 C 514 62 492 48 492 20 C 492 -16 530 -42 578 -42 C 628 -42 660 -18 672 15 L 618 28 C 610 10 596 -2 578 -2 C 550 -2 538 10 538 22 C 538 38 562 46 602 56 C 654 68 694 88 694 132 C 694 178 648 206 574 206 C 508 206 466 168 450 126 Z" transform="translate(30, 0)"/>

    <!-- H -->
    <path d="M 755 0 L 817 0 L 817 62 L 912 62 L 912 0 L 974 0 L 974 175 L 912 175 L 912 112 L 817 112 L 817 175 L 755 175 Z"/>

    <!-- A (Geometric with Open Apex for Orange Triangle) -->
    <path d="M 995 175 L 1098 0 L 1195 175 L 1128 175 L 1106 134 L 1060 134 L 1038 175 Z M 1073 108 L 1095 62 L 1117 108 Z"/>

    <!-- N -->
    <path d="M 1215 0 L 1277 0 L 1340 112 L 1340 0 L 1395 0 L 1395 175 L 1335 175 L 1272 65 L 1272 175 L 1215 175 Z"/>

    <!-- T -->
    <path d="M 1415 0 L 1560 0 L 1560 48 L 1518 48 L 1518 175 L 1456 175 L 1456 48 L 1415 48 Z"/>

    <!-- Bold Fiery Orange Triangle inside the 'A' -->
    <polygon points="1070,172 1096,122 1122,172" fill="url(#moltenOrange)"/>
  </g>

  <!-- ==================== SUBTITLE: INDUSTRIES ==================== -->
  <g transform="translate(100, 980)">
    <!-- Left Orange Accent Line -->
    <line x1="120" y1="0" x2="380" y2="0" stroke="#F24B00" stroke-width="7" stroke-linecap="round"/>
    
    <!-- Tracked "INDUSTRIES" Wordmark (Foundry Blue) -->
    <text x="835" y="12" font-family="'Cabinet Grotesk', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" letter-spacing="34" fill="#1B365D" text-anchor="middle">INDUSTRIES</text>
    
    <!-- Right Orange Accent Line -->
    <line x1="1290" y1="0" x2="1550" y2="0" stroke="#F24B00" stroke-width="7" stroke-linecap="round"/>
  </g>
</svg>'''

with open('src/assets/logo.svg', 'w') as f:
    f.write(svg_content)

print("Writing SVG to src/assets/logo.svg")
cmd = "rsvg-convert -w 1600 -h 1080 -f png -o src/assets/dishant-industries-logo.png src/assets/logo.svg"
subprocess.run(cmd, shell=True, check=True)

# Also create public files
subprocess.run("cp src/assets/dishant-industries-logo.png public/dishant-industries-logo.png", shell=True, check=True)
subprocess.run("cp src/assets/dishant-industries-logo.png public/Dishant_industries_Logo.png", shell=True, check=True)
subprocess.run("cp src/assets/dishant-industries-logo.png src/assets/Dishant_industries_Logo.png", shell=True, check=True)
subprocess.run("cp src/assets/dishant-industries-logo.png public/logo.png", shell=True, check=True)

# Also create favicon
subprocess.run("rsvg-convert -w 128 -h 128 -f png -o public/favicon.png src/assets/logo.svg", shell=True, check=True)

print("Generated all logo PNG assets with rich Foundry Blue and Molten Orange successfully!")

