export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  phoneLink: string;
  email: string;
  emailLink: string;
  whatsappLink: string;
  addressLines: string[];
  addressShort: string;
  googleMapsUrl: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export const COMPANY: CompanyInfo = {
  name: "Dishant Industries",
  tagline: "Aluminium Casting & Industrial Metal Solutions Since 2000",
  phone: "+91 63545 02585",
  phoneRaw: "6354502585",
  phoneLink: "tel:+916354502585",
  email: "dishantindustriesllp@gmail.com",
  emailLink: "mailto:dishantindustriesllp@gmail.com",
  whatsappLink: "https://wa.me/916354502585",
  addressLines: [
    "Plot No. 4,",
    "Shree Hari Industrial Area,",
    "Behind Tulip Party Plot,",
    "Patel Chowk,",
    "Vavdi,",
    "Rajkot - 360004,",
    "Gujarat, India"
  ],
  addressShort: "Plot No. 4, Shree Hari Industrial Area, Behind Tulip Party Plot, Patel Chowk, Vavdi, Rajkot - 360004, Gujarat, India",
  googleMapsUrl: "https://maps.app.goo.gl/BikvLNUrPQ5m2f8F9?g_st=iw",
  stats: [
    {
      value: "Since 2000",
      label: "Foundry Heritage",
      subtext: "25+ years of continuous metal casting excellence"
    },
    {
      value: "3000+ MT",
      label: "Annual Capacity",
      subtext: "High-volume precision aluminium melt output"
    },
    {
      value: "300+",
      label: "Industrial Clients",
      subtext: "Automotive, engineering, electrical & machinery OEM partners"
    },
    {
      value: "25+",
      label: "Skilled Artisans",
      subtext: "Master foundrymen, pattern makers & metallurgists"
    }
  ]
};
