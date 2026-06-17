import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./styles/main.css";

function NotFound() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div>
        <h1 style={{ fontSize: "4rem", fontWeight: 900, color: "var(--primary)" }}>404</h1>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "12px 0 8px", color: "var(--fg)" }}>Page Not Found</h2>
        <p style={{ color: "var(--fg-muted)", marginBottom: "24px" }}>The page you're looking for doesn't exist.</p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "var(--primary)", color: "#fff", borderRadius: "8px", fontWeight: 700, textDecoration: "none" }}>Back to Home</a>
      </div>
    </div>
  );
}

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("kw-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("kw-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Router />
      </main>
      <Footer />
      <FloatingActions />
    </WouterRouter>
  );
}

export default App;
