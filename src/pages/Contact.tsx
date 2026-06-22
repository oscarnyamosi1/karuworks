import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello KARUWORKS,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/254708458281?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <div className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="tag">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Reach out for repairs, quotes, or any enquiries. We typically respond within 2 hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>How to Reach Us</h2>
              <span className="section-accent" style={{ margin: "12px 0 24px", display: "block" }} />

              <div className="contact-cards">
                <a href="tel:+254708458281" className="contact-card contact-card-call">
                  <div className="contact-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-card-label">Direct Call</p>
                    <p className="contact-card-value">+254 708 458 281</p>
                    <p className="contact-card-sub">Mon–Sat, 8am–6pm</p>
                  </div>
                  <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/254708458281?text=Hello%20KARUWORKS%2C%20I%20need%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-whatsapp"
                >
                  <div className="contact-card-icon whatsapp">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.1 1.51 5.828L.055 23.45a.5.5 0 0 0 .612.612l5.638-1.455A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.06-1.377l-.363-.215-3.764.97.997-3.644-.236-.375A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-card-label">WhatsApp</p>
                    <p className="contact-card-value">Chat with Us</p>
                    <p className="contact-card-sub">Fast response guaranteed</p>
                  </div>
                  <svg className="contact-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>

                <div className="contact-card">
                  <div className="contact-card-icon email">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-card-label">Email</p>
                    <p className="contact-card-value">augustinebarongo639@gmail.com</p>
                    <p className="contact-card-sub">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon location">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-card-label">Location</p>
                    <p className="contact-card-value">Kisii, Kenya</p>
                    <p className="contact-card-sub">We also do on-site visits</p>
                  </div>
                </div>
              </div>

              <div className="hours-block">
                <h3>Working Hours</h3>
                <div className="hours-list">
                  <div className="hours-row"><span>Monday – Friday</span><span>8:00am – 6:00pm</span></div>
                  <div className="hours-row"><span>Saturday</span><span>8:00am – 4:00pm</span></div>
                  <div className="hours-row closed"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <h2>Send Us a Message</h2>
              <span className="section-accent" style={{ margin: "12px 0 24px", display: "block" }} />

              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>We've opened WhatsApp with your message. Our team will respond shortly.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Kamau" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 708 458 281" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Select a service...</option>
                      <option>Home Appliance Repair</option>
                      <option>Machine Fabrication</option>
                      <option>Solar Installation</option>
                      <option>Industrial Installation</option>
                      <option>Recycling Solutions</option>
                      <option>Electronic Repair</option>
                      <option>Other / Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Describe what you need help with..." required />
                  </div>
                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.1 1.51 5.828L.055 23.45a.5.5 0 0 0 .612.612l5.638-1.455A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.06-1.377l-.363-.215-3.764.97.997-3.644-.236-.375A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      Send via WhatsApp
                    </button>
                    <a href="tel:+254708458281" className="btn btn-call">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.57 5.57l1.24-1.24a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Or Call Us
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="map-section">
            <h2 className="map-title">Find Us</h2>
            <span className="section-accent" style={{ margin: "12px auto 32px", display: "block" }} />
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1782132914510!6m8!1m7!1s0hmCf7en9i273QLpMzc_xw!2m2!1d-0.6726254632892168!2d34.77380276900629!3f298.65959883964956!4f0!5f0.7820865974627469" 
                width="100%"
                height="420"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KARUWORKS Location - Nairobi, Kenya"
              />
            </div>
            <div className="map-actions">
              <a
                href="https://www.google.com/maps/search/Nairobi+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
