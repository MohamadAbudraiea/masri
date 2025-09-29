"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Users, Globe, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2010", title: "Company Founded", description: "MASRE GROUP established in Amman, Jordan" },
    { year: "2013", title: "Regional Expansion", description: "Extended operations across Middle East" },
    { year: "2019", title: "Global Partnerships", description: "Formed strategic partnerships with leading steel manufacturers worldwide" },
    { year: "2022", title: "African Market Growth", description: "Expanded operations with strong presence in Sudan and across Africa" },
    { year: "2024", title: "Sustainability Initiative", description: "Launched green steel trading program to promote eco-friendly solutions" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver premium steel products and reliable services, ensuring maximum value for our clients.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with full transparency, professionalism, and trustworthiness.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting partnerships with clients, suppliers, and stakeholders across 50+ countries.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "We maintain a strong presence in Africa and the Middle East while expanding globally.",
    },
  ]

  const team = [
    {
      name: "Mostafa Masre",
      position: "CEO & Founder",
      image: "/professional-businessman-ceo.jpg",
      description: "Leading MASRE GROUP with 15+ years of expertise in global steel trading and industrial growth.",
    },
    {
      name: "Regional Manager",
      position: "Operations Director",
      image: "/professional-businesswoman-manager.jpg",
      description: "Oversees African and Middle Eastern operations, ensuring seamless logistics and expansion.",
    },
    {
      name: "Technical Team",
      position: "Quality Assurance",
      image: "/engineering-team-steel-quality.jpg",
      description: "Guarantees compliance with international steel standards and sustainable practices.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-[#B91C1C]">MASRE GROUP</span>
          </h1>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MASRE GROUP stands as a beacon of excellence in steel trading, building strong partnerships 
            and delivering sustainable solutions since 2010.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in Amman, Jordan in 2010, MASRE GROUP started with a vision to redefine excellence in steel trading. 
                  From day one, our focus has been on delivering trusted quality and building lasting relationships.
                </p>
                <p>
                  With a factory presence in Sudan, we expanded across Africa, establishing a strong supply chain and 
                  supporting regional development with premium steel solutions.
                </p>
                <p>
                  Today, MASRE GROUP serves 50+ countries with diversified business operations, including a grain trading arm, 
                  making us a trusted global partner in industrial growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-steel-trading-office-building.jpg"
                alt="MASRE GROUP Office"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center dark:bg-gray-800 border-2 hover:border-[#B91C1C]/30 transition-all duration-300">
              <Eye className="w-16 h-16 text-[#B91C1C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the global leader in steel trading, recognized for sustainable solutions, 
                innovation, and long-term partnerships that create value for all stakeholders.
              </p>
            </Card>
            <Card className="p-8 text-center dark:bg-gray-800 border-2 hover:border-[#B91C1C]/30 transition-all duration-300">
              <Target className="w-16 h-16 text-[#B91C1C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To deliver exceptional steel trading services through strategic partnerships, 
                advanced logistics, and unwavering commitment to quality and sustainability.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-[#B91C1C] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:bg-gray-800"
              >
                <value.icon className="w-12 h-12 text-[#B91C1C] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-16 h-1 bg-[#B91C1C] mx-auto"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#B91C1C] opacity-30"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="p-6 dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-[#B91C1C] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-[#B91C1C] rounded-full relative z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <div className="w-16 h-1 bg-[#B91C1C] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 dark:bg-gray-800"
              >
                <div className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#B91C1C] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#B91C1C] rounded-lg p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-red-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-red-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-red-100">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-100">Customer Support</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
