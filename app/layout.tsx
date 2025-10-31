import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Servicios Verdes | Mantenimiento de Césped y Espacios Verdes",
  description: "Servicios Verdes es una empresa dedicada al mantenimiento de césped, parques y espacios verdes. Ofrecemos soluciones profesionales en jardinería, paisajismo y cuidado del entorno.",
  generator: "v0.dev"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'