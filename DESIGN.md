---
name: Marko Moev
description: Daylight shop-window marketing for local-business websites — sky paper, navy vinyl, indigo for action and atmosphere, yellow and red only as marks.
colors:
  glass: "#cfe6f8"
  vinyl: "#0b1f3a"
  sticker: "#ffd400"
  burst: "#d13228"
  decal: "#1f5fd6"
  flag: "#ff6a1a"
  neon: "#3d7cff"
  edge: "#a8cce6"
  paper: "#cfe6f8"
typography:
  display:
    fontFamily: "Sofia Sans Extra Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, 8.4vw, 96px)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
    fontFeature: '"locl" 1, "kern" 1'
  headline:
    fontFamily: "Sofia Sans Extra Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(36px, 6vw, 72px)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Sofia Sans Extra Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 30px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  wordmark:
    fontFamily: "Sofia Sans Extra Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  marquee:
    fontFamily: "Sofia Sans Extra Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(20px, 2.4vw, 28px)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  question:
    fontFamily: "Sofia Sans Extra Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(18px, 2vw, 24px)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  lead:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.4vw, 19px)"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: '"locl" 1, "kern" 1'
  small:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.04em"
  caption:
    fontFamily: "Sofia Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
  hand:
    fontFamily: "Shantell Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.05
rounded:
  none: "0px"
  sheet: "28px"
  pill: "9999px"
spacing:
  taut: "14px"
  tight: "16px"
  gap: "24px"
  card: "28px"
  gutter: "clamp(16px, 3vw, 36px)"
  section: "clamp(64px, 9vw, 112px)"
components:
  button-sticker:
    backgroundColor: "{colors.sticker}"
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-sticker-hover:
    backgroundColor: "{colors.sticker}"
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-vinyl:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-vinyl-disabled:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.vinyl}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  input-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.vinyl}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
---

# Design System: Marko Moev

## Overview

**Creative North Star: "The Shop Window"**

The marketing surface is a plate-glass storefront, not a freelancer’s card stack. Daylight glass is the page ground. Navy vinyl is the lettering cut onto that glass. Proof is one real object — the Plenty phone — and a quiet line of promises. The free call is a vinyl control, not a pile of stickers. The visitor should feel they are looking at a local business’s window, then booking the consultation.

Density is low. The first viewport is glass, one vinyl line, the phone, and air. Later bands stay glass or one navy rest. Secondary copy tints from vinyl; it is never a neutral gray.

Confirmed rejections: a developer-resume register; same-size icon-plus-heading-plus-text cards as the page structure; a kicker or eyebrow above a heading; a system display face standing in for the vinyl cut; handwriting used as the display voice; a full-bleed interior photograph behind the hero; overlapping sticker bursts, neon tubes, and tape flags.

**Key Characteristics:**
- Daylight sky paper with navy vinyl as ink and lettering
- Indigo for action, atmosphere, and the work band; yellow and red only as marks
- Extra-condensed grotesque on glass; handwriting used sparingly, never as a heading
- Overlap of type and the phone, not a cluster of printed objects
- Square-cut paper; pills only in the fascia

## Colors

A closed set: one sky, one vinyl, one indigo. Yellow and red are marks, never fields. `--paper` aliases sky; `--ink` aliases vinyl. Do not invent a second cream or a second navy.

### Primary
- **Indigo**: Fascia and hero consultation pills, the accent word in the headline, the work band, FAQ open state, focus-adjacent action, and the sky wash. The color that operates.

### Neutral
- **Daylight Sky**: Page ground. Chromatic enough to read as weather, not gray paper.
- **Navy Vinyl**: Display ink, process and footer bands. All body and placeholder text tints from this hue (`/80`, `/70`, `/60`, `/40`), never from a gray.
- **Sticker Paper**: White sheets behind work frames and form fields.
- **Sky Edge**: Hairline borders mixed from the sky.

### Marks
- **Yellow**: Marquee diamonds, selection, the 3px focus ring, a stripe on the form, process labels. Never a section fill.
- **Red**: About accent word, live-site links, error copy. Never a section fill.

