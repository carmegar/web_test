import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Benefits } from "@/components/benefits"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}
