"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact <span className="text-[#B91C1C]">MASRE GROUP</span>
          </h1>
          <div className="w-24 h-1 bg-[#B91C1C] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for all your steel trading needs. We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+962 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <Button type="submit" className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white py-3">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a
                        href="https://wa.me/962790079422"
                        className="block text-gray-600 dark:text-gray-300 hover:text-[#B91C1C] transition-colors"
                      >
                        +962 79007 9422
                      </a>
                      
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Addresses</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:sales@masregroup.com"
                        className="block text-gray-600 dark:text-gray-300 hover:text-[#B91C1C] transition-colors"
                      >
                        sales@masregroup.com
                      </a>
                      
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Amman, Jordan
                      <br />
                      Middle East Regional Office
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B91C1C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                      <p>Friday: 8:00 AM - 12:00 PM</p>
                      <p>Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-8 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white">
              <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-red-100 mb-6">
                For urgent inquiries or immediate support, contact us directly via WhatsApp or phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-[#B91C1C] hover:bg-gray-100 flex-1"
                  onClick={() => window.open("https://wa.me/962790688222", "_blank")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#B91C1C] flex-1 bg-transparent"
                  onClick={() => (window.location.href = "mailto:mostafamasre@masregroup.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8 dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4">Find Us</h2>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#B91C1C] mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Interactive map coming soon
                    <br />
                    Amman, Jordan
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
