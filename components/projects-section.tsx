import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section Title */}
       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Acerca de <span className="text-[#6B9F3E]">Nuestra Empresa</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
        <div className="space-y-6">
  <h3 className="text-xl font-bold text-gray-800">
    ServiciosVerdes Inc., empresa familiar dedicada al cuidado de jardines desde 2018.
  </h3>

  <p className="text-gray-600 leading-relaxed">
    En ServiciosVerdes nos comprometemos a ofrecer un servicio profesional de alta calidad, cuidando tanto tu jardín como el medio ambiente.
  </p>

  <p className="text-gray-600 leading-relaxed">
    Utilizamos herramientas modernas y eléctricas que reducen significativamente la contaminación y el ruido en comparación con los equipos tradicionales a gas. Nuestro objetivo es mantener tu césped impecable de manera eficiente y sostenible.
  </p>

  <p className="text-gray-600 leading-relaxed">
    ServiciosVerdes está totalmente registrado y cuenta con seguro, garantizando tranquilidad y confianza a nuestros clientes.
  </p>
</div>


          {/* Right Column - Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[400px]">
            <Image
              src="/about.jpg"
              alt="Green Goat Lawn Care owner standing next to company van"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
