"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "NEXT JS", progress: 90 },
  { name: "TYPESCRIPT", progress: 85 },
  { name: "NODE JS", progress: 90 },
];

export function AboutSection() {
  return (
    <section id="about" className="container md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold">ABOUT ME</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Howdy!</h3>
          <p className="text-muted-foreground">
            I&apos;m a passionate front-end developer with a strong focus on
            creating clean, responsive, and user-friendly websites. With
            expertise in HTML, CSS, JavaScript, and modern frameworks like React
            and Vue, I strive to build seamless and intuitive user experiences.
            I&apos;m always eager to stay up-to-date with the latest trends and
            tools in web development to ensure my projects are both visually
            appealing and functional.
          </p>
          {/* Download CV Button */}
          <a href="/my-cv.pdf" download className="inline-block">
            <Button
              variant="default"
              className="bg-zinc-800 text-white hover:bg-zinc-700"
            >
              DOWNLOAD MY CV
            </Button>
          </a>
        </div>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
