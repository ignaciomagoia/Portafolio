import { useState } from "react";

const ImageWithFallback = ({
  src,
  alt,
  className = "",
  fallbackText = "Screenshot",
  fit = "contain",
}) => {
  const [failed, setFailed] = useState(false);

  const isPlaceholder = typeof src === "string" && src.includes("/placeholders/");
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  if (!src || isPlaceholder || failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/60 text-xs uppercase tracking-[0.2em] text-slate-400 ${className}`}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-xl border border-slate-800/80 bg-slate-900/40 ${fitClass} ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default ImageWithFallback;
