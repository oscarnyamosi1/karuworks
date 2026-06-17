import { Link } from "wouter";
import "./Home.css";
import React from "react";

interface Invention {
  title: string;
  desc: string;
  media: {
    type: "image" | "video";
    url: string;
    link: string;
  };

}

const inventions: Invention[] = [
  {
    title: "Sukumawiki Cutting Machine",
    desc: "Designed for fast, uniform cutting of sukumawiki in bulk for homes, schools, and institutions.",
    media: {
      type: "image",
      url: "/pictures/skuma1.png", // replace later
      link: "https://your-video-or-demo-link.com",
    },
  },
  {
    title: "Ugali Cooking Machine (Schools)",
    desc: "Automated ugali cooking system built for schools and large-scale feeding programs.",
    media: {
      type: "video",
      url: "/pictures/ugali1.png", // youtube thumbnail
      link: "https://youtube.com/watch?v=VIDEO_ID",
    },
  },
  {
    title: "Incubators",
    desc: "Efficient egg incubation systems for poultry farmers with stable temperature control.",
    media: {
      type: "image",
      url: "/placeholders/incubator.jpg",
      link: "#",
    },
  },
  {
    title: "Stand Cookers",
    desc: "Heavy-duty stand cookers built for institutions, hotels, and large kitchens.",
    media: {
      type: "image",
      url: "/placeholders/stand-cooker.jpg",
      link: "#",
    },
  },
  {
    title: "Cooler Repair Systems",
    desc: "Professional repair and restoration of coolers for homes, shops, and businesses.",
    media: {
      type: "image",
      url: "/pictures/cooler-repair.png",
      link: "#",
    },
  },
  {
    title: "Fridge & Freezer Repairs",
    desc: "Reliable diagnostics and repair services for domestic and commercial refrigeration systems.",
    media: {
      type: "image",
      url: "/pictures/freezer-repair.png",
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

export default function Home() {
  return (
    <div className="home">

      {/* HERO (unchanged) */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <img src="/pictures/hero.png" loading="eager" className="hero-overlay" />
        </div>

        <div className="hero-content container">
          <div className="hero-text">
            <span className="tag">About KARUWORKS</span>
            <h1>Innovating, Repairing, and Building Solutions <span className="highlight">for Africa</span></h1>
            <p>A Kenyan engineering company dedicated to innovation, appliance repair, machine fabrication, and industrial solutions.</p>

            <div className="hero-actions">
              <a href="/services" className="btn btn-primary">Our Work</a>
              <a href="/contact" className="btn btn-secondary">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS (unchanged) */}
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

      {/* INNOVATIONS SECTION (UPDATED) */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Inventions & Innovations</h2>
            <span className="section-accent" />
            <p>
              Locally engineered machines and solutions designed to improve efficiency in homes,
              schools, and industries across Kenya.
            </p>
          </div>

<div className="grid-3 services-grid">
  {inventions.map(item => (
    <div className="card service-card invention-card" key={item.title}>

      {/* MEDIA SECTION */}
      <a
        href={item.media.link}
        target="_blank"
        rel="noopener noreferrer"
        className="invention-media"
      >
        <div className="media-wrapper">

          {/* SQUARE IMAGE CONTAINER */}
          <div className="media-square">
            <img
              src={item.media.url}
              alt={item.title}
              loading="lazy"
              className="invention-img"
            />

            {/* VIDEO BADGE */}
            {item.media.type === "video" && (
              <div className="video-badge">
                ▶ Play Video
              </div>
            )}
          </div>

        </div>
      </a>

      {/* TEXT */}
      <h3>{item.title}</h3>
      <p>{item.desc}</p>

    </div>
  ))}
</div>
          <div className="services-cta">
            <Link href="/services" className="btn btn-outline">
              View More Innovations
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