**The One-Idea Rule.** Indigo owns action and atmosphere. Yellow and red price and punctuate. Vinyl letters. Sky rests. Do not wash bands in yellow or red.

## Typography

**Display Font:** Sofia Sans Extra Condensed (ui-sans-serif, system-ui)
**Body Font:** Sofia Sans (ui-sans-serif, system-ui)
**Hand Font:** Shantell Sans (ui-sans-serif, system-ui)

**Character:** Vinyl is extra-condensed, black, uppercase, tight (−0.04em, line-height 0.82) — lettering cut onto glass. Body is the same family at human width. Handwriting is a shop marker; it never carries a section title.

### Hierarchy
- **Display** (900, `clamp(40px, 8.4vw, 96px)`, 0.82): Hero vinyl only. Cap at ~11ch.
- **Headline** (900, `clamp(36px, 6vw, 72px)`, 0.82): Section titles on glass or on the navy band.
- **Title** (900, `clamp(22px, 2.2vw, 30px)`, 0.9): Service, work, process, perk lines.
- **Question** (900, `clamp(18px, 2vw, 24px)`, 1.05): FAQ questions.
- **Lead** (400, `clamp(16px, 1.4vw, 19px)`, 1.625): Hero and section subheads. Measure 34–52ch.
- **Body** (400, 16px, 1.625): Supporting copy.
- **Small** (400, 15px, 1.625): Lists, work blurbs, form fields, FAQ answers.
- **Label** (800, 13px, 0.04em, uppercase): Fascia CTA, hero CTA, form submit, footer CTA. Form field captions are 13px bold, not uppercase.
- **Caption** (600, 13px, 0.08em): Sill, available status, footer meta.
- **Hand** (600, 15px): Footer column titles and the public email line only.

### Named Rules
**The Vinyl Voice Rule.** Sofia Sans Extra Condensed at 900 is the only display voice. Do not set headlines in the hand face, in the body face, or in a system grotesque.

**The Quiet Hand Rule.** Shantell Sans does not carry proof, CTAs, or section titles.

## Layout

The page is a stack of full-bleed bands, not a single max-width column with cards. Hero and fascia use a 1440px inner; content bands use 1280px; FAQ narrows to 860px. Horizontal gutter is `clamp(16px, 3vw, 36px)`. Vertical section padding is `clamp(64px, 9vw, 112px)`. Anchor offset is 7rem (`scroll-mt-28`).

Band rhythm: glass hero → a white marquee rule → glass services → glass work → glass about → a vinyl process band → glass FAQ → glass contact → vinyl footer. One navy rest; do not stack two filled bands.

The first viewport is a storefront without a photograph: glass field, vinyl headline left, Plenty phone right, vinyl CTA, a middot promise line, sill with city and available. Below the fold, type sits in 1- or 2- or 3-column grids (800px for services/process, 900px for work/about/contact/nav). Grids do not rotate sheets.

Heading-to-body gap is 12–16px (`mt-3` / `mt-4`). Heading-to-grid gap is `clamp(32px, 5vw, 56px)`. More space above a heading than below it.

The fascia collapses at 900px: desktop links and the brass pill hide; a vinyl round menu control opens a 28px-radius white sheet.

## Elevation & Depth

Depth is the phone on the sill and the navy band — not a card-shadow system. Service columns, work frames, process steps, and the contact panel are flat.

### Shadow Vocabulary
- **Sill object** (`drop-shadow: 0 18px 40px rgb(11 31 58 / 0.18)`): The phone on the window sill only.
- **Mobile sheet** (`box-shadow: 0 18px 40px rgb(11 31 58 / 0.28)`): The open menu dialog.

### Named Rules
**The Overlap-Over-Enclosure Rule.** If two facts belong together, let them share an edge or a middot line. Do not invent a shadowed rectangle or a sticker to hold them.

## Shapes

Shop paper is square-cut (`0`). That includes work frames, process steps, the contact panel, form fields, and footer icon buttons.

