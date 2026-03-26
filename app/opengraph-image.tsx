import { ImageResponse } from "next/og";

export const alt = "Metal-Blanks.com — Precision-cut metal blanks";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Layers icon as SVG */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </svg>

        <div
          style={{
            marginTop: 32,
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          Metal-Blanks
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "#a1a1aa",
            letterSpacing: "0.05em",
          }}
        >
          Cut to Size. Shipped Fast.
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 24,
            fontSize: 18,
            color: "#71717a",
          }}
        >
          <span>Steel</span>
          <span style={{ color: "#3f3f46" }}>|</span>
          <span>Aluminum</span>
          <span style={{ color: "#3f3f46" }}>|</span>
          <span>Copper</span>
          <span style={{ color: "#3f3f46" }}>|</span>
          <span>Brass</span>
          <span style={{ color: "#3f3f46" }}>|</span>
          <span>Stainless</span>
          <span style={{ color: "#3f3f46" }}>|</span>
          <span>Titanium</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
