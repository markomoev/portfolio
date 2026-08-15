import { ImageResponse } from "next/og";

export const alt = "Марко Моев";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "A website you can change yourself afterwards."
      : "Сайт, който после можеш сам да променяш.";
  const name = locale === "en" ? "Marko Moev" : "Марко Моев";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F5F5F2",
          color: "#12141A",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B6F76" }}>
          {name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 960 }}>
          {title}
        </div>
        <div style={{ fontSize: 24, color: "#1F4DFF" }}>markomoev.com</div>
      </div>
    ),
    { ...size }
  );
}
