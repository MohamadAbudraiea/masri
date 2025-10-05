"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
  Building,
  Users,
  Shield,
  Factory,
  Truck,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")

  useEffect(() => {
    setIsVisible(true)
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) setLanguage(savedLanguage as "en" | "ar")
  }, [])

  const content = {
    en: {
      hero: {
        title: "MASRE",
        subtitle: "GROUP",
        tagline: "Premium Steel Trading Excellence Since 2010",
        description:
          "Transforming the steel industry with innovative solutions, global partnerships, and unwavering commitment to quality. Your trusted partner for premium steel products worldwide.",
        exploreProducts: "Explore Products",
        contactUs: "Contact Us",
        watchVideo: "Watch Our Story",
      },
      stats: [
        { icon: TrendingUp, number: "15+", label: "Years Experience", description: "Industry Leadership" },
        { icon: Globe, number: "50+", label: "Countries Served", description: "Global Presence" },
        { icon: Award, number: "1000+", label: "Deliveries Completed", description: "Successful Shipments" },
        { icon: Phone, number: "24/7", label: "Customer Support", description: "Always Available" },
      ],
      about: {
        title: "About MASRE GROUP",
        subtitle: "Building the Future of Steel Trading",
        description:
          "MASRE GROUP stands as a beacon of excellence in the global steel trading industry. Since our establishment in 2010, we have consistently delivered premium quality steel products while building lasting partnerships with clients across 50+ countries.",
        highlights: [
          "Strategic partnerships with leading steel manufacturers",
          "Advanced logistics and supply chain management",
          "Comprehensive quality assurance programs",
          "Strong relationships with major customers",
          "Factory presence in Africa (Sudan) to serve regional markets",
          "Expanding customer base across Africa",
          "Diversified business operations, including a grain trading company",
        ],
        learnMore: "Learn More",
      },
      products: {
        title: "Featured Products",
        subtitle: "Premium Steel Solutions for Every Industry Need",
        description:
          "Discover our comprehensive range of high-quality steel products, meticulously sourced and rigorously tested to meet international standards.",
        viewAll: "View All Products",
        items: [
          {
            name: "Galvanized Iron (GI) Pipes",
            description:
              "High-quality galvanized iron pipes with excellent corrosion resistance, widely used in plumbing, construction, and industrial applications.",
            image: "/i4.png",
            category: "Pipes",
            features: ["Diameter: 15mm - 500mm", "Wall Thickness: 1.5mm - 12mm", "Zinc Coating: 120-500 g/m²"],
          },
          {
            name: "Wire rode",
            description:
              "High-quality steel wire rods in coils, offering strength, ductility, and weldability for construction, automotive, and manufacturing applications.",
            image: "/o2.png",
            category: "Wire",
            features: ["Size: 50mm x 30mm - 300mm x 90mm", "Length: 6m - 12m", "Grade: Q235, ASTM A36"],
          },
          {
            name: "Galvanized Iron (GI) Sheets",
            description:
              "Corrosion-resistant galvanized iron sheets for roofing, cladding, and industrial applications.",
            image: "/f3.png",
            category: "Steel Sheets",
            features: ["Thickness: 0.3mm - 3mm", "Width: 600mm - 1500mm", "Zinc Coating: 60-275 g/m²"],
          },
          {
            name: "Galvanized Wire",
            description:
              "Durable galvanized steel wire with superior corrosion resistance for fencing, binding, and industrial applications.",
            image: "/a3.png",
            category: "Wire",
            features: ["Diameter: 0.5mm - 6mm", "Zinc Coating: 40-300 g/m²", "Tensile Strength: 350-550 N/mm²"],
          },
        ],
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive Steel Trading Solutions",
        items: [
          {
            title: "Global Steel Trading",
            description:
              "Comprehensive steel trading services with worldwide sourcing capabilities and strategic partnerships across major steel-producing regions.",
            icon: Globe,
            features: ["Global Sourcing", "Quality Assurance", "Competitive Pricing"],
          },
          {
            title: "Logistics & Distribution",
            description:
              "Advanced logistics network ensuring timely delivery of steel products to your location with full tracking and insurance coverage.",
            icon: Truck,
            features: ["Worldwide Shipping", "Real-time Tracking", "Insurance Coverage"],
          },
          {
            title: "Product Reliability",
            description:
              "Steel products trusted for their strength and reliability, carefully inspected to meet customer requirements and industry expectations.",
            icon: CheckCircle,
            features: ["Durability", "High Standards", "Trusted Supply"],
          },
          {
            title: "Technical Support",
            description:
              "Expert technical consultation and support services to help you select the right steel products for your specific applications.",
            icon: Users,
            features: ["Expert Consultation", "Technical Specs", "Application Support"],
          },
        ],
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to Partner with Industry Leaders?",
        description:
          "Connect with our expert team to discuss your steel requirements and discover how MASRE GROUP can drive your projects to success.",
        contactNow: "Contact Us Now",
        scheduleCall: "Schedule a Call",
        phone: "Phone",
        email: "Email",
        address: "Address",
      },
      features: [
        {
          icon: Building,
          title: "Premium Quality",
          description: "built for strength and reliability",
          color: "from-blue-500 to-blue-600",
        },
        {
          icon: Users,
          title: "Expert Team",
          description: "15+ years industry experience",
          color: "from-green-500 to-green-600",
        },
        {
          icon: Shield,
          title: "Trusted Partner",
          description: "Reliable global supplier",
          color: "from-purple-500 to-purple-600",
        },
        {
          icon: Globe,
          title: "Worldwide Reach",
          description: "Serving 50+ countries",
          color: "from-orange-500 to-orange-600",
        },
      ],
      whyChooseUs: {
        title: "Why Choose MASRE GROUP",
        subtitle: "Your Success is Our Priority",
        reasons: [
          {
            icon: Award,
            title: "Industry Recognition",
            description:
              "Multiple industry awards and certifications recognizing our excellence in steel trading and customer service.",
          },
          {
            icon: Factory,
            title: "Advanced Facilities",
            description:
              "State-of-the-art warehousing and processing facilities equipped with modern technology and quality control systems.",
          },
          {
            icon: Globe,
            title: "Global Network",
            description:
              "Extensive network of suppliers and partners worldwide ensuring consistent supply and competitive pricing.",
          },
          {
            icon: Shield,
            title: "Quality Guarantee",
            description:
              "Comprehensive quality assurance program with rigorous testing and certification for every product shipment.",
          },
        ],
      },
    },
    ar: {
      hero: {
        title: "MASRE",
        subtitle: "GROUP",
        tagline: "التميز في تجارة الصلب الممتازة منذ 2010",
        description:
          "نحول صناعة الصلب بحلول مبتكرة وشراكات عالمية والتزام لا يتزعزع بالجودة. شريكك الموثوق لمنتجات الصلب الممتازة في جميع أنحاء العالم.",
        exploreProducts: "استكشف المنتجات",
        contactUs: "اتصل بنا",
        watchVideo: "شاهد قصتنا",
      },
      stats: [
        { icon: TrendingUp, number: "15+", label: "سنة خبرة", description: "قيادة الصناعة" },
        { icon: Globe, number: "50+", label: "دولة نخدمها", description: "حضور عالمي" },
        { icon: Award, number: "1000+", label: "مشروع مكتمل", description: "تسليمات ناجحة" },
        { icon: Phone, number: "24/7", label: "دعم العملاء", description: "متاح دائماً" },
      ],
      about: {
        title: "حول مجموعة مصري",
        subtitle: "بناء مستقبل تجارة الصلب",
        description:
          "تقف مجموعة مصري كمنارة للتميز في صناعة تجارة الصلب العالمية. منذ تأسيسنا في عام 2010، قدمنا باستمرار منتجات الصلب عالية الجودة مع بناء شراكات دائمة مع العملاء في أكثر من 50 دولة.",
        highlights: [
          "إدارة الجودة معتمدة ISO 9001:2015",
          "شراكات استراتيجية مع كبار مصنعي الصلب",
          "إدارة متقدمة للخدمات اللوجستية وسلسلة التوريد",
          "برامج ضمان الجودة الشاملة",
        ],
        learnMore: "اعرف المزيد",
      },
      products: {
        title: "المنتجات المميزة",
        subtitle: "حلول الصلب الممتازة لكل احتياجات الصناعة",
        description:
          "اكتشف مجموعتنا الشاملة من منتجات الصلب عالية الجودة، المختارة بعناية والمختبرة بدقة لتلبية المعايير الدولية.",
        viewAll: "عرض جميع المنتجات",
        items: [
          {
            name: "قضبان الصلب المسلح",
            description: "قضبان الصلب المسلح عالية الجودة مصممة للقوة والمتانة الفائقة في مشاريع البناء",
            image: "/steel-rebar-reinforcement-bars.jpg",
            category: "صلب البناء",
            features: ["معيار الدرجة 60", "مقاوم للتآكل", "متوافق مع الزلازل"],
          },
          {
            name: "صلب H-Beam",
            description: "صلب H-beam الهيكلي الممتاز المصمم للبناء الثقيل والتطبيقات الصناعية",
            image: "/steel-h-beam-structural.jpg",
            category: "الصلب الهيكلي",
            features: ["قدرة تحمل عالية", "مهندس بدقة", "أحجام متعددة"],
          },
          {
            name: "ألواح الصلب المجلفن",
            description: "ألواح الصلب المجلفن الفائقة المقاومة للتآكل مثالية للأسقف والتطبيقات الصناعية",
            image: "/galvanized-steel-sheets.jpg",
            category: "ألواح الصلب",
            features: ["مطلي بالزنك", "مقاوم للطقس", "طويل الأمد"],
          },
          {
            name: "أنابيب الصلب السلسة",
            description: "أنابيب الصلب السلسة عالية الأداء المصنعة وفقاً لمعايير API للتطبيقات الصناعية الحرجة",
            image: "/seamless-steel-pipes.jpg",
            category: "أنابيب الصلب",
            features: ["معتمد API 5L", "مختبر الضغط", "أطوال مخصصة"],
          },
        ],
      },
      services: {
        title: "خدماتنا",
        subtitle: "حلول تجارة الصلب الشاملة",
        items: [
          {
            title: "تجارة الصلب العالمية",
            description:
              "خدمات تجارة الصلب الشاملة مع قدرات التوريد العالمية والشراكات الاستراتيجية عبر المناطق الرئيسية المنتجة للصلب.",
            icon: Globe,
            features: ["التوريد العالمي", "ضمان الجودة", "أسعار تنافسية"],
          },
          {
            title: "الخدمات اللوجستية والتوزيع",
            description:
              "شبكة لوجستية متقدمة تضمن التسليم في الوقت المناسب لمنتجات الصلب إلى موقعك مع التتبع الكامل وتغطية التأمين.",
            icon: Truck,
            features: ["الشحن العالمي", "التتبع الفوري", "تغطية التأمين"],
          },
          {
            title: "شهادة الجودة",
            description:
              "عمليات مراقبة الجودة الصارمة والشهادات الدولية التي تضمن أن كل منتج يلبي أعلى معايير الصناعة.",
            icon: CheckCircle,
            features: ["معتمد ISO", "اختبار المواد", "تقارير الجودة"],
          },
          {
            title: "الدعم الفني",
            description:
              "خدمات الاستشارة والدعم الفني المتخصص لمساعدتك في اختيار منتجات الصلب المناسبة لتطبيقاتك المحددة.",
            icon: Users,
            features: ["استشارة خبراء", "المواصفات الفنية", "دعم التطبيق"],
          },
        ],
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "مستعد للشراكة مع قادة الصناعة؟",
        description:
          "تواصل مع فريق الخبراء لدينا لمناقشة متطلبات الصلب الخاصة بك واكتشف كيف يمكن لمجموعة مصري أن تقود مشاريعك إلى النجاح.",
        contactNow: "اتصل بنا الآن",
        scheduleCall: "جدولة مكالمة",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
      },
      features: [
        {
          icon: Building,
          title: "جودة ممتازة",
          description: "منتجات الصلب معتمدة ISO",
          color: "from-blue-500 to-blue-600",
        },
        {
          icon: Users,
          title: "فريق خبير",
          description: "خبرة في الصناعة أكثر من 15 سنة",
          color: "from-green-500 to-green-600",
        },
        { icon: Shield, title: "شريك موثوق", description: "مورد عالمي موثوق", color: "from-purple-500 to-purple-600" },
        {
          icon: Globe,
          title: "وصول عالمي",
          description: "نخدم أكثر من 50 دولة",
          color: "from-orange-500 to-orange-600",
        },
      ],
      whyChooseUs: {
        title: "لماذا تختار مجموعة مصري",
        subtitle: "نجاحك هو أولويتنا",
        reasons: [
          {
            icon: Award,
            title: "اعتراف الصناعة",
            description: "جوائز وشهادات متعددة من الصناعة تعترف بتميزنا في تجارة الصلب وخدمة العملاء.",
          },
          {
            icon: Factory,
            title: "مرافق متقدمة",
            description: "مرافق تخزين ومعالجة حديثة مجهزة بتكنولوجيا حديثة وأنظمة مراقبة الجودة.",
          },
          {
            icon: Globe,
            title: "شبكة عالمية",
            description:
              "شبكة واسعة من الموردين والشركاء في جميع أنحاء العالم تضمن التوريد المستمر والأسعار التنافسية.",
          },
          {
            icon: Shield,
            title: "ضمان الجودة",
            description: "برنامج ضمان الجودة الشامل مع الاختبار الصارم والشهادة لكل شحنة منتج.",
          },
        ],
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/steel-hero.png"
            alt="Steel Factory Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent dark:from-black/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float opacity-60">
            <div className="w-6 h-6 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed opacity-40">
            <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float opacity-50">
            <div className="w-4 h-4 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-60 right-40 animate-pulse opacity-30">
            <div className="w-12 h-12 border-2 border-white rounded-full"></div>
          </div>
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Image
              src="/images/masre-logo.png"
              alt="MASRE GROUP Logo"
              width={140}
              height={140}
              className="mx-auto transition-all duration-700 hover:scale-110 drop-shadow-2xl"
            />
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-white drop-shadow-lg">{t.hero.title}</span>
            <br />
            <span className="bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] bg-clip-text text-transparent animate-gradient-x">
              {t.hero.subtitle}
            </span>
          </h1>

          <div
            className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto mb-8 rounded-full animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          ></div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-white font-light mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {t.hero.tagline}
          </p>

          <p
            className="text-base sm:text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            {t.hero.description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <Link href="/products" scroll={true}>
              <Button className="bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] hover:from-[#991B1B] hover:via-[#B91C1C] hover:to-[#DC2626] text-white px-10 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl font-semibold text-lg">
                {t.hero.exploreProducts} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" scroll={true}>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg transition-all duration-500 bg-transparent backdrop-blur-sm hover:shadow-2xl font-semibold text-lg"
              >
                {t.hero.contactUs}
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-500 backdrop-blur-sm"
            >
              {t.hero.watchVideo} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] mb-8 rounded-full"></div>
              <h3 className="text-xl font-semibold text-[#B91C1C] mb-6">{t.about.subtitle}</h3>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">{t.about.description}</p>

              <div className="space-y-4 mb-8">
                {t.about.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#B91C1C] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" scroll={true}>
                <Button className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] hover:from-[#991B1B] hover:to-[#B91C1C] text-white px-8 py-3 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg">
                  {t.about.learnMore} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <Image
                  src="/steel-factory-modern-facility.jpg"
                  alt="MASRE GROUP Facility"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Modern Steel Processing Facility</p>
                  <p className="text-sm opacity-90">Amman, Jordan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Counters */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C]/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-700 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6">
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-5xl font-bold text-[#B91C1C] mb-2 group-hover:scale-125 transition-transform duration-500 animate-counter">
                  {stat.number}
                </h3>
                <p className="text-gray-900 dark:text-white font-semibold text-lg mb-1">{stat.label}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in">{t.products.title}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 font-medium">
              {t.products.subtitle}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t.products.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {t.products.items.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 dark:bg-gray-900 border-2 hover:border-[#B91C1C]/30 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="w-full h-52 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-[#B91C1C] to-[#DC2626] text-white text-xs font-semibold px-3 py-1 shadow-lg">
                      {product.category}
                    </Badge>
                  </div>
                 
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#B91C1C] transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" scroll={true}>
              <Button className="bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] hover:from-[#991B1B] hover:via-[#B91C1C] hover:to-[#DC2626] text-white px-10 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold text-lg">
                {t.products.viewAll} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">Why Industry Leaders Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-110 transition-all duration-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#B91C1C] mb-2 group-hover:text-[#DC2626] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t.services.title}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.services.items.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-[#B91C1C]/30 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 group-hover:text-[#B91C1C] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>
                      {service.features && (
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-[#B91C1C]/30 text-[#B91C1C]">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.whyChooseUs.title}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              {t.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyChooseUs.reasons.map((reason, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 dark:bg-gray-800 border-2 hover:border-[#B91C1C]/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#B91C1C] to-[#DC2626] rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#B91C1C]">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Preview */}
      <section className="py-20 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#EF4444] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">{t.contact.title}</h2>
            <div className="w-32 h-1 bg-white mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl text-red-100 mb-6 font-medium">{t.contact.subtitle}</p>
            <p className="text-lg text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">{t.contact.description}</p>

            {/* Icons Row */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 backdrop-blur-sm">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{t.contact.phone}</h3>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/962790079442"
                    className="block text-red-100 hover:text-white transition-colors duration-300 text-lg font-medium"
                  >
                    +962 790 079442
                  </a>
                </div>
              </div>

              <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 backdrop-blur-sm">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{t.contact.email}</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:sales@masregroup.com"
                    className="block text-red-100 hover:text-white transition-colors duration-300 text-lg font-medium"
                  >
                    sales@masregroup.com
                  </a>
                </div>
              </div>

              <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 backdrop-blur-sm">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{t.contact.address}</h3>
                <p className="text-red-100 text-lg font-medium">
                  {language === "ar" ? "عمان، الأردن" : "Amman, Jordan"}
                </p>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link href="/contact" scroll={true}>
                <Button className="bg-white text-[#B91C1C] hover:bg-gray-100 px-10 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl font-semibold text-lg">
                  {t.contact.contactNow}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
