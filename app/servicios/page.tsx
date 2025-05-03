import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowRightIcon, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ImageEight from "@/public/img/image08.webp"
import ImageEleven from "@/public/img/image11.webp"

export default function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={ImageEleven}
            alt="Servicios de arquitectura"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Nuestros servicios</h1>
            <p className="mt-6 max-w-2xl text-lg font-medium">
              Soluciones arquitectónicas completas para cada etapa de tu proyecto
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container mx-auto px-16 py-16">
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
                {/* <Button variant="link" className="mt-4">
                  <Link href="/servicios/diseno-arquitectonico">
                     Más información   
                  </Link>
                   <ArrowRight className="ml-1 h-4 w-4" />
                 </Button> */}
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
                {/* <Button variant="link" className="mt-4">
                  <Link href="/servicios/planificacion-urbana">
                    Más información 
                  </Link>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button> */}
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
                {/* <Button variant="link" className="mt-4">
                  <Link href="/servicios/arquitectura-sostenible">
                    Más información 
                  </Link>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button> */}
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
                {/* <Button variant="link" className="mt-4">
                  <Link href="/servicios/diseno-interiores">
                    Más información 
                  </Link>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button> */}
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
                {/* <Button variant="link" className="mt-4">
                  <Link href="/servicios/consultoria-tecnica">
                    Más información 
                  </Link>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button> */}
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
                {/* <Button variant="link" className="mt-4">
                  <Link href="/servicios/direccion-obra">
                    Más información 
                  </Link>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Service */}
        <section className="bg-blue-100 px-20 py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Arquitectura sostenible</h2>
                <p className="mt-6 text-sm sm:text-lg">
                  En <strong>MWTRAZO</strong>, la sostenibilidad no es solo una tendencia, sino un compromiso fundamental en todos
                  nuestros proyectos. Nuestro enfoque de arquitectura sostenible integra consideraciones ambientales,
                  sociales y económicas para diseñar proyectos que sean respetuosos con el planeta y proporcionen espacios
                  saludables para sus ocupantes.
                </p>
                <ul className="mt-6 space-y-2 text-sm sm:text-lg">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Diseño bioclimático adaptado al entorno</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Sistemas de energía renovable integrados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Gestión eficiente del agua</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Materiales ecológicos y de bajo impacto ambiental</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Certificaciones LEED, BREEAM y Passivhaus</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button variant="blueDark" className="cursor-pointer">
                    <Link href="/servicios/arquitectura-sostenible" scroll={false}>
                      Más información 
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden shadow rounded-lg md:aspect-auto md:h-full">
                <Image
                  src={ImageEight}
                  alt="Arquitectura sostenible"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestros paquetes de servicios
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col shadow-lg shadow-gray-400">
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">Básico</h3>
                <div className="mt-4 text-3xl font-bold">S/ 2,500</div>
                <p className="mt-2 text-sm text-muted-foreground">Precio base para proyectos residenciales pequeños</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Diseño conceptual</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Planos básicos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Visualización 3D (1 render)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>1 revisión de diseño</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button variant="blueDark" className="w-full cursor-pointer">
                    <Link href="/contacto" scroll={false}>Solicitar presupuesto</Link>
                    <ArrowRightIcon className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col border-primary shadow-lg shadow-gray-400">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Recomendado
                </div>
                <h3 className="text-xl font-bold">Estándar</h3>
                <div className="mt-4 text-3xl font-bold">S/ 4,000</div>
                <p className="mt-2 text-sm text-muted-foreground">Para proyectos residenciales medianos</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Todo lo del paquete Básico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Planos detallados de construcción</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Visualización 3D (3 renders)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Diseño de interiores básico</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>2 revisiones de diseño</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button variant="blueDark" className="w-full cursor-pointer">
                    <Link href="/contacto" scroll={false}>Solicitar presupuesto</Link>
                    <ArrowRightIcon className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col shadow-lg shadow-gray-400">
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="mt-4 text-3xl font-bold">S/ 7,500</div>
                <p className="mt-2 text-sm text-muted-foreground">Para proyectos grandes y complejos</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Todo lo del paquete Estándar</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Diseño de interiores completo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Visualización 3D (5+ renders)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Recorrido virtual 3D</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Dirección de obra</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Revisiones ilimitadas</span>
                  </li>
                </ul>
                <div className="mt-auto pt-6">
                  <Button variant="blueDark" className="w-full cursor-pointer">
                    <Link href="/contacto" scroll={false}>Solicitar presupuesto</Link>
                    <ArrowRightIcon className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
