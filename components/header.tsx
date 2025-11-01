"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react" // 👈 Cambié Search por MessageCircle (ícono de WhatsApp)
import Image from "next/image"

const navItems = [
  { name: "CONTACTO", href: "#contact" },
  { name: "SERVICIOS", href: "#services" },
  { name: "NOSOTROS", href: "#about" },
  { name: "TESTIMONIOS", href: "#testimonials" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/Logo2.png"
            alt="ServiciosVerdes Inc."
            width={900}
            height={260}
            className="h-48 w-auto md:h-56 lg:h-64"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-[#6B9F3E] hover:text-[#5A8533] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/549291XXXXXXX" // 👈 poné tu número de WhatsApp con código de país
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-[#6B9F3E]">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white px-6 py-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/Logo2.png"
                alt="ServiciosVerdes Inc."
                width={900}
                height={100}
                className="h-32 w-auto"
                style={{ marginBottom: "-80px", marginTop: "-40px" }}
              />
              <button onClick={() => setIsOpen(false)} className="text-[#6B9F3E]">
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-[#6B9F3E] hover:text-[#5A8533] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* WhatsApp Link en móvil también */}
              <Link
                href="https://wa.me/549291XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#25D366] hover:text-[#1EBE5B] transition-colors mt-4"
              >
                WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
