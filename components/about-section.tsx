"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
const services = [
  {
    title: "Corte de Césped",
    description:
      "Corte de césped limpio, silencioso y sin emisiones. Utilizamos únicamente cortadoras eléctricas profesionales de batería para cuidar tu jardín y el medio ambiente.",
    image: "/mantenimiento.jpg",
  },
  {
    title: "Mantenimiento de Jardines",
    description:
      "Ofrecemos mantenimiento integral de jardines: desmalezado, bordeado, poda de flores, plantación y colocación de mulch.",
    image: "/cortecesped.jpg",
  },
  {
    title: "Poda y Recorte",
    description:
      "Recorte de arbustos y setos, poda de mantenimiento y formación de árboles pequeños.",
    image: "/cortasetos eléctrico.jpg",
  },
  {
    title: "Tratamientos para Césped",
    description:
      "Realizamos aireado, escarificado y aplicación de fertilizantes orgánicos o ecológicos. También aplicamos cal y enmiendas para mantener tu césped sano y fuerte.",
    image: "/tratamiento.jpg",
  },
 {
  title: "Poda de Árboles",
  description:
    "Realizamos poda de formación, mantenimiento o reducción de árboles, garantizando su salud y la seguridad del entorno. También retiramos ramas secas o peligrosas.",
  image: "/arboles.jpg",
},
{
  title: "Corte para Empresas y Predios",
  description:
    "Brindamos servicios de mantenimiento y corte de césped para empresas, instituciones y grandes predios. Garantizamos prolijidad, puntualidad y un entorno siempre presentable.",
  image: "/empresas.jpg",
},
];


export function AboutSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Nuestros <span className="text-[#6B9F3E]">Servicios</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-0">
                  {/* Service Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
