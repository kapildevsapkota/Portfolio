"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container flex min-h-screen flex-col-reverse items-center justify-center gap-8 pb-8 pt-24 md:flex-row md:gap-16 md:pb-24 md:pt-32 mx-auto">
      <motion.div
        className="flex flex-col items-start space-y-4 md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-sm font-medium uppercase tracking-wider text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, my name is
        </motion.p>
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Kapil Dev Sapkota
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Front-end developer focused on crafting clean, responsive, and user-friendly web experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button asChild className="bg-zinc-800 text-white hover:bg-zinc-700">
            <Link href="/#portfolio">MY WORK</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="md:w-1/2 mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Image
          src="/portfolio.png"
          alt="Portrait"
          width={600}
          height={900}
          className="backdrop-grayscale-[1] hidden md:block"
          priority
        />
      </motion.div>
    </section>
  )
}

