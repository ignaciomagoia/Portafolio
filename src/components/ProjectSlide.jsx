import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

const ProjectSlide = ({ project }) => {
  const getSrc = (item) => (typeof item === "string" ? item : item?.src || "");
  const normalizeImage = (item, fallbackLabel) => {
    if (typeof item === "string") {
      return { src: item, label: fallbackLabel };
    }
    if (item && typeof item === "object") {
      return {
        src: item.src || "",
        label: item.label || fallbackLabel,
      };
    }
    return { src: "", label: fallbackLabel };
  };

  const heroItem =
    project.gallery?.find((item) => getSrc(item).includes("panelprincipal")) ||
    project.images?.[0] ||
    project.gallery?.[0] ||
    "";
  const heroImage = normalizeImage(heroItem, "Screenshot");

  return (
    <section className="min-h-screen w-full shrink-0 px-4 pb-20 pt-24 sm:px-6 lg:px-12">
      <div className="mx-auto grid h-full max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Proyecto
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {project.title}
            </h2>
            <p className="text-lg text-slate-200">{project.tagline}</p>
            <p className="text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            <p className="section-title">Highlights</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.highlights.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              aria-label="GitHub del proyecto"
            >
              GitHub
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                aria-label="Demo del proyecto"
              >
                {project.demoLabel || "Demo"}
              </a>
            ) : null}
            <Link
              to={`/projects/${project.slug}`}
              className="btn btn-ghost"
              aria-label="Ver detalle del proyecto"
            >
              Ver detalle
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-transparent shadow-soft lg:-mr-12">
          <ImageWithFallback
            src={heroImage.src}
            alt={`${project.title} screenshot principal`}
            fallbackText={heroImage.label}
            className="aspect-[16/9] w-full border-0 bg-transparent rounded-none"
            fit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide;
