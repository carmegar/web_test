import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Optimizado para ventas",
    description: "Cada sección diseñada estratégicamente para guiar a tus visitantes hacia la conversión",
  },
  {
    icon: Zap,
    title: "Carga ultrarrápida",
    description: "Optimización de velocidad que mejora la experiencia del usuario y el SEO",
  },
  {
    icon: Users,
    title: "Captura leads efectiva",
    description: "Formularios con validaciones profesionales para no perder ninguna oportunidad",
  },
  {
    icon: CheckCircle,
    title: "SEO incluido",
    description: "Meta titles y descriptions optimizados para posicionar tu negocio en Google",
  },
]

export function Benefits() {
  return (
    <section className="bg-muted/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            ¿Por qué elegir el Plan Estándar?
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Ideal para negocios que ya venden y quieren captar más leads online
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-pretty text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
