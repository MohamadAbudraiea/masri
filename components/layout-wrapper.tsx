"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "./navbar"
import Footer from "./footer"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")

  useEffect(() => {
    // Load preferences from localStorage
    const savedDarkMode = localStorage.getItem("darkMode")
    const savedLanguage = localStorage.getItem("language")

    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode))
    if (savedLanguage) setLanguage(savedLanguage as "en" | "ar")
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode))
  }

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <div className={`${darkMode ? "dark" : ""} ${language === "ar" ? "rtl" : "ltr"}`}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <main className="pt-16">{children}</main>
        <Footer language={language} />
      </div>
    </div>
  )
}
