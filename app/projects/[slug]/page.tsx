import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectPage from "@/components/site/project-page";
import { PROJECT_DETAILS } from "@/data/project-details";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECT_DETAILS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project — Aritra Sarkar" };
  return {
    title: `${project.name} — Aritra Sarkar`,
    description: project.short,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECT_DETAILS.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
