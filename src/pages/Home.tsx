import { Link } from "wouter";
import "./Home.css";
import { useState } from "react";
import { Check, Verified } from "lucide-react";
import SEO from "@/components/SEO";
import ImpactSEO from "@/components/ImpactSEO";

const inventions = [
  {
    title: "Washing Machine Repair & Servicing",
    desc: "Expert repair and full servicing of all major washing machine brands.",
    media: {
      type: "image" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810794/vlcsnap-2026-06-17-04h16m29s408_ncpqkd.png",
      link: "#",
    },
  },
  {
    title: "Sukumawiki Cutting Machine",
    desc: "Designed for fast, uniform cutting of sukumawiki in bulk for homes, schools, and institutions.This was during a demonstration at a school.",
    media: {
      type: "video" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782084653/Screenshot_from_2026-06-22_02-22-15_njq1xi.png",
      link: "https://www.youtube.com/watch?v=9JrTxXgA-gA",
    },
  },
  {
    title: "Ugali Cooking Machine (Schools)",
    desc: "Automated ugali cooking system built for schools and large-scale feeding programs.",
    media: {
      type: "video" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781812292/ugali1_yu2gvi.png",
      link: "https://res.cloudinary.com/dw0l7b86h/video/upload/v1781811527/VID-20260617-WA0037_s2hofh.mp4",
    },
  },
  {
    title: "Incubators",
    desc: "Efficient egg incubation systems for poultry farmers with stable temperature control.",
    media: {
      type: "video" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782130618/Screenshot_from_2026-06-22_14-49-28_htcumo.png",
      link: "https://youtu.be/8MNoTzMbYHk?si=AvUSMjzvoLphrAFo",
    },
  },
    {
    title: "Manual (Kale) Sukumawiki slicer/chopper.",
    desc: "Reliable manual slicer for vegetables for mama mboga,schools,hispitals,households and the farm .",
    media: {
      type: "video" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782084472/Screenshot_from_2026-06-22_02-25-14_t4nrsd.png",
      link: "https://www.youtube.com/watch?v=ZC1v83GFMM8",
    },
  },
  {
    title: "Stand Cookers",
    desc: "Heavy-duty stand cookers built for institutions, hotels, and large kitchens.",
    media: {
      type: "image" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810926/vlcsnap-2026-06-17-04h22m35s780_vnqfwm.png",
      link: "#",
    },
  },
  {
    title: "Cooler Repair Systems",
    desc: "Professional repair and restoration of coolers for homes, shops, and businesses.",
    media: {
      type: "image" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810937/vlcsnap-2026-06-17-04h20m14s969_xll1t2.png",
      link: "#",
    },
  },
    {
    title: "Our Glass recycling and Mill machines",
    desc: "Reliable diagnostics and repair services for domestic and commercial refrigeration systems.",
    media: {
      type: "video" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1782083758/Screenshot_from_2026-06-22_02-13-03_ofhbgm.png",
      link: "https://www.youtube.com/watch?v=mzOCQiSs1J4",
    },
  },
  {
    title: "Fridge & Freezer Repairs",
    desc: "Reliable diagnostics and repair services for domestic and commercial refrigeration systems.",
    media: {
      type: "image" as const,
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810909/vlcsnap-2026-06-17-04h21m07s373_y18zrb.png",
      link: "#",
    },
  },

];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Institutions Served" },
  { value: "500+", label: "Repairs Done" },
  { value: "100%", label: "Satisfaction Rate" },
];

const institutions = [
  {
    id: 1,
    name: "Kereri Girls High School",
    projects: ["Ugali Cooking Machine (heavy duty)", "Sukuma wiki Cutting Machine (Automatic)", "Cooler Repair"],
  },
  {
    id: 2,
    name: "Homa Bay Boys High School",
    projects: ["Sukuma wiki Cutting Machine (Automatic)"],
  },
  {
    id: 3,
    name: "Kebirigo High School",
    projects: ["Sukuma wiki Cutting Machine (Automatic)"],
  },
   {
    id: 4,
    name: "Christa Marianne Hospital",
    projects: ["Ugali Cooking Machine (heavy duty)", "Cooler Repair", "Solar Heater Repair"],
  },
    {
    id: 5,
    name: "Kisii High School (Kisii School)",
    projects: ["Ugali Cooking Machine (heavy duty)", "Sukuma wiki Cutting Machine (Automatic)"],
  },
  {
    id: 6,
    name: "Agoro Sare High School",
    projects: ["Ugali Cooking Machine (heavy duty)", "Sukuma wiki Cutting Machine (Automatic)"],
  },
  {
    id: 7,
    name: "Gekano Girls High School",
    projects: ["Ugali Cooking Machine (heavy duty)", "Sukuma wiki Cutting Machine (Automatic)"],
  },
 
];

