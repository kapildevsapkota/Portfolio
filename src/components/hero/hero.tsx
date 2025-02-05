import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container flex min-h-screen flex-col-reverse items-center justify-center gap-8 pb-8 pt-24 md:flex-row md:gap-16 md:pb-24 md:pt-32 mx-auto">
      <div className="flex flex-col items-start space-y-4 md:w-1/2">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Hello, my name is
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Kapil Dev Sapkota
        </h1>
        <p className="max-w-[600px] text-muted-foreground">
          Front-end developer focused on crafting clean, responsive, and
          user-friendly web experiences.
        </p>
        <Button asChild className="bg-zinc-800 text-white hover:bg-zinc-700">
          <Link href="/#portfolio">MY WORK</Link>
        </Button>
      </div>
      <div className="md:w-1/2 mx-auto">
        <Image
          src="/portfolio.png"
          alt="Portrait"
          width={600}
          height={900}
          className="backdrop-grayscale-[1] hidden md:block"
          priority
        />
      </div>
    </section>
  );
}
