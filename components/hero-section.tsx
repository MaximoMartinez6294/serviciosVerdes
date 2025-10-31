"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/beautiful-green-lawn-with-curved-edge-and-driveway.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Welcome to Quiet, Clean, Emission-Free Lawn Care
            </h1>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <Link href="#quote">
              <Button
                size="lg"
                className="h-14 px-12 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#6B9F3E] transition-all duration-300 rounded-full"
              >
                Request Quote!
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
