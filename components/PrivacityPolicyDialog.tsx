"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer underline text-blue-600 hover:text-primary">
            política de privacidad
        </span>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Política de Privacidad de MWTRAZO</DialogTitle>
        </DialogHeader>
        
        <div className="prose prose-sm dark:prose-invert">
          <h3 className="font-medium">1. Información General</h3>
          <p>
            MWTRAZO (RUC: 9), con domicilio en [Dirección de tu empresa], 
            se compromete a proteger la privacidad de los usuarios de nuestro sitio web.
          </p>
            <br />
          <h3 className="font-medium">2. Datos Recopilados</h3>
          <p>
            Podemos recopilar información personal cuando:
          </p>
          <ul>
            <li>Nos contactas a través de formularios</li>
            <li>Solicitas nuestros servicios de arquitectura</li>
            <li>Te suscribes a nuestro boletín</li>
          </ul>
            <br />
          <h3 className="font-medium">3. Uso de la Información</h3>
          <p>
            La información recopilada se utiliza para:
          </p>
          <ul>
            <li>Proveer nuestros servicios de diseño arquitectónico</li>
            <li>Responder a consultas y solicitudes</li>
            <li>Mejorar nuestra oferta de servicios</li>
          </ul>
            <br />
          <h3 className="font-medium">4. Protección de Datos</h3>
          <p>
            Implementamos medidas de seguridad para proteger tus datos contra 
            accesos no autorizados o divulgación.
          </p>
            <br />
          <h3 className="font-medium">5. Derechos del Usuario</h3>
          <p>
            Tienes derecho a:
          </p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Solicitar la rectificación o eliminación</li>
            <li>Oponerte al tratamiento de tus datos</li>
          </ul>
            <br />
          <h3 className="font-medium">6. Cookies</h3>
          <p>
            Nuestro sitio utiliza cookies para mejorar la experiencia del usuario. 
            Puedes gestionarlas en la configuración de tu navegador.
          </p>
            <br />
          <h3 className="font-medium">7. Cambios en la Política</h3>
          <p>
            Nos reservamos el derecho de modificar esta política. 
            Las actualizaciones se publicarán en esta página.
          </p>
            <br />
          <h3 className="font-medium">8. Contacto</h3>
          <p>
            Para ejercer tus derechos o consultas sobre privacidad, 
            escríbenos a contacto@mwtrazo.com.
          </p>
            <br />
          <p className="text-sm text-muted-foreground mt-4">
            Última actualización: 02 de mayo del 2025
          </p>
        </div>

        <div className="mt-4 flex justify-end">
          <DialogTrigger asChild>
            <Button>Aceptar</Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  )
}