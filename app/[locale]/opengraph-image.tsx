import { ImageResponse } from "next/og";

export const alt = "Marko Moev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "en" ? "A website for your business." : "Сайт за твоя бизнес.";
  const name = "Marko Moev";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#cfe6f8",
          color: "#0b1f3a",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#0b1f3a",
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 960 }}>
          {title}
        </div>
        <div style={{ fontSize: 24, color: "#1f5fd6" }}>markomoev.com</div>
      </div>
    ),
    { ...size }
  );
}
