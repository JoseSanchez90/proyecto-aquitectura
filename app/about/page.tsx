import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import user3 from "@/public/img/user3.webp"
import user2 from "@/public/img/user2.webp"
import studio from "@/public/img/image09.webp"
import mwLogo from "@/public/img/mwlogo.webp"
import { ArrowRightIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={studio}
            alt="Nuestro estudio de arquitectura"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 flex flex-col text-white items-center justify-center px-4 text-center">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Nuestro estudio</h1>
            <p className="mt-6 max-w-2xl text-lg font-medium">
              Conoce nuestra historia, filosofía y el equipo detrás de <strong className="text-blue-500">MW</strong><strong>TRAZO</strong>
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestra historia</h2>
              <p className="mt-6 text-sm sm:text-xl">
                Fundado en 2015 por un grupo de arquitectos apasionados,<strong className="text-blue-600"> MW</strong><strong>TRAZO</strong> nació con la visión de crear espacios
                que transformaran positivamente la vida de las personas y respetaran el entorno natural.
              </p>
              <p className="mt-4 text-sm sm:text-xl">
                Lo que comenzó como un pequeño estudio con proyectos residenciales, ha crecido hasta convertirse en una
                firma reconocida con proyectos en diversos sectores: residencial, comercial, cultural y urbano.
              </p>
              <p className="mt-4 text-sm sm:text-xl">
                A lo largo de nuestra trayectoria, hemos mantenido nuestro compromiso con la innovación, la
                sostenibilidad y la excelencia en el diseño, valores que siguen siendo el núcleo de nuestra identidad.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full">
              <Image
                src={mwLogo}
                alt="Historia del estudio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Nuestra filosofía</h2>
            <div className="grid gap-8 md:grid-cols-3">
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
                  <h3 className="mb-2 text-xl font-medium">Sostenibilidad</h3>
                  <p className="text-muted-foreground">
                    Creemos en la arquitectura que respeta y preserva el medio ambiente, utilizando recursos de manera
                    responsable y minimizando el impacto ecológico.
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
                      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                      <path d="m7 16.5-4.74-2.85" />
                      <path d="m7 16.5 5-3" />
                      <path d="M7 16.5v5.17" />
                      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                      <path d="m17 16.5-5-3" />
                      <path d="m17 16.5 4.74-2.85" />
                      <path d="M17 16.5v5.17" />
                      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                      <path d="M12 8 7.26 5.15" />
                      <path d="m12 8 4.74-2.85" />
                      <path d="M12 13.5V8" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Innovación</h3>
                  <p className="text-muted-foreground">
                    Exploramos constantemente nuevas ideas, tecnologías y métodos para crear soluciones arquitectónicas
                    que sean vanguardistas y funcionales.
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
                      <path d="M16.5 9.4 7.55 4.24" />
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Funcionalidad</h3>
                  <p className="text-muted-foreground">
                    Diseñamos espacios que no solo son estéticamente atractivos, sino que también responden eficazmente
                    a las necesidades y actividades de quienes los habitan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container rounded-xl mx-auto px-4 py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Nuestro equipo</h2>
          <div className="grid gap-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="grid justify-center text-center">
              <div className="mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={user2}
                  alt="Alexis Trujillo"
                  width={300}
                  height={300}
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Alexis Trujillo</h3>
              <p className="text-muted-foreground">Fundador y Director Creativo</p>
            </div>
            <div className="grid justify-center text-center">
              <div className="mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={user3}
                  alt="Laura Martínez"
                  width={300}
                  height={300}
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Laura Martínez</h3>
              <p className="text-muted-foreground">Directora de Proyectos</p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Reconocimientos</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-lg shadow-gray-400">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl font-bold text-primary">2024</div>
                  <h3 className="mb-2 text-xl font-medium">Premio Nacional de Arquitectura Sostenible</h3>
                  <p className="text-muted-foreground">
                    Por el proyecto "Casa Horizonte", reconocido por su innovación en eficiencia energética y uso de
                    materiales sostenibles.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg shadow-gray-400">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl font-bold text-primary">2023</div>
                  <h3 className="mb-2 text-xl font-medium">Mención de Honor en Bienal de Arquitectura</h3>
                  <p className="text-muted-foreground">
                    Por el diseño innovador del "Centro Cultural Metropolitano", destacando por su integración urbana.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg shadow-gray-400">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl font-bold text-primary">2022</div>
                  <h3 className="mb-2 text-xl font-medium">Premio a la Excelencia en Diseño Interior</h3>
                  <p className="text-muted-foreground">
                    Por el proyecto "Oficinas Nexus", reconocido por crear espacios de trabajo innovadores y saludables.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg shadow-gray-400">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl font-bold text-primary">2021</div>
                  <h3 className="mb-2 text-xl font-medium">Premio Joven Talento en Arquitectura</h3>
                  <p className="text-muted-foreground">
                    Otorgado a nuestra arquitecta Ana López por su contribución a proyectos residenciales sostenibles.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg shadow-gray-400">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl font-bold text-primary">2020</div>
                  <h3 className="mb-2 text-xl font-medium">Reconocimiento a la Innovación Urbana</h3>
                  <p className="text-muted-foreground">
                    Por el proyecto "Parque Urbano Central", destacando por su integración de tecnología y naturaleza.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg shadow-gray-400">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl font-bold text-primary">2018</div>
                  <h3 className="mb-2 text-xl font-medium">Premio a la Mejor Rehabilitación</h3>
                  <p className="text-muted-foreground">
                    Por la transformación del edificio histórico "Antigua Fábrica" en un espacio cultural moderno.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="rounded-2xl bg-blue-800 p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para dar vida a tu proyecto?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
              Nuestro equipo está preparado para transformar tus ideas en espacios excepcionales. Contáctanos hoy mismo
              para comenzar.
            </p>
            <Button variant="white" className="mt-6 cursror-pointer">
              <Link href="/contacto" scroll={false}>Contactar ahora</Link>
              <ArrowRightIcon className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}