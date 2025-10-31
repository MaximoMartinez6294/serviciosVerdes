import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
<footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8">
  <div className="container mx-auto px-4 md:px-8">
    {/* Contenido Principal del Footer */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      {/* Columna Marca */}
      <div>
        <Image
          src="/Logo2.png"
          alt="Servicios Verdes Comp."
          width={300}
          height={120}
          style={{ marginBottom: '-100px', marginTop: '-120px' }}
          className="h-35 w-auto mb-4"
        />
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
          En Servicios Verdes estamos comprometidos a brindar los mejores servicios de césped y jardinería.
        </p>
      </div>

      {/* Columna Contacto */}
      <div>
        <h3 className="text-white font-semibold mb-6">Contáctanos</h3>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#6B9F3E] flex-shrink-0 mt-1" />
            <span>2175 McKenzie Ave, Comox, BC V9M 1M8</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-[#6B9F3E] flex-shrink-0 mt-1" />
            <a href="tel:(250)339-5556" className="hover:text-[#6B9F3E] transition-colors">
              (250) 339-5556
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#6B9F3E] flex-shrink-0 mt-1" />
            <a href="mailto:info@greengoatlawncare.ca" className="hover:text-[#6B9F3E] transition-colors">
              info@greengoatlawncare.ca
            </a>
          </div>
        </div>
      </div>

      {/* Columna Horarios */}
      <div>
        <h3 className="text-white font-semibold mb-6">Horarios</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Lunes - Sábado</span>
            <span>9:00 am - 5:00 pm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Domingo</span>
            <span className="text-[#6B9F3E]">Cerrado</span>
          </div>
        </div>
      </div>
    </div>

    {/* Barra Inferior */}
    <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Servicios Verdes. Todos los derechos reservados.
      </p>

      {/* Íconos Sociales */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-gray-400 hover:text-[#6B9F3E] transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#6B9F3E] transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#6B9F3E] transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}
