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
    Contácta <span className="text-[#6B9F3E]">Nosotros</span>
  </h2>
  <div className="w-16 h-1 bg-[#6B9F3E] mx-auto mb-6"></div>
  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    Ofrecemos servicios de poda y mantenimiento para empresas, instituciones y grandes predios.
Ponete en contacto con nosotros para coordinar una evaluación y presupuesto sin compromiso.
  </p>
</div>


{/* Grid de Contenido */}
<div className="grid md:grid-cols-3 gap-8 mb-16">
  {/* Tarjetas de Información de Contacto */}
  <div className="space-y-6">
    {/* Tarjeta Teléfono */}
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#6B9F3E] p-3 rounded-lg">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
          <p className="text-gray-600">+54 291 339-5556</p>
          <p className="text-sm text-gray-500 mt-2">Disponible de 9AM a 6PM, Lunes a Viernes</p>
        </div>
      </div>
    </div>

    {/* Tarjeta Email */}
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#6B9F3E] p-3 rounded-lg">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Correo</h3>
          <p className="text-gray-600 break-all">info@serviciosverdes.com.ar</p>
          <p className="text-sm text-gray-500 mt-2">Respondemos dentro de 24 horas</p>
        </div>
      </div>
    </div>

    {/* Tarjeta Ubicación */}
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#6B9F3E] p-3 rounded-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
      <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
<p className="text-gray-600">Atendemos Bahía Blanca y alrededores</p>
<p className="text-sm text-gray-500 mt-2">Provincia de Buenos Aires, Argentina</p>

        </div>
      </div>
    </div>
  </div>

  <div className="md:col-span-2">
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            Nombre Completo
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Juan Pérez"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#6B9F3E] focus:ring-[#6B9F3E]/20 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Correo Electrónico
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="juan@ejemplo.com"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#6B9F3E] focus:ring-[#6B9F3E]/20 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
          Teléfono
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
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tus necesidades de mantenimiento de césped..."
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
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  </div>
</div>

{/* Sección CTA */}
<div className="bg-gradient-to-r from-[#6B9F3E] to-[#5a8931] rounded-lg p-8 md:p-12 text-center">
  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Obtén tu Cotización Gratis Hoy</h3>
  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
    Solicita una consulta sin compromiso y descubre cómo Green Goat puede transformar tu espacio exterior con soluciones de mantenimiento de césped ecológicas.
  </p>
  <Button className="bg-white text-[#6B9F3E] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors">
    Solicitar Cotización
  </Button>
</div>

      </div>
    </section>
  )
}
