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
          border: "1.5px solid #1e293b",
          borderRadius: "8px",
          color: "#38bdf8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 800,
          fontSize: "19px",
          letterSpacing: "-0.5px",
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  );
}
