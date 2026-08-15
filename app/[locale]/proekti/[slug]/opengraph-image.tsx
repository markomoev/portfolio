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
          backgroundColor: "#F5F5F2",
          color: "#12141A",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B6F76" }}>
          {name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
          {headline}
        </div>
        <div style={{ fontSize: 24, color: "#1F4DFF" }}>markomoev.com</div>
      </div>
    ),
    { ...size }
  );
}
