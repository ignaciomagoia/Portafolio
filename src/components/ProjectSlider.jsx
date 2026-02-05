import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProjectSlide from "./ProjectSlide";

const ProjectSlider = ({ projects }) => {
  const total = projects.length;
  const [index, setIndex] = useState(0);
  const hasMultiple = total > 1;
  const startTouch = useRef(null);
  const endTouch = useRef(null);

  const next = useCallback(() => {
    if (!hasMultiple) return;
    setIndex((current) => (current + 1) % total);
  }, [hasMultiple, total]);

  const prev = useCallback(() => {
    if (!hasMultiple) return;
    setIndex((current) => (current - 1 + total) % total);
  }, [hasMultiple, total]);

  const goTo = useCallback(
    (target) => {
      if (!hasMultiple) return;
      const normalized = (target + total) % total;
      setIndex(normalized);
    },
    [hasMultiple, total]
  );

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    startTouch.current = { x: touch.clientX, y: touch.clientY };
    endTouch.current = null;
  };

  const onTouchMove = (event) => {
    const touch = event.touches[0];
    endTouch.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = () => {
    if (!hasMultiple || !startTouch.current || !endTouch.current) return;
    const deltaX = startTouch.current.x - endTouch.current.x;
    const deltaY = startTouch.current.y - endTouch.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) next();
      if (deltaX < 0) prev();
    }
  };

  const slides = useMemo(
    () =>
      projects.map((project) => (
        <ProjectSlide key={project.slug} project={project} />
      )),
    [projects]
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)`, touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides}
      </div>

      <button
        className="btn btn-muted absolute left-3 top-1/2 -translate-y-1/2 sm:left-4"
        onClick={prev}
        aria-label="Proyecto anterior"
        disabled={!hasMultiple}
      >
        ←
      </button>
      <button
        className="btn btn-muted absolute right-3 top-1/2 -translate-y-1/2 sm:right-4"
        onClick={next}
        aria-label="Proyecto siguiente"
        disabled={!hasMultiple}
      >
        →
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-300">
        <span>
          {index + 1} / {total}
        </span>
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === idx ? "bg-slate-200" : "bg-slate-600"
              }`}
              onClick={() => goTo(idx)}
              aria-label={`Ir al proyecto ${idx + 1}`}
              disabled={!hasMultiple}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
