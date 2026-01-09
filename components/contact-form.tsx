"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Teléfono inválido (10 dígitos)"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Aquí se integraría con WhatsApp Business o API
      const whatsappMessage = `Hola! Me interesa el Plan Estándar - Conversión.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`
      const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(whatsappMessage)}`

      window.open(whatsappUrl, "_blank")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[e.target.name]
        return newErrors
      })
    }
  }

  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-pretty text-lg text-muted-foreground mb-8 leading-relaxed">
              Completa el formulario y te contactaremos en menos de 24 horas para comenzar tu proyecto. También puedes
              escribirnos directamente por WhatsApp.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp Business</h3>
                  <p className="text-sm text-muted-foreground">Respuesta inmediata en horario laboral</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email directo</h3>
                  <p className="text-sm text-muted-foreground">contacto@tuempresa.com</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Solicita tu propuesta</CardTitle>
              <CardDescription>Todos los campos son obligatorios</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juan@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="3001234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cuéntanos sobre tu proyecto</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe brevemente qué necesitas para tu negocio..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
