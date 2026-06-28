import { ImageResponse } from "next/og";

export const alt = "Shreya Sawarn — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8f6f1",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#14141c",
              color: "#fffdf9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#3b4ee0",
              fontFamily: "monospace",
            }}
          >
            Software Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, color: "#14141c", lineHeight: 1.05 }}>
            Shreya Sawarn
          </div>
          <div style={{ fontSize: 36, color: "#565663", marginTop: 16 }}>
            Backend &amp; Full-Stack Development
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 24,
            color: "#565663",
            fontFamily: "monospace",
          }}
        >
          <span>Node.js</span>
          <span style={{ color: "#3b4ee0" }}>•</span>
          <span>MongoDB</span>
          <span style={{ color: "#3b4ee0" }}>•</span>
          <span>280+ LeetCode</span>
          <span style={{ color: "#3b4ee0" }}>•</span>
          <span>CGPA 8.9</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
