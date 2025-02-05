"use client";

import React from "react";
import { Check } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 

const experiences = [
  {
    company: "Kutumba Tech PVT.LTD",
    period: "2023-2024",
    position: "Web Designer & Developer",
    description: "I have done my internship at Kutumba Tech PVT.LTD as a front-end developer",
    icon: <Check className="w-6 h-6 text-white" />,
    iconColor: "bg-zinc-800",
  },
  {
    company: "Baliyo Ventures",
    period: "2024-Present",
    position: "Web Designer & Developer",
    description: "I am currently working as a front-end developer at Baliyo Ventures",
    icon: <Check className="w-6 h-6 text-white" />,
    iconColor: "bg-teal-600",
  },
  {
    company: "Birat Expo",
    period: "2025",
    position: "Event Manager",
    description: "I Have Managed B2B  Events at Birat Expo. Which include diffrent platforms"  ,
    icon: <Check className="w-6 h-6 text-white" />,
    iconColor: "bg-blue-600",
  },
  
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 md:py-32 mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-center text-zinc-800">MY EXPERIENCE</h2>
        <div className="w-16 h-1 bg-zinc-200 mt-4" />
      </div>

      <VerticalTimeline>
        {experiences.map((exp) => (
          <VerticalTimelineElement
            key={exp.company}
            className="timeline-element"
            contentStyle={{
              background: "#fff",
              color: "#333",
              border: "1px solid #ccc",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #fff",
            }}
            date={exp.period}
            iconStyle={{
              background: exp.iconColor,
              color: "#fff",
            }}
            icon={exp.icon}
          >
            <h3 className="text-xl font-bold text-zinc-800">{exp.company}</h3>
            <p className="text-muted-foreground mt-2">{exp.position}</p>
            <p className="text-muted-foreground mt-2">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}