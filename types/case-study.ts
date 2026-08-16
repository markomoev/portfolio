export type Localized = { bg: string; en: string };

export type CaseStudy = {
  slug: string;
  client: { name: string; city: string; industry: Localized; url?: string };
  year: number;
  duration: Localized;
  headline: Localized;
  context: Localized;
  problem: Localized;
  decisions: { what: Localized; why: Localized }[];
  outcome: Localized;
  facts?: { label: Localized; value: Localized }[];
  onSite?: Localized[];
  media: { src: string; alt: Localized; caption: Localized }[];
  stack: string[];
  testimonial?: { quote: Localized; author: string; role: Localized };
  featured: boolean;
};
