"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Factory, Globe, Recycle, MapPin, Handshake, Rocket } from "lucide-react"

export default function FactoryPage() {
  const capabilities = [
    {
      icon: Factory,
      title: "Production Capacity",
      description: "High-volume steel manufacturing to meet large-scale project demands",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supplying steel products to international markets with strong export capabilities",
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description: "Eco-friendly processes emphasizing recycling and reduced carbon footprint",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Centrally located facilities ensuring accessibility across regions",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Strong collaborations with contractors, developers, and distributors",
    },
    {
      icon: Rocket,
      title: "Future Growth",
      description: "Expanding operations with continuous investment in new markets and technologies",
    },
  ]

  const processes = [
    {
      step: "01",
      title: "Raw Material Selection",
      description: "Careful selection of high-grade raw materials from trusted global suppliers",
      image: "/steel-raw-materials-warehouse.jpg",
    },
    {
      step: "02",
      title: "Processing & Fabrication",
      description: "Advanced processing using modern machinery and precision techniques",
      image: "/steel-processing-machinery-factory.jpg",
    },
    {
      step: "03",
      title: "Quality Testing",
      description: "Comprehensive testing and inspection to ensure product specifications",
      image: "/quality-testing.jpg",
    },
    {
      step: "04",
      title: "Packaging & Delivery",
      description: "Professional packaging and timely delivery to customer locations",
      image: "/steel-packaging-delivery-warehouse.jpg",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-[#B91C1C]">Metal Forming Factory</span>
          </h1>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our state-of-the-art metal forming factory and advanced manufacturing processes that deliver
            premium steel products to global markets.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/steel-processing-machinery-factory.jpg"
              alt="MASRE GROUP Metal Forming Factory"
              width={1200}
              height={500}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="text-white p-8">
                <h2 className="text-3xl font-bold mb-4">Advanced Metal Forming Facility</h2>
                <p className="text-xl">Modern manufacturing complex in Sudan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Capabilities</h2>
            <div className="w-16 h-1 bg-[#B91C1C] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:bg-gray-800"
              >
                <capability.icon className="w-12 h-12 text-[#B91C1C] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{capability.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Process</h2>
            <div className="w-16 h-1 bg-[#B91C1C] mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined manufacturing process ensures consistent quality and timely delivery of steel products.
            </p>
          </div>
          <div className="space-y-12">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <Image
                    src={process.image || "/placeholder.svg"}
                    alt={process.title}
                    width={500}
                    height={300}
                    className="rounded-lg w-full object-cover h-[254px] shadow-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#B91C1C] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {process.step}
                    </div>
                    <h3 className="text-2xl font-bold">{process.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Factory Stats */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Production Capacity</h2>
              <p className="text-red-100">Our manufacturing capabilities by the numbers</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50,000</div>
                <div className="text-red-100">Tons/Month</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-red-100">Operations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-red-100">Skilled Workers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.5%</div>
                <div className="text-red-100">Quality Rate</div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
