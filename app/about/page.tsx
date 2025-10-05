"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Globe, Target, Eye, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2010", title: "Company Founded", description: "MASRE GROUP established in Amman, Jordan" },
    { year: "2013", title: "Regional Expansion", description: "Extended operations across Middle East" },
    {
      year: "2019",
      title: "Global Partnerships",
      description: "Formed strategic partnerships with leading steel manufacturers worldwide",
    },
    {
      year: "2022",
      title: "African Market Growth",
      description: "Expanded operations with strong presence in Sudan and across Africa",
    },
    {
      year: "2024",
      title: "Expansion into the MENA region",
      description: "strengthening our presence across key Middle Eastern and North African markets.",
    },
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

  const companies = [
    {
      name: "Sesame Trading",
      image: "/sesame-seeds-premium.jpg",
      description:
        "We source and trade premium sesame seeds from trusted suppliers in Sudan, ensuring top quality for food and industrial applications.",
    },
    {
      name: "Dates",
      image: "/fresh-dates-medjool.jpg",
      description:
        "Supplying high-grade dates from Jordan across MENA and international markets, known for their natural sweetness and nutritional value.",
    },
    {
      name: "Arabic Gum",
      image: "/arabic-gum-acacia.jpg",
      description:
        "Providing authentic Arabic gum from Sudan, widely used in food, beverages, and pharmaceutical industries for its unique natural properties.",
    },
    {
      name: "Peanuts",
      image: "/premium-peanuts.jpg",
      description:
        "Trusted supplier of high-quality peanuts from Sudan for food manufacturing, snacking, and export markets with strict quality standards.",
    },
    {
      name: "Watermelon Seeds",
      image: "/watermelon-seeds-roasted.jpg",
      description:
        "Delivering carefully selected watermelon seeds from Sudan, popular in international markets for snacking and culinary uses.",
    },
    {
      name: "Olive Oil",
      image: "/premium-olive-oil-jordan.jpg",
      description:
        "Supplying premium extra virgin olive oil from Jordan, renowned for its exceptional quality, rich flavor, and health benefits for international markets.",
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            About <span className="text-[#B91C1C]">MASRE GROUP</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto mb-10 rounded-full animate-gradient-x"></div>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            MASRE GROUP stands as a beacon of excellence in steel trading, building strong partnerships and delivering
            sustainable solutions since 2010.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-20 bg-gradient-to-b from-[#B91C1C] to-[#DC2626] rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
              </div>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light">
                <p>
                  Founded in Amman, Jordan in 2010, MASRE GROUP started with a vision to redefine excellence in steel
                  trading. From day one, our focus has been on delivering trusted quality and building lasting
                  relationships.
                </p>
                <p>
                  With a factory presence in Sudan, we expanded across Africa, establishing a strong supply chain and
                  supporting regional development with premium steel solutions.
                </p>
                <p>
                  Today, MASRE GROUP serves 50+ countries with diversified business operations, including a grain
                  trading arm, making us a trusted global partner in industrial growth.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B91C1C]/20 to-[#DC2626]/20 rounded-3xl blur-2xl"></div>
              <Image
                src="/modern-steel-trading-office-building.jpg"
                alt="MASRE GROUP Office"
                width={700}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Chairman's Letter - Redesigned Simple & Clean */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Message from the Chairman</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto rounded-full animate-gradient-x"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Chairman Image - Simple & Elegant */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="relative group">
                    {/* Elegant Glow */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#B91C1C]/30 to-[#DC2626]/30 rounded-full blur-3xl opacity-60"></div>

                    {/* Image */}
                    <div className="relative">
                      <Image
                        src="/professional-businessman-ceo.jpg"
                        alt="Mostafa Masre - Chairman & CEO"
                        width={400}
                        height={400}
                        className="relative w-full rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Info Below Image */}
                    <div className="mt-8 text-center space-y-3">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Mostafa Masre</h3>
                      <p className="text-xl text-[#B91C1C] font-semibold">Chairman & CEO</p>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] mx-auto rounded-full"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MASRE GROUP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Letter Content - Clean Typography */}
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p className="text-xl font-light italic text-gray-800 dark:text-gray-200">
                    Dear Esteemed Partners, Investors, and Stakeholders,
                  </p>

                  <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#B91C1C] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    It is with immense pride and gratitude that I reflect on MASRE GROUP's extraordinary journey from
                    our founding in 2010 to becoming a distinguished leader in the global steel trading industry. Our
                    success is rooted in an unwavering commitment to excellence, integrity, and the cultivation of
                    meaningful, lasting relationships with our valued clients and partners worldwide.
                  </p>

                  <p>
                    In an increasingly dynamic and competitive marketplace, we have maintained our steadfast dedication
                    to delivering premium steel products while embracing innovation, sustainability, and
                    forward-thinking business practices. Our strategic expansion into African markets and successful
                    diversification into grain trading exemplifies our vision for sustainable, long-term growth and our
                    commitment to serving the diverse needs of global industries.
                  </p>

                  <p>
                    Our achievements are a testament to the trust and partnership of our clients, the dedication of our
                    team, and our relentless pursuit of operational excellence. With operations spanning over 50
                    countries and a robust presence in key markets, we have established ourselves as a reliable partner
                    in building the infrastructure of tomorrow.
                  </p>

                  <p>
                    Looking ahead, MASRE GROUP will continue to strengthen our global footprint, invest strategically in
                    cutting-edge technologies, and uphold the highest standards of service and quality that have become
                    synonymous with our name. We are not merely trading steel; we are forging partnerships, building
                    communities, and contributing to the sustainable development of nations.
                  </p>

                  <p className="font-medium">
                    I extend my deepest appreciation for your continued trust, confidence, and partnership. Together, we
                    will achieve unprecedented milestones and create lasting value for all our stakeholders in the years
                    to come.
                  </p>

                  {/* Signature */}
                  <div className="pt-8 mt-8 border-t-2 border-gray-200 dark:border-gray-700">
                    <p className="text-lg font-light mb-3">With warm regards and respect,</p>
                    <p className="text-3xl font-bold text-[#B91C1C] mb-1">Mostafa Masre</p>
                    <p className="text-base text-gray-600 dark:text-gray-400">Chairman & Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Companies Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Regarding To Masregroup</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto mb-8 rounded-full animate-gradient-x"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Beyond steel trading, MASRE GROUP has expanded into premium agricultural commodities, serving global
              markets with excellence and reliability.
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {companies.slice(0, 3).map((company, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={company.image || "/placeholder.svg"}
                    alt={company.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{company.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                    {company.description}
                  </p>
                  <Link href="/contact" scroll={true}>
                    <Button className="w-full bg-gradient-to-r from-[#B91C1C] to-[#DC2626] hover:from-[#991B1B] hover:to-[#B91C1C] text-white transition-all duration-300 group/btn">
                      Show More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Second Row - 3 Cards (Centered) */}
          <div className="grid md:grid-cols-3 gap-8">
            {companies.slice(3, 6).map((company, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={company.image || "/placeholder.svg"}
                    alt={company.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{company.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                    {company.description}
                  </p>
                  <Link href="/contact" scroll={true}>
                    <Button className="w-full bg-gradient-to-r from-[#B91C1C] to-[#DC2626] hover:from-[#991B1B] hover:to-[#B91C1C] text-white transition-all duration-300 group/btn">
                      Show More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-10 text-center border-0 shadow-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full mb-8 shadow-xl">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                To be the global leader in steel trading, recognized for sustainable solutions, innovation, and
                long-term partnerships that create value for all stakeholders.
              </p>
            </Card>
            <Card className="p-10 text-center border-0 shadow-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full mb-8 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                To deliver exceptional steel trading services through strategic partnerships, advanced logistics, and
                unwavering commitment to quality and sustainability.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto rounded-full animate-gradient-x"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center border-0 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full mb-6 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#B91C1C]">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey of Excellence</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto rounded-full animate-gradient-x"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#B91C1C] via-[#DC2626] to-[#EF4444] opacity-30 rounded-full"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <Card className="p-8 border-0 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="text-3xl font-bold text-[#B91C1C] mb-3">{milestone.year}</div>
                    <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                <div className="w-6 h-6 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full relative z-10 shadow-xl"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444]"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
          <div className="relative p-16 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Our Global Impact</h2>
            <p className="text-red-100 mb-12 text-lg">Delivering excellence across continents</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="transform hover:scale-110 transition-all duration-500">
                <div className="text-6xl font-bold mb-3 animate-counter">15+</div>
                <div className="text-red-100 text-lg">Years Experience</div>
              </div>
              <div className="transform hover:scale-110 transition-all duration-500">
                <div className="text-6xl font-bold mb-3 animate-counter">50+</div>
                <div className="text-red-100 text-lg">Countries Served</div>
              </div>
              <div className="transform hover:scale-110 transition-all duration-500">
                <div className="text-6xl font-bold mb-3 animate-counter">1000+</div>
                <div className="text-red-100 text-lg">Clients Served</div>
              </div>
              <div className="transform hover:scale-110 transition-all duration-500">
                <div className="text-6xl font-bold mb-3 animate-counter">24/7</div>
                <div className="text-red-100 text-lg">Customer Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
