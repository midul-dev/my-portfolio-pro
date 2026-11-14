import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          border: "1.5px solid #38bdf8",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontWeight: 800,
          fontSize: "14px",
          letterSpacing: "-0.5px",
        }}
      >
        <span style={{ color: "#38bdf8" }}>&lt;</span>
        <span style={{ color: "#ffffff", fontWeight: 900 }}>M</span>
        <span style={{ color: "#38bdf8" }}>/&gt;</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
