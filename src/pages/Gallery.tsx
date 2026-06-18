import { useState } from "react";
import "./Gallery.css";

const categories = ["All", "Appliance Repair", "Fabrication", "Solar", "Industrial", "Recycling"];

const galleryItems = [
  {
    id: 1,
    category: "Appliance Repair",
    title: "Fridge Repair",
    image:
      "/gallery/cooler-repair.png",
  },
  {
    id: 2,
    category: "Solar",
    title: "washing machine repair",
    image:
      "/gallery/vlcsnap-2026-06-17-04h24m27s421.png",
  },
  {
    id: 3,
    category: "Fabrication",
    title: "Custom Metal Frame",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    id: 4,
    category: "Industrial",
    title: "Borehole Pump Setup",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  },
  {
    id: 5,
    category: "Recycling",
    title: "Glass Recycling Processing",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 6,
    category: "Appliance Repair",
    title: "Cooker Repair",
    image:
      "/gallery/vlcsnap-2026-06-17-04h17m04s349.png",
  },
  {
    id: 7,
    category: "Fabrication",
    title: "Maize Thresher Build",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    id: 8,
    category: "Solar",
    title: "Off-grid Home System",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    id: 9,
    category: "Industrial",
    title: "Electrical Installation",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
  {
    id: 10,
    category: "Appliance Repair",
    title: "Cooker Repair",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    id: 11,
    category: "Recycling",
    title: "Glass Sorting",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  },
  {
    id: 12,
    category: "Fabrication",
    title: "Tank Fabrication",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<null | { image: string; title: string }>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="page-hero gallery-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="tag">Our Work</span>
          <h1>Project Gallery</h1>
          <p>A showcase of our engineering work across Kenya — from small appliance repairs to large industrial installations.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map(item => (
              <div
                className="gallery-item"
                key={item.id}
                onClick={() => setLightboxImg({ image: item.image, title: item.title })}
              >
                <div className="gallery-img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <span className="gallery-category">{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="gallery-zoom">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <p>No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.image.replace("w=600", "w=1200")} alt={lightboxImg.title} />
            <p>{lightboxImg.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
