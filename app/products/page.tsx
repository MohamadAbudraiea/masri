"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products-data"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "rebar", name: "Rebar Steel" },
    { id: "structural", name: "Structural Steel" },
    { id: "sheets", name: "Steel Sheets" },
    { id: "pipes", name: "Steel Pipes" },
    { id: "wire", name: "Wire" },
    { id: "coils", name: "Coils" },
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
            <Link key={product.id} href={`/products/${product.id}`} scroll={true}>
              <Card
                className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 border-2 hover:border-[#B91C1C]/30 cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="h-90 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-6">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={1200}
                      height={500}
                      className="object-contain w-full h-96 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#B91C1C] text-white">Premium Quality</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#B91C1C] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Specifications:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {product.specifications.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="flex items-center line-clamp-1">
                          <div className="w-2 h-2 bg-[#B91C1C] rounded-full mr-2 flex-shrink-0"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#B91C1C]">{product.price}</span>
                    <Button
                      size="sm"
                      className="bg-[#B91C1C] hover:bg-[#991B1B] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need Custom Steel Solutions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We provide custom steel fabrication and specialized products to meet your specific requirements.
          </p>
          <Link href="/contact" scroll={true}>
            <Button className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-8 py-3">Contact Our Experts</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
