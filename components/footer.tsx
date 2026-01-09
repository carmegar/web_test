import { MessageCircle, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Plan Estándar – Conversión</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Soluciones web profesionales para negocios que buscan crecer y captar más leads.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@tuempresa.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Diseño web profesional</li>
              <li>Optimización para conversión</li>
              <li>SEO básico</li>
              <li>Integración WhatsApp Business</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Plan Estándar – Conversión. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
