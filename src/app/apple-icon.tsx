import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d2818 0%, #1a4731 100%)",
          borderRadius: 40,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6C20 6 10 12 10 21C10 27.6 14.5 33 20 33C25.5 33 30 27.6 30 21C30 12 20 6 20 6Z"
            fill="#52b788"
          />
          <path
            d="M20 10C20 10 14 15 14 21C14 24.8 16.7 28 20 28C23.3 28 26 24.8 26 21C26 15 20 10 20 10Z"
            fill="#95d5b2"
          />
          <line
            x1="20"
            y1="16"
            x2="20"
            y2="31"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="22"
            x2="17"
            y2="19"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="26"
            x2="23"
            y2="23"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
