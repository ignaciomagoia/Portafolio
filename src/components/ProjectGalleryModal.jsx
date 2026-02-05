import { useEffect, useMemo, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

const ProjectGalleryModal = ({ open, onClose, images, title }) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const normalizeImage = (item, index) => {
    if (typeof item === "string") {
      return {
        src: item,
        label: "Screenshot",
        alt: `${title} screenshot ${index + 1}`,
      };
    }
    if (item && typeof item === "object") {
      return {
        src: item.src || "",
        label: item.label || "Screenshot",
        alt: item.label ? `${title} - ${item.label}` : `${title} screenshot ${index + 1}`,
      };
    }
    return {
      src: "",
      label: "Screenshot",
      alt: `${title} screenshot ${index + 1}`,
    };
  };
  const [index, setIndex] = useState(0);
  const hasImages = safeImages.length > 0;

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, images]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setIndex((current) =>
          hasImages ? (current + 1) % safeImages.length : 0
        );
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          hasImages ? (current - 1 + safeImages.length) % safeImages.length : 0
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose, safeImages.length, hasImages]);

  useEffect(() => {
    if (!open) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  const goNext = () =>
    setIndex((current) =>
      hasImages ? (current + 1) % safeImages.length : 0
    );
  const goPrev = () =>
    setIndex((current) =>
      hasImages ? (current - 1 + safeImages.length) % safeImages.length : 0
    );

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${title}`}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-8">
        <div className="text-sm text-slate-200">
          {hasImages ? `${index + 1} / ${safeImages.length}` : "0 / 0"}
        </div>
        <button
          className="btn btn-ghost"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          Cerrar
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center gap-4 px-4 pb-6 sm:px-8">
        <button
          className="btn btn-muted hidden sm:inline-flex"
          onClick={goPrev}
          aria-label="Imagen anterior"
          disabled={!hasImages}
        >
          ←
        </button>

        <div className="w-full max-w-5xl">
          {(() => {
            const image = normalizeImage(hasImages ? safeImages[index] : "", index);
            return (
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                fallbackText={image.label}
                className="w-full max-h-[70vh] min-h-[45vh] bg-slate-950/70"
              />
            );
          })()}
        </div>

        <button
          className="btn btn-muted hidden sm:inline-flex"
          onClick={goNext}
          aria-label="Imagen siguiente"
          disabled={!hasImages}
        >
          →
        </button>
      </div>

      <div className="border-t border-slate-800/80 px-4 py-4 sm:px-8">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
          {(hasImages ? safeImages : Array.from({ length: 4 }, () => "")).map(
            (item, idx) => {
              const image = normalizeImage(item, idx);
              return (
              <button
                key={`thumb-${idx}`}
                onClick={() => setIndex(idx)}
                aria-label={`Seleccionar screenshot ${idx + 1}`}
                className={`overflow-hidden rounded-lg border transition ${
                  idx === index
                    ? "border-slate-200"
                    : "border-slate-800/80 hover:border-slate-500/80"
                }`}
                disabled={!hasImages}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  fallbackText={image.label}
                  className="aspect-square w-full"
                />
              </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGalleryModal;
