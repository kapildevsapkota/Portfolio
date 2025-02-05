import { Monitor, Heart, Settings, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
    {
    icon: Code,
    title: "DEVELOPMENT",
    description: "There are many variations of passages of Lorm available, but in some form",
  },
  {
    icon: Monitor,
    title: "UI/UX DESIGN",
    description: "There are many variations of passages of Lorm available, but in some form",
  },
  {
    icon: Heart,
    title: "WEB DESIGN",
    description: "There are many variations of passages of Lorm available, but in some form",
  },
  {
    icon: Settings,
    title: "MINIMAL DESIGN",
    description: "There are many variations of passages of Lorm available, but in some form",
  },
  
]

export function ServicesSection() {
  return (
    <section id="services" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold">MY SERVICES</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="border-none bg-muted/50 transition-transform hover:-translate-y-1">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full border-2 border-zinc-200">
                  <service.icon className="w-6 h-6 text-zinc-600" />
                </div>
              </div>
              <h3 className="font-semibold tracking-wide">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

