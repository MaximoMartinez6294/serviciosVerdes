"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "CONTACT US", href: "#contact" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
  { name: "TESTIMONIALS", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "CAREERS", href: "#careers" },
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
    width={900}        // mucha resolución, ideal para pantallas grandes
    height={260}
    className="h-48 w-auto md:h-56 lg:h-64"  
    // móvil: 192px alto
    // mediano: 224px
    // grande: 256px
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

        {/* Search Button */}
        <button
          className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#6B9F3E] hover:bg-[#5A8533] transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-white" />
        </button>

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
                src="/green-goat-lawn-care-logo.jpg"
                alt="Green Goat Lawn Care Inc."
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <button onClick={() => setIsOpen(false)} className="text-[#6B9F3E]">
                <X className="w-6 h-6" />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
