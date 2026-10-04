/**
 * Dishant Industries - "Inside Aluminium Manufacturing" Architecture
 * Representative Industrial Photography & Process Visuals
 * 
 * Note: These representative visuals illustrate each critical foundry operation.
 * All paths can be replaced directly with Dishant Industries facility photos
 * in /public/images/factory/[id].jpg or by updating this configuration.
 */

export interface ManufacturingStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  fallbackImage: string;
  technicalHighlight: string;
  replaceKey: string;
}

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    id: "aluminium-melting",
    title: "Aluminium Melting",
    subtitle: "Precision Thermal Control at 720°C - 750°C",
    description: "Crucible and reverberatory furnace charging using sustainable biomass white coal fuel to achieve rapid, uniform melt pools with low oxidation loss.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/melting.jpg",
    technicalHighlight: "Automated thermocouple pyrometry ensures precise tapping temperature within ±5°C.",
    replaceKey: "factory-melting"
  },
  {
    id: "furnace-operations",
    title: "High-Efficiency Furnaces",
    subtitle: "Eco-Friendly Biomass Fired Reverberatory Units",
    description: "Engineered refractory linings maximize thermal retention while white coal biomass firing reduces fossil footprint and guarantees uniform heat distribution.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/furnace.jpg",
    technicalHighlight: "Biomass pellet gasification burners operating with pre-heated primary combustion air.",
    replaceKey: "factory-furnace"
  },
  {
    id: "molten-aluminium-degassing",
    title: "Molten Aluminium Refining",
    subtitle: "Rotary Impeller Degassing & Flux Treatment",
    description: "Active nitrogen degassing and non-toxic fluxing purge trapped hydrogen gas and lift micro-inclusions to the bath surface for complete dross separation.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/molten-aluminium.jpg",
    technicalHighlight: "Reduced pressure test (RPT) verification guarantees gas porosity below density index 1.2.",
    replaceKey: "factory-refining"
  },
  {
    id: "casting-mould-assembly",
    title: "Casting Mould Preparation",
    subtitle: "Rigid Box Assemblies & Core Integration",
    description: "Precision matchplates and core boxes are prepared with optimized gating, runners, and risers to prevent shrinkage cavities and ensure smooth laminar filling.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/moulds.jpg",
    technicalHighlight: "Computer-calculated runner-to-gate ratios (1:4:4) eliminate air aspiration during fill.",
    replaceKey: "factory-moulds"
  },
  {
    id: "sand-casting-lines",
    title: "Green Sand & Resin Sand Moulding",
    subtitle: "Fine Silica Grain Permeability Control",
    description: "Custom sand formulations blended with bentonite and moisture controls ensure high green compression strength and rapid venting of steam during pouring.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/sand-casting.jpg",
    technicalHighlight: "AFS sand fineness number maintained between 55-65 for optimum surface finish.",
    replaceKey: "factory-sand-moulding"
  },
  {
    id: "aluminium-block-solidification",
    title: "Aluminium Block Solidification",
    subtitle: "Controlled Directional Cooling Systems",
    description: "Strategically located chill plates and exothermic feeder sleeves ensure progressive directional solidification from thin to thick sections, preventing voids.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/blocks.jpg",
    technicalHighlight: "Eliminates centerline shrinkage in blocks exceeding 150mm wall thickness.",
    replaceKey: "factory-blocks"
  },
  {
    id: "industrial-foundry-workers",
    title: "Skilled Foundry Artisans",
    subtitle: "Decades of Hand-Moulding & Pouring Expertise",
    description: "Our dedicated workforce of 25+ skilled foundry technicians brings over two decades of artisanal metal casting knowledge to every mold and pour.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/workers.jpg",
    technicalHighlight: "Rigorous safety compliance with heat-resistant PPE and continuous foundry training.",
    replaceKey: "factory-artisans"
  },
  {
    id: "aluminium-ingot-stacking",
    title: "Aluminium Ingot Stacking",
    subtitle: "Standardized Bundling & Traceable Identification",
    description: "Cast ingots are cooled, batch-stamped, and banded onto pallets for safe transport and seamless automated loading into customer foundry crucible lines.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/ingots.jpg",
    technicalHighlight: "Standardized 500kg / 1000kg strapping with heat number and alloy code tags.",
    replaceKey: "factory-ingots"
  },
  {
    id: "scrap-processing-yard",
    title: "Scrap Processing & Segregation",
    subtitle: "Circular Economy & Purity Separation",
    description: "Systematic incoming scrap sorting, magnetic de-ironing, and shear fractionation separates 6063 extrusions, TT scrap, and automotive grades before charging.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/scrap.jpg",
    technicalHighlight: "Zero-cross-contamination sorting bins preserve high elemental recovery.",
    replaceKey: "factory-scrap"
  },
  {
    id: "quality-metallurgical-inspection",
    title: "Quality & Spectrometric Inspection",
    subtitle: "Chemical Analysis & Dimensional Verification",
    description: "Comprehensive quality protocols including optical emission spectrometry, hardness testing, surface dye penetrant checks, and precision CMM coordinate checks.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "/images/factory/inspection.jpg",
    technicalHighlight: "100% batch optical emission spectrometer verification before dispatch.",
    replaceKey: "factory-quality"
  }
];
