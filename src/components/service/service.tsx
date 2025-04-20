import { Monitor, Heart, Settings, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";

const services = [
  {
    icon: Code,
    title: "DEVELOPMENT",
    description:
      "Building robust and scalable applications tailored to your needs.",
  },
  {
    icon: Monitor,
    title: "UI/UX DESIGN",
    description:
      "Creating intuitive and engaging user experiences that captivate users.",
  },
  {
    icon: Heart,
    title: "WEB DESIGN",
    description:
      "Designing visually appealing and functional websites that stand out.",
  },
  {
    icon: Settings,
    title: "MINIMAL DESIGN",
    description:
      "Focusing on simplicity and elegance to enhance user interaction.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold">MY SERVICES</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border-none bg-muted/50 transition-transform hover:-translate-y-1 relative overflow-hidden"
          >
            <CardContent className="pt-8 text-center space-y-4 relative z-10">
              <div className="flex justify-center">
                <div className="p-4 rounded-full border-2 border-zinc-200">
                  <service.icon className="w-6 h-6 text-zinc-600" />
                </div>
              </div>
              <h3 className="font-semibold tracking-wide">{service.title}</h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </CardContent>
            <Meteors number={10} />
          </Card>
        ))}
      </div>
    </section>
  );
}
