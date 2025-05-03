"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRightIcon, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GrContact } from "react-icons/gr"
import { DialogTitle } from "@radix-ui/react-dialog"
import { MdEmail } from "react-icons/md"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Se ejecuta cuando cambia la URL

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 sm:px-10 w-full transition-all duration-300 ${
        isScrolled ? "sm:px-24 sm:py-1 bg-white/80 shadow backdrop-blur-sm dark:bg-gray-950/90" : "bg-transparent text-white sm:py-4"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center" scroll={false}>
          <span className="flex text-2xl font-extrabold tracking-tight text-blue-500">MW<p className={`transition-all duration-300 ${ isScrolled ? "text-black" : "text-white"}`}>TRAZO</p></span>
        </Link>

        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-800" scroll={false}>
            Inicio
          </Link>
          <Link href="/proyectos" className="text-sm font-medium transition-colors hover:text-blue-800" scroll={false}>
            Proyectos
          </Link>
          <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-blue-800" scroll={false}>
            Servicios
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-blue-800" scroll={false}>
            Estudio
          </Link>
          {/* <Link href="/blog" className="text-sm font-medium transition-colors hover:text-blue-700">
            Blog
          </Link> */}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="blueDark" asChild className="hidden md:inline-flex">
            <Link href="/contacto" scroll={false}>
              Contáctanos
              <MdEmail className="ml-1" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <DialogTitle>
                  <span className="sr-only">Abrir menú</span>
                </DialogTitle>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-10 py-10">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="flex items-center gap-2 text-lg font-medium transition-colors text-blue-800" scroll={false}>
                  <ArrowRightIcon />
                  Inicio
                </Link>
                <Link href="/proyectos" className="flex items-center gap-2 text-lg font-medium transition-colors text-blue-800" scroll={false}>
                  <ArrowRightIcon />
                  Proyectos
                </Link>
                <Link href="/servicios" className="flex items-center gap-2 text-lg font-medium transition-colors text-blue-800" scroll={false}>
                  <ArrowRightIcon />
                  Servicios
                </Link>
                <Link href="/about" className="flex items-center gap-2 text-lg font-medium transition-colors text-blue-800" scroll={false}>
                  <ArrowRightIcon />
                  Estudio
                </Link>
                {/* <Link href="/blog" className="flex items-center gap-2 text-lg font-medium transition-colors text-blue-800" scroll={false}>
                  <ArrowRightIcon />
                  Blog
                </Link> */}

                <Link href="/contacto" scroll={false}>
                  <Button variant="blueDark" className="mt-4 flex">
                      Contáctanos
                    <GrContact className="ml-1" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
