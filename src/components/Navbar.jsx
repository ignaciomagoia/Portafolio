import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SOCIALS = {
  github: "https://github.com/ignaciomagoia",
  linkedin: "https://www.linkedin.com/in/ignacio-magoia-8434b2288/",
  whatsapp: "https://wa.me/3585760730",
};

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 ${
    isActive ? "text-white" : "text-slate-300 hover:text-white"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/60 bg-[#0b0d10]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="text-base font-semibold tracking-wide text-slate-100"
        >
          Ignacio
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <Link
            to="/#contact"
            className="text-sm font-medium text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SOCIALS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <button
          className="btn btn-ghost md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-900/60 bg-[#0b0d10] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>
              Projects
            </NavLink>
            <Link
              to="/#contact"
              className="text-sm font-medium text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="flex gap-3 pt-2">
              <a
                href={SOCIALS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
