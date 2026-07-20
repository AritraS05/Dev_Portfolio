import type { Metadata } from "next";
import Image from "next/image";
import TopNav from "@/components/site/top-nav";
import Footer from "@/components/Footer";
import AnimationContainer from "@/components/animated/animated-container";
import { FaArrowRight, FaDownload } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Me — Aritra Sarkar",
  description: "Resume, skills and a little about Aritra Sarkar.",
};

const ACCENTS = ["#FA3C23", "#0D8BFF", "#00C060", "#A855F7"];

// Content sourced from AritraSarkar.pdf
const EDUCATION = [
  {
    school: "Jadavpur University",
    program: "B.E. in Information Technology — CGPA 8.34",
    dates: "Oct 2023 – May 2027",
    place: "Kolkata, India",
  },
  {
    school: "Calcutta Boys' School",
    program: "ISC: 90% (2023) · ICSE: 98% (2021)",
    dates: "2021 – 2023",
    place: "Kolkata, India",
  },
];

const ACHIEVEMENTS = [
  {
    title: "INMO 2022 qualifier",
    detail: "Top ~1% of RMO qualifiers nationwide; also qualified INPhO 2023",
  },
  { title: "LeetCode Knight", detail: "Top ~5% globally" },
  { title: "Codeforces 1464 — Specialist", detail: "Peak competitive rating" },
  { title: "CodeChef 1755 (3-star)", detail: "Peak competitive rating" },
  {
    title: "1st Place — HackForge Hackathon",
    detail: "Built a Web3 metaverse 2D game",
  },
];

const SKILL_GROUPS = [
  { title: "Languages", items: "C++, Python, TypeScript, JavaScript, Java, SQL" },
  {
    title: "Backend & Infrastructure",
    items: "Node.js, Express, PostgreSQL, Redis (caching, job queues), Prisma, MongoDB, Docker, REST APIs",
  },
  {
    title: "Frontend & Mobile",
    items: "React, Next.js, React Native (Expo), TanStack Query, Zustand, Tailwind CSS",
  },
  {
    title: "Networking & Real-Time Systems",
    items: "WebSockets, WebRTC (signaling, offer/answer, ICE), HTTP, TCP/IP fundamentals",
  },
  {
    title: "Security",
    items: "Container isolation for untrusted code, JWT authentication, bcrypt, role-based access control",
  },
  {
    title: "AI/ML Integration",
    items: "Google GenAI APIs, PaddleOCR, CrewAI, FAISS, sentence-transformers, LLM data-extraction pipelines",
  },
  {
    title: "Code Quality",
    items: "Code review, pull-request-driven development, TypeScript strict mode, schema validation (Zod)",
  },
  {
    title: "CS Fundamentals",
    items: "Data structures & algorithms, operating systems, computer networks, OOP, databases",
  },
];

const PROJECTS = [
  {
    name: "Venue Ops Platform",
    dates: "Dec 2025 – Present",
    tech: "React, TypeScript, Zustand, TanStack Query, WebSockets, Konva",
    line: "Venue-operations dashboard for a production nightlife booking platform, built alongside two working industry engineers — a multiplexed WebSocket real-time layer, epoch-guarded bi-directional message pagination and a Konva floor-plan editor.",
  },
  {
    name: "Algora",
    dates: "June – July 2026",
    tech: "React, TypeScript, Node.js, PostgreSQL, Redis, Docker, WebRTC",
    line: "Competitive programming platform with an async judging pipeline running untrusted code in locked-down Docker sandboxes, an AST-based complexity estimator, and WebRTC rooms.",
  },
  {
    name: "VeloXel",
    dates: "",
    tech: "C++20, SIMD (NEON/AVX2), CMake, OpenGL, Google Benchmark",
    line: "Native C++20 image-processing engine with hand-written SIMD kernels — a measured 25 → 241 MPix/s (9.6×) speedup, plus a DaVinci-Resolve-styled grading GUI.",
  },
  {
    name: "Buyceps — AI Shopping Assistant",
    dates: "Jul – Aug 2025",
    tech: "Next.js, FastAPI, CrewAI, FAISS",
    line: "Multimodal shopping assistant (text, voice, image) with a CrewAI multi-agent pipeline and hybrid semantic search over FAISS embeddings.",
  },
  {
    name: "AritraDocs",
    dates: "",
    tech: "React, TypeScript, Tailwind CSS",
    line: "Live collaborative document tool — real-time storing, sharing, commenting and chat, all in one place.",
  },
  {
    name: "PharmaFlow",
    dates: "Feb – Mar 2026",
    tech: "React Native, Node.js, Prisma, PostgreSQL, PaddleOCR, GenAI",
    line: "B2B pharmacy inventory platform with an OCR + GenAI invoice-digitization pipeline — in closed testing with 30 pharmacy stores.",
  },
];

