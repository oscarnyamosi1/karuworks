import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import "./Navbar.css";
import { HomeIcon,LucideBookCheck,LucideGalleryHorizontalEnd,LucidePhone,LucideWorkflow } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    (window.innerWidth < 768 && menuOpen)?setIsVisibleMobileNav(true):setIsVisibleMobileNav(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);


  const navLinks = [
    { href: "/", label: "Home",icon:HomeIcon },
    { href: "/about", label: "About",icon:LucideBookCheck },
    { href: "/services", label: "Services",icon:LucideWorkflow },
    { href: "/gallery", label: "Gallery",icon:LucideGalleryHorizontalEnd },
    { href: "/contact", label: "Contact",icon:LucidePhone },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} >
      <div className="nav-inner container">
        <Link href="/" className="nav-brand">
          <span className="brand-text">KARU<span className="brand-accent">WORKS</span></span>
          <span className="brand-sub">Engineering Solutions</span>
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}  >
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${location === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="tel:+2547084588281" className="btn btn-primary">Call Us</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
          <a href="tel:+2547084588281" className="btn btn-primary nav-cta-desktop">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Now
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? "bar open-1" : "bar"} />
            <span className={menuOpen ? "bar open-2" : "bar"} />
            <span className={menuOpen ? "bar open-3" : "bar"} />
          </button>
        </div>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
