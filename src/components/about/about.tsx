"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "8+", label: "Live products shipped" },
  { value: "4+", label: "Third-party integrations" },
  { value: "500+", label: "Users served" },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Ant Design",
      "MUI",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Webhooks", "OAuth 2.0"],
  },
  {
    category: "Database & Tools",
    skills: ["MongoDB", "Git", "Figma", "Vercel", "Agile / Scrum"],
  },
  {
    category: "Integrations",
    skills: ["Slack API", "Jira API", "Google Calendar API", "MS Graph API"],
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="container md:py-32 mx-auto px-4" ref={ref}>
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Who I am
        </p>
        <h2 className="text-4xl font-bold text-black">About Me</h2>
        <motion.div
          className="h-0.5 bg-black mt-4"
          initial={{ width: 0 }}
          animate={inView ? { width: 48 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>

      {/* Bio + Skills */}
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left — bio */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-black">Hi, I&apos;m Kapil.</h3>
          <p className="text-gray-500 leading-relaxed text-sm">
            I&apos;m a full-stack software engineer based in Kathmandu, Nepal,
            with 2+ years of experience building production-grade web
            applications and SaaS products. I&apos;ve shipped 8+ live products
            across Nepal and the US — from a B2B marketplace and job board for
            Nepal&apos;s largest business expo, to Tivazo, a SaaS employee
            management platform I architected from scratch.
          </p>
          <p className="text-gray-500 leading-relaxed text-sm">
            I work across the full stack — React and Next.js on the frontend,
            Node.js APIs on the backend, and third-party integrations (Slack,
            Jira, Google Calendar, Outlook) in between. I care about writing
            clean code, shipping on time, and building things that actually
            solve real problems.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/Kapil_Dev_Sapkota_Resume.pdf"
              download
              className="inline-block"
            >
              <Button className="bg-black text-white hover:bg-zinc-800 rounded-lg px-6 text-sm font-semibold tracking-wide">
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right — skill groups */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + gi * 0.1 }}
            >
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                      group.category === "Currently Learning"
                        ? "border-dashed border-gray-300 text-gray-400 bg-white"
                        : "border-gray-200 bg-gray-50 text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
