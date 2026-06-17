import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="loader">
    
      <img src="/logo.png" alt="KaruWorks Logo" />
      <div className="loader-logo">
        Karu  <span>Works.</span>
      </div>

      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
    </div>
  );
}