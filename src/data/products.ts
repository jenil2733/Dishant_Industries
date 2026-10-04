/**
 * Dishant Industries - Product Catalog Architecture
 * Centralized product repository with 100% verified, localized high-resolution industrial photography assets.
 */

export interface Product {
  id: string;
  name: string;
  category: "Casting" | "Pattern & Moulding" | "Ingots & Raw Material" | "Scrap & Recycling";
  shortDesc: string;
  description: string;
  image: string;
  fallbackImage: string;
  gallery: string[];
  applications: string[];
  specifications: {
    grade?: string;
    purity?: string;
    process?: string;
    finish?: string;
    dimensions?: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "aluminium-block",
    name: "Aluminium Block",
    category: "Casting",
    shortDesc: "Dense, pore-free cast aluminium blocks tailored for heavy industrial tooling and precision machining.",
    description: "Our premier cast aluminium blocks are manufactured with rigorous degassing and fluxing processes to ensure uniform metallurgical density, dimensional consistency, and defect-free internal grain structure. Ideal for CNC machining, mold bases, and structural industrial components.",
    image: "/images/products/aluminium-block.png",
    fallbackImage: "/images/products/aluminium-block.svg",
    gallery: [
      "/images/products/aluminium-block.png",
      "/images/products/aluminium-block.svg"
    ],
    applications: [
      "Heavy Machinery & Machine Tool Beds",
      "Automotive Stamping & Tooling Fixtures",
      "Aero-Structural Test Rigs & Hydraulic Manifolds",
      "Die-Casting Base Plates & Precision Moulds"
    ],
    specifications: {
      grade: "Commercial / LM Series / Custom Alloy",
      purity: "99.2% - 99.7% Al Equivalent",
      process: "Sand Mould Pouring & Chilled Solidification",
      finish: "Raw Cast / Fettled / Shot-Blasted",
      dimensions: "Customizable up to 500kg per block"
    }
  },
  {
    id: "aluminium-pattern-casting",
    name: "Aluminium Pattern Casting",
    category: "Pattern & Moulding",
    shortDesc: "High-durability master pattern castings with micro-tolerance repeatability for foundry matchplates.",
    description: "Engineered specifically for repeat sand casting foundry operations, our aluminium patterns offer exceptional dimensional endurance, high resistance to sand abrasion, and ultra-smooth surface draft angles. Cast with low-shrinkage alloy formulations to ensure pattern integrity over thousands of impressions.",
    image: "/images/products/aluminium-pattern-casting.png",
    fallbackImage: "/images/products/aluminium-pattern-casting.svg",
    gallery: [
      "/images/products/aluminium-pattern-casting.png",
      "/images/products/aluminium-pattern-casting.svg"
    ],
    applications: [
      "Automated Foundry Moulding Lines",
      "Matchplate Pattern Tooling",
      "Core Box Manufacture & Shell Moulding",
      "Automotive Engine & Pump Housing Patterns"
    ],
    specifications: {
      grade: "High-Silicon Casting Alloy",
      purity: "Low-Thermal Expansion Formula",
      process: "Precision Sand / Resin Molded Patterning",
      finish: "Machined Reference Faces, Hand-Buffed Cavities",
      dimensions: "Built to 2D/3D CAD tolerances ±0.2mm"
    }
  },
  {
    id: "aluminium-thermocol-pattern",
    name: "Aluminium Thermocol Pattern",
    category: "Pattern & Moulding",
    shortDesc: "Lost-foam and full-mould thermocol pattern casting for complex single-piece geometry without parting lines.",
    description: "Specialized thermocol (expanded polystyrene) pattern casting technology enabling intricate undercuts, complex hollow corridors, and single-piece monolithic castings without traditional parting draft restrictions. Eliminates core-assembly errors and minimizes machining allowances.",
    image: "/images/products/aluminium-thermocol-pattern.png",
    fallbackImage: "/images/products/aluminium-thermocol-pattern.svg",
    gallery: [
      "/images/products/aluminium-thermocol-pattern.png",
      "/images/products/aluminium-thermocol-pattern.svg"
    ],
    applications: [
      "Complex Impeller & Turbine Castings",
      "Custom Automotive Engine Headers & Manifolds",
      "Artistic & Architectural Structural Castings",
      "One-Off Prototyping & Prototype Validation"
    ],
    specifications: {
      grade: "Al-Si-Cu Foundry Master Alloy",
      purity: "High Fluidity Pouring Formulation",
      process: "Full-Mould Evaporative Pattern Casting",
      finish: "Clean Shakeout, Uniform Surface Texture",
      dimensions: "Single pieces from 5kg to 350kg"
    }
  },
  {
    id: "no-bake-casting",
    name: "No-Bake Casting",
    category: "Casting",
    shortDesc: "Chemically bonded resin sand casting delivering superior dimensional accuracy and heavy section density.",
    description: "Our no-bake (furane resin / chemically bonded sand) casting line produces large-scale, heavy-section aluminium components with exceptional surface finish and tight dimensional control. The rigid mould envelope resists mold-wall movement during pouring, eliminating hot tearing and shrinkage defects.",
    image: "/images/products/no-bake-casting.png",
    fallbackImage: "/images/products/no-bake-casting.svg",
    gallery: [
      "/images/products/no-bake-casting.png",
      "/images/products/no-bake-casting.svg"
    ],
    applications: [
      "Industrial Compressor & Blower Casings",
      "Electrical Switchgear Housings & Enclosures",
      "Marine Valve Bodies & Pipe Fittings",
      "Agricultural Pump Components & Gearboxes"
    ],
    specifications: {
      grade: "LM6 / LM25 / Custom Specification",
      purity: "Controlled Gas Porosity < Level 2",
      process: "Self-Setting Chemically Bonded Furane Sand",
      finish: "Class-A Cast Surface, Shot-Blasted",
      dimensions: "Components up to 1.8m x 1.2m"
    }
  },
  {
    id: "aluminium-commercial-ingots",
    name: "Aluminium Commercial Ingots",
    category: "Ingots & Raw Material",
    shortDesc: "Reliable commercial grade remelt ingots formulated for consistent fluidity and cost-effective casting.",
    description: "Standard commercial grade remelt ingots produced through controlled reverberatory melting and rigorous dross skimming. Provides dependable tensile strength, good machinability, and clean melting characteristics for secondary foundries and die-casters across Rajkot and Western India.",
    image: "/images/products/aluminium-commercial-ingots.png",
    fallbackImage: "/images/products/aluminium-commercial-ingots.svg",
    gallery: [
      "/images/products/aluminium-commercial-ingots.png",
      "/images/products/aluminium-commercial-ingots.svg"
    ],
    applications: [
      "General Die-Casting & Sand Foundry Remelt",
      "Hardware, Hinges & Sanitary Ware Casting",
      "Machinery Components & Pulley Castings",
      "Electrical Cable Trays & Fixtures"
    ],
    specifications: {
      grade: "Commercial Foundry Remelt Grade",
      purity: "98.5% - 99.2% Standard Aluminium",
      process: "Biomass Fired Reverberatory Furnace Melt",
      finish: "Smooth Ingot Bars, Trapezoidal Profile",
      dimensions: "Standard 5kg – 7kg notched bars"
    }
  },
  {
    id: "aluminium-soft-ingots",
    name: "Aluminium Soft Ingots",
    category: "Ingots & Raw Material",
    shortDesc: "High-ductility low-alloy soft aluminium ingots engineered for extrusion, rolling, and drawing.",
    description: "Refined soft aluminium ingots with exceptionally low iron and trace element contaminants. Formulated to deliver high elongation, superior thermal conductivity, and effortless workability during cold-heading, deep drawing, and wire-drawing applications.",
    image: "/images/products/aluminium-soft-ingots.png",
    fallbackImage: "/images/products/aluminium-soft-ingots.svg",
    gallery: [
      "/images/products/aluminium-soft-ingots.png",
      "/images/products/aluminium-soft-ingots.svg"
    ],
    applications: [
      "Electrical Busbars & Conductor Strip Extrusion",
      "Aluminium Foil, Sheets & Cookware Spinning",
      "Deoxidation in Steel Manufacturing",
      "Chemical & Thermal Dispersion Components"
    ],
    specifications: {
      grade: "Soft Pure Remelt Series (EC Grade / 1000 series equivalent)",
      purity: "99.5% - 99.8% High Purity",
      process: "Rotary Fluxing & Ceramic Foam Filtration",
      finish: "Silvery Metallic Ingot Bar",
      dimensions: "6kg - 8kg stackable ingots"
    }
  },
  {
    id: "aluminium-6063-extrusion-scrap",
    name: "Aluminium 6063 Extrusion Scrap",
    category: "Scrap & Recycling",
    shortDesc: "Segregated, clean 6063 architectural and structural extrusion scrap ready for remelting.",
    description: "Premium segregated 6063 aluminium scrap consisting of clean architectural extrusions, window profile cutoffs, and structural beams. Thoroughly inspected for the absence of iron screws, thermal-break plastics, and contaminants to ensure maximum remelt recovery and minimal slag.",
    image: "/images/products/aluminium-6063-extrusion-scrap.png",
    fallbackImage: "/images/products/aluminium-6063-extrusion-scrap.svg",
    gallery: [
      "/images/products/aluminium-6063-extrusion-scrap.png",
      "/images/products/aluminium-6063-extrusion-scrap.svg"
    ],
    applications: [
      "Remelting for 6000-Series Extrusion Billets",
      "Secondary Ingot Blending & Alloying",
      "Foundry Die-Casting Feedstock",
      "Architectural Metal Formulation"
    ],
    specifications: {
      grade: "Al-Mg-Si Alloy 6063 / ISRI 'TOTO'",
      purity: "Mg: 0.45-0.9%, Si: 0.2-0.6%, Clean Cut",
      process: "Sorted, Sheared & Magnetic Separation",
      finish: "Clean Mill Finish / Anodized Segregated",
      dimensions: "Cut sections & baled bundles"
    }
  },
  {
    id: "aluminium-tt-scrap",
    name: "Aluminium TT Scrap",
    category: "Scrap & Recycling",
    shortDesc: "High-grade aluminium TT (Tense/Tabor) scrap segregated for optimal recovery and secondary refining.",
    description: "Dense mixed aluminium casting and sheet scrap rigorously tested for minimal attachment percentage. Suitable for secondary refiners, large-scale crucible furnaces, and master alloy manufacturing facilities seeking consistent molten metal yields.",
    image: "/images/products/aluminium-tt-scrap.png",
    fallbackImage: "/images/products/aluminium-tt-scrap.svg",
    gallery: [
      "/images/products/aluminium-tt-scrap.png",
      "/images/products/aluminium-tt-scrap.svg"
    ],
    applications: [
      "Secondary Smelting & Ingot Casting",
      "Alloy Charge Balancing in Reverberatory Furnaces",
      "Deoxidation Additive for Steel Mills",
      "Foundry Production Cost Optimization"
    ],
    specifications: {
      grade: "ISRI Tense / Tabor Mixed Old Cast",
      purity: "Low Iron Attachments (<1.5% Fe max)",
      process: "Density Sorting & Magnetic De-ironing",
      finish: "Clean Shredded or Baled Material",
      dimensions: "Compressed briquettes or loose sorted"
    }
  },
  {
    id: "aluminium-7000-series-ingots",
    name: "Aluminium 7000 Series Ingots",
    category: "Ingots & Raw Material",
    shortDesc: "High-strength zinc-magnesium aerospace grade aluminium alloy ingots for extreme load applications.",
    description: "Advanced 7000-series zinc-magnesium alloy ingots formulated for ultra-high mechanical yield strength, superior fatigue endurance, and hardness comparable to structural steel while retaining light weight. Specially refined with precise master alloy additions.",
    image: "/images/products/aluminium-7000-series-ingots.png",
    fallbackImage: "/images/products/aluminium-7000-series-ingots.svg",
    gallery: [
      "/images/products/aluminium-7000-series-ingots.png",
      "/images/products/aluminium-7000-series-ingots.svg"
    ],
    applications: [
      "Aerospace & Defense Structural Fittings",
      "High-Stress Automotive Racing Components",
      "Robotic Arms & Dynamic Tooling Plates",
      "Precision Mold Cores & Hydraulic Pistons"
    ],
    specifications: {
      grade: "7075 / 7050 Alloy Equivalent Series",
      purity: "Zn: 5.1-6.1%, Mg: 2.1-2.9%, Cu: 1.2-2.0%",
      process: "Vacuum Assisted Refining & In-Mould Filtering",
      finish: "Machined Reference Face, Batch Coded",
      dimensions: "Heavy format ingot bars 10kg - 15kg"
    }
  },
  {
    id: "aluminium-automobile-scrap",
    name: "Aluminium Automobile Scrap",
    category: "Scrap & Recycling",
    shortDesc: "Sorted automotive cast aluminium scrap including engine blocks, transmission cases, and wheel cutouts.",
    description: "High-silicon automotive aluminium scrap carefully stripped of steel cylinder liners, bearing races, and foreign bushings. Excellent feedstock for producing secondary LM24, LM25, and ADC12 casting ingots with proven recovery ratios.",
    image: "/images/products/aluminium-automobile-scrap.png",
    fallbackImage: "/images/products/aluminium-automobile-scrap.svg",
    gallery: [
      "/images/products/aluminium-automobile-scrap.png",
      "/images/products/aluminium-automobile-scrap.svg"
    ],
    applications: [
      "Remelting for Automotive Die-Cast Products",
      "ADC12 & LM24 Ingot Production Lines",
      "Recycled Foundry Feedstock",
      "Eco-Friendly Circular Metal Manufacturing"
    ],
    specifications: {
      grade: "Automotive Cast Scrap (Clean Engine & Gearbox Cast)",
      purity: "Si: 8.5-11.5%, Cu: 2.0-3.5% Matrix",
      process: "Thermal De-oiling & Hydraulic Fragmentation",
      finish: "Crushed / Fragmented Pieces Free of Steel Inserts",
      dimensions: "Uniform chunk sizing 50mm - 200mm"
    }
  }
];
