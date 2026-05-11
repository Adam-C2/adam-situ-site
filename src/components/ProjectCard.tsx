import Image from "next/image";
import type { Project } from "@/content/siteContent";

type ProjectCardProps = {
  project: Project;
  /** Extra classes (e.g. carousel width + shrink-0) */
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article
      className={`group rounded-2xl border border-black/5 bg-white p-5 transition-shadow hover:shadow-sm ${className}`}
    >
      <div className="mb-4 overflow-hidden rounded-xl bg-gray-100">
        {/* Replace image paths in src/content/siteContent.ts */}
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
        />
      </div>
      <h3 className="text-lg font-medium text-ink">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm text-ink underline-offset-4 hover:underline"
        >
          View project
        </a>
      ) : null}
    </article>
  );
}
