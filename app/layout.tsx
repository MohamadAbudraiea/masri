import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LayoutWrapper from "@/components/layout-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MASRE GROUP - Premium Steel Trading Company | Steel Products Jordan",
  description:
    "Leading steel trading company in Jordan & Middle East. Premium quality steel products, rebar, structural steel, pipes, sheets. ISO certified steel supplier since 2010. Contact us for steel trading solutions.",
  keywords: [
    "steel trading company",
    "steel products Jordan",
    "steel supplier Middle East",
    "rebar steel bars",
    "structural steel",
    "steel pipes",
    "steel sheets",
    "galvanized steel",
    "carbon steel",
    "steel fabrication",
    "construction steel",
    "industrial steel",
    "steel export import",
    "steel distributor",
    "steel manufacturer",
    "steel trading Jordan",
    "steel company Amman",
    "steel products supplier",
    "quality steel products",
    "ISO certified steel",
    "steel trading services",
    "steel industry Jordan",
    "steel business",
    "steel commerce",
    "steel materials",
    "steel solutions",
    "steel procurement",
    "steel sourcing",
    "steel logistics",
    "steel quality assurance",
    "steel standards",
    "steel specifications",
    "steel grades",
    "steel inventory",
    "steel warehouse",
    "steel delivery",
    "steel consultation",
    "steel expertise",
    "steel partnership",
    "steel investment",
    "steel market",
    "steel prices",
    "steel quotes",
    "steel orders",
    "steel contracts",
    "steel projects",
    "steel construction materials",
    "building steel",
    "infrastructure steel",
    "MASRE GROUP",
    "مجموعة مصري",
    "تجارة الصلب",
    "منتجات الصلب الأردن",
  ].join(", "),
  authors: [{ name: "MASRE GROUP" }],
  creator: "MASRE GROUP",
  publisher: "MASRE GROUP",
  robots: "index, follow",
  alternates: {
    canonical: "https://masregroup.com",
  },
  other: {
    "geo.region": "JO",
    "geo.placename": "Amman",
    "geo.position": "31.9454;35.9284",
    ICBM: "31.9454, 35.9284",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_JO",
    url: "https://masregroup.com",
    siteName: "MASRE GROUP",
    title: "MASRE GROUP - Premium Steel Trading Company",
    description:
      "Leading steel trading company in Jordan & Middle East. Premium quality steel products and exceptional service since 2010.",
    images: [
      {
        url: "/images/masre-logo.png",
        width: 1200,
        height: 630,
        alt: "MASRE GROUP - Steel Trading Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MASRE GROUP - Premium Steel Trading Company",
    description: "Leading steel trading company in Jordan & Middle East. Premium quality steel products since 2010.",
    images: ["/images/masre-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
