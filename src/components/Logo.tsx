import { Link } from "wouter";
import "./Logo.css";

interface LogoProps {
  variant?: "nav" | "footer" | "hero";
  linkTo?: string;
}

export default function Logo({ variant = "nav", linkTo = "/" }: LogoProps) {
  const inner = (
    <div className={`logo logo--${variant}`}>
      <div className="logo-mark">
        <span className="logo-mark-k">K</span>
        <span className="logo-mark-w">W</span>
      </div>
      <div className="logo-text-wrap">
        <span className="logo-wordmark">KARU<span>WORKS</span></span>
        <span className="logo-sub">Engineering Solutions</span>
      </div>
    </div>
  );

  return linkTo ? <Link href={linkTo} className="logo-link">{inner}</Link> : inner;
}
