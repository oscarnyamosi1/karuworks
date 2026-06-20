import { Link } from "wouter";
import "./Home.css";
import React from "react";
// import Loader from "@/components/Loader";
import { Check, VenetianMask, Verified } from "lucide-react";
import SEO from "@/components/SEO"

// interface Invention {
//   title: string;
//   desc: string;
//   media: {
//     type: "image" | "video";
//     url: string;
//     link: string;
//   };

// }

const inventions = [
  {
    title: "Washing Machine Repair & Servicing",
    desc: "Designed for fast, uniform cutting of sukumawiki in bulk for homes, schools, and institutions.",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810794/vlcsnap-2026-06-17-04h16m29s408_ncpqkd.png", // replace later
      link: "https://your-video-or-demo-link.com",
    },
  },
  {
    title: "Sukumawiki Cutting Machine",
    desc: "Designed for fast, uniform cutting of sukumawiki in bulk for homes, schools, and institutions.",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781812282/skuma1_wg0lpp.png", // replace later
      link: "https://your-video-or-demo-link.com",
    },
  },
  {
    title: "Ugali Cooking Machine (Schools)",
    desc: "Automated ugali cooking system built for schools and large-scale feeding programs.",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781812292/ugali1_yu2gvi.png", // youtube thumbnail
      link: "https://res.cloudinary.com/dw0l7b86h/video/upload/v1781811527/VID-20260617-WA0037_s2hofh.mp4",
    },
  },
  {
    title: "Incubators",
    desc: "Efficient egg incubation systems for poultry farmers with stable temperature control.",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810913/vlcsnap-2026-06-17-04h23m32s438_vo51zg.png",
      link: "#",
    },
  },
  {
    title: "Stand Cookers",
    desc: "Heavy-duty stand cookers built for institutions, hotels, and large kitchens.",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810926/vlcsnap-2026-06-17-04h22m35s780_vnqfwm.png",
      link: "#",
    },
  },
  {
    title: "Cooler Repair Systems",
    desc: "Professional repair and restoration of coolers for homes, shops, and businesses.",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810937/vlcsnap-2026-06-17-04h20m14s969_xll1t2.png",
      link: "#",
    },
  },
  {
    title: "Fridge & Freezer Repairs",
    desc: "Reliable diagnostics and repair services for domestic and commercial refrigeration systems.",
    media: {
      type: "image",
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

// interface Project {
//   name:string,
//   description?:string;
// }

// interface Institution {
//   name:string,
//   projects?:Project[];
// }

const institutions = [
  {
    id:1,
    name:"Kereri Girls High School ",
    projects:["Ugali Cooking Machine (heavy duty)",
      "Sukuma wiki Cutting Machine (Automatic)",
      "Cooler Repair"]
  },
  {
    id:2,
    name:"Homa Bay Boys High School",
    projects:[
      "Sukuma wiki Cutting Machine (Automatic)",]
  },
  {
    id:3,
    name:"Kebirigo High School",
    projects:[
      "Sukuma wiki Cutting Machine (Automatic)",]
  },
  
  {
  id:4,
  name:"Gekano Girls High School",
  projects:["Ugali Cooking Machine (heavy duty)",
    "Sukuma wiki Cutting Machine (Automatic)",]
  },
  {
  id:5,
  name:"Kisii High School (Kisii School)",
  projects:["Ugali Cooking Machine (heavy duty)",
    "Sukuma wiki Cutting Machine (Automatic)",
   ]
  },
  {
  id:6,
  name:"Agoro Sare High School (Kisii School)",
  projects:["Ugali Cooking Machine (heavy duty)",
    "Sukuma wiki Cutting Machine (Automatic)",
    ]
  },
  {
  id:7,
  name:"Christa Marianne Hospital",
  projects:["Ugali Cooking Machine (heavy duty)",
    "Cooler Repair","Solar Heater Repair"]
  },
  
]



export default function Home() {
  return (
    <>
      {/* < Loader /> */}
      <SEO
        title="Karuworks the best engineering and fabrication company in Kisii & Kenya"
        description="Karuworks builds innovative software, robotics, and creative digital projects.We operate in and around Kisii,Nyamira ,Kericho,Kisumu,Eldoret in Kenya"
        url="https://karuworks.com"
        image="https://karuworks.com/og-image.png"
        keywords="karuworks,karu,kaluworks,fridge repair,repairs,kisii,engineering kisii, robotics, software, innovation"
      />

      <div className="home">
        {/* HERO (unchanged) */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-overlay" />
            <img src="/pictures/hero.png" loading="lazy" className="hero-overlay" />
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

<section>
<div className="section-title">
  <h2>Where we have made life and work easier</h2>
  <span className="section-accent" />
  </div>
  
  <div className="container">        
    <ul className="service-items grid-2">
    {institutions.map(institution => (
      <li  key={institution.id}>
        <Verified />
        <span><h2>{institution.name}</h2></span>
        {institution.projects.map((project)=>(
          <span><Check /> {project}</span>
        )
        )}

      </li>
    ))}
    </ul>
  </div>
</section>

        {/* INNOVATIONS SECTION (UPDATED) */}
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h2>Our Inventions & Innovations</h2>
              <span className="section-accent" />
              <p>
                We have engineered machines and solutions designed to improve efficiency in homes,
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
    </>
  );
}

