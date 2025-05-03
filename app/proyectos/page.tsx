import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ImageFour from "@/public/img/image04.webp"
import ImageSix from "@/public/img/image06.webp"

export default function ProyectosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={ImageFour}
            alt="Proyectos arquitectónicos"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center font-medium text-white">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Nuestros proyectos</h1>
            <p className="mt-6 max-w-2xl text-lg">
              Descubre nuestra selección de proyectos innovadores y sostenibles
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="todos" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger className="cursor-pointer" value="todos">Todos</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="residencial">Residencial</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="comercial">Comercial</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="publico">Público</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="todos" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Casa Horizonte"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/casa-horizonte"
                />
                <ProjectCard
                  title="Oficinas Nexus"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/oficinas-nexus"
                />
                <ProjectCard
                  title="Biblioteca Municipal"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/biblioteca-municipal"
                />
                <ProjectCard
                  title="Residencia Mirador"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/residencia-mirador"
                />
                <ProjectCard
                  title="Centro Comercial Avenida"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/centro-comercial-avenida"
                />
                <ProjectCard
                  title="Parque Urbano Central"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/parque-urbano-central"
                />
                <ProjectCard
                  title="Villa Moderna"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/villa-moderna"
                />
                <ProjectCard
                  title="Torre Corporativa Elevate"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/torre-corporativa"
                />
                <ProjectCard
                  title="Museo de Arte Contemporáneo"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/museo-arte"
                />
              </div>
            </TabsContent>
            <TabsContent value="residencial" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Casa Horizonte"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/casa-horizonte"
                />
                <ProjectCard
                  title="Residencia Mirador"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/residencia-mirador"
                />
                <ProjectCard
                  title="Villa Moderna"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/villa-moderna"
                />
                <ProjectCard
                  title="Apartamentos Skyline"
                  category="Residencial"
                  image="/img/image05.webp"
                  href="/proyectos/apartamentos-skyline"
                />
              </div>
            </TabsContent>
            <TabsContent value="comercial" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Oficinas Nexus"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/oficinas-nexus"
                />
                <ProjectCard
                  title="Centro Comercial Avenida"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/centro-comercial-avenida"
                />
                <ProjectCard
                  title="Torre Corporativa Elevate"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/torre-corporativa"
                />
                <ProjectCard
                  title="Hotel Boutique Serenity"
                  category="Comercial"
                  image="/img/image05.webp"
                  href="/proyectos/hotel-boutique"
                />
              </div>
            </TabsContent>
            <TabsContent value="publico" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Biblioteca Municipal"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/biblioteca-municipal"
                />
                <ProjectCard
                  title="Parque Urbano Central"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/parque-urbano-central"
                />
                <ProjectCard
                  title="Museo de Arte Contemporáneo"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/museo-arte"
                />
                <ProjectCard
                  title="Centro Cultural Metropolitano"
                  category="Público"
                  image="/img/image05.webp"
                  href="/proyectos/centro-cultural"
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Featured Project */}
        <section className="bg-blue-100 py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Proyecto destacado</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full">
                <Image src={ImageSix} alt="Casa Horizonte" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Casa Horizonte</h3>
                <p className="mt-2 text-muted-foreground">Residencial | 2024</p>
                <p className="mt-6">
                  Casa Horizonte es una residencia de lujo ubicada en la costa, diseñada para maximizar las vistas al
                  océano y la luz natural. El proyecto incorpora principios de sostenibilidad y eficiencia energética,
                  con un diseño que se integra armoniosamente con el entorno natural.
                </p>
                <p className="mt-4">
                  La estructura utiliza materiales locales y técnicas de construcción que minimizan el impacto
                  ambiental. Los espacios interiores fluyen naturalmente hacia las terrazas exteriores, difuminando los
                  límites entre el interior y el exterior.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    Superficie: 450 m²
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    Ubicación: Costa del Sol, España
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    Año de finalización: 2024
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    Certificación energética: A+
                  </li>
                </ul>
                <div className="mt-8">
                  <Button variant="blueDark">
                    <Link href="/proyectos/casa-horizonte" scroll={false}>
                      Ver proyecto completo
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Nuestro proceso</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">01</span>
              </div>
              <h3 className="mt-4 text-xl font-medium">Consulta inicial</h3>
              <p className="mt-2 text-muted-foreground">
                Nos reunimos para entender tus necesidades, visión y objetivos para el proyecto.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">02</span>
              </div>
              <h3 className="mt-4 text-xl font-medium">Diseño conceptual</h3>
              <p className="mt-2 text-muted-foreground">
                Desarrollamos ideas preliminares y conceptos basados en tus requisitos y el contexto del proyecto.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">03</span>
              </div>
              <h3 className="mt-4 text-xl font-medium">Desarrollo del proyecto</h3>
              <p className="mt-2 text-muted-foreground">
                Refinamos el diseño, preparamos planos detallados y especificaciones técnicas.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">04</span>
              </div>
              <h3 className="mt-4 text-xl font-medium">Construcción y entrega</h3>
              <p className="mt-2 text-muted-foreground">
                Supervisamos la ejecución del proyecto para garantizar que se cumpla con la visión original.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
