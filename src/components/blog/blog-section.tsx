"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title:
      "From Kathmandu to the Cloud: How Nepal's SaaS Revolution Is Rewriting the Rules",
    date: "10 Jul 2025",
    comments: 12,
    image: "/blog1A.png",
    slug: "rise-of-saas-products-in-nepal-tivazo-krispcall-dialaxy",
    tag: "Technology & Startups",
  },
  {
    id: 2,
    title:
      "Why Third-Party Integrations Are the Backbone of Modern SaaS Products",
    date: "20 Jun 2025",
    comments: 5,
    image: "/blog2a.png",
    slug: "why-third-party-integrations-are-the-backbone-of-modern-saas-products",
    tag: "Career",
  },
  {
    id: 3,
    title: "SaaS Product Development — Build, Launch, Learn & Iterate",
    date: "20 Jun 2025",
    comments: 5,
    image: "/blog3a.png",
    slug: "building-saas-products-in-real-time-development-to-customer-feedback",
    tag: "Entrepreneurship",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight">MY BLOG</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/${post.slug}`} className="group block">
            <Card className="border-none bg-muted/50 h-full transition-shadow hover:shadow-lg">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-zinc-700">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>{post.comments} Comments</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-base leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="shrink-0 p-2 rounded-full border border-zinc-200 transition-all group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
