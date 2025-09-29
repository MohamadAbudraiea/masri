"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
  language: "en" | "ar"
  toggleLanguage: () => void
}

export default function Navbar({ darkMode, toggleDarkMode, language, toggleLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = {
    en: [
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "About Us", href: "/about" },
      { name: "Factory", href: "/factory" },
      { name: "Contact Us", href: "/contact" },
    ],
    ar: [
      { name: "الرئيسية", href: "/" },
      { name: "المنتجات", href: "/products" },
      { name: "من نحن", href: "/about" },
      { name: "المصنع", href: "/factory" },
      { name: "اتصل بنا", href: "/contact" },
    ],
  }

  return (
    <nav dir="ltr"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        darkMode ? "bg-gray-900/95 backdrop-blur-md" : "bg-white/95 backdrop-blur-md"
      } shadow-lg border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/images/masre-logo.png"
              alt="MASRE GROUP Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              {"MASRE GROUP"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center ${language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"}`}
          >
            {navItems[language].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#B91C1C] relative group ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } ${language === "ar" ? "px-2" : ""}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B91C1C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`transition-all duration-300 hover:bg-[#B91C1C]/10 ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === "en" ? "العربية" : "English"}
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className={`transition-all duration-300 hover:bg-[#B91C1C]/10 ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden py-4 ${darkMode ? "bg-gray-900" : "bg-white"} border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            } animate-slide-down`}
          >
            {navItems[language].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-[#B91C1C] hover:bg-[#B91C1C]/5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
