import { useState } from "react"
// Languages
import javascript from "../../images/StackLogos/logo-javascript.svg"
import typescript from "../../images/StackLogos/logo-typescript.svg"
import python from "../../images/StackLogos/logo-python.svg"
import sql from "../../images/StackLogos/logo-sql.svg"
import html from "../../images/StackLogos/logo-html.svg"
import css from "../../images/StackLogos/logo-css.svg"
import xml from "../../images/StackLogos/logo-xml.svg"
import svg from "../../images/StackLogos/logo-svg.svg"
// Frameworks & Libraries
import react from "../../images/StackLogos/logo-react.svg"
import nextjs from "../../images/StackLogos/logo-nextjs.svg"
import fastapi from "../../images/StackLogos/logo-fastapi.svg"
import express from "../../images/StackLogos/logo-express.svg"
import tanstack from "../../images/StackLogos/logo-tanstack.svg"
import reduxtoolkit from "../../images/StackLogos/logo-reduxtoolkit.svg"
import zustand from "../../images/StackLogos/logo-zustand.svg"
import zod from "../../images/StackLogos/logo-zod.svg"
// UI & styling
import tailwind from "../../images/StackLogos/logo-tailwind.svg"
import sass from "../../images/StackLogos/logo-sass.svg"
import materialui from "../../images/StackLogos/logo-materialui.svg"
import shadcn from "../../images/StackLogos/logo-shadcn.svg"
// Tooling
import jest from "../../images/StackLogos/logo-jest.svg"
import ffmpeg from "../../images/StackLogos/logo-ffmpeg.svg"
import github from "../../images/StackLogos/logo-github.svg"
import figma from "../../images/StackLogos/logo-figma.svg"
import notion from "../../images/StackLogos/logo-notion.svg"
import claude from "../../images/StackLogos/logo-claude.svg"
// Runtime Environments
import nodejs from "../../images/StackLogos/logo-nodejs.svg"
import bun from "../../images/StackLogos/logo-bun.svg"
import deno from "../../images/StackLogos/logo-deno.svg"
import browser from "../../images/StackLogos/logo-browser.svg"
// Infrastructure
import gcloud from "../../images/StackLogos/logo-gcloud.svg"
import vercel from "../../images/StackLogos/logo-vercel.svg"
import hostinger from "../../images/StackLogos/logo-hostinger.svg"
import godaddy from "../../images/StackLogos/logo-godaddy.svg"
import render from "../../images/StackLogos/logo-render.svg"
import supabase from "../../images/StackLogos/logo-supabase.svg"
// Database & ORMs
import postgresql from "../../images/StackLogos/logo-postgresql.svg"
import mysql from "../../images/StackLogos/logo-mysql.svg"
import redis from "../../images/StackLogos/logo-redis.svg"
import prisma from "../../images/StackLogos/logo-prisma.svg"
import sequelize from "../../images/StackLogos/logo-sequelize.svg"
import { useTranslation } from "react-i18next"
import useScrollReveal from "../../hooks/useScrollReveal"

const CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Python", icon: python },
      { name: "SQL", icon: sql },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "XML", icon: xml },
      { name: "SVG", icon: svg },
    ],
  },
  {
    id: "frameworks-&-libraries",
    label: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: react },
      { name: "React Native", icon: react },
      { name: "Next.js", icon: nextjs },
      { name: "Express", icon: express },
      { name: "FastAPI", icon: fastapi },
      { name: "Tanstack", icon: tanstack },
      { name: "Zustand", icon: zustand },
      { name: "Redux Toolkit", icon: reduxtoolkit },
      { name: "Zod", icon: zod },
    ],
  },
  {
    id: "styling",
    label: "UI & Styling",
    skills: [
      { name: "Tailwind", icon: tailwind },
      { name: "Sass", icon: sass },
      { name: "Material Ui", icon: materialui },
      { name: "shadcn/ui", icon: shadcn },
    ],
  },
  {
    id: "tooling-&-testing",
    label: "Tooling & Testing",
    skills: [
      { name: "Jest", icon: jest },
      { name: "FFmpeg", icon: ffmpeg },
      { name: "GitHub", icon: github },
      { name: "Figma", icon: figma },
      { name: "Notion", icon: notion },
      { name: "Claude", icon: claude },
    ],
  },
  {
    id: "runtime",
    label: "Runtime Environments",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Bun", icon: bun },
      { name: "Deno", icon: deno },
      { name: "Browser", icon: browser },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    skills: [
      { name: "Google Cloud", icon: gcloud },
      { name: "Vercel", icon: vercel },
      { name: "Hostinger", icon: hostinger },
      { name: "GoDaddy", icon: godaddy },
      { name: "Render", icon: render },
      { name: "Supabase", icon: supabase },
    ],
  },
  {
    id: "databases",
    label: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", icon: postgresql },
      { name: "MySQL", icon: mysql },
      { name: "Redis", icon: redis },
      { name: "Prisma", icon: prisma },
      { name: "Sequelize", icon: sequelize },
    ],
  },
];

function Stack() {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);

  const activeCategory = CATEGORIES.find((c) => c.id === activeId);

  return (
    <section className="stack section reveal" id="sectionStack" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>{t('stacktitle')}</h2>
        </div>

        <nav className="stack__tabs" aria-label="Skill categories">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`stack__tab${activeId === id ? " stack__tab--active" : ""}`}
              onClick={() => setActiveId(id)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="stack__panel" key={activeId}>
          {activeCategory.skills.map(({ name, icon }) => (
            <div className="stack__tile" key={name}>
              <img src={icon} alt={name} width={40} height={40} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
