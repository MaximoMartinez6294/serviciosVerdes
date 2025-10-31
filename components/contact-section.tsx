"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Aquí irá la lógica de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 1000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact <span className="text-[#6B9F3E]">Us</span>
          </h2>
          <div className="w-16 h-1 bg-[#6B9F3E] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to transform your lawn? Get in touch with us today for a free quote and consultation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#6B9F3E] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(250) 339-2627</p>
                  <p className="text-sm text-gray-500 mt-2">Available 9AM - 6PM, Mon-Fri</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#6B9F3E] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 break-all">info@greengoatlawns.ca</p>
                  <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#6B9F3E] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Serving Greater Vancouver Area</p>
                  <p className="text-sm text-gray-500 mt-2">British Columbia, Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#6B9F3E] focus:ring-[#6B9F3E]/20 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#6B9F3E] focus:ring-[#6B9F3E]/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(250) 123-4567"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#6B9F3E] focus:ring-[#6B9F3E]/20 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your lawn care needs..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#6B9F3E] focus:ring-[#6B9F3E]/20 outline-none transition resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6B9F3E] hover:bg-[#5a8931] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#6B9F3E] to-[#5a8931] rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Your Free Quote Today</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Request a no-obligation consultation and discover how Green Goat can transform your outdoor space with
            eco-friendly lawn care solutions.
          </p>
          <Button className="bg-white text-[#6B9F3E] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
