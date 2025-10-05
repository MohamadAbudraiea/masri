"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

interface FooterProps {
  language: "en" | "ar"
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      company: "MASRE GROUP",
      tagline: "Premium Steel Trading Excellence",
      rights: "© 2025 MASRE GROUP. All rights reserved.",
      developer: "Developed by Mohamad Abudraiea",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      followUs: "Connect With Us",
      sections: [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About Us", href: "/about" },
        { name: "Factory", href: "/factory" },
        { name: "Contact Us", href: "/contact" },
      ],
      contactInfo: {
        phone: "Phone",
        email: "Email",
        address: "Address",
        location: "Amman, Jordan",
      },
      description:
        "Leading steel trading company in the Middle East, providing premium quality steel products and exceptional service to clients worldwide since 2010.",
    },
    ar: {
      company: "مجموعة مصري",
      tagline: "التميز في تجارة الصلب الممتازة",
      rights: "© 2025 مجموعة مصري. جميع الحقوق محفوظة.",
      developer: "Developed by Mohamad Abudraiea",
      quickLinks: "روابط سريعة",
      contact: "معلومات الاتصال",
      followUs: "تواصل معنا",
      sections: [
        { name: "الرئيسية", href: "/" },
        { name: "المنتجات", href: "/products" },
        { name: "من نحن", href: "/about" },
        { name: "المصنع", href: "/factory" },
        { name: "اتصل بنا", href: "/contact" },
      ],
      contactInfo: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        location: "عمان، الأردن",
      },
      description:
        "شركة رائدة في تجارة الصلب في الشرق الأوسط، نقدم منتجات الصلب عالية الجودة وخدمة استثنائية للعملاء في جميع أنحاء العالم منذ عام 2010.",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/masre-logo.png"
                alt="MASRE GROUP Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{t.company}</h3>
                <p className="text-[#B91C1C] text-sm">{t.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">{t.description}</p>

            {/* QR Codes */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="w-40 h-40  rounded-lg p-2 mb-2">
                  <Image
                    src="/whatsapp-qr.jpg"
                    alt="WhatsApp QR Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-400">WhatsApp</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40  rounded-lg p-2 mb-2">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="WeChat QR Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-400">WeChat</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {t.sections.map((section) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    className="text-gray-300 hover:text-[#B91C1C] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#B91C1C] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B91C1C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-200 mb-1">{t.contactInfo.phone}</p>
                  <a
                    href="https://wa.me/962790079442"
                    className="text-gray-300 hover:text-[#B91C1C] transition-colors text-sm block"
                  >
                    +962 790 079 442
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B91C1C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-200 mb-1">{t.contactInfo.email}</p>
                  <a
                    href="mailto:sales@masregroup.com"
                    className="text-gray-300 hover:text-[#B91C1C] transition-colors text-sm block"
                  >
                    sales@masregroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B91C1C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-200 mb-1">{t.contactInfo.address}</p>
                  <p className="text-gray-300 text-sm">{t.contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-medium">{t.rights}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>Global Steel Trading Excellence</span>
              </div>
              <a href="https://abudraiea-profile.vercel.app/" target="_blank"
  rel="noopener noreferrer"  className="text-gray-500 hover:text-gray-400 transition-colors text-xs">
                {t.developer}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
