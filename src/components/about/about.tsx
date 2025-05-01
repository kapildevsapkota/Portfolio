"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "NEXT JS", progress: 90 },
  { name: "TYPESCRIPT", progress: 85 },
  { name: "NODE JS", progress: 90 },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="container md:py-32 mx-auto" ref={ref}>
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold">ABOUT ME</h2>
        <motion.div
          className="w-16 h-1 bg-zinc-200 mt-4"
          initial={{ width: 0 }}
          animate={inView ? { width: 64 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/KapilDevSapkotaResume.pdf"
              download
              className="inline-block"
            >
              <Button
                variant="default"
                className="bg-zinc-800 text-white hover:bg-zinc-700"
              >
                DOWNLOAD MY CV
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <motion.div
                className="flex justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.progress}%</span>
              </motion.div>
              <motion.div
                className="h-2 bg-zinc-200 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-zinc-800"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.progress}%` } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
