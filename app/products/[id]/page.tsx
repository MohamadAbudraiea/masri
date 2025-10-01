"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, CheckCircle2, Award, ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/products-data"
import { useEffect, useState } from "react"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const otherProducts = products.filter((p) => p.id !== productId)

  useEffect(() => {
    setIsVisible(true)

    // Responsive items per view
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else if (window.innerWidth < 1280) setItemsPerView(3)
      else setItemsPerView(4)
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)

    // Auto-slide carousel
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % otherProducts.length)
    }, 4000)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", updateItemsPerView)
    }
  }, [otherProducts.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % otherProducts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + otherProducts.length) % otherProducts.length)
  }

  if (!product) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" scroll={true}>
            <Button className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] hover:from-[#991B1B] hover:to-[#B91C1C] text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #B91C1C 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-12 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => router.push("/products")}
              className="group hover:bg-[#B91C1C]/10 hover:text-[#B91C1C] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Products
            </Button>
          </div>

          {/* Product Details */}
          <div
            className={`grid lg:grid-cols-2 gap-16 mb-24 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Product Image - Clean Presentation */}
            <div className="animate-fade-in-left">
              <Card className="overflow-hidden border-0 shadow-2xl backdrop-blur-sm bg-transparent">
                <CardContent className="p-12">
                  <div className="relative">
                    {/* Premium Badge */}
                    <div className="absolute -top-6 -right-6 z-10">
                      <div className="bg-gradient-to-br from-[#B91C1C] to-[#DC2626] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-pulse-glow">
                        <Award className="w-5 h-5" />
                        <span className="font-semibold">Premium Quality</span>
                      </div>
                    </div>

                    {/* Image Container - No Background, Just Image */}
                    <div className="relative h-[550px] flex items-center justify-center">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="object-contain w-full h-full transition-all duration-700 hover:scale-110 animate-fade-in-scale drop-shadow-2xl"
                        priority
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="mt-8 flex justify-center">
                      <Badge className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white text-base px-6 py-2 shadow-lg">
                        {product.category.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Information - Luxury Layout */}
            <div className="animate-fade-in-right space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-16 bg-gradient-to-b from-[#B91C1C] to-[#DC2626] rounded-full"></div>
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    {product.name}
                  </h1>
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mb-8 rounded-full animate-gradient-x"></div>
              </div>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#B91C1C] flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  Product Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light">
                  {product.description}
                </p>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#B91C1C] to-[#DC2626] text-white p-8">
                <h2 className="text-2xl font-bold mb-4">Investment Value</h2>
                <p className="text-4xl font-bold mb-2">{product.price}</p>
                <p className="text-red-100 text-sm">Competitive pricing for bulk orders available</p>
              </Card>

              {/* Luxury Contact Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Link href="/contact" scroll={true} className="block">
                  <Button className="w-full bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] hover:from-[#991B1B] hover:via-[#B91C1C] hover:to-[#DC2626] text-white py-7 text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl group">
                    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Request Quote
                  </Button>
                </Link>
                <a href="https://wa.me/962790688222" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full border-2 border-[#B91C1C] text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white py-7 text-lg transition-all duration-500 bg-transparent shadow-xl group">
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Luxury Specifications Table */}
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Technical Specifications
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto rounded-full animate-gradient-x"></div>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444]">
                        <th className="px-8 py-6 text-left text-xl font-bold text-white">Parameter</th>
                        <th className="px-8 py-6 text-left text-xl font-bold text-white">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, index) => {
                        const [param, value] = spec.split(":")
                        return (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700/50" : "bg-white dark:bg-gray-800/50"
                            } hover:bg-[#B91C1C]/5 dark:hover:bg-[#B91C1C]/20 transition-all duration-300 transform hover:scale-[1.01]`}
                          >
                            <td className="px-8 py-6 font-bold text-gray-900 dark:text-white border-b border-gray-200/50 dark:border-gray-600/50 text-lg">
                              {param}
                            </td>
                            <td className="px-8 py-6 text-gray-700 dark:text-gray-300 border-b border-gray-200/50 dark:border-gray-600/50 text-lg">
                              {value}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dynamic Infinite Carousel - All Products */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Explore Our Collection
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto rounded-full animate-gradient-x"></div>
            </div>

            <div className="relative px-12">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out gap-6"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  }}
                >
                  {otherProducts.map((otherProduct) => (
                    <Link
                      key={otherProduct.id}
                      href={`/products/${otherProduct.id}`}
                      scroll={true}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
                    >
                      <Card className="group hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 border-0 cursor-pointer h-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 overflow-hidden">
                        {/* Product Image - No Background, Clean */}
                        <div className="relative overflow-hidden h-64 flex items-center justify-center p-6">
                          <Image
                            src={otherProduct.image || "/placeholder.svg"}
                            alt={otherProduct.name}
                            width={250}
                            height={250}
                            className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <Badge className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white text-xs shadow-xl">
                              {otherProduct.category.toUpperCase()}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#B91C1C] transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                            {otherProduct.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 min-h-[2.5rem]">
                            {otherProduct.description}
                          </p>
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-10"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-10"
                aria-label="Next products"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {otherProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-12 bg-gradient-to-r from-[#B91C1C] to-[#DC2626]"
                        : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-[#B91C1C]/50"
                    }`}
                    aria-label={`Go to product ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/products" scroll={true}>
                <Button className="bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] hover:from-[#991B1B] hover:via-[#B91C1C] hover:to-[#DC2626] text-white px-10 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