Two exceptions, and only these:
- **Fascia pills** (full radius): nav links, the brass consultation pill, the locale chip, the mobile menu button.
- **Mobile menu sheet** (28px): the only large radius on the marketing surface.

Icons are Lucide, 15–20px, stroke 2–2.4, one weight.

**The Sharp-Cut Rule.** If it is paper on the window, the corner is 0. Pills live in the fascia. Nothing else earns a radius.

## Components

Materials first: a control is vinyl type or the brass fascia pill — not a generic button with a theme color.

### Buttons
- **Shape:** Square-cut (`0`) for shop actions; full pill only in the fascia.
- **Sticker pill (fascia):** Brass fill, vinyl 13px extrabold uppercase, `10px 20px`, tracking 0.04em. Hover lifts 2px. Used once in the desktop nav.
- **Vinyl submit:** Navy fill, white 13px extrabold uppercase, `14px 24px`, square. Hero, form, footer, and mobile menu share this voice. Disabled drops to 60% opacity.
- **Ghost / text:** Vinyl 15px for “live site” and “case study”; vinyl headline underline with a 1px vinyl decoration for “all work.”

### Cards / Containers
- **Corner Style:** Square-cut (`0`)
- **Background:** Type on glass for services; white paper frames for work; vinyl for process; white panel for the form.
- **Shadow Strategy:** None at rest.
- **Border:** None on service columns (a 1px vinyl/20 hairline on top). Process steps use a 1px white/20 stroke. About and FAQ rows use a 1px vinyl/25 rule, not a box.
- **Internal Padding:** 0 on service columns; 12px frame on work; 24px on process steps; `clamp(22px, 3vw, 32px)` on the form panel.

### Inputs / Fields
- **Style:** White paper, 1px edge stroke, square, 15px vinyl, `12px 14px`. Placeholder is vinyl at 40%.
- **Focus:** Stroke shifts to vinyl. The global brass outline still applies for keyboard focus.
- **Error / Disabled:** Error copy is burst on a burst-tinted chip. Submit uses opacity 60% while sending.

### Navigation
- **Fascia:** Fixed, transparent on home, glass at 92% with a 1px edge hairline on inner pages. Wordmark is vinyl display `clamp(22px, 2.2vw, 28px)`. Links are 15px semibold vinyl at 80%, full color on hover. Break at 900px.
- **Mobile sheet:** White, 28px radius, 20px inset, vinyl 28px display links divided by edge hairlines, vinyl square for the call.
- **Footer:** Vinyl band. Column titles in hand at white/55. Links white at 80%, full white on hover. Icon buttons are 44px square with a 1px white/40 stroke.

### Marquee
White band, 1px edge top and bottom, vinyl display at 80% `clamp(20px, 2.4vw, 28px)`, 8px brass diamonds rotated 45deg. Scrolls 34s linear; frozen when motion is reduced.

## Do's and Don'ts

### Do:
- **Do** cut headlines in extra-condensed vinyl (900, −0.04em, line-height 0.82, uppercase) and keep the measure near 11–12ch.
- **Do** let the Plenty phone and the vinyl line carry the first viewport.
- **Do** tint secondary text from vinyl (`/80`, `/70`, `/60`, `/40`) and keep the 3px yellow focus ring.
- **Do** use one navy rest per stretch of the page, then return to glass.
- **Do** honor `prefers-reduced-motion`: no marquee, no reveal translation.

### Don't:
- **Don't** structure a page as same-size cards of icon plus heading plus text.
- **Don't** put a kicker or eyebrow above a heading — the vinyl line carries its own weight.
- **Don't** set headlines in Shantell Sans or in a system display face.
- **Don't** put a photograph, a sticker burst, a neon tube, or a tape flag in the hero.
- **Don't** wash sections in yellow or red.
- **Don't** round shop paper, and don't put a hard offset shadow (`4px 4px 0`) on it.
- **Don't** introduce a gray, a cream, or a second navy. Glass and vinyl are the neutrals.
