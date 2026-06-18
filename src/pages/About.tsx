import "./About.css";
import { CheckCircleIcon,SchoolIcon } from "lucide-react";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Integrity",
    desc: "We are honest about what we can fix, how long it takes, and what it costs. No hidden charges.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: "Excellence",
    desc: "Every job, big or small, receives the same level of care and technical precision.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Community",
    desc: "We invest in local talent, support schools, and contribute to Kenya's technical workforce.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
    title: "Sustainability",
    desc: "Our recycling programs and solar solutions contribute to a greener, more resilient Africa.",
  },
];

const team = [
  {
    name: "Staff #1",
    role: "Founder & Lead Engineer",
    image: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810882/vlcsnap-2026-06-17-04h23m03s833_jui5ru.png",
  },
  {
    name: "Staff #2",
    role: "Operations Manager",
    image: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781811395/IMG-20260616-WA0001_c655un.jpg",
  },
  {
    name: "Staff #3 ",
    role: "Senior Technician",
    image: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781811392/IMG-20260616-WA0007_vrpx21.jpg",
  },
  {
    name: "Staff #4",
    role: "Solar & Electrical Lead",
    image: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810844/vlcsnap-2026-06-17-04h25m11s196_yjt5f5.png",
  },
];

export default function About() {
  return (
    <div className="about">
      <div className="page-hero about-hero">
        <img src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781810910/vlcsnap-2026-06-17-04h23m05s409_hnhcmz.png" alt="Karu works staff repairing a leaking gas cooker at kisii school" className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="tag">About Us</span>
          <h1>Who We Are</h1>
          <p>A Kenyan engineering company built on innovation, integrity, and a commitment to solving real problems for real people.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-text">
              <span className="tag">Our Story</span>
              <h2>Built in Kenya, Built for Africa</h2>
              <span className="section-accent" style={{ margin: "12px 0 20px", display: "block" }} />
              <p>KARUWORKS was founded with a clear purpose: to bring world-class engineering expertise to everyday Kenyan homes and businesses. Our founder, Joseph Karua, started the company after recognizing a critical gap — people were throwing away appliances that could easily be repaired, and businesses struggled to find reliable technical partners.</p>
              <p style={{ marginTop: "16px" }}>Today, KARUWORKS is a trusted name across Nairobi and beyond. We combine formal engineering training with practical, hands-on problem solving to deliver results that last. Whether it's a broken fridge in Karen or a custom fabrication project in Thika, we show up with the right skills and the right attitude.</p>
            </div>
            <div className="about-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80"
                alt="KARUWORKS workshop"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To provide affordable, reliable engineering solutions that empower Kenyan homes, schools, and businesses — reducing waste and building technical capacity across Africa.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon vision">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become Africa's leading community-focused engineering company — known for innovation, sustainability, and a genuine commitment to improving lives through technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <span className="section-accent" />
            <p>These aren't just words on a wall. They guide every decision, every repair, and every customer interaction.</p>
          </div>
          <div className="grid-4 values-grid">
            {values.map(v => (
              <div className="card value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Meet the Team</h2>
            <span className="section-accent" />
            <p>Our people are our greatest asset — skilled, passionate, and dedicated to your satisfaction.</p>
          </div>
          <div className="grid-4 team-grid">
            {team.map(member => (
              <div className="team-card" key={member.name}>
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" className="team-img" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <div className="section-title">
            <h2>Certifications & Affiliations</h2>
            <span className="section-accent" />
            <p>We operate to the highest professional and regulatory standards in Kenya.</p>
          </div>
          <div className="cert-grid">
            {[
              "Kisii School (Sukuma Wiki Cutting Machine)",
              "Kereri Girls Kisii (Sukuma Wiki Cutting Machine)",
              "Kebirigo Boys (Sukuma Wiki Cutting Machine)",
              "HomaBay High School (Sukuma Wiki Cutting Machine)",
              "Agoro Sare High School (Sukuma Wiki Cutting Machine)",
              "Oyugi Ogango School",
              "Kisii School (Ugali Cooking Machine) Approved for use",
              "Kebirigo Boys (Ugali Cooking Machine) Approved fior use",
            ].map(cert => (
              <div className="cert-item" key={cert}>
                <CheckCircleIcon/>
                <span>{cert}</span>
                <SchoolIcon />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section certifications-section">
        <div className="container">
          <div className="section-title">
            <h2>Certifications & Affiliations</h2>
            <span className="section-accent" />
            <p>We operate to the highest professional and regulatory standards in Kenya.</p>
          </div>
          <div className="cert-grid">
            {[
              "Energy Regulatory Commission (ERC) Licensed",
              "National Construction Authority (NCA) Registered",
              "Kenya Bureau of Standards (KEBS) Compliant",
              "Institute of Engineers of Kenya (IEK) Member",
              "ISO 9001 Quality Management",
              "Kenya Power & Lighting Company Approved",
            ].map(cert => (
              <div className="cert-item" key={cert}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
