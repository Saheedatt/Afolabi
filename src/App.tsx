import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { TopBar } from "./components/TopBar";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Role } from "./pages/Role";
import { Physio } from "./pages/Physio";
import { Bits } from "./pages/Bits";
import { Timeline } from "./pages/Timeline";
import { CaseStudy } from "./pages/CaseStudy";
import { About } from "./pages/About";
import { Lab } from "./pages/Lab";
import { LabEntry } from "./pages/LabEntry";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { SITE } from "./content/site";

/** New pages start at the top; in-page anchors (#section) scroll to their section. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Moves keyboard and screen-reader focus to the new page's content after navigation. */
function FocusManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const main = document.getElementById("main");
    if (main && document.activeElement !== document.body) main.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  // home and Bits & pieces are one-screen pages that draw their own top bar
  const home = location.pathname === "/" || location.pathname === "/bits";
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <FocusManager />
      {!home && (
        <div className="topbar-wrap">
          <TopBar />
        </div>
      )}
      <main id="main" tabIndex={-1} className="view" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/role/:role" element={<Role />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/physio" element={<Physio />} />
          <Route path="/bits" element={<Bits />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<About />} />
          {SITE.labEnabled && <Route path="/lab" element={<Lab />} />}
          {SITE.labEnabled && <Route path="/lab/:slug" element={<LabEntry />} />}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
