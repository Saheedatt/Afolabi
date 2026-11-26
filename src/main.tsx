import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/theme.css";
import "./styles/home.css";
import "./styles/inner.css";
import "./styles/about.css";
import "./styles/casestudy.css";
import "./styles/bits.css";
import App from "./App.tsx";
import { protectMedia } from "./lib/protectMedia";

protectMedia();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
