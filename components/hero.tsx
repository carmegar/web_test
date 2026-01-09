import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground w-fit">
              <Zap className="h-4 w-4" />
              Plan Estándar – Conversión
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transforma visitantes en clientes reales
            </h1>

            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Diseño web optimizado para conversión con copywriting profesional, integración con WhatsApp Business y SEO
              básico. Todo lo que necesitas para captar más leads y hacer crecer tu negocio.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Solicitar Ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Características
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">$800K</span>
                <span className="text-sm text-muted-foreground">COP</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">6</span>
                <span className="text-sm text-muted-foreground">Secciones optimizadas</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <img
                src="/modern-website-conversion-dashboard-with-analytics.jpg"
                alt="Dashboard de conversión"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-card p-6 shadow-xl border">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+150%</p>
                  <p className="text-sm text-muted-foreground">Conversión promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
