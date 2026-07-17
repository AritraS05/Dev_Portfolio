import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import type { ProjectDetail } from "@/data/project-details";

const ProjectCard = ({ project }: { project: ProjectDetail }) => {
  const href = `/projects/${project.slug}`;
  return (
    <article className="flex flex-col items-start">
      <Link href={href} className="group block w-full">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={project.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900 md:text-[28px]">
          {project.name}
        </h3>
      </Link>

      <div className="mt-2 flex w-full items-center justify-between gap-4">
        <span className="text-sm text-neutral-500">{project.categories}</span>
        {project.dates && (
          <span className="shrink-0 text-sm text-neutral-500">{project.dates}</span>
        )}
      </div>

      <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-neutral-700">
        {project.short}
      </p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        View Project
        <FaArrowRight className="h-3 w-3" />
      </Link>
    </article>
  );
};

export default ProjectCard;
