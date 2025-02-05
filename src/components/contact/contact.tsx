"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold">CONTACT US</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground">Have a project in mind? Let&apos;s talk about it.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-muted">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-muted-foreground">Makalbari,Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-muted">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">+977 9865408970</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-muted">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">kapildevsapkota98@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
          </div>
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" className="min-h-[150px]" />
          <Button className="w-full md:w-auto">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

