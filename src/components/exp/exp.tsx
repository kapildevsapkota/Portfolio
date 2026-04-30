"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    company: "Codavatar Tech Pvt. Ltd.",
    position: "Software Engineer — Full-Stack",
    period: "May 2025 – Present",
    badge: "Current Role",
    location: "Kathmandu, Nepal",
    bullets: [
      "Built & maintain Tivazo, a live SaaS employee time-tracking platform used by real business clients.",
      "Integrated Slack, Jira, Google Calendar & Outlook via OAuth 2.0 / webhooks — cut manual status updates by ~70%.",
      "Designed 10+ REST API endpoints; query optimisation reduced average API response time by ~35%.",
      "Contributed to cross-platform desktop app alongside the web product.",
      "Ran competitive analysis on 5+ rival tools to guide integration and feature priorities.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Slack API",
      "Jira API",
      "OAuth 2.0",
    ],
    iconBg: "#111111",
    iconText: "CT",
    borderColor: "#111111",
    isCurrent: true,
  },
  {
    company: "Baliyo Ventures",
    position: "Front-End Developer",
    period: "Oct 2024 – May 2025",
    badge: "Full-Time",
    location: "Kathmandu, Nepal",
    bullets: [
      "Delivered 5 production platforms for Birat Expo 2025 — zero critical post-launch bugs.",
      "Platforms handled 200+ business listings & served 500+ job seekers during the live event.",
      "Cut average page load time by ~28% using Next.js code splitting & lazy loading.",
      "Turned Figma mockups into pixel-accurate, accessible React components with a 3-person design team.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Figma",
    ],
    iconBg: "#3f3f3f",
    iconText: "BV",
    borderColor: "#3f3f3f",
    isCurrent: false,
  },
  {
    company: "Kutumba Tech",
    position: "Front-End Developer Intern",
    period: "Dec 2023 – Aug 2024",
    badge: "Internship",
    location: "Kathmandu, Nepal",
    bullets: [
      "Built an e-commerce platform for remote Nepali communities — onboarded 50+ sellers in the first 3 months.",
      "Created 15+ reusable React/TypeScript components, reducing new feature UI dev time by ~20%.",
      "Delivered all Figma-to-production features with first or second review approval from the UX lead.",
      "Met every sprint deadline across the full 8-month internship on a live production codebase.",
    ],
    tags: ["React", "TypeScript", "Shadcn UI", "Ant Design", "Agile/Scrum"],
    iconBg: "#6b6b6b",
    iconText: "KT",
    borderColor: "#6b6b6b",
    isCurrent: false,
  },
];

const education = [
  {
    school: "Jaya Multiple Campus",
    degree: "Bachelor in Computer Application (BCA)",
    period: "2021 – 2025",
    location: "Gokarneshwor, Kathmandu",
    details:
      "Relevant coursework: Data Structures & Algorithms, OOP, DBMS, Web Development, Computer Networks.",
    iconBg: "#111111",
    iconText: "JMC",
    borderColor: "#111111",
  },
  {
    school: "Hetauda School of Management and Social Science",
    degree: "Higher Secondary (+2) — Computer Science & Accounts",
    period: "2019 – 2021",
    location: "Hetauda, Makwanpur",
    details:
      "Completed higher secondary with a focus on Computer Science and Accounts.",
    iconBg: "#3f3f3f",
    iconText: "HSM",
    borderColor: "#3f3f3f",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      {/* ── Work Experience heading ── */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Career
        </p>
        <h2 className="text-4xl font-bold text-center text-black">
          Work Experience
        </h2>
        <div className="w-12 h-0.5 bg-black mt-4" />
      </div>

      <VerticalTimeline lineColor="#d1d5db">
        {experiences.map((exp) => (
          <VerticalTimelineElement
            key={exp.company}
            date={exp.period}
            dateClassName="text-gray-500 font-medium text-sm"
            iconStyle={{
              background: exp.iconBg,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 0 3px #ffffff, 0 0 0 5px ${exp.iconBg}`,
            }}
            icon={
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                {exp.iconText}
              </span>
            }
            contentStyle={{
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              borderTop: `3px solid ${exp.borderColor}`,
              padding: "1.5rem",
            }}
            contentArrowStyle={{ borderRight: `7px solid #e5e7eb` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <h3 className="text-base font-bold text-black leading-tight">
                  {exp.company}
                </h3>
                <h4 className="text-sm font-medium text-gray-500 mt-0.5">
                  {exp.position}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full shrink-0 border"
                style={
                  exp.isCurrent
                    ? { background: "#000", color: "#fff", borderColor: "#000" }
                    : {
                        background: "#f9f9f9",
                        color: "#555",
                        borderColor: "#e5e7eb",
                      }
                }
              >
                {exp.badge}
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 my-3" />

            {/* Bullet points */}
            <ul className="space-y-2">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm text-gray-600 leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-black shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* ── Education heading ── */}
      <div className="flex flex-col items-center mt-20 mb-12">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Academic
        </p>
        <h2 className="text-4xl font-bold text-center text-black">Education</h2>
        <div className="w-12 h-0.5 bg-black mt-4" />
      </div>

      <VerticalTimeline lineColor="#d1d5db">
        {education.map((edu) => (
          <VerticalTimelineElement
            key={edu.school}
            date={edu.period}
            dateClassName="text-gray-500 font-medium text-sm"
            iconStyle={{
              background: edu.iconBg,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 0 3px #ffffff, 0 0 0 5px ${edu.iconBg}`,
            }}
            icon={
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}
              >
                {edu.iconText}
              </span>
            }
            contentStyle={{
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              borderTop: `3px solid ${edu.borderColor}`,
              padding: "1.5rem",
            }}
            contentArrowStyle={{ borderRight: `7px solid #e5e7eb` }}
          >
            <h3 className="text-base font-bold text-black leading-tight">
              {edu.school}
            </h3>
            <h4 className="text-sm font-medium text-gray-500 mt-0.5">
              {edu.degree}
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">{edu.location}</p>
            <div className="w-full h-px bg-gray-100 my-3" />
            <p className="text-sm text-gray-600 leading-relaxed">
              {edu.details}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
