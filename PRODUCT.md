# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of local businesses in Bulgaria — clinics, shops, salons, and service businesses — who need a website so customers can find them and get in touch. They are not looking to hire a developer on staff; they want a site launched and handed over.

Secondary, same job: English-speaking and international clients. English is a full translation of the Bulgarian pitch, not a different offer.

Success action for both: book a free consultation (contact form or email). This is a service site, not a hiring portfolio.

## Product Purpose

Marko Moev’s public site at [markomoev.com](https://markomoev.com). It explains what he builds, shows real work, and converts a visitor into a free call.

Success is a qualified enquiry: name, contact, business type, and enough context to schedule that call. The site is not meant to close a contract unattended.

## Positioning

Websites for local businesses in Bulgaria (and English-speaking clients): fast to launch, findable on Google, a fixed price before work starts, the client owns the code and access, training included.

A neighboring freelancer can also ship a Next.js site. They cannot truthfully copy Marko’s combination of local Bulgarian operating context, those delivery promises, and the two live local-business case studies.

The owner-run admin panel (“a website you can change yourself”) is **in progress**. It is a future capability, not a current included feature. Copy may mark it as coming soon; it must not be sold as something the client already gets.

## Operating Context

- Live marketing site, default language Bulgarian (`/bg`), English at `/en`. Default and `x-default` are Bulgarian.
- Home is a single long page: hero, services, work, about, process, FAQ, contact. Separate routes: `/proekti` (work index), `/proekti/[slug]` (case study), `/kontakt`, `/poveritelnost`.
- Enquiry goes through the contact form to email, or directly to `marko.moev.business@gmail.com`. Phone, Viber, and a booking URL are **omitted** until real values are supplied.
- Based in Lovech, Bulgaria; works nationwide and with remote English-speaking clients.
- Client work is handed off so the owner can run hosting, domain, and repository in their own name.
- Stack in this repo (not a product claim on the marketing site): Next.js App Router, TypeScript, Tailwind, i18n (`bg` / `en`), deployed on Vercel.

## Capabilities and Constraints

**Current offer**

- Three paid scopes: a website for the business (up to ~6 pages, SEO basics, Google Business, contact form); a landing page for a specific offer; a shop or appointment-booking system.
- Redesign of an existing site (keep content, rebuild UI, improve performance).
- Landing pages typically 3–7 days; larger sites 1–3 weeks, depending on content readiness.
- Hosting/domain: can deploy to Vercel and guide domain setup, or work with the client’s existing hosting.

**Operating promises (binding)**

- Fixed price in writing before start.
- Reply within 24 hours on working days, from Marko personally.
- 30 days of free revisions after launch.
- Training to manage content (video plus one call) — tied to the CMS when it ships; do not imply a live admin panel until then.
- The code and access are the client’s (domain, hosting, repository in their name).
- Free consultation; no commitment to proceed.

**Must not present as current product**

- Admin panel / CMS as an included, shipped feature. Coming-soon is allowed.
- Public prices. Unused Fiverr-style package tiers in locale files are not product truth.
- Phone, Viber, or calendar booking until real values replace the placeholders.
- Invented clients, testimonials, metrics, or case-study outcomes.

**Open**

- Phone number, Viber, and booking URL.
- Remaining case-study fields still marked `[ПОПЪЛНИ]` (years, durations, some problems/outcomes, extra Plenty decisions).
- No product-specific accessibility standard was set.

## Brand Commitments

- Name: **Marko Moev**. Site: markomoev.com. Email: `marko.moev.business@gmail.com`. GitHub: [github.com/markomoev](https://github.com/markomoev).
- Voice: first person, direct, no jargon. Bulgarian is the primary voice; English matches it rather than switching to a tech-portfolio register.
- Do not reposition the site as a developer resume or hiring portfolio.

## Evidence on Hand

Real and usable:

- **Stoykovmed** — live at [drstoykov.net](https://drstoykov.net/). Plastic surgery and aesthetics practice plus Deflamax products; split visitor flows, online booking, shop. Testimonial from Dr. Martin Stoykov (business owner).
- **Plenty** — live at [plenty.bg](https://www.plenty.bg/). Clothing store in Lovech; the site’s job is to bring people to the physical shop. No testimonial on file.
- Photos: `public/photos/portrait.JPG`, `public/photos/wide.JPG`. Work stills: `public/work/plenty-phone.png` (and related). Logos: `public/logos/stoykovmed.png`.
- Privacy policy page exists and is linked from the contact form.

Do not fabricate:

- Further clients, quotes, star ratings, traffic/revenue numbers, or filled-in case-study outcomes.
- Personal projects on `/lab` (Coinwise, Hustly) as client proof.

## Product Principles

1. **Sell the consultation, not a checkout.** The page earns a free call; it does not close the project.
2. **Only claim what already exists.** Coming-soon CMS is labeled as such; proof is live sites and one real testimonial.
3. **Same offer in both languages.** Bulgarian leads; English is not a second product.
4. **The client leaves able to run the site.** Ownership of code and access is part of the deal, not an upsell.
5. **Local-business problems first.** Findable on Google, clear offer, contact or visit — not a generic “modern web agency” pitch.
