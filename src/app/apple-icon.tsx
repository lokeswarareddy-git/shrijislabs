import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050506",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            color: "#f5f5f7",
            fontFamily: "sans-serif",
            letterSpacing: -4,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
