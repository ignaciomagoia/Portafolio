import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        requestAnimationFrame(() =>
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        );
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(85,107,135,0.18),transparent_60%),radial-gradient(700px_400px_at_85%_20%,rgba(50,65,84,0.2),transparent_60%)]" />
        <div className="relative z-10">
          <Navbar />
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
