import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#050506",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: "#6b6b72",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          SHRIJIS Labs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#f5f5f7",
            fontFamily: "sans-serif",
            lineHeight: 1.15,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
