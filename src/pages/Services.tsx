import "./Services.css";

const servicesList = [
  {
    id: "appliances",
    title: "Home Appliance Repair",
    subtitle: "Fast, reliable, and affordable",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0 4h14m-4-3v6"/>
      </svg>
    ),
    items: [
      "Refrigerators and Freezers",
      "Washing Machines & Dryers",
      "Cookers, Ovens & Microwaves",
      "Water Dispensers",
      "Dishwashers",
      "Air Conditioners & Fans",
      "Electric Irons & Small Appliances",
      "Deep Fryers & Blenders",
    ],
  },
  {
    id: "fabrication",
    title: "Machine Fabrication",
    subtitle: "Custom-built for your needs",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    items: [
      "Agro-processing Machines (Maize Mills, Threshers)",
      "Food Processing Equipment eg. Ugali cooker Chapati/Roti maker",
      "School Workshop Machinery",
      "Metal Fabrication & Welding",
      "Custom Industrial Frames & Structures",
      "Poultry & Livestock Equipment",
    ],
  },
  {
    id: "solar",
    title: "Solar & Energy Solutions",
    subtitle: "Clean, affordable energy for all",
    heroImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    items: [
      "Solar Panel Installation & Maintenance",
      "Solar Water Heater Installation",
      "Off-grid & Hybrid Solar Systems",
      "Solar-powered Borehole Pumps",
      "LED Lighting Upgrades",
      "Backup Battery Systems",
      "Energy Audits & Consulting",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Installations",
    subtitle: "Powering businesses forward",
    heroImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/>
        <line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/>
        <line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/>
      </svg>
    ),
    items: [
      "Borehole Pumping Systems",
      "Recoiling and Rewinding",
      "Water Reticulation & Piping in systems",
      "Industrial Electrical Installations",
      "Generator Installations & Servicing",
      "CCTV & Security Systems",
      "Irrigation System Setup",
      "Workshop Equipment Installation",
      "Fire Suppression Systems",
    ],
  },
  {
    id: "electronics",
    title: "Electronic Repair",
    subtitle: "Precision diagnostics and repair",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    items: [
      "Circuit Board Diagnostics & Repair",
      "TV & Monitor Repair",
      "Audio Equipment Servicing",
      "UPS & Inverter Repair",
      "High Quality Custom Made Inverters",
      "Laptop & Desktop Repair",
      "Printer & Photocopier Servicing",
    ],
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <div className="page-hero services-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="tag">What We Do</span>
          <h1>Our Services</h1>
          <p>Comprehensive engineering solutions for homes, schools, institutions, and businesses across Kenya.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {servicesList.map((svc, index) => (
              <div
                className={`service-row${index % 2 === 1 ? " reverse" : ""}`}
                key={svc.id}
                id={svc.id}
              >
                <div className="service-row-img">
                  <img src={svc.heroImage} alt={svc.title} />
                  <div className="service-row-img-overlay" />
                </div>
                <div className="service-row-content">
                  <div className="service-row-icon">{svc.icon}</div>
                  <span className="tag">{svc.subtitle}</span>
                  <h2>{svc.title}</h2>
                  <span className="section-accent" style={{ margin: "12px 0 20px", display: "block" }} />
                  <ul className="service-items">
                    {svc.items.map(item => (
                      <li key={item}>
                        <span className="svc-bullet">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="service-row-actions">
                    <a href="tel:+2547084588281" className="btn btn-primary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Get a Quote
                    </a>
                    <a
                      href={`https://wa.me/2547084588281?text=Hello%2C%20I%20need%20help%20with%20${encodeURIComponent(svc.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-note section section-alt">
        <div className="container">
          <div className="pricing-inner">
            <div className="pricing-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <h3>Transparent, Upfront Pricing</h3>
              <p>We assess your equipment first, then give you a clear quote — no surprises, no hidden costs. All repairs come with a 3-month warranty.</p>
            </div>
            <a href="/contact" className="btn btn-primary">Request Assessment</a>
          </div>
        </div>
      </section>
    </div>
  );
}
