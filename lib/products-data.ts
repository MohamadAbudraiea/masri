export interface Product {
  id: number
  name: string
  category: string
  image: string
  description: string
  specifications: string[]
  price: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hot Rolled Coil (HRC)",
    category: "sheets",
    image: "/d4.png",
    description:
      "Premium hot rolled steel coils manufactured to exacting standards for construction, automotive, and manufacturing industries. Our HRC products deliver exceptional formability, strength, and consistent quality for critical applications requiring superior performance and reliability.",
    specifications: [
      "Standard: ASTM, AISI, DIN, EN, BS, SUS, JIS",
      "Technique: Cold Rolled, Hot Rolled",
      "Thickness: 1-50mm and customizable",
      "Width: 900-1500mm or Customizable",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 2,
    name: "Galvanized Wire",
    category: "wire",
    image: "/a3.png",
    description:
      "Superior galvanized steel wire featuring advanced zinc coating technology for maximum corrosion resistance. Ideal for outdoor applications including fencing, binding, and industrial uses where durability and longevity are paramount.",
    specifications: [
      "Standard: ASTM, AISI, DIN, EN, BS, SUS, JIS",
      "Zinc coat: 10-280g/m²",
      "Surface treatment: PVC coated, electro or hot dipped galvanized",
      "Material: Low Carbon Steel Q195, 1008, 1006",
      "Wire diameter: BWG26-BWG8 (0.45mm-5mm) or as required",
    ],
    price: "Contact for pricing",
  },
  {
    id: 3,
    name: "Carbon Steel Square Bar",
    category: "structural",
    image: "/c4.png",
    description:
      "High-strength carbon steel square bars precision-manufactured for structural applications. Engineered for superior load-bearing capacity and dimensional accuracy, perfect for construction, machinery fabrication, and industrial frameworks.",
    specifications: [
      "Standard: ASTM, AISI, DIN, EN, BS, SUS, JIS",
      "Material: Q195, Q215, Q235, Q255, Q275, SS400, ASTM 1010-1080, ST33-ST52",
      "Technique: Cold drawn, Hot rolled, Cold rolled",
      "Diameter: 2-500mm or Customizable",
      "Length: 3-6m or Customizable",
      "Tolerance: ±2.5%",
    ],
    price: "Contact for pricing",
  },
  {
    id: 4,
    name: "HRC Sheets",
    category: "sheets",
    image: "/e3.png",
    description:
      "Premium flat hot rolled steel sheets with exceptional surface quality and dimensional precision. Specifically designed for automotive manufacturing, shipbuilding, and heavy machinery applications demanding consistent performance.",
    specifications: [
      "Standard: ASTM, AISI, DIN, EN, BS, SUS, JIS",
      "Technique: Cold Rolled, Hot Rolled",
      "Thickness: 1-50mm and customizable",
      "Width: 900-1500mm or Customizable",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 5,
    name: "Galvanized Iron (GI) Sheets",
    category: "sheets",
    image: "/f3.png",
    description:
      "Premium corrosion-resistant galvanized iron sheets featuring advanced zinc coating for extended service life. Ideal for roofing, cladding, and industrial applications requiring superior weather resistance and aesthetic appeal.",
    specifications: [
      "Standard: ASTM, AISI, DIN, EN, BS, SUS, JIS",
      "Material: Q195, Q215, Q235, Q255, SS400, ASTM 1010-1080",
      "Technique: Cold Rolled, Hot Rolled",
      "Thickness: 1-50mm and customizable",
      "Width: 50-1500mm or customizable",
      "Tolerance: ±2.5%",
    ],
    price: "Contact for pricing",
  },
  {
    id: 6,
    name: "Carbon Steel Pipes",
    category: "pipes",
    image: "/h3.png",
    description:
      "Robust uncoated black steel pipes engineered for water, gas distribution, and structural applications. Manufactured to international standards with consistent quality and reliability for critical infrastructure projects.",
    specifications: [
      "Standard: API 5L, ASTM A106, ASTM A53, BS 1387, GB 3087",
      "Out Diameter: 10-1500mm",
      "Wall thickness: 1.5mm - 20mm",
      "Length: 1-12m",
      "Shape: Round, Square or Rectangular",
      "Tolerance: ±2.5%",
    ],
    price: "Contact for pricing",
  },
  {
    id: 7,
    name: "Galvanized Iron (GI) Pipes",
    category: "pipes",
    image: "/i4.png",
    description:
      "Premium galvanized iron pipes with superior corrosion protection through advanced hot-dip galvanizing process. Perfect for plumbing, construction, and industrial installations requiring long-term durability and minimal maintenance.",
    specifications: [
      "Standard: ASTM, JIS, DIN, GB, AISI, EN",
      "Material: 201, 304, 304L, 316, 316L, 321, 410, 430",
      "Technique: Cold drawn, Hot rolled, Cold rolled",
      "Outer Diameter: 20mm-1200mm or Customizable",
      "Thickness: 6-3000mm or Customizable",
      "Length: 1-12m or Customizable",
    ],
    price: "Contact for pricing",
  },
  {
    id: 8,
    name: "C-Shaped Steel Channels",
    category: "structural",
    image: "/j3.png",
    description:
      "Versatile C-channel structural steel profiles engineered for framing, support beams, and construction applications. Precision-manufactured for consistent dimensions and superior load-bearing capabilities.",
    specifications: [
      "Standard: ASTM, JIS, DIN, GB, AISI, EN",
      "Size: 80×40×20×2.5 (3.925 kg/m)",
      "Size: 80×40×20×3 (4.71 kg/m)",
      "Material: Q235, ASTM A36, S235JR",
      "Length: 6m - 12m",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 9,
    name: "Galvanized Iron (GI) Coils",
    category: "coils",
    image: "/g4.png",
    description:
      "High-quality galvanized steel coils featuring consistent zinc coating for exceptional corrosion resistance. Manufactured for industrial and commercial applications requiring reliable performance and aesthetic appeal.",
    specifications: [
      "Standard: ASTM, JIS, DIN, GB, AISI, EN",
      "Thickness: 0.12mm-6.00mm",
      "Width: 600mm - 1500mm",
      "Zinc Coating: 10-200g/m²",
      "Surface: Regular spangle, zero spangle",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 10,
    name: "Carbon Steel Tubes",
    category: "pipes",
    image: "/m4.png",
    description:
      "Precision-engineered uncoated black steel tubes manufactured for construction, mechanical, and industrial applications. Consistent quality and dimensional accuracy for demanding projects requiring reliable performance.",
    specifications: [
      "Standards: ASTM, JIS, DIN, GB, AISI, EN",
      "Diameter: 20mm - 500mm",
      "Grade: Q195, Q235, Q345, SS400, ST52",
      "Length: 1-12m",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 11,
    name: "Galvanized Iron (GI) Edges",
    category: "sheets",
    image: "/l4.png",
    description:
      "Precision-cut galvanized edges manufactured for roofing, cladding, and industrial sheet finishing applications. Superior edge quality and consistent dimensions for professional installations.",
    specifications: [
      "Material: Q195, Q215, Q235B, Q345B, S235JR, S355JR",
      "Size: 25×25mm - 250×250mm, or customized",
      "Length: 1-12m",
      "Dimension: 20×20×2mm - 200×200×24mm",
      "Zinc Coating: 60-275g/m²",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 12,
    name: "Reinforcement Steel Rebars",
    category: "rebar",
    image: "/p4.png",
    description:
      "High-strength steel reinforcement bars engineered for concrete reinforcement in construction projects. Superior bond strength and ductility ensuring structural integrity for buildings, bridges, and infrastructure.",
    specifications: [
      "Standard: ASTM A615, JIS, DIN, GB, BS 4449",
      "Material: HRB335, HRB400, HRB500, SD390, SD490, GR300-520",
      "Thickness: 6-40mm or customized",
      "Length: 12m standard",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 13,
    name: "H-Beam Structural Steel",
    category: "structural",
    image: "/k3.png",
    description:
      "Heavy-duty structural H-beams manufactured for construction, bridges, and industrial structures. Superior load-bearing capacity and structural stability for critical applications requiring maximum strength.",
    specifications: [
      "Grade: ASTM A36, S275JR, S355JR",
      "Sizes: 100mm - 600mm",
      "Length: 6m - 12m",
      "Surface: Black, painted, galvanized",
      "Standard: ASTM A992, EN 10025",
      "Application: Construction, bridges, industrial",
    ],
    price: "Contact for pricing",
  },
  {
    id: 14,
    name: "U-Shaped Steel Sheet Pile",
    category: "structural",
    image: "/n4.png",
    description:
      "Engineered U-shaped steel sheet piles designed for retaining walls, waterfront structures, and deep foundation projects. Advanced interlocking system providing superior structural stability and water resistance.",
    specifications: [
      "Thickness: 6mm - 20mm",
      "Width: 400mm - 800mm",
      "Length: 6m - 18m",
      "Standard: JIS A5523, EN 10248, ASTM A328",
      "Type: U-type interlocking",
      "Application: Retaining walls, waterfront, foundations",
    ],
    price: "Contact for pricing",
  },
]
