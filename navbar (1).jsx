import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "About", href: "#" },
  {
    label: "Marketing",
    dropdown: ["SEO", "Social Media", "Email Marketing", "PPC Ads"],
  },
  {
    label: "Development",
    dropdown: ["Web Development", "App Development", "E-Commerce", "CMS"],
  },
  { label: "Dropshipping", href: "#" },
  { label: "Portfolio", href: "#" },
  {
    label: "Artificial Intelligence",
    dropdown: ["AI Consulting", "Chatbots", "Automation", "ML Solutions"],
  },
  { label: "Contact", href: "#" },
];

function DropdownMenu({ items, visible }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        border: "1px solid #2a2a2a",
        borderRadius: "10px",
        padding: "8px 0",
        minWidth: "190px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        transformOrigin: "top center",
        zIndex: 1000,
        boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
      }}
    >
      {items.map((item) => (
        <a
          key={item}
          href="#"
          style={{
            display: "block",
            padding: "10px 20px",
            color: "#ccc",
            textDecoration: "none",
            fontSize: "13px",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "0.03em",
            transition: "color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#C8F135";
            e.target.style.background = "#1a1a1a";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#ccc";
            e.target.style.background = "transparent";
          }}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <nav
        style={{
          background: "#0a0a0a",
          borderBottom: "1px solid #1e1e1e",
          position: "sticky",
          top: 0,
          zIndex: 999,
          fontFamily: "'Syne', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
            height: "70px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "22px",
                letterSpacing: "-0.5px",
              }}
            >
              DigiRocket
            </span>
            <span
              style={{
                color: "#C8F135",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              technologies
            </span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <a
                  href={item.href || "#"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "#bbb",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    padding: "6px 12px",
                    borderRadius: "6px",
                    transition: "color 0.15s, background 0.15s",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "#161616";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#bbb";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform:
                          activeDropdown === item.label
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        transition: "transform 0.2s",
                        opacity: 0.6,
                      }}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
                {item.dropdown && (
                  <DropdownMenu
                    items={item.dropdown}
                    visible={activeDropdown === item.label}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            style={{
              background: "#C8F135",
              color: "#0a0a0a",
              padding: "11px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "13.5px",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              transition: "background 0.2s, transform 0.15s",
              boxShadow: "0 0 20px rgba(200,241,53,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d6ff3a";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C8F135";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get In Touch
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#fff",
            }}
            className="hamburger"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              background: "#0d0d0d",
              borderTop: "1px solid #1e1e1e",
              padding: "16px 24px 24px",
            }}
          >
            {navItems.map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid #1a1a1a",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    item.dropdown
                      ? setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      : null
                  }
                >
                  <a
                    href={item.href || "#"}
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform:
                          mobileExpanded === item.label
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        transition: "transform 0.2s",
                        color: "#666",
                      }}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                {item.dropdown && mobileExpanded === item.label && (
                  <div style={{ paddingLeft: "16px" }}>
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        style={{
                          display: "block",
                          padding: "10px 0",
                          color: "#777",
                          textDecoration: "none",
                          fontSize: "13px",
                          fontFamily: "'Syne', sans-serif",
                          borderBottom: "1px solid #151515",
                        }}
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              style={{
                display: "block",
                marginTop: "20px",
                background: "#C8F135",
                color: "#0a0a0a",
                padding: "13px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
                textAlign: "center",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Get In Touch
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
        }
      `}</style>

      {/* Preview Content */}
      <div style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #111 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "'Syne', sans-serif",
        color: "#fff",
        textAlign: "center",
        padding: "40px"
      }}>
        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#C8F135", textTransform: "uppercase", fontWeight: 600 }}>Navbar Preview</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
          Tera Navbar<br />
          <span style={{ color: "#C8F135" }}>Ready Hai Bhai! 🚀</span>
        </h1>
        <p style={{ color: "#555", maxWidth: "400px", lineHeight: 1.7, fontSize: "15px" }}>
          Hover on the nav items above to see dropdowns. Mobile responsive bhi hai — screen chhota karo try karne ke liye.
        </p>
      </div>
    </>
  );
}
