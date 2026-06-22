import { useState } from "react";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`floating-actions${expanded ? " is-expanded" : ""}`}>
      <button
        className="fab-toggle"
        onClick={() => setExpanded(prev => !prev)}
        aria-label={expanded ? "Close menu" : "Open contact menu"}
        aria-expanded={expanded}
      >
        <span className="fab-toggle-icon">
          {expanded ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          )}
        </span>
        <span className="fab-toggle-hint">{expanded ? "" : "Contact"}</span>
      </button>

      <div className="fab-menu" aria-hidden={!expanded}>
        <a
          href="https://wa.me/254708458281?text=Hello%20KARUWORKS%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fab-item fab-item--whatsapp"
          tabIndex={expanded ? 0 : -1}
          aria-label="Chat on WhatsApp"
        >
          <span className="fab-item-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.1 1.51 5.828L.055 23.45a.5.5 0 0 0 .612.612l5.638-1.455A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.06-1.377l-.363-.215-3.764.97.997-3.644-.236-.375A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </span>
          <span className="fab-item-label">WhatsApp</span>
        </a>

        <a
          href="tel:+254708458281"
          className="fab-item fab-item--call"
          tabIndex={expanded ? 0 : -1}
          aria-label="Call us"
        >
          <span className="fab-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span className="fab-item-label">Call Us</span>
        </a>

        <a
          href="mailto:info@karuworks.co.ke"
          className="fab-item fab-item--email"
          tabIndex={expanded ? 0 : -1}
          aria-label="Email us"
        >
          <span className="fab-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
          <span className="fab-item-label">Email</span>
        </a>

        <a
          href="https://www.google.com/maps/search/Kisii+Kenya"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-item fab-item--location"
          tabIndex={expanded ? 0 : -1}
          aria-label="Find our location"
        >
          <span className="fab-item-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <span className="fab-item-label">Location</span>
        </a>
      </div>
    </div>
  );
}
