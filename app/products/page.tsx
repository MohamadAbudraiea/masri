"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "rebar", name: "Rebar Steel" },
    { id: "structural", name: "Structural Steel" },
    { id: "sheets", name: "Steel Sheets" },
    { id: "pipes", name: "Steel Pipes" },
  ]

  const products = [
    {
      id: 1,
      name: "Hot Rolled Coil (HRC)",
      category: "sheets",
      image: "/d4.png",
      description: "Hot rolled steel coils widely used in construction, automotive, and manufacturing industries.",
      specifications: ["Thickness: 1.2mm - 25mm", "Width: 1000mm - 2000mm", "Grade: Q235, SS400, ASTM A36"],
      price: "Contact for pricing",
    },
    {
      id: 2,
      name: "Galvanized Wire",
      category: "wire",
      image: "/a3.png",
      description:
        "Durable galvanized steel wire with superior corrosion resistance for fencing, binding, and industrial applications.",
      specifications: ["Diameter: 0.5mm - 6mm", "Zinc coating: 40-300 g/m²", "Tensile strength: 350-550 N/mm²"],
      price: "Contact for pricing",
    },
    {
      id: 3,
      name: "Carbon Steel Square Bar",
      category: "structural",
      image: "/c4.png",
      description: "High-strength carbon steel square bars for construction and fabrication works.",
      specifications: ["Sizes: 10mm x 10mm - 200mm x 200mm", "Length: 6m - 12m", "Grades: A36, S235, SS400"],
      price: "Contact for pricing",
    },
    {
      id: 4,
      name: "HRC Sheets",
      category: "sheets",
      image: "/e3.png",
      description: "Flat hot rolled steel sheets used in automotive, shipbuilding, and machinery manufacturing.",
      specifications: ["Thickness: 1.5mm - 20mm", "Width: 1000mm - 2000mm", "Length: As required"],
      price: "Contact for pricing",
    },
    {
      id: 5,
      name: "Galvanized Iron (GI) Sheets",
      category: "sheets",
      image: "/f3.png",
      description: "Corrosion-resistant galvanized iron sheets for roofing, cladding, and industrial applications.",
      specifications: ["Thickness: 0.3mm - 3mm", "Width: 600mm - 1500mm", "Zinc coating: 60-275 g/m²"],
      price: "Contact for pricing",
    },
    {
      id: 6,
      name: "Black Steel Pipes",
      category: "pipes",
      image: "/h3.png",
      description: "Uncoated black steel pipes commonly used for water, gas, and structural purposes.",
      specifications: ["Diameter: 15mm - 600mm", "Wall thickness: 1.5mm - 20mm", "Standard: ASTM A53, API 5L"],
      price: "Contact for pricing",
    },
    {
      id: 7,
      name: "Galvanized Iron (GI) Pipes",
      category: "pipes",
      image: "/i4.png",
      description:
        "High-quality galvanized iron pipes with excellent corrosion resistance, widely used in plumbing, construction, and industrial applications.",
      specifications: [
        "Diameter: 15mm - 500mm",
        "Wall thickness: 1.5mm - 12mm",
        "Zinc coating: 120-500 g/m²",
        "Standard: ASTM A53, BS 1387",
      ],
      price: "Contact for pricing",
    },
    {
      id: 8,
      name: "C-Shaped Steel Channels",
      category: "structural",
      image: "/j3.png",
      description: "C-channel structural steel used for framing, support beams, and construction.",
      specifications: ["Size: 50mm x 30mm - 300mm x 90mm", "Length: 6m - 12m", "Grade: Q235, ASTM A36"],
      price: "Contact for pricing",
    },
    {
      id: 9,
      name: "Galvanized Iron (GI) Coils",
      category: "coils",
      image: "/g4.png",
      description: "Galvanized steel coils with excellent corrosion resistance for industrial and commercial uses.",
      specifications: ["Thickness: 0.3mm - 3mm", "Width: 600mm - 1500mm", "Zinc coating: 60-275 g/m²"],
      price: "Contact for pricing",
    },
    {
      id: 10,
      name: "Black Steel Tubes",
      category: "pipes",
      image: "/m4.png",
      description: "Uncoated black steel tubes used in construction, mechanical, and industrial applications.",
      specifications: ["Diameter: 20mm - 500mm", "Wall thickness: 1.5mm - 12mm", "Standard: ASTM A500"],
      price: "Contact for pricing",
    },
    {
      id: 11,
      name: "Galvanized Iron (GI) Edges",
      category: "sheets",
      image: "/l4.png",
      description: "Precision-cut galvanized edges for roofing, cladding, and industrial sheet finishing.",
      specifications: ["Thickness: 0.3mm - 3mm", "Width: 20mm - 100mm", "Zinc coating: 60-275 g/m²"],
      price: "Contact for pricing",
    },
    {
      id: 12,
      name: "Reinforcement Steel Rebars",
      category: "rebar",
      image: "/p4.png",
      description: "High-strength steel rebars for reinforced concrete construction projects.",
      specifications: ["Grades: 40, 60", "Sizes: 8mm - 32mm", "Length: 12m standard"],
      price: "Contact for pricing",
    },
    {
      id: 13,
      name: "H-Beam Structural Steel",
      category: "structural",
      image: "/k3.png",
      description: "Heavy-duty structural H-beams used in construction, bridges, and industrial structures.",
      specifications: ["Grade: ASTM A36, S275JR", "Sizes: 100mm - 600mm", "Length: 6m - 12m"],
      price: "Contact for pricing",
    },
    {
      id: 14,
      name: "U-Shaped Steel Sheet Pile",
      category: "structural",
      image: "/n4.png",
      description:
        "U-shaped steel sheet piles designed for retaining walls, waterfront structures, and deep foundation projects.",
      specifications: ["Thickness: 6mm - 20mm", "Width: 400mm - 800mm", "Length: 6m - 18m", "Standard: JIS, EN, ASTM"],
      price: "Contact for pricing",
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-[#B91C1C]">Products</span>
          </h1>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality steel products, sourced globally and delivered to meet
            international standards.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#B91C1C] hover:bg-[#991B1B] text-white"
                  : "hover:border-[#B91C1C] hover:text-[#B91C1C]"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 border-2 hover:border-[#B91C1C]/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#B91C1C] text-white">Premium Quality</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#B91C1C] transition-colors">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Specifications:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#B91C1C] rounded-full mr-2"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#B91C1C]">{product.price}</span>
                  <Button className="bg-[#B91C1C] hover:bg-[#991B1B] text-white">Get Quote</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need Custom Steel Solutions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We provide custom steel fabrication and specialized products to meet your specific requirements.
          </p>
          <Link href="/contact">
            <Button className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-8 py-3">Contact Our Experts</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
