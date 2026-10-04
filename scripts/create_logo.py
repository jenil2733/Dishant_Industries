import os
import subprocess

# Precise reproduction of Dishant Industries logo matching the user's uploaded logo
svg_markup = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 820" width="1200" height="820">
  <defs>
    <linearGradient id="moltenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF6A00"/>
      <stop offset="100%" stop-color="#F24B00"/>
    </linearGradient>
    <linearGradient id="metalRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF9033"/>
      <stop offset="50%" stop-color="#FF5900"/>
      <stop offset="100%" stop-color="#E03A00"/>
    </linearGradient>
  </defs>

  <!-- Central Emblem (Crucible pouring molten orange aluminium into casting mould inside D) -->
  <g transform="translate(140, 20)">
    <!-- Crucible / Ladle at Top Left -->
    <g transform="translate(245, 140) rotate(-38)">
      <!-- Ladle outer shell (Navy) -->
      <path d="M -45 0 L 45 0 L 38 105 C 38 135 -38 135 -38 105 Z" fill="#24303E" stroke="#1B2530" stroke-width="4"/>
      <!-- Ladle molten aluminium surface -->
      <ellipse cx="0" cy="8" rx="42" ry="20" fill="url(#metalRimGrad)"/>
      <ellipse cx="2" cy="6" rx="34" ry="14" fill="#FFA333"/>
    </g>

    <!-- Molten orange liquid stream pouring down -->
    <path d="M 334 112 C 348 180 365 260 362 345 C 358 410 338 425 315 440 L 405 440 C 378 425 372 390 376 345 C 381 260 362 180 342 112 Z" fill="url(#moltenGrad)"/>

    <!-- Stepped Ingot Mould Cavity & Casting at Bottom -->
    <!-- Mould Outer Block (Navy) -->
    <path d="M 235 425 L 435 425 L 470 470 L 470 545 L 235 545 Z" fill="#24303E"/>
    <!-- Ingot Mould Cavity Outline -->
    <path d="M 255 445 L 415 445 L 440 475 L 440 528 L 255 528 Z" fill="#18212C"/>
    <!-- Molten Metal Filled in Mould -->
    <path d="M 270 455 L 405 455 L 425 480 L 425 520 L 375 520 L 375 482 L 325 482 L 325 520 L 270 520 Z" fill="url(#moltenGrad)"/>
    <rect x="325" y="475" width="50" height="45" fill="#FFAE33"/>

    <!-- Left Vertical Stem of D -->
    <path d="M 205 175 L 265 175 L 265 545 L 205 545 Z" fill="#24303E"/>

    <!-- Outer Navy Arc of D -->
    <path d="M 345 35 C 500 35 680 135 680 300 C 680 435 550 535 385 545 C 330 548 265 545 265 545 L 285 515 C 445 515 605 435 605 300 C 605 180 475 98 345 98 Z" fill="#24303E"/>

    <!-- Inner Vibrant Molten Orange Crescent Swoosh -->
    <path d="M 450 135 C 560 185 625 270 625 355 C 625 445 545 520 435 548 C 520 510 570 435 570 355 C 570 270 515 190 450 135 Z" fill="url(#moltenGrad)"/>
  </g>

  <!-- Wordmark: DISHANT -->
  <g fill="#24303E" transform="translate(60, 595)">
    <!-- D -->
    <path d="M 50 15 L 125 15 C 175 15 205 45 205 80 C 205 115 175 145 125 145 L 50 145 Z M 95 50 L 95 110 L 120 110 C 145 110 160 98 160 80 C 160 62 145 50 120 50 Z"/>
    
    <!-- I -->
    <path d="M 235 15 L 280 15 L 280 145 L 235 145 Z"/>

    <!-- S -->
    <path d="M 310 112 C 320 132 342 148 375 148 C 410 148 432 130 432 108 C 432 75 390 68 360 60 C 325 50 308 38 308 15 C 308 -15 338 -38 378 -38 C 418 -38 445 -18 455 10 L 412 22 C 405 6 392 -4 378 -4 C 355 -4 345 6 345 16 C 345 30 365 36 398 45 C 440 56 475 72 475 110 C 475 148 438 172 375 172 C 322 172 288 140 275 105 Z" transform="translate(25, 5)"/>

    <!-- H -->
    <path d="M 525 15 L 570 15 L 570 62 L 640 62 L 640 15 L 685 15 L 685 145 L 640 145 L 640 98 L 570 98 L 570 145 L 525 145 Z"/>

    <!-- A -->
    <path d="M 700 145 L 775 15 L 845 145 L 798 145 L 782 112 L 748 112 L 730 145 Z M 758 92 L 774 58 L 790 92 Z"/>

    <!-- N -->
    <path d="M 865 15 L 910 15 L 955 98 L 955 15 L 995 15 L 995 145 L 955 145 L 905 58 L 905 145 L 865 145 Z"/>

    <!-- T -->
    <path d="M 1010 15 L 1115 15 L 1115 50 L 1085 50 L 1085 145 L 1040 145 L 1040 50 L 1010 50 Z"/>

    <!-- Orange Triangular Apex inside 'A' -->
    <polygon points="755,142 774,102 793,142" fill="url(#moltenGrad)"/>
  </g>

  <!-- Bottom: Horizontal Lines + INDUSTRIES -->
  <g transform="translate(60, 770)">
    <!-- Left Accent Line -->
    <line x1="60" y1="-8" x2="220" y2="-8" stroke="#F24B00" stroke-width="4.5" stroke-linecap="round"/>
    <!-- INDUSTRIES Text -->
    <text x="590" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="800" letter-spacing="22" fill="#24303E" text-anchor="middle">INDUSTRIES</text>
    <!-- Right Accent Line -->
    <line x1="960" y1="-8" x2="1120" y2="-8" stroke="#F24B00" stroke-width="4.5" stroke-linecap="round"/>
  </g>
</svg>'''

with open('src/assets/logo.svg', 'w') as f:
    f.write(svg_markup)

print("Saved src/assets/logo.svg")
