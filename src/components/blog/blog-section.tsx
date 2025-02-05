"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Suffered Alteration In Some",
    date: "20 Jun 2025",
    comments: 5,
    image: "/image1.png",
    slug: "suffered-alteration-1",
  },
  {
    id: 2,
    title: "When nepal will develop in coding ?",
    date: "20 Jun 2025",
    comments: 5,
    image: "/image2.png",
    slug: "suffered-alteration-2",
  },
  {
    id: 3,
    title: "can nepal develop in coding ?",
    date: "20 Jun 2025",
    comments: 5,
    image: "/image3.png",
    slug: "suffered-alteration-3",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold">OUR BLOG</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="group border-none bg-muted/50">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.comments} Comments</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{post.title}</h3>
                  <Link
                    href="#"
                    className="shrink-0 p-2 rounded-full border border-zinc-200 transition-colors hover:bg-zinc-100"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Read more</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

