import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TestimonialCard } from "@/components/testimonial-card"
import ImagePrimary from "@/public/img/image01.jpg"
import ImageSecondary from "@/public/img/image02.jpg"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { FiPlusCircle } from "react-icons/fi"
import { Building2Icon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full">
          <Image
            src={ImagePrimary}
            alt="Diseño arquitectónico moderno"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-4xl text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transformando espacios, creando experiencias
            </h1>
            <p className="mt-6 max-w-2xl font-medium text-lg text-gray-200">
              Arquitectura innovadora y sostenible para el mundo de hoy y mañana
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="blueDark" size="lg" className="cursor-pointer">
                <Link href="/proyectos">Ver proyectos</Link>
                <FaRegArrowAltCircleRight className="ml-1" />
              </Button>
              <Button size="lg" variant="white" className="cursor-pointer">
                <Link href="/servicios">Servicios</Link>
                <MdOutlineHomeRepairService className="ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={ImageSecondary}
              alt="Estudio de arquitectura"
              width={1600}
              height={800}
              className="w-full object-cover h-[70vh] brightness-[0.5]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center ">
              <div className="max-w-3xl text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Sobre el estudio</h2>
                <p className="mt-6 font-medium text-sm sm:text-xl">
                  Fundado en 2015, nuestro estudio de arquitectura se especializa en diseños innovadores y sostenibles
                  que transforman espacios y mejoran la vida de las personas.
                </p>
                <p className="mt-4 font-medium text-sm md:text-xl">
                  Combinamos la estética contemporánea con la funcionalidad práctica, creando edificios y espacios que
                  resisten el paso del tiempo y respetan el entorno natural.
                </p>
                <div className="mt-8">
                  <Button variant="blueDark" className="">
                    <Link href="/about">Conocer más sobre nosotros</Link>
                    <Building2Icon className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className=" py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proyectos destacados</h2>
              <p className="mt-4 text-muted-foreground">
                Explora nuestra selección de proyectos innovadores y sostenibles
              </p>
            </div>

            <Tabs defaultValue="todos" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="residencial">Residencial</TabsTrigger>
                  <TabsTrigger value="comercial">Comercial</TabsTrigger>
                  <TabsTrigger value="publico">Público</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="todos" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Casa Horizonte"
                    category="Residencial"
                    image="/img/image03.jpg"
                    href="/proyectos/casa-horizonte"
                  />
                  <ProjectCard
                    title="Oficinas Nexus"
                    category="Comercial"
                    image="/img/image03.jpg"
                    href="/proyectos/oficinas-nexus"
                  />
                  <ProjectCard
                    title="Biblioteca Municipal"
                    category="Público"
                    image="/img/image03.jpg"
                    href="/proyectos/biblioteca-municipal"
                  />
                  <ProjectCard
                    title="Residencia Mirador"
                    category="Residencial"
                    image="/img/image03.jpg"
                    href="/proyectos/residencia-mirador"
                  />
                  <ProjectCard
                    title="Centro Comercial Avenida"
                    category="Comercial"
                    image="/img/image03.jpg"
                    href="/proyectos/centro-comercial-avenida"
                  />
                  <ProjectCard
                    title="Parque Urbano Central"
                    category="Público"
                    image="/img/image03.jpg"
                    href="/proyectos/parque-urbano-central"
                  />
                </div>
              </TabsContent>
              <TabsContent value="residencial" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Casa Horizonte"
                    category="Residencial"
                    image="/img/image03.jpg"
                    href="/proyectos/casa-horizonte"
                  />
                  <ProjectCard
                    title="Residencia Mirador"
                    category="Residencial"
                    image="/img/image03.jpg"
                    href="/proyectos/residencia-mirador"
                  />
                  <ProjectCard
                    title="Villa Moderna"
                    category="Residencial"
                    image="/img/image03.jpg"
                    href="/proyectos/villa-moderna"
                  />
                </div>
              </TabsContent>
              <TabsContent value="comercial" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Oficinas Nexus"
                    category="Comercial"
                    image="/img/image03.jpg"
                    href="/proyectos/oficinas-nexus"
                  />
                  <ProjectCard
                    title="Centro Comercial Avenida"
                    category="Comercial"
                    image="/img/image03.jpg"
                    href="/proyectos/centro-comercial-avenida"
                  />
                </div>
              </TabsContent>
              <TabsContent value="publico" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Biblioteca Municipal"
                    category="Público"
                    image="/img/image03.jpg"
                    href="/proyectos/biblioteca-municipal"
                  />
                  <ProjectCard
                    title="Parque Urbano Central"
                    category="Público"
                    image="/img/image03.jpg"
                    href="/proyectos/parque-urbano-central"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button variant="blueDark">
                <FiPlusCircle className="mr-1" />
                <Link href="/proyectos">Ver todos los proyectos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestros servicios</h2>
            <p className="mt-4 text-muted-foreground">
              Ofrecemos soluciones arquitectónicas completas para cada etapa de tu proyecto
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg shadow-gray-400">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Diseño arquitectónico</h3>
                <p className="text-muted-foreground">
                  Creamos diseños innovadores y funcionales que reflejan la visión y necesidades de nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-gray-400">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Planificación urbana</h3>
                <p className="text-muted-foreground">
                  Desarrollamos planes maestros y estrategias urbanas que mejoran la calidad de vida en las ciudades.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-gray-400">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Arquitectura sostenible</h3>
                <p className="text-muted-foreground">
                  Implementamos soluciones ecológicas y eficientes que minimizan el impacto ambiental de los edificios.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-gray-400">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                    <rect width="7" height="5" x="7" y="7" rx="1" />
                    <rect width="7" height="5" x="10" y="12" rx="1" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Diseño de interiores</h3>
                <p className="text-muted-foreground">
                  Creamos espacios interiores funcionales y estéticos que reflejan la personalidad de nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-gray-400">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Consultoría técnica</h3>
                <p className="text-muted-foreground">
                  Ofrecemos asesoramiento experto en normativas, materiales y técnicas constructivas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg shadow-gray-400">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" x2="6" y1="1" y2="4" />
                    <line x1="10" x2="10" y1="1" y2="4" />
                    <line x1="14" x2="14" y1="1" y2="4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Dirección de obra</h3>
                <p className="text-muted-foreground">
                  Supervisamos la ejecución de los proyectos para garantizar la calidad y el cumplimiento de los plazos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen nuestros clientes</h2>
              <p className="mt-4 text-muted-foreground">
                Testimonios de quienes han confiado en nuestro estudio para sus proyectos
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <TestimonialCard
                quote="El equipo entendió perfectamente nuestra visión y la transformó en un diseño que superó todas nuestras expectativas."
                author="Carlos Méndez"
                role="Cliente residencial"
                avatar="/img/user1.jpg"
              />
              <TestimonialCard
                quote="La atención al detalle y el compromiso con la sostenibilidad fueron factores decisivos para elegir este estudio."
                author="Laura Sánchez"
                role="Directora de proyectos"
                avatar="/img/user3.jpg"
              />
              <TestimonialCard
                quote="Lograron transformar un espacio complicado en una oficina moderna y funcional que refleja perfectamente nuestra marca."
                author="Miguel Torres"
                role="CEO, Innovatech"
                avatar="/img/user2.jpg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}