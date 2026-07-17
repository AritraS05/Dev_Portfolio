import TopNav from "@/components/site/top-nav";
import Footer from "@/components/Footer";
import AnimationContainer from "@/components/animated/animated-container";
import type { ProjectDetail } from "@/data/project-details";
import { FaArrowRight, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiWebrtc,
  SiExpo,
  SiPrisma,
  SiFastapi,
  SiNextdotjs,
  SiPython,
  SiCplusplus,
  SiCmake,
  SiOpengl,
  SiSocketdotio,
  SiMongodb,
  SiSolana,
  SiExpress,
  SiTailwindcss,
  SiGooglegemini,
  SiThreedotjs,
  SiFramer,
  SiSolidity,
} from "react-icons/si";
import type { IconType } from "react-icons";

const TECH_ICONS: Record<string, IconType> = {
  react: SiReact,
  "react native": SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  "node.js": SiNodedotjs,
  postgresql: SiPostgresql,
  redis: SiRedis,
  docker: SiDocker,
  webrtc: SiWebrtc,
  expo: SiExpo,
  prisma: SiPrisma,
  fastapi: SiFastapi,
  "next.js": SiNextdotjs,
  python: SiPython,
  "c++": SiCplusplus,
  cmake: SiCmake,
  opengl: SiOpengl,
  "socket.io": SiSocketdotio,
  mongodb: SiMongodb,
  solana: SiSolana,
  express: SiExpress,
  tailwind: SiTailwindcss,
  genai: SiGooglegemini,
  "three.js": SiThreedotjs,
  "framer motion": SiFramer,
  solidity: SiSolidity,
};

const TILE_POSES = [
  "left-[4%] top-2 -rotate-6",
  "right-[6%] top-6 rotate-6",
  "left-[12%] top-40 rotate-3",
  "right-[13%] top-44 -rotate-6",
];

const TechTile = ({ name, className }: { name: string; className?: string }) => {
  const Icon = TECH_ICONS[name.toLowerCase()];
  return (
    <span
      className={`grid h-14 w-14 place-items-center rounded-2xl border border-neutral-100 bg-white text-2xl text-neutral-800 shadow-lg ${className ?? ""}`}
      title={name}
    >
      {Icon ? <Icon /> : <span className="text-base font-bold">{name.slice(0, 1)}</span>}
    </span>
  );
};

const ProjectPage = ({ project }: { project: ProjectDetail }) => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 text-neutral-900 sm:px-10">
      <div className="w-full max-w-7xl">
        <TopNav variant="resume" />

        {/* Hero: dates, giant accent title, categories, floating tech tiles */}
        <div className="relative pt-40 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-28 hidden h-64 md:block">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span key={tech} className={`absolute ${TILE_POSES[i]}`}>
                <TechTile name={tech} />
              </span>
            ))}
          </div>

          {project.dates && (
            <AnimationContainer className="w-full">
              <p className="text-sm font-semibold tracking-wide text-neutral-500">
                {project.dates}
              </p>
            </AnimationContainer>
          )}
          <AnimationContainer className="w-full">
            <h1
              className="mx-auto mt-3 max-w-4xl text-6xl font-bold tracking-tight md:text-7xl"
              style={{ color: project.accent }}
            >
              {project.name}
            </h1>
          </AnimationContainer>
          <AnimationContainer className="w-full">
            <p className="mt-4 text-[15px] font-medium text-neutral-700">
              {project.categories}
            </p>
          </AnimationContainer>

          <AnimationContainer className="w-full">
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                >
                  {link.label.toLowerCase().includes("github") ? (
                    <FaGithub className="h-4 w-4" />
                  ) : (
                    <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </AnimationContainer>
        </div>

        {/* Cover */}
        <AnimationContainer className="w-full">
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.cover} alt={`${project.name} cover`} className="w-full" />
          </div>
        </AnimationContainer>

        {/* Sections: label + big heading left, prose right */}
        <div className="mx-auto mt-8 max-w-5xl">
          {project.sections.map((section) => (
            <AnimationContainer key={section.heading} className="w-full">
              <div className="grid gap-6 border-t border-neutral-100 py-12 md:grid-cols-[minmax(240px,340px)_1fr] md:gap-14">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                    {section.label}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {section.heading}
                    <span style={{ color: project.accent }}>.</span>
                  </h2>
                </div>
                <div className="space-y-4 text-[16px] leading-relaxed text-neutral-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </AnimationContainer>
          ))}

          {/* Architecture / diagram */}
          {project.diagramSrc && (
            <AnimationContainer className="w-full">
              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 md:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.diagramSrc}
                  alt={`${project.name} architecture diagram`}
                  className="w-full"
                />
              </div>
            </AnimationContainer>
          )}

          {/* Stats band */}
          {project.stats && project.stats.length > 0 && (
            <AnimationContainer className="w-full">
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-neutral-200 bg-white p-7 text-center"
                  >
                    <p className="text-3xl font-bold tracking-tight" style={{ color: project.accent }}>
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-sm text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimationContainer>
          )}

          {/* Feature grid */}
          {project.features.length > 0 && (
            <AnimationContainer className="w-full">
              <div className="mt-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                  What&apos;s inside
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                  Key features<span style={{ color: project.accent }}>.</span>
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-neutral-200 bg-white p-6"
                    >
                      <p className="flex items-center gap-2.5 text-[15px] font-bold text-neutral-900">
                        <span
                          aria-hidden
                          className="inline-block h-2.5 w-2.5 shrink-0 rounded-sm"
                          style={{ backgroundColor: project.accent }}
                        />
                        {feature.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationContainer>
          )}

          {/* Full tech list */}
          <AnimationContainer className="w-full">
            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                Built with
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-sm font-medium text-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimationContainer>

          {/* Next step */}
          <AnimationContainer className="w-full">
            <div className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-neutral-100 pt-12">
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400"
              >
                All projects
              </a>
              <a
                href="mailto:aritrasarkar00007@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                Build something with me
                <FaArrowRight className="h-3 w-3" />
              </a>
            </div>
          </AnimationContainer>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default ProjectPage;
