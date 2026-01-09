import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageCircle } from "lucide-react"

const planIncludes = [
  "Todo lo del Plan Básico",
  "Hasta 6 secciones optimizadas",
  "Copywriting básico profesional",
  "Integración WhatsApp Business",
  "Optimización de velocidad",
  "SEO básico implementado",
  "Formulario con validaciones",
  "1 ronda de cambios",
  "Soporte 30 días",
]

export function Pricing() {
  return (
    <section className="bg-muted/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl mb-4">Inversión transparente</h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Un precio justo por un servicio profesional que impulsa tu negocio
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="border-2 border-accent shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  Plan Recomendado
                </span>
              </div>
              <CardTitle className="text-3xl mb-2">Plan Estándar – Conversión</CardTitle>
              <CardDescription className="text-base">
                Ideal para negocios que ya venden y quieren captar leads
              </CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold">$800.000</span>
                <span className="text-xl text-muted-foreground"> COP</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                {planIncludes.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-8">
              <Button size="lg" className="w-full gap-2">
                <MessageCircle className="h-5 w-5" />
                Consultar por WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="w-full bg-transparent">
                Solicitar Propuesta
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
