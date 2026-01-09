import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    category: "Diseño y Estructura",
    items: [
      "Hasta 6 secciones optimizadas para conversión",
      "Diseño responsive en todos los dispositivos",
      "Copywriting básico ajustado para ventas",
    ],
  },
  {
    category: "Funcionalidades",
    items: [
      "Integración con WhatsApp Business",
      "Formulario de contacto con validaciones",
      "Optimización de velocidad básica",
    ],
  },
  {
    category: "SEO y Marketing",
    items: [
      "SEO básico (meta title y description)",
      "Estructura optimizada para buscadores",
      "Analytics básico incluido",
    ],
  },
  {
    category: "Soporte",
    items: ["1 ronda de cambios incluida", "Documentación básica", "Soporte durante 30 días"],
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Todo lo que incluye tu plan
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Características profesionales diseñadas para maximizar tus conversiones
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">{feature.category}</CardTitle>
                <CardDescription>Incluye:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