function MediaCard({ item }: { item: typeof inventions[0] }) {
  const isVideo = item.media.type === "video";

  return (
    <div className="media-card">
      <a
        href={item.media.link !== "#" ? item.media.link : undefined}
        target={item.media.link !== "#" ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`media-card-visual${isVideo ? " media-card-visual--video" : ""}`}
        aria-label={isVideo ? `Play video: ${item.title}` : item.title}
        onClick={item.media.link === "#" ? (e) => e.preventDefault() : undefined}
      >
        <img
          src={item.media.url}
          alt={item.title}
          loading="lazy"
          className="media-card-img"
        />
        {isVideo && (
          <div className="video-play-overlay">
            <div className="video-play-btn" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
        )}
      </a>
      <div className="media-card-belt">
        <span className="media-card-title">{item.title}</span>
        <p className="media-card-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [institutionsExpanded, setInstitutionsExpanded] = useState(false);
  const visibleInstitutions = institutionsExpanded ? institutions : institutions.slice(0, 4);

  return (
    <>
      <SEO
        title="Karuworks the best engineering and fabrication company in Kisii & Kenya"
        description="Karuworks builds innovative software, robotics, and creative digital projects. We operate in and around Kisii, Nyamira, Kericho, Kisumu, Eldoret in Kenya"
        url="https://karuworks.com"
        image="https://karuworks.com/logo.png"
        keywords="karuworks,karu,kaluworks,fridge repair,repairs,kisii,engineering kisii, robotics, software, innovation"
      />
      <ImpactSEO />

      <div className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg">
            <img src="/pictures/hero.png" alt="" loading="eager" className="hero-bg-img" />
            <div className="hero-bg-overlay" />
          </div>
          <div className="hero-content container">
            <div className="hero-text">
              <span className="tag">About KARUWORKS</span>
              <h1>Innovating, Repairing, and Building Solutions <span className="highlight">for Africa</span></h1>
              <p>A Kenyan engineering company dedicated to innovation, appliance repair, machine fabrication, and industrial solutions.</p>
              <div className="hero-actions">
                <Link href="/services" className="btn btn-primary">Our Services</Link>
                <Link href="/contact" className="btn btn-secondary">Get a Quote</Link>
              </div>
              <div className="hero-trust">
                <span className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  10+ Years Experience
                </span>
                <span className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  500+ Repairs Done
                </span>
                <span className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  50+ Institutions
                </span>
              </div>
            </div>
          </div>
          <div className="hero-scroll-hint" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-banner">
          <div className="container">
            <div className="stats-grid">
              {stats.map(stat => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTITUTIONS */}
        <section className="section section-alt institutions-section">
          <div className="container">
            <div className="section-title">
              <span className="tag">Trusted By</span>
              <h2>Where We Have Made Life and Work Easier</h2>
              <span className="section-accent" />
              <p>Schools, hospitals, and institutions across Kenya trust KARUWORKS for reliable engineering solutions.</p>
            </div>
            <div className="institutions-grid">
              {visibleInstitutions.map(institution => (
                <div className="institution-card" key={institution.id}>
                  <div className="institution-card-header">
                    <span className="institution-verified">
                      <Verified size={16} />
                    </span>
                    <h3>{institution.name}</h3>
                  </div>
                  <ul className="institution-projects">
                    {institution.projects.map(project => (
                      <li key={project}>
                        <Check size={13} />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {institutions.length > 4 && (
              <div className="services-cta">
                <button
                  className="btn btn-outline"
                  onClick={() => setInstitutionsExpanded(prev => !prev)}
                >
                  {institutionsExpanded ? "Show Less" : `View All ${institutions.length} Institutions`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* INNOVATIONS */}
        <section className="section innovations-section">
          <div className="container">
            <div className="section-title">
              <span className="tag">Our Work</span>
              <h2>Our Inventions &amp; Innovations</h2>
              <span className="section-accent" />
              <p>We have engineered machines and solutions designed to improve efficiency in homes, schools, and industries across Kenya.</p>
            </div>

            <div className="media-cards-grid">
              {inventions.map(item => (
                <MediaCard key={item.title} item={item} />
              ))}
            </div>

            <div className="services-cta">
              <Link href="/services" className="btn btn-outline">View All Services</Link>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="cta-strip">
          <div className="container">
            <div className="cta-strip-inner">
              <div className="cta-strip-text">
                <h2>Need a Repair or Custom Machine?</h2>
                <p>We assess your equipment, give you a clear quote, and get it done — fast.</p>
              </div>
              <div className="cta-strip-actions">
                <a href="tel:+254708458281" className="btn btn-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/254708458281?text=Hello%20KARUWORKS%2C%20I%20need%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.1 1.51 5.828L.055 23.45a.5.5 0 0 0 .612.612l5.638-1.455A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.06-1.377l-.363-.215-3.764.97.997-3.644-.236-.375A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
