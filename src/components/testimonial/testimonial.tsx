"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI Designer",
    image: "/placeholder.svg",
    quote:
      "Working with this team has been an absolute pleasure. Their attention to detail and creative solutions have exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    image: "/placeholder.svg",
    quote:
      "The level of professionalism and expertise demonstrated throughout our project was exceptional. Highly recommended!",
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    image: "/placeholder.svg",
    quote:
      "Their innovative approach and dedication to delivering quality work has made a significant impact on our business.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-24 md:py-32  ">
      <div className="container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold">TESTIMONIALS</h2>
          <div className="w-16 h-1 bg-zinc-200 mt-4" />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none bg-background">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative w-20 h-20 mx-auto">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <Quote className="w-8 h-8 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">{testimonial.quote}</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

