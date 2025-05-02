"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import ImageTen from "@/public/img/image10.jpg"
import { PrivacyPolicyDialog } from "@/components/PrivacityPolicyDialog"

export default function ContactoPage() {
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={ImageTen}
            alt="Contacta con nosotros"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 flex flex-col text-white items-center justify-center px-4 text-center">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contacta con nosotros
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium">Estamos aquí para ayudarte a dar vida a tu proyecto</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 text-muted-foreground">
                Ya sea que tengas un proyecto en mente o simplemente quieras obtener más información sobre nuestros
                servicios, estamos aquí para ayudarte. Contáctanos para programar una consulta inicial.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="mt-1 text-muted-foreground">Calle Las Dalias Mz M1 Lote 61, Lima, Perú</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="mt-1 text-muted-foreground">+51 987654321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="mt-1 text-muted-foreground">mwtrazo@estudioarquitectura.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium">Horario de atención</h3>
                <p className="mt-2 text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Sábados: 10:00 - 14:00 (con cita previa)</p>
              </div>

              <div className="mt-8 h-64 overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15611.240687694519!2d-77.09098035!3d-11.987633299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf9c6c8ad501%3A0xf04a0702c5a9fb93!2sProcesos%20tratamiento%20de%20aguas!5e0!3m2!1ses-419!2spe!4v1746222883671!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="rounded-xl bg-muted/50 p-6 md:p-8">
              <h3 className="mb-6 text-xl font-medium">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Ej. Juan Perez"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tucorreo@email.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+51 987654321"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="project-type"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    id="project-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="1" disabled>Selecciona el tipo de proyecto</option>
                    <option value="2">Residencial</option>
                    <option value="3">Comercial</option>
                    <option value="4">Urbano</option>
                    <option value="5">Diseño de interiores</option>
                    <option value="6">Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-auto"
                    placeholder="Cuéntanos sobre tu proyecto"
                  />
                </div>
                {/* <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground inline-flex items-center gap-1">
                    Acepto la<PrivacyPolicyDialog />y el tratamiento de mis datos personales.
                  </label>
                </div> */}
                <div className="flex items-start gap-2"> {/* Cambiado a items-start para mejor alineación vertical */}
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-primary focus:ring-primary" 
                  />
                  <label htmlFor="privacy" className="text-xs sm:text-sm text-muted-foreground inline-flex flex-wrap items-center gap-1 leading-tight">
                    Acepto la
                    <PrivacyPolicyDialog />
                    y el tratamiento de mis datos personales.
                  </label>
                </div>
                <Button variant="blueDark" type="submit" className="w-full cursor-pointer">
                  Enviar mensaje
                  <SendIcon className="ml-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
            <div className="mx-auto max-w-3xl divide-y">
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Cuál es el proceso para iniciar un proyecto con nosotros?</h3>
                <p className="mt-2 text-muted-foreground">
                  El proceso comienza con una consulta inicial donde discutimos tus necesidades y visión. Luego,
                  desarrollamos un concepto preliminar, seguido de un diseño detallado y, finalmente, la implementación
                  del proyecto.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Cuánto tiempo lleva completar un proyecto?</h3>
                <p className="mt-2 text-muted-foreground">
                  El tiempo varía según la complejidad y escala del proyecto. Un proyecto residencial pequeño puede
                  llevar de 3 a 6 meses, mientras que proyectos más grandes pueden extenderse a 1-2 años o más.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Trabajas en proyectos fuera de nuestra ciudad?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, trabajamos en proyectos nacionales. Utilizamos tecnología para colaborar a
                  distancia y realizamos visitas periódicas al sitio cuando es necesario.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Cuáles son nuestras tarifas?</h3>
                <p className="mt-2 text-muted-foreground">
                  Nuestras tarifas varían según el alcance y complejidad del proyecto. Ofrecemos diferentes paquetes de
                  servicios y también podemos crear propuestas personalizadas. Contáctanos para obtener un presupuesto
                  detallado.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Ofrecen servicios de diseño de interiores?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, ofrecemos servicios completos de diseño de interiores, ya sea como parte de un proyecto
                  arquitectónico integral o como un servicio independiente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
