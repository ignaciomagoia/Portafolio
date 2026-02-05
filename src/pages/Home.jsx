import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const SKILLS = [
  "Go",
  "Python (básico)",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Docker",
  "RabbitMQ (básico)",
  "Solr (básico)",
];

const CONTACT = {
  email: "ignaciomagoiia@hotmail.com",
  linkedin: "https://www.linkedin.com/in/ignacio-magoia-8434b2288/",
  github: "https://github.com/ignaciomagoia",
};

const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="aspect-square w-48 overflow-hidden rounded-full bg-slate-800/60 sm:w-56 lg:w-64">
              <img
                src="/profile.jpg"
                alt="Foto de Ignacio"
                className="h-full w-full object-cover scale-105 object-[50%_22%]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Portafolio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              IGNACIO MAGOIA — Desarrollador Junior
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Desarrollador web junior. Interesado en arquitectura de software
              y sistemas distribuidos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary">
                Ver proyectos
              </Link>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="section-title">Educación</h2>
        <div className="card mt-6 space-y-6">
          <div>
            <p className="text-sm font-semibold text-slate-100">
              Ingeniería en Sistemas de Información
            </p>
            <p className="text-sm text-slate-300">
              Universidad Católica de Córdoba (UCC)
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              2022 — Actualidad
            </p>
            <p className="text-sm text-slate-300">5° año en curso</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">
              Instituto Técnico Adrián P. Urquía
            </p>
            <p className="text-sm text-slate-300">
              Técnico en Equipos e Instalaciones Electromecánicas
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              2015 — 2021
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="section-title">Sobre mí</h2>
        <div className="card mt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            Soy desarrollador junior y estudiante de Ingeniería en Sistemas. Me
            interesa la arquitectura de software, el desarrollo backend en Go y
            la construcción de aplicaciones web con React. Disfruto trabajar en
            proyectos prácticos y aprender tecnologías nuevas construyendo
            sistemas reales.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="section-title">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              PROYECTOS
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Selección de proyectos
            </h2>
          </div>
          <Link to="/projects" className="btn btn-ghost">
            Ver proyectos
          </Link>
        </div>

        <div className="mt-6 space-y-8">
          {projects.map((project) => (
            <div key={project.slug} className="card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-slate-300">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    GitHub
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="btn btn-primary"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 8).map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    Highlights
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.highlights.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6"
      >
        <div className="card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                IGNACIO MAGOIA
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Email:{" "}
                <span className="font-medium text-slate-100">
                  {CONTACT.email}
                </span>
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-white hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCopy}
                aria-label="Copiar email"
              >
                {copied ? "Copiado" : "Copiar email"}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                disabled
                aria-label="Descargar CV"
              >
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