export default function ResumePage() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 text-neutral-900 sm:px-10">
      <div className="w-full max-w-7xl">
        <TopNav variant="resume" />

        <AnimationContainer className="w-full">
          <h1 className="mx-auto max-w-3xl pt-36 text-center text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Your team is missing something…{" "}
            <span className="whitespace-nowrap text-[#0D8BFF]">It&apos;s me!</span>
          </h1>
        </AnimationContainer>

        <div className="mx-auto mt-16 grid w-full max-w-5xl gap-14 md:grid-cols-[minmax(280px,380px)_1fr]">
          {/* Left column: photo, education, achievements, skills */}
          <div>
            <AnimationContainer className="w-full">
              <div className="relative aspect-[4/5] w-full -rotate-2 overflow-hidden rounded-3xl border border-neutral-200 shadow-lg">
                <Image
                  src="/ProfilePic.png"
                  alt="Aritra Sarkar"
                  fill
                  sizes="(min-width: 768px) 380px, 90vw"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </AnimationContainer>

            <AnimationContainer className="w-full">
              <h2 className="mt-12 text-[15px] font-semibold text-neutral-900">
                My Education
              </h2>
              <div className="mt-4 space-y-3">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.school}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm font-bold text-neutral-900">{edu.school}</p>
                    <p className="mt-1 text-xs text-neutral-600">{edu.program}</p>
                    <p className="mt-1.5 text-xs text-neutral-400">
                      {edu.dates} · {edu.place}
                    </p>
                  </div>
                ))}
              </div>
            </AnimationContainer>

            <AnimationContainer className="w-full">
              <h2 className="mt-12 text-[15px] font-semibold text-neutral-900">
                Achievements
              </h2>
              <div className="mt-4 space-y-3">
                {ACHIEVEMENTS.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                  >
                    <p className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                      <span
                        aria-hidden
                        className="inline-block h-2 w-2 shrink-0 rounded-sm"
                        style={{ backgroundColor: ACCENTS[index % ACCENTS.length] }}
                      />
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs text-neutral-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </AnimationContainer>

            <AnimationContainer className="w-full">
              <h2 className="mt-12 text-[15px] font-semibold text-neutral-900">Skills</h2>
              <div className="mt-4 space-y-3">
                {SKILL_GROUPS.map(({ title, items }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-neutral-900">{title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{items}</p>
                  </div>
                ))}
              </div>
            </AnimationContainer>
          </div>

          {/* Right column: intro, resume download, experience, projects */}
          <div>
            <AnimationContainer className="w-full">
              <p className="text-[17px] font-bold text-neutral-900">
                I&apos;m Aritra, your go-to person for shipping products end to end!
              </p>

              <div className="mt-5 space-y-5 text-[16px] leading-relaxed text-neutral-800">
                <p>
                  I&apos;m a software engineer from <strong>Kolkata, India</strong> —
                  currently building a <strong>venue operations platform</strong>{" "}
                  alongside two working industry engineers, where I own the business
                  dashboard: real-time messaging, presence and a Canvas floor-plan
                  editor running <strong>in production</strong>.
                </p>
                <p>
                  I&apos;m pursuing a <strong>B.E. in Information Technology at Jadavpur
                    University</strong> (CGPA 8.34, class of 2027). I work across the
                  stack — <strong>React, Next.js and TypeScript</strong> up front;{" "}
                  <strong>Node.js, PostgreSQL, Redis and Docker</strong> behind — with
                  side quests into <em>React Native</em> and{" "}
                  <strong>AI-powered pipelines</strong>.
                </p>
                <p>
                  A <strong>competitive programmer at heart</strong>: LeetCode Knight
                  (top ~5% globally), Codeforces Specialist, and a{" "}
                  <strong>national olympiad qualifier</strong> in both math and physics.
                  When I&apos;m not coding, I&apos;m probably solving problems anyway.
                </p>
              </div>
            </AnimationContainer>

            <AnimationContainer className="w-full">
              <h2 className="mt-12 text-[15px] font-semibold text-neutral-900">Resume</h2>
              <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-neutral-900">
                  Aritra Sarkar — Software Engineer
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  The full story on one page: experience, projects, education and the
                  tools I reach for. Grab a copy below.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="/AritraSarkar.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                  >
                    <FaDownload className="h-3.5 w-3.5" />
                    Download Resume
                  </a>
                  <a
                    href="/AritraSarkar.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400"
                  >
                    View in browser
                    <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </AnimationContainer>

            <AnimationContainer className="w-full">
              <h2 className="mt-12 text-[15px] font-semibold text-neutral-900">
                Highlighted Projects
              </h2>
              <div className="mt-4 space-y-3">
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.name}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                        <span
                          aria-hidden
                          className="inline-block h-2 w-2 shrink-0 rounded-sm"
                          style={{ backgroundColor: ACCENTS[index % ACCENTS.length] }}
                        />
                        {project.name}
                      </p>
                      <p className="shrink-0 text-xs text-neutral-400">{project.dates}</p>
                    </div>
                    <p className="mt-1.5 text-xs italic text-neutral-500">{project.tech}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                      {project.line}
                    </p>
                  </div>
                ))}
              </div>
            </AnimationContainer>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
