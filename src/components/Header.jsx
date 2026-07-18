import React from "react";

export default function Header({ title }) {
  return (
    <div
      className="pdf-header"
      style={{
        background: "#fff",
        border: "2px solid #d4af37",
        borderRadius: "10px",
        padding: "12px",
        marginBottom: "15px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Top */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "2px solid #d4af37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "#fff",
            flexShrink: 0,
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            crossOrigin="anonymous"
            loading="eager"
            onError={(e) => {
              e.target.style.display = "none";
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Company */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "#0b3d91" }}>
              AL MUKARRAM
            </span>{" "}
            <span style={{ color: "#d4af37" }}>
              TRAVEL & TOURS
            </span>
          </div>

          <div
            style={{
              width: "120px",
              height: "3px",
              background: "#d4af37",
              margin: "8px auto",
            }}
          />

          <div
            style={{
              fontSize: "11px",
              color: "#0b3d91",
              fontWeight: "600",
            }}
          >
            Shop No 30, Hoor Centre Jodia Bazar
            <br />
            Karachi
          </div>

          <div
            style={{
              marginTop: "5px",
              fontSize: "11px",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "#003366" }}>
              📧 info@gmail.com
            </span>

            <span
              style={{
                margin: "0 8px",
                color: "#999",
              }}
            >
              |
            </span>

            <span style={{ color: "#198754" }}>
              ☎ 0324-2163293
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "#d4af37",
          margin: "10px 0",
        }}
      />

      {/* Title */}
      <div
        style={{
          background: "#0b3d91",
          color: "#fff",
          textAlign: "center",
          padding: "8px",
          borderRadius: "6px",
          fontSize: "16px",
          fontWeight: "bold",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </div>
    </div>
  );
}