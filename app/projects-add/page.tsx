import type { Metadata } from "next";
import TopNav from "@/components/site/top-nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/site/project-card";
import { ADDITIONAL_PROJECTS } from "@/data/project-details";

export const metadata: Metadata = {
  title: "More Projects — Aritra Sarkar",
  description: "The extended catalog of things Aritra has built.",
};

export default function AdditionalProjectsPage() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 text-neutral-900 sm:px-10">
      <div className="w-full max-w-7xl">
        <TopNav variant="resume" />

        <div className="pt-36">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            More projects<span className="text-[#FA3C23]">.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-500">
            The extended catalog — experiments, tools and apps beyond the featured four.
          </p>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-20 pb-8 md:grid-cols-2">
          {ADDITIONAL_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
