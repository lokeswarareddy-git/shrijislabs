import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563eb",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "sans-serif",
            letterSpacing: -1,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
