import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";
import ProjectGalleryModal from "../components/ProjectGalleryModal";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug]
  );
  const [open, setOpen] = useState(false);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-24 sm:px-6">
        <div className="card">
          <h1 className="text-2xl font-semibold text-white">
            Proyecto no encontrado
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Volvé a la sección de proyectos para continuar.
          </p>
          <Link to="/projects" className="btn btn-primary mt-6">
            Ver proyectos
          </Link>
        </div>
      </main>
    );
  }

  const normalizeImage = (item, index) => {
    if (typeof item === "string") {
      return { src: item, label: "Screenshot", alt: `${project.title} screenshot ${index + 1}` };
    }
    if (item && typeof item === "object") {
      return {
        src: item.src || "",
        label: item.label || "Screenshot",
        alt: item.label
          ? `${project.title} - ${item.label}`
          : `${project.title} screenshot ${index + 1}`,
      };
    }
    return { src: "", label: "Screenshot", alt: `${project.title} screenshot ${index + 1}` };
  };

  const gallery = project.gallery?.length ? project.gallery : project.images;
  const previewImages = gallery?.length
    ? gallery.slice(0, 4)
    : Array.from({ length: 4 }, () => "");

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            to="/projects"
            className="text-xs uppercase tracking-[0.4em] text-slate-400 hover:text-white"
          >
            ← Volver a proyectos
          </Link>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-slate-200">{project.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="card space-y-3">
          <h2 className="section-title">Highlights</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3">
          <h2 className="section-title">Architecture</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.architecture.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3">
          <h2 className="section-title">Responsibilities</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.responsibilities.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="section-title">Screenshots</h2>
          {gallery?.length > 4 ? (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setOpen(true)}
              aria-label="Ver más screenshots"
            >
              Ver más screenshots
            </button>
          ) : null}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {previewImages.map((item, index) => {
            const image = normalizeImage(item, index);
            return (
            <ImageWithFallback
              key={`detail-${index}`}
              src={image.src}
              alt={image.alt}
              fallbackText={image.label}
              className="aspect-[4/3] w-full bg-slate-950/70"
            />
            );
          })}
        </div>
      </section>

      <ProjectGalleryModal
        open={open}
        onClose={() => setOpen(false)}
        images={gallery ?? []}
        title={project.title}
      />
    </main>
  );
};

export default ProjectDetail;
