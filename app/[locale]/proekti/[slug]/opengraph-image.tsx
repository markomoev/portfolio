import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/content/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  const headline = study
    ? locale === "en"
      ? study.headline.en
      : study.headline.bg
    : "";
  const name = study?.client.name ?? "Marko Moev";

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
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1f5fd6",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            maxWidth: 980,
            textTransform: "uppercase",
          }}
        >
          {headline}
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#1f5fd6" }}>markomoev.com</div>
      </div>
    ),
    { ...size }
  );
}
