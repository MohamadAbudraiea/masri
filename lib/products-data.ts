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
      "Thickness: 1.2mm - 25mm",
      "Width: 1000mm - 2000mm",
      "Grade: Q235, SS400, ASTM A36",
      "Surface: Black, oiled finish",
      "Application: Construction, automotive, manufacturing",
      "Standard: ASTM A1011, JIS G3131",
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
      "Diameter: 0.5mm - 6mm",
      "Zinc coating: 40-300 g/m²",
      "Tensile strength: 350-550 N/mm²",
      "Surface: Hot-dip galvanized",
      "Application: Fencing, binding, construction",
      "Standard: ASTM A641, BS 443",
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
      "Sizes: 10mm x 10mm - 200mm x 200mm",
      "Length: 6m - 12m",
      "Grades: A36, S235, SS400",
      "Surface: Black, pickled, or painted",
      "Application: Construction, machinery, fabrication",
      "Standard: ASTM A36, EN 10025",
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
      "Thickness: 1.5mm - 20mm",
      "Width: 1000mm - 2000mm",
      "Length: Custom cut available",
      "Grade: Q235, SS400, ASTM A36",
      "Application: Automotive, shipbuilding, machinery",
      "Standard: ASTM A1011, JIS G3131",
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
      "Thickness: 0.3mm - 3mm",
      "Width: 600mm - 1500mm",
      "Zinc coating: 60-275 g/m²",
      "Surface: Regular/minimized/zero spangle",
      "Application: Roofing, cladding, industrial",
      "Standard: ASTM A653, EN 10346",
    ],
    price: "Contact for pricing",
  },
  {
    id: 6,
    name: "Black Steel Pipes",
    category: "pipes",
    image: "/h3.png",
    description:
      "Robust uncoated black steel pipes engineered for water, gas distribution, and structural applications. Manufactured to international standards with consistent quality and reliability for critical infrastructure projects.",
    specifications: [
      "Diameter: 15mm - 600mm",
      "Wall thickness: 1.5mm - 20mm",
      "Standard: ASTM A53, API 5L",
      "Type: Seamless, ERW (Electric Resistance Welded)",
      "Application: Water, gas distribution, structural",
      "Grade: Grade A, Grade B",
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
      "Diameter: 15mm - 500mm",
      "Wall thickness: 1.5mm - 12mm",
      "Zinc coating: 120-500 g/m²",
      "Standard: ASTM A53, BS 1387",
      "Application: Plumbing, construction, industrial",
      "Type: Seamless, ERW",
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
      "Size: 50mm x 30mm - 300mm x 90mm",
      "Length: 6m - 12m",
      "Grade: Q235, ASTM A36, S275",
      "Surface: Black, painted, galvanized",
      "Application: Framing, support beams, construction",
      "Standard: ASTM A36, EN 10025",
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
      "Thickness: 0.3mm - 3mm",
      "Width: 600mm - 1500mm",
      "Zinc coating: 60-275 g/m²",
      "Surface: Regular/zero spangle",
      "Application: Industrial, commercial manufacturing",
      "Standard: ASTM A653, JIS G3302",
    ],
    price: "Contact for pricing",
  },
  {
    id: 10,
    name: "Black Steel Tubes",
    category: "pipes",
    image: "/m4.png",
    description:
      "Precision-engineered uncoated black steel tubes manufactured for construction, mechanical, and industrial applications. Consistent quality and dimensional accuracy for demanding projects requiring reliable performance.",
    specifications: [
      "Diameter: 20mm - 500mm",
      "Wall thickness: 1.5mm - 12mm",
      "Standard: ASTM A500, EN 10219",
      "Type: Round, square, rectangular",
      "Application: Construction, mechanical, industrial",
      "Grade: Grade A, Grade B, Grade C",
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
      "Thickness: 0.3mm - 3mm",
      "Width: 20mm - 100mm",
      "Zinc coating: 60-275 g/m²",
      "Edge type: Slit, sheared",
      "Application: Roofing, cladding, finishing",
      "Standard: ASTM A653, EN 10346",
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
      "Grades: Grade 40, Grade 60",
      "Sizes: 8mm - 32mm diameter",
      "Length: 12m standard, custom available",
      "Standard: ASTM A615, BS 4449",
      "Application: Concrete reinforcement, construction",
      "Surface: Deformed (ribbed)",
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
      "Application: Construction, bridges, industrial",
      "Standard: ASTM A992, EN 10025",
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
      "Application: Retaining walls, waterfront, foundations",
      "Type: U-type interlocking",
    ],
    price: "Contact for pricing",
  },
]
