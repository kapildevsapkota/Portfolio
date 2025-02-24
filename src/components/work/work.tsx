"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB" },
  { id: "design", label: "DESIGN" },
  { id: "new", label: "NEW" },
  { id: "print", label: "PRINT" },
  { id: "3d", label: "3D WORK" },
];

const projects = [
  {
    id: 1,
    title: "KUTUMBA BAZAR",
    category: ["design", "new"],
    image: "/kutumba.png",
    link: "https://dev.kutumbabazar.com/",
  },
  {
    id: 5,
    title: "BIRAT EXPO",
    category: ["design", "new"],
    image: "/birat.png",
    link: "https://biratexpo.cim.org.np/",
  },
  {
    id: 2,
    title: "JOBBRIZ",
    category: ["design", "print"],
    image: "/jobbriz.png",
    link: "https://jobbriz-fe.vercel.app/",
  },
  {
    id: 3,
    title: "B2B BIRAT BAJAR",
    category: ["3d", "design"],
    image: "/b2b.png",
    link: "https://b2b-fe-eta.vercel.app/",
  },
  {
    id: 4,
    title: "Business Clinic",
    category: ["design", "new"],
    image: "/bc.png",
    link: "https://businessclinic.vercel.app/",
  },

  {
    id: 6,
    title: "MDMU",
    category: ["design", "print"],
    image: "/mdmu.png",
    link: "https://mdmu.vercel.app/",
  },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category.includes(selectedCategory)
  );

  return (
    <section id="portfolio" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold">MY PORTFOLIO</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className={cn(
              "text-sm font-medium",
              selectedCategory === category.id
                ? "text-primary bg-muted"
                : "text-muted-foreground"
            )}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Updated Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-out",
              hoveredIndex !== null &&
                hoveredIndex !== index &&
                "blur-sm scale-[0.98]"
            )}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div
              className={cn(
                "absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 transition-opacity duration-300",
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="text-xl md:text-2xl font-medium text-white">
                {project.title}
              </div>
              <Button
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-black"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <div className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-muted-foreground">
                Category: {selectedProject.category.join(", ")}
              </p>
              <Button
                className="w-full"
                onClick={() => window.open(selectedProject.link, "_blank")}
              >
                Visit Project
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
