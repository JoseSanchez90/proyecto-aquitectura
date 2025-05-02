import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <span className="flex text-2xl font-extrabold tracking-tight text-blue-600">MW<p className="text-gray-500">TRAZO</p></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transformando espacios, creando experiencias. Arquitectura innovadora y sostenible para el mundo de hoy y
              mañana.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-col">
            <h3 className="mb-4 text-sm font-medium">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-primary">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Estudio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios/diseno-arquitectonico" className="text-muted-foreground hover:text-primary">
                  Diseño arquitectónico
                </Link>
              </li>
              <li>
                <Link href="/servicios/planificacion-urbana" className="text-muted-foreground hover:text-primary">
                  Planificación urbana
                </Link>
              </li>
              <li>
                <Link href="/servicios/arquitectura-sostenible" className="text-muted-foreground hover:text-primary">
                  Arquitectura sostenible
                </Link>
              </li>
              <li>
                <Link href="/servicios/diseno-interiores" className="text-muted-foreground hover:text-primary">
                  Diseño de interiores
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria-tecnica" className="text-muted-foreground hover:text-primary">
                  Consultoría técnica
                </Link>
              </li>
              <li>
                <Link href="/servicios/direccion-obra" className="text-muted-foreground hover:text-primary">
                  Dirección de obra
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Contacto</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">Calle Las Dalias Mz M1 Lote 61</p>
              <p className="text-sm text-muted-foreground">Lima, Perú</p>
              <p className="mt-2 text-sm text-muted-foreground">+51 987654321</p>
              <p className="text-sm text-muted-foreground">mwtrazo@estudioarquitectura.com</p>
            </address>
          </div>

        </div>
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MWTRAZO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
