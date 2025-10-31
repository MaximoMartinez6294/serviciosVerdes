"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Github, Linkedin, Instagram, ExternalLink, Code, Layers, Star } from "lucide-react"

const socialLinks = [
  {
    href: "https://github.com/MaximoMartinez6294",
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/maximomartinezz/",
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
  },
]

const frontendSkills = ["React", "React Native", "Next.js", "TypeScript", "JavaScript", "Swift", "Ruby", "Python", "Java", "Node.js", "Express", "API REST", "GraphQL", "PostgreSQL", "MySQL", "Docker"]

const stats = [
  { value: "4+", label: "Años de Experiencia" },
  { value: "10+", label: "Proyectos Completados" },
]

export function AboutSection() {
  const [imageHovered, setImageHovered] = useState(false)

  const handleDownloadCV = () => {
    window.open("/Cv Maximo Martinez-Es.pdf", "_blank")
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black">
      <div className="container max-w-[1100px] px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-1 mb-8 sm:mb-12 md:mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-orange-500/80">Perfil</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">Sobre Mí</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2"
          >
            <div
              className="aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full max-w-[300px] sm:max-w-[350px] mx-auto md:max-w-none overflow-hidden relative group cursor-pointer rounded-2xl"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="absolute inset-0 border border-neutral-800 group-hover:border-orange-500/20 transition-colors duration-500 z-20 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-bl-2xl"></div>
              <div className="absolute inset-0 bg-[#111] rounded-2xl">
                <Image
                  src="/Foto-Ejemplo.jpeg"
                  alt="Maximo Martinez"
                  width={500}
                  height={625}
                  className={`object-cover w-full h-full transform transition-transform duration-1000 rounded-2xl ${
                    imageHovered ? "scale-[1.03]" : "scale-100"
                  }`}
                  priority
                />
              </div>
            </div>

            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  aria-label={link.label}
                  className="flex-shrink-0"
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-md border-neutral-900 bg-black text-orange-500 h-9 w-9 transition-all duration-300 hover:bg-[#151515] hover:shadow-[0_0_10px_rgba(249,115,22,0.07)]"
                  >
                    {link.icon}
                  </Button>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4 sm:space-y-6 md:space-y-8 md:col-span-3"
          >
        <div className="text-center md:text-left">
  <div className="inline-flex items-center gap-2 mb-2">
    <Code className="h-4 w-4 text-orange-500" />
    <span className="text-xs uppercase tracking-widest text-orange-500">Full Stack Developer</span>
  </div>
  <h3 className="text-xl sm:text-2xl font-medium text-white">Máximo Martínez</h3>
  <p className="text-sm text-neutral-400 mt-1">
    Especializado en desarrollo full stack con experiencia en aplicaciones móviles, CRM y sistemas BI
  </p>
</div>

<div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
  <p>
    Desarrollador full stack con experiencia en{' '}
    <a 
      href="https://www.infinitedev.dev/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-orange-500 hover:underline"
    >
      Infinite Dev
    </a>, donde participé en múltiples proyectos de software, 
    tanto en front-end como back-end, con enfoque en aplicaciones móviles y sistemas CRM/BI. 
    Especializado en React, React Native, Node.js y TypeScript.
  </p>
  <p>
    Durante mi tiempo en la consultora, trabajé en el desarrollo de aplicaciones como Rigthe (GPS avanzado para golf), 
    Hortaria (sistema de gestión hidropónica) y Visco (CRM y BI para laboratorio óptico), integrando funcionalidades 
    como geolocalización, sincronización cruzada y paneles de business intelligence, entre otros.
  </p>
  <p>
    Mi objetivo es crear productos digitales innovadores que ofrezcan soluciones prácticas a través de la tecnología, 
    escribiendo código limpio, mantenible y optimizado para el rendimiento.
  </p>
</div>


            {/* Formación */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3 mt-4">
                <Layers className="h-4 w-4 text-orange-500" />
                <span className="text-xs uppercase tracking-widest text-orange-500">Formación</span>
              </div>
              <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
                
                <div className="border border-neutral-800 bg-[#111] rounded-lg p-3">
                  <p className="font-medium text-white">Ciencias de la Computación</p>
                  <p className="text-xs text-neutral-400">Universidad Nacional del Sur - En curso</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="h-4 w-4 text-orange-500" />
                <span className="text-xs uppercase tracking-widest text-orange-500">Tecnologías principales</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(249, 115, 22, 0.1)",
                      borderColor: "rgba(249, 115, 22, 0.3)",
                      color: "#fff",
                    }}
                    transition={{ duration: 0.2 }}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#111] border border-neutral-800 rounded-md text-xs font-medium text-neutral-300 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-[#111] border-0 overflow-hidden relative group rounded-xl">
                  <CardContent className="p-3 sm:p-4 relative z-10">
                    <p className="text-lg sm:text-xl md:text-2xl font-medium text-white group-hover:text-orange-500/90 transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download CV */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="w-full sm:w-auto">
                <Button
                  onClick={handleDownloadCV}
                  className="rounded-md h-9 px-4 bg-orange-500 text-white text-xs font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] w-full sm:w-auto"
                >
                  <Download className="h-3.5 w-3.5 mr-2" />
                  Descargar CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <div className="flex items-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500/30"></div>
            <Star className="h-3 w-3 text-orange-500/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
