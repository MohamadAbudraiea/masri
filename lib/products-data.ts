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
    id: 15,
    name: "Low Carbon Wire Rode",
    category: "wire",
    image: "/o2.png",
    description:
      "High-quality steel wire rods supplied in coils, widely used in construction, automotive, and manufacturing industries. Known for excellent tensile strength, ductility, and weldability, making them ideal for producing wires, nails, springs, and reinforcement materials.",
    specifications: [
      "Standard: AISI/ASTM/SUS/GB/DIN/EN/BS",
      "Size: 1.2-20mm",
      "Type: 1002-1016",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
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
      "Width: 10-1500mm or Customizable",
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
      "Material: Low Carbon Steel Q195, 1000-1010",
      "Wire diameter: BWG26-BWG8 (0.45mm-5mm) or as required",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
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
      "Diameter: 2-25mm or Customizable",
      "Length: 3-6m or Customizable",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
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
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
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
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
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
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
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
      "Size: 80×40×20×2.5 (3.925 kg/m) or as per required",

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
      "Size: as required",
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
      "Dimension: 20×20×2mm - 200×200×24mm or customized",
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
      "Standard: ASTM, JIS, DIN, GB, AISI, DIN, EN",
      "Material: Q235/ Q345/ SS400/ ST37-2/ ST52/ Q420/ Q460/ S235JR/ S275JR/ S355JR",
      "Hight: 120-350mm or customized",
      "Width: 40-75mm or customized",
      "Thickness: 1.6-3.0mm or customized",
      "Length: 1-12m or customized",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
  {
    id: 16,
    name: "Billets",
    category: "rebar",
    image: "/b3.png",
    description:
      "Steel billets are semi-finished products with a square or rectangular cross-section, primarily used as raw material for manufacturing rebar, wire rods, structural sections, and other long steel products. They are produced through continuous casting or rolling and provide the foundation for high-strength construction and industrial applications.",
    specifications: [
      "Standard: ASTM A615, JIS, DIN, GB, BS 4449",
      "Material: Q195 ,Q215 ,Q235 ,Q255 ,Q275 ,SS330 , SS400, SS490, SS540, S185JR, S235JR, S235JRG1, S235J0, S275J0, S275J2G3ASTM 1010, 1020, 1025, 1030, 1035, 1040, 1045, 1050, 1055, 1060, 1080, 1022 A53, A106, A192, A315b, ST33, ST37, ST35.8, ST42, ST45, ST52S10C, S20C, S25C, S30C, S40C, S45C, S55C, S58C, SK5, C10, C20, C30, C45, C45, C60, C22E, C30E, C40E, C45E, C55E, C60E, C67E, C75E, C85E, CK22, CK25, CK30, CK35, CK45, CK50, CK60, CK67 ",
      "Size: 100×100mm 130×130mm ",
      "Length: 3-12m or Customizable",
      "Tolerance: ±2.5%",
      "Terms Of Trade: EXW, FOB, CRF, CIF, CNF or others",
    ],
    price: "Contact for pricing",
  },
]
