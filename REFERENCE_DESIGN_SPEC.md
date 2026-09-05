# REFERENCE DESIGN SPECIFICATION

**Reference URL analyzed:** https://www.phaedrasolutions.com/
**Analysis date:** 2026-09-05
**Purpose:** Document the *visual system and layout structure only*, so a developer can recreate the same design direction using entirely different content.

> **Scope notice**
> This document describes structure, geometry, colour, type and interaction rules. It intentionally contains **no** copy, imagery, logos, client names, testimonials, product data or contact details from the reference site. Wherever the reference used specific wording, this spec uses a neutral role name (e.g. "primary heading", "trust badge row").
>
> **Confidence labels used throughout:**
> - **[VERIFIED]** — read directly from the site's served HTML/CSS (Webflow-hosted stylesheets, `:root` custom properties, class rules).
> - **[ESTIMATED]** — inferred from rendered structure or from frequency analysis of the CSS; treat as a starting value to tune, not as fact.

**Platform note [VERIFIED]:** the reference is built on **Webflow**. Its breakpoints, container helpers and utility class names follow Webflow defaults. This matters because several numbers below (991px / 767px / 479px) are platform defaults rather than bespoke design decisions.

---

# 1. Overall Design Direction

### Brand impression
A technology services / digital engineering consultancy positioning itself as a **senior, enterprise-capable delivery partner** rather than a boutique studio. The design signals scale and credibility through repetition of proof devices (ratings, awards, press, metrics, named experts) far more than through decorative flourish.

### Design style
**Modern dark-mode technical corporate.** The system is built on a near-black canvas with a single high-chroma teal/aqua accent. It sits at the intersection of:

- **Corporate** — dense information, formal section ordering, heavy proof and credential emphasis.
- **Technical** — geometric grotesque type, tight numeric stat blocks, process timelines, comparison tables.
- **Premium** — generous vertical rhythm, restrained palette, soft glow effects instead of hard borders.

It is **not** playful, **not** editorial, and **not** minimal in the reductive sense — it is minimal in *palette* but maximal in *content density*.

### Target audience impression
Aimed at **B2B decision makers**: founders, CTOs, procurement and product leaders evaluating an engineering or outsourcing partner. The design assumes a comparison-shopping visitor and answers objections in sequence (capability → proof → process → cost → people → reassurance).

### Visual mood
Confident, dark, energetic-but-controlled. The luminous aqua accent against near-black reads as "engineering / AI / signal", giving the pages a slightly futuristic charge without tipping into sci-fi.

### Level of formality
**Moderately formal.** Professional and credential-led, but softened by rounded geometry, asymmetric card corners and occasional lowercase button labels. Not stiff-corporate, not casual.

### Use of whitespace
Whitespace is used **vertically, not horizontally**. Sections are separated by large vertical padding, while content inside a section is packed relatively tightly into multi-column grids. The result is clear section separation with a dense payload — a deliberate "lots of substance, easy to scan" impression.

### Overall page rhythm
Long-scroll pages built from a **repeating modular stack**. The homepage runs to roughly 17 distinct sections and deep service pages to roughly 23. The rhythm alternates deliberately:

`dense grid → wide breathing statement → dense grid → proof strip → dense grid → CTA`

Full-bleed proof strips (logo rows, ratings, awards) act as visual "rests" between heavier content grids. Carousels appear roughly every 4–6 sections to break vertical grid monotony.

### Style verdict

| Attribute | Rating |
|---|---|
| Corporate | ●●●●○ |
| Modern | ●●●●● |
| Premium | ●●●●○ |
| Technical | ●●●●○ |
| Minimal | ●●○○○ (minimal palette, dense content) |
| Editorial | ●●○○○ |
| Playful | ●○○○○ |

---

# 2. Technical and Responsive Observations

### Container widths [VERIFIED]
Read directly from the served stylesheet:

| Container role | Max width | Horizontal padding |
|---|---|---|
| Outer / widest shell | `110rem` (≈1760px) | `2rem` |
| Primary content container | `106rem` (≈1696px) | `3rem` |
| Narrow / reading container | `75rem` (≈1200px) | inherits |
| Legacy platform default | `940px` | auto margins |

**Interpretation:** the site uses an unusually wide primary container (~1696px). This is central to the look — content spans nearly the full viewport on large monitors rather than sitting in a classic 1140–1280px column. If you narrow this, the design will read as a generic template instead.

A `@media (min-width: 1920px)` rule also exists [VERIFIED], meaning ultra-wide displays receive dedicated treatment rather than simply centring.

### Common left/right margins

- Desktop: `3rem` (48px) gutter on the primary container [VERIFIED]
- Wide shell: `2rem` (32px) [VERIFIED]
- Tablet: `2rem` (32px) [ESTIMATED]
- Mobile: `1rem` (16px) — a container override to `padding-left/right: 1rem` exists [VERIFIED]

### Breakpoints [VERIFIED]
Webflow's standard set — these are the only breakpoints present in the stylesheet:

```css
@media (min-width: 1920px)   /* ultra-wide refinements */
@media (max-width: 991px)    /* tablet */
@media (max-width: 767px)    /* mobile landscape */
@media (max-width: 479px)    /* mobile portrait */
```

### Grid system [VERIFIED]
CSS Grid, not a 12-column framework. Frequency analysis of `grid-template-columns` across the stylesheet:

| Pattern | Occurrences | Typical use |
|---|---|---|
| `1fr` | 132 | mobile collapse + single-column stacks |
| `1fr 1fr` | 56 | split hero, alternating text/image, comparisons |
| `1fr 1fr 1fr` | 18 | service cards, pricing, value props |
| `1fr 1fr 1fr 1fr` | 6 | stat rows, expert profiles, differentiators |
| `1fr` ×6 | 3 | award and logo strips |
| `2fr 1fr` | — | blog layout (main + sidebar) |
| `0.75fr 1fr`, `0.5fr 1fr` | — | asymmetric feature splits |

**Column behaviour:** 4-col → 2-col → 1-col; 3-col → 1-col (occasionally via 2-col); 2-col → stacked with text above image.

### Grid gaps [VERIFIED]
Frequency-ranked: `1rem` (163×) → `2rem` (95×) → `0.5rem` (49×) → `1.5rem` (47×) → `3rem` (12×) → `4rem` (8×).

**Default card gap: `1rem`. Default section-level gap: `2rem`.**

### Desktop layout behaviour

- Fixed header overlaying the hero.
- Multi-column grids at full container width.
- Mega-menu dropdowns on primary nav items.
- Carousels with horizontal peek and arrow/dot controls (Swiper library is loaded [VERIFIED]).
- Decorative glow and gradient artefacts positioned absolutely behind content.

### Tablet layout behaviour (≤991px)

- 4-column grids → 2 columns; 3-column → 2 or 1.
- Mega menus collapse into a hamburger drawer.
- Logo scales down (`10rem` → `8rem` width) [VERIFIED].
- Header padding reduces `1.563rem` → `1.5rem` vertical [VERIFIED].
- Side-by-side hero becomes stacked.

### Mobile layout behaviour (≤767px / ≤479px)

- Everything collapses to a single column.
- Header padding reduces to `1rem` vertical [VERIFIED].
- Container padding drops to `1rem`.
- Carousels become swipe-driven, one card per view with peek.
- Several desktop-only decorative elements are set to `display: none`; a dedicated mobile-only button class exists (`.btn-for-mbl`, `margin-top: 2rem`) [VERIFIED] — confirming buttons are *repositioned*, not merely reflowed.
- Stat rows become 2×2 grids [ESTIMATED].

### Image aspect ratio patterns [ESTIMATED]

| Context | Ratio |
|---|---|
| Case study / portfolio cards | ~16:10 to 16:9 landscape |
| Blog thumbnails | ~16:9 |
| Team / profile portraits | ~1:1 or 4:5 portrait |
| Hero illustration | free-form, transparent PNG/SVG, no crop frame |
| Logo strip marks | free width, normalised optical height, `object-fit: contain` |

Logos are handled with `object-fit: contain` inside a fixed box [VERIFIED on the logo class] — the correct approach for mixed-aspect brand marks.

### Section height patterns

- Hero: large but **not** a forced `100vh` — sized by content plus padding [ESTIMATED].
- Standard sections: auto height, driven by `4rem`–`8rem` vertical padding.
- Proof strips: short, roughly `3rem` top/bottom [VERIFIED as a logo-row value].
- Full-width CTA bands: taller than standard sections, roughly `6rem`+ [ESTIMATED].

### Sticky / fixed elements [VERIFIED]

- The navbar is `position: fixed; top: 0; left: 0; right: 0` with `backdrop-filter: blur(0.3125rem)` and a fully transparent background (`#ddd0` — `#dddddd` at zero alpha).
- `transition: opacity 0.4s` on the navbar indicates a **show/hide-on-scroll** behaviour driven by opacity rather than a background swap.

### Header behaviour while scrolling
At the top of the page the header is fully transparent and floats over the hero, relying on the blur filter for legibility. On scroll it transitions over `0.4s` — most consistent with hide-on-scroll-down / reveal-on-scroll-up, or a fade to an opaque dark bar. **[ESTIMATED — the exact trigger is script-driven and not determinable from CSS alone.]** Implement whichever you prefer; keep the `0.4s` timing and the backdrop blur, as both are signature.

---

# 3. Typography System

### Font families [VERIFIED]
Four families are declared in the served CSS:

| Family | Frequency | Role |
|---|---|---|
| `Archivo, sans-serif` | 47 declarations | **Primary UI + heading font** |
| `Archivo Thin, sans-serif` | 16 declarations | Large display / oversized numerals |
| `Archivo Black, sans-serif` | 1 declaration | Rare heavy emphasis |
| `Montserrat, sans-serif` | 1 declaration | Applied to `body` as the base/fallback |

**Source:** Archivo is an open-source **Google Fonts** family (Omnibus-Type); Montserrat is also Google Fonts. On the reference they are served as **self-hosted Webflow webfont files**, not via the Google Fonts CDN. `Archivo Thin` and `Archivo Black` are loaded as **separate named families**, not as weight variants of `Archivo` — replicate this, or map them to weights 100 and 900 of a variable Archivo.

Recommended implementation:

```css
--font-heading: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
--font-body:    'Archivo', 'Montserrat', system-ui, sans-serif;
--font-display: 'Archivo', sans-serif; /* weight 100 for thin display numerals */
```

### Base body style [VERIFIED]

```css
body {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;   /* ratio 1.75 */
  color: #1a1b1f;      /* base default; dark sections override to white */
}
```

Note the **1.75 line-height ratio** on body copy — generous, and a major contributor to the readable-despite-dense feel.

### Heading defaults [VERIFIED]

```css
h2 { font-size: 2.25rem; line-height: 3.125rem; font-weight: 400; margin: .625rem 0; }
h4 { font-size: 24px;    line-height: 38px;     font-weight: 400; margin: 10px 0; }
h6 { font-size: 16px;    line-height: 28px;     font-weight: 500; margin: 10px 0; }
a  { color: #1a1b1f; text-decoration: underline; transition: all .2s; display: block; }
blockquote { font-size: 20px; line-height: 34px; padding: 15px 30px;
             border-left: 5px solid #e2e2e2; margin: 25px 0; }
```

Headings default to **weight 400**, not bold. Visual weight comes from *size and colour*, not heavy strokes. This is important to the premium feel — do not reflexively bold your headings.

### Font size scale [VERIFIED — frequency-ranked from the stylesheet]

| Size | Count | Typical role |
|---|---|---|
| `5rem` (80px) | 14 | Oversized display numerals / hero |
| `4rem` (64px) | 8 | Hero heading, large stats |
| `3.25rem` (52px) | 41 | **Primary section heading (most common large size)** |
| `3rem` (48px) | 25 | Section heading alt |
| `2.625rem` (42px) | 16 | Sub-section heading |
| `2.5rem` (40px) | 18 | Sub-section heading |
| `2rem` (32px) | 53 | Card heading / small section heading |
| `1.625rem` (26px) | 105 | **Card title (very common)** |
| `1.6rem` (25.6px) | 45 | Card title alt |
| `1.5rem` (24px) | 76 | Large body / lead-in |
| `1.375rem` (22px) | 95 | **Button text / emphasised body** |
| `1.25rem` (20px) | 44 | Lead paragraph |
| `1.125rem` (18px) | 47 | Body large |
| `1rem` (16px) | 290 | **Base body — most-used size overall** |
| `0.938rem` (15px) | 250 | **Secondary body / nav / meta — second most-used** |
| `0.9rem` (14.4px) | 54 | Small text |
| `0.875rem` (14px) | 45 | Small text / labels |
| `0.8rem` (12.8px) | 34 | Captions |
| `0.75rem` (12px) | 19 | Micro labels / tags |

**Key insight:** the two dominant sizes are `1rem` and `0.938rem`. The system leans on a **15–16px working body size** with a large jump to `3.25rem` for section headings — a high-contrast type scale with a deliberately sparse middle range.

### Letter spacing [VERIFIED]

| Value | Applied to |
|---|---|
| `normal` / `0` | Body copy, most UI (29 declarations combined) |
| `-0.5px`, `-0.0625rem` | Large headings (subtle optical tightening) |
| `-0.1rem`, `-0.5rem` | Oversized display type (aggressive tightening) |
| `1px`, `0.0625rem` | Uppercase labels and small caps (opening up) |

**Rule of thumb: the larger the type, the tighter the tracking; uppercase micro-labels get positive tracking.**

### Text transform [VERIFIED]

| Value | Count | Role |
|---|---|---|
| `capitalize` | 100 | **Dominant** — headings and card titles |
| `uppercase` | 75 | Buttons, eyebrow labels, tags, stat labels |
| `none` | 32 | Body copy |
| `lowercase` | 6 | Deliberate stylistic CTA treatment |

Note the presence of **`lowercase`** — the reference forces some call-to-action labels into lowercase as a design device, while other buttons are uppercase. The mix is intentional; pick one dominant convention and use the other sparingly.

### Line-height values [VERIFIED]
`1rem`, `1.25rem`, `1.5rem`, `1.5625rem`, `1.596rem`, `1.6rem`, `1.625rem`, `1.75rem`, `2rem`, `3.125rem`.

Tight ratios (~1.1–1.2) on headings, ~1.4–1.5 on card text, **1.75 on body copy**.

### Per-element typography table

Desktop values are VERIFIED-derived where a matching declaration exists; mobile values are [ESTIMATED] throughout.

| Element | Family | Weight | Desktop | Mobile [EST] | Line height | Tracking | Transform | Colour | Max width | Align |
|---|---|---|---|---|---|---|---|---|---|---|
| Hero heading (H1) | Archivo | 400–600 | `4rem`–`5rem` | `2.25rem`–`2.5rem` | ~1.1 | `-0.1rem` | Capitalize | `#ffffff` | `~45rem` | Left or centre |
| Page heading (interior H1) | Archivo | 400–600 | `3.25rem` | `2rem` | ~1.15 | `-0.0625rem` | Capitalize | `#ffffff` | `~40rem` | Centre |
| Section heading (H2) | Archivo | 400 | `3.25rem` / `2.25rem` | `1.875rem` | `3.125rem` | `-0.5px` | Capitalize | `#ffffff` | `~35rem`–`45rem` | Centre |
| Sub-heading (H3) | Archivo | 500 | `2rem`–`2.5rem` | `1.5rem` | ~1.3 | normal | Capitalize | `#ffffff` | `~30rem` | Left |
| Card title (H4) | Archivo | 500 | `1.625rem` | `1.25rem` | `1.75rem` | normal | Capitalize | `#ffffff` | `~20rem` | Left |
| Body text | Archivo / Montserrat | 400 | `1rem` | `0.938rem` | `1.75` | normal | none | `#f1f1f1` @ ~80% | `~35rem` (≈65ch) | Left |
| Secondary / meta text | Archivo | 400 | `0.938rem` | `0.875rem` | `1.6` | normal | none | muted grey | `~30rem` | Left |
| Navigation link | Archivo | 500 | `1rem` | `1.125rem` (drawer) | `1.5` | normal | Capitalize | `#ffffff` | — | Left |
| Button label | Archivo | 500–600 | `1.375rem` (large) / `1.125rem` (standard) | `1rem` | `1.625rem` | normal or `+1px` | Uppercase (lowercase variant) | `#ffffff` on accent | — | Centre |
| Eyebrow / label | Archivo | 500–600 | `0.75rem`–`0.875rem` | `0.75rem` | `1.4` | `+1px` | **Uppercase** | Accent `#00efd4` | — | Left / centre |
| Stat numeral | Archivo Thin | 100 | `4rem`–`5rem` | `2.5rem` | ~1.0 | `-0.1rem` | none | Accent or white | — | Centre |
| Form input text | Archivo | 400 | `1rem` | `1rem` (keep ≥16px to prevent iOS zoom) | `1.5` | normal | none | `#ffffff` | `100%` | Left |
| Form label | Archivo | 500 | `0.875rem` | `0.875rem` | `1.4` | `+0.5px` | Uppercase | muted | — | Left |
| Footer heading | Archivo | 600 | `1.125rem` | `1rem` | `1.5` | normal | Capitalize | `#ffffff` | — | Left |
| Footer link | Archivo | 400 | `0.938rem` | `0.938rem` | `1.75` | normal | Capitalize | white @ ~70% | — | Left |
| Caption | Archivo | 400 | `0.8rem` | `0.75rem` | `1.4` | normal | none | muted | `~25rem` | Left |
| Highlighted inline text | Archivo | 500 | inherits | inherits | inherits | inherits | inherits | Accent `#00efd4` | — | inherits |
| Blockquote | Archivo | 400 | `20px` [VERIFIED] | `1.125rem` | `34px` [VERIFIED] | normal | none | `#ffffff` | `~40rem` | Left |

### Maximum text width
Reading measures cluster at `35rem` (19 declarations), `45rem` (13), `30rem` (8) and `40rem` (6) [VERIFIED].

**Use `35rem` (≈560px, ≈65 characters) as the default paragraph measure** and `45rem` for centred section intros.

---

# 4. Colour System

All values in the core tables below are **[VERIFIED]** — read directly from the site's `:root` custom property block.

### Raw declaration (as served, variable names normalised)

```css
:root {
  --green-dark: #0e9788;   --color: #24c4b2;        --white: white;
  --black-ps: #0a0a0a;     --green-ps: #00efd4;     --black-2: black;
  --gret: #f1f1f1;         --black: black;
  --neutral-color: #040404;--themeblack: #3d3c3c;
  --support-accent: #c0fff8; --primary-color: #00efd4;
  --dark-gray: #262626;    --secondary-color: #00897a;
  --transprent: #fff0;     --teal-accent: #f2fefd;
  --vintage: #d8a496;      --orange: #f80;          --green: #c8ff88;
  --pink: #891eb4;         --purple: #52009e;       --medium-purple: #b16cea;
}
```

### Core accent palette

| Role | HEX | Where used |
|---|---|---|
| **Primary accent** | `#00efd4` | Buttons, links, eyebrow labels, highlighted words, glow effects, icon strokes, active states |
| Accent — mid | `#24c4b2` | Hover / secondary accent, gradient midpoint, graphic fills |
| Accent — deep | `#0e9788` | Pressed states, darker gradient stop |
| **Accent — button base** | `#00897a` | Primary button background [VERIFIED on the main button class] |
| Accent — tint | `#c0fff8` | Soft accent backgrounds, badge fills, subtle highlight blocks |
| Accent — palest tint | `#f2fefd` | Near-white teal wash for light-mode sections |

### Backgrounds

| Role | HEX | Where used |
|---|---|---|
| Primary page background | `#0a0a0a` | Dominant site canvas |
| Deepest background | `#040404` | Alternating darker sections, footer |
| Pure black | `#000000` | Some button fills, overlay bases |
| Elevated surface / card | `#262626` | Card backgrounds, input fields, elevated panels |
| Surface — lighter | `#3d3c3c` | Borders, dividers, secondary surfaces, disabled states |
| Light section background | `#f1f1f1` | Occasional inverted / light sections |
| White | `#ffffff` | Light-section surfaces, inverted button fills |
| Transparent | `#ffffff00` | Outline buttons, transparent nav |

### Text colours

| Role | HEX | Notes |
|---|---|---|
| Primary text (dark sections) | `#ffffff` | Headings and key copy |
| Primary text (light sections) | `#1a1b1f` | [VERIFIED] body default |
| Body text on dark | `#f1f1f1` | Often at 70–85% opacity [ESTIMATED] |
| Muted / meta text | white @ ~60%, or `#3d3c3c` on light | Captions, footer links, disabled |
| Link / inline highlight | `#00efd4` | Inline emphasis |

### Extended / decorative palette
`#d8a496` (muted terracotta), `#ff8800` (orange), `#c8ff88` (lime), `#891eb4` (magenta-purple), `#52009e` (deep purple), `#b16cea` (medium purple).

These are **not** part of the core brand system — they appear to serve illustration accents, category tags, per-industry colour coding, and inherited component-library defaults. **Recommendation: do not adopt these unless you genuinely need categorical colour coding.** Introducing them casually will dilute the disciplined two-tone identity.

### Buttons

| State | Background | Text | Border |
|---|---|---|---|
| Primary — default | `#00897a` (or `#00efd4` high-emphasis variant) | `#ffffff`; `#0a0a0a` on bright accent | none |
| Primary — hover [EST] | brighten toward `#00efd4`, or add glow bloom | unchanged | none |
| Secondary / outline — default | transparent `#ffffff00` | `#ffffff` | `1px`–`0.4rem` solid `#383737` [VERIFIED] |
| Secondary — hover [EST] | fills to `#ffffff` or accent | inverts to `#0a0a0a` | accent |
| Inverted (on accent / light bg) | `#ffffff` | `#0a0a0a` | `0.0625rem solid #ffffff` [VERIFIED] |
| Dark | `#0a0a0a` | `#ffffff` | none |

Verified button rules from the stylesheet:

```css
/* Pill accent button — the signature CTA */
.buttonv2 {
  background: #00897a; color: #fff;
  border-radius: 1.875rem;
  padding: .813rem .938rem;
  font-family: Archivo, sans-serif;
  font-size: 1.375rem; line-height: 1.625rem;
  text-transform: uppercase;
  gap: .938rem;
  display: inline-flex; align-items: center;
}

/* Large inverted button */
.button-new {
  background: #fff; color: #000;
  height: 4.75rem; border-radius: .625rem;
  padding: .5rem 2.563rem;
  font-size: 1.5rem; font-weight: 500;
  border: .0625rem solid #fff;
  display: inline-flex; align-items: center; justify-content: center;
}

/* Compact dark button */
.btn-mew {
  height: 2.875rem; background: #000; color: #fff;
  border-radius: .4rem;
  padding-inline: 1.25rem;
  font-size: 1.125rem; font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center;
}

/* Outline variant */
.button-new-outline {
  background: #fff0; color: #fff;
  border: .4rem solid #383737;
  gap: .6rem; transition: all .2s;
}
```

### Borders
Borders are **used sparingly**. Separation is achieved primarily through background-value shifts (`#0a0a0a` vs `#262626`) rather than strokes.

- Card border: `#3d3c3c` or `rgba(255,255,255,0.08)` [ESTIMATED]
- Accent border: `#00efd4` on active / selected
- Outline button border: `#383737` [VERIFIED]
- Blockquote rule: `5px solid #e2e2e2` [VERIFIED]

### Gradients
Present but restrained. Typical constructions [ESTIMATED]:

- Accent gradient: `linear-gradient(90deg, #00efd4, #00897a)` for CTA bands and highlight text.
- Surface gradient: `linear-gradient(180deg, #0a0a0a, #040404)` for gentle section transitions.
- Radial glow: a large, soft radial of `#00efd4` at low alpha behind hero and CTA blocks — the site's signature ambient effect.

### Overlays

- Image scrim: `rgba(0,0,0,0.4)`–`rgba(0,0,0,0.6)` over photography so white text stays legible [ESTIMATED].
- Card hover veil: accent at ~8–12% alpha [ESTIMATED].
- Verified overlay-adjacent shadow: `0 4px 24.2px rgba(0,0,0,0.25)`.

### Image treatment
Photography is darkened and colour-cooled to sit inside the dark canvas. Portraits appear on neutral or accent-tinted backgrounds. Logos are rendered as flat monochrome-white or original-colour marks on dark, normalised to consistent optical size. Screenshots and product imagery sit inside rounded frames, frequently with an accent glow behind them rather than a hard border.

---

# 5. Header and Navigation

### Verified properties

```css
.navbar-v2 {
  position: fixed; top: 0; left: 0; right: 0;
  background-color: #ddd0;              /* fully transparent */
  backdrop-filter: blur(0.3125rem);     /* 5px */
  padding-top: 1.563rem;                /* 25px */
  padding-bottom: 1.563rem;
  transition: opacity 0.4s;
  overflow: visible;                    /* allows mega-menu escape */
}
.logo-v2   { width: 10rem; height: 3.75rem; object-fit: contain; }
.logo-block{ min-width: 6rem; }

@media (max-width: 991px) { .navbar-v2 { padding: 1.5rem 0; } .logo-v2 { width: 8rem; } }
@media (max-width: 767px) { .navbar-v2 { padding: 1rem 0; } }
```

### Header height
Desktop: `1.563rem` × 2 padding + `3.75rem` logo ≈ **`6.875rem` (110px)** [VERIFIED by calculation].
Tablet: ≈ `6.75rem`. Mobile: ≈ `5rem` [ESTIMATED, derived from reduced padding].

This is a **tall header** — considerably taller than the typical 64–80px — and it contributes to the premium, unhurried feel. Because it is fixed and transparent, the hero must carry top padding of at least the header height plus breathing room.

### Header background
Transparent with a 5px backdrop blur at rest. No solid fill at the top of the page — the hero shows through. Ensure the hero has sufficient contrast under the nav region.

### Logo

- Position: far left of the container.
- Size: `10rem × 3.75rem` box with `object-fit: contain` [VERIFIED].
- Responsive: shrinks to `8rem` wide at ≤991px.
- Supply a light/white logo variant, since the header sits on dark.

### Navigation structure
Six primary items in a right-aligned cluster; four open **mega-menu dropdowns**:

1. Item A — mega menu (largest; 40+ links grouped into 4–5 thematic columns)
2. Item B — mega menu (medium, ~7 links)
3. Item C — mega menu (medium, ~4–8 links)
4. Item D — direct link, no dropdown
5. Item E — mega menu (resources: index pages, taxonomy categories, events)
6. **CTA button** — visually distinct, right-most

### Navigation spacing [ESTIMATED]

- Gap between top-level items: `1.5rem`–`2rem`
- Gap between last item and CTA button: `2rem`
- Nav link: `1rem`, weight 500, capitalized, white

### Mega-menu behaviour

- Opens on hover (desktop) with a fade / slide-down.
- Multi-column grid panel on a dark surface (`#262626` family), rounded corners, elevated with shadow.
- Each entry is an icon + label + optional one-line descriptor.
- A dedicated close-button class exists (`.dropdown-close-button`, `1.5rem × 1.5rem`, `top: 3.5rem; right: 3%`, `z-index: 99`) [VERIFIED] — menus are explicitly dismissible, not hover-only. Implement both hover-open and click-to-dismiss.

### Active state [ESTIMATED]
Current section indicated by accent-coloured text (`#00efd4`) and/or a short underline. Dropdown parents show a chevron that rotates 180° when open.

### Header CTA
A pill-shaped, accent-filled button (`border-radius: 1.875rem`, background `#00897a`, uppercase label) [VERIFIED]. Always visible on desktop; on mobile it moves into the drawer or persists as a compact icon button.

### Mobile menu behaviour

- Hamburger toggle replaces the nav cluster below 991px.
- Full-screen or near-full-screen dark drawer.
- Mega-menu groups become **collapsible accordions** rather than flyouts.
- CTA button pinned at the bottom of the drawer.
- Body scroll locked while open.
- Animation: slide-in from right or fade, `0.3s`–`0.4s` [ESTIMATED, consistent with the site's transition vocabulary].

### Border / shadow / divider
No border or shadow on the header at rest — separation is purely the backdrop blur. A subtle bottom hairline (`rgba(255,255,255,0.08)`) or shadow may appear once scrolled [ESTIMATED].

---

# 6. Page Structure and Page Order

## Site architecture overview

The reference uses a **deep hub-and-spoke information architecture** with roughly 90+ routes. Everything funnels toward a single conversion goal: book a consultation call.

Route families observed [VERIFIED from link extraction]:

```
/                                   Homepage
/services/…                         ~44 routes — the largest family
    /services/<pillar>              Pillar hub pages
    /services/<pillar>/<child>      Leaf service pages
/consultancy/…                      7 routes — advisory offerings
/industries                         Hub
/industries/<sector>                Vertical landing pages
/portfolio                          Case study index
/portfolio-item/<slug>              Individual case study
/company/about-us | awards-recognitions | culture | careers | contact-us
/blog                               Article index
/category/<taxonomy>                Article category archive
/blog/<slug>                        Article detail
/events                             Events index
/experts/<slug>                     Individual profile pages
/privacy-policy | /terms-and-conditions | /sitemap
```

Notable structural decisions worth replicating:

- **Three-level service nesting** (`/services/pillar/child`) with a genuine hub page at each level, not a redirect.
- **Separate "consultancy" family** parallel to "services" — advisory framed distinctly from delivery.
- **Dedicated per-person profile routes**, giving named experts their own indexable pages.
- **Blog categories as first-class routes** (`/category/<name>`) alongside the article index.
- A **sitemap page** for humans, not just `sitemap.xml`.

## Expected navigation journey

```
Homepage
  → Service pillar hub          (broad capability)
      → Leaf service page       (specific capability)
          → Case study          (proof)
              → Contact / booking  ← CONVERSION
  ↘ Industry page               (relevance by sector)
  ↘ Portfolio index             (proof-first path)
  ↘ Blog / category             (top-of-funnel discovery)
      → Related service page    (blog acts as a feeder)
  ↘ About / Culture / Awards    (trust validation)
      → Expert profile          (personal credibility)
```

Blog and industry pages are **feeder routes** that re-enter the funnel through inline service links; they are not dead ends.

---

## Page 1 — Homepage

**Purpose:** establish capability, prove credibility, and drive a consultation booking.
**Main conversion goal:** book a call.
**Primary CTA location:** hero (dual CTA — one booking, one exploratory).
**Secondary CTA locations:** after the differentiators block; the full-width mid-page CTA band; the closing contact form.

**Section order (17 blocks, top to bottom):**

1. **Header** — fixed, transparent, mega menus + CTA
2. **Hero** — headline, supporting line, dual CTA, trust-badge row
3. **Value proposition** — 3-column benefit cards, each led by a metric
4. **Capability grid** — 4 thematic columns, each a list of linked sub-capabilities
5. **Technology strip** — 25+ logo grid on a full-width band
6. **Case study carousel** — 3 featured cards + "view all" link
7. **Industry grid** — 8+ icon-and-label tiles + "see more" link
8. **Differentiators** — 4-column card row + inline CTA button
9. **Process timeline** — 4 numbered steps, each with 3 supporting bullets
10. **Awards** — 6+ badge logo grid + index link
11. **Press strip** — 6 publication logos
12. **Pricing / engagement models** — 3-column comparison cards + CTA
13. **Team** — 4 profile cards (portrait, name, role, social icon, profile link)
14. **Testimonials** — 4 quote cards with portrait, attribution and role
15. **Full-width CTA band** — headline + large illustration + single button
16. **Blog grid** — 10 preview cards (image, category tag, title, read link) + index link
17. **FAQ accordion** — 6 expandable items
18. **Contact / newsletter** — heading, description, trust badges, email capture form
19. **Footer**

**Footer behaviour:** identical on every route; never sticky.

**Structural note:** the ordering follows a deliberate objection-handling sequence — *what you get → what we do → who trusts us → what we have built → who you are → why us → how we work → who validates us → what it costs → who you will work with → what clients say → act now → learn more → common questions → contact.* Preserve this logic even if you cut sections.

---

## Page 2 — Service Pillar Hub (template)

**Purpose:** own a broad capability category and route visitors down to leaf services.
**Main conversion goal:** book a consultation; secondary goal is a click into a leaf service.
**Primary CTA:** hero. **Secondary CTAs:** mid-page CTA band, expert-profile block, closing form.

**Section order (~23 blocks — the deepest template on the site):**

1. Header
2. Hero — headline, supporting text, hero image, primary CTA
3. Value proposition — 3 horizontal benefit cards
4. Awards grid — 6-column badge row
5. Client logo carousel — 5-column marquee
6. Service card grid — 12+ cards in 3 columns (icon, title, description, arrow link)
7. Mid-page CTA — centred headline + text + button over a background image
8. Before/after comparison — 2 columns contrasting states, icon + bullet list each
9. Problem/solution accordion — 6 expandable items
10. Process timeline — 6 numbered steps
11. Benefits list — compact 3-column grid
12. Impact metrics — 4-column stat display (large numeral + label)
13. Case study carousel — 3 cards
14. Concept comparison — 7-row tabbed or card grid
15. Use-case explorer — 20+ items in a tabbed/toggle interface with paired imagery
16. Success stories carousel — 3 cards with metrics
17. Engagement model comparison — 3-column table
18. Expert spotlight — single profile card (portrait, name, role, bio, booking CTA)
19. FAQ accordion — 6+ items
20. Article grid — 12 blog cards
21. Related services — 8-card cross-link grid
22. Contact form — form + supporting text + trust badges
23. Footer

**Note:** this template is *very* long. Sections 14–15 (comparison + use-case explorer) are the heaviest interactive components on the site. If you shorten the template, cut 14, 15 and 20 first — they are the least load-bearing for conversion.

---

## Page 3 — Leaf Service Page (template)

**Purpose:** rank for and convert a specific, narrow capability.
**Section order:** a compressed version of the pillar hub — typically Header → Hero → Benefits (3-col) → Capability cards (3-col) → Process → Metrics → Case studies → FAQ → Related services → Contact form → Footer.
**Primary CTA:** hero. **Secondary CTA:** after the process section and in the closing form.

---

## Page 4 — Consultancy Page (template)

**Purpose:** position advisory work distinctly from build/delivery work.
**Structure:** mirrors the leaf service template but weights the *process* and *expert credibility* sections more heavily and the technology/stack sections less.
**Primary CTA:** hero, framed as a consultation rather than a project.

---

## Page 5 — Industries Hub

**Purpose:** let sector-specific visitors self-identify.
**Section order:** Header → Hero → Sector tile grid (icon + label, 4-col → 2-col → 1-col) → supporting proof strip → cross-sell service links → CTA → Footer.
**Primary CTA:** below the tile grid.

---

## Page 6 — Industry Detail

**Purpose:** demonstrate sector-specific relevance.
**Section order:** Header → Hero → Sector challenges (2- or 3-col) → Applicable capabilities grid → Sector case studies → Metrics → Testimonial → FAQ → CTA → Footer.

---

## Page 7 — Portfolio Index

**Purpose:** proof-first browsing.
**Section order:** Header → Page heading → optional filter/category row → card grid (3-col → 2-col → 1-col; image, category tag, title, short descriptor, read link) → optional pagination or load-more → CTA band → Footer.
**Primary CTA:** the closing CTA band.

---

## Page 8 — Case Study Detail

**Purpose:** narrative proof of delivery capability.
**Section order:** Header → Hero (title, category, hero image) → Context/summary block → Metadata sidebar or strip (sector, scope, technologies, duration) → Challenge section → Approach section → Solution section with supporting imagery → Results metric row → Technology strip → Related case studies (3-col) → CTA band → Footer.
**Primary CTA:** the closing CTA band. **Secondary CTA:** a sticky or inline mid-article prompt [ESTIMATED].

---

## Page 9 — About

**Purpose:** institutional trust.
**Section order (20 blocks, VERIFIED as present):**

1. Header
2. Hero — centred headline + supporting text over a background illustration
3. Narrative block — text-led, wide measure
4. Capability grid — 12 icon cards
5. Stat row — 4 metrics
6. Case studies — 3 cards
7. Testimonial carousel
8. Awards logo grid — 6 marks
9. Ratings + press row — ratings left, 6 publication logos right (asymmetric split)
10. Events carousel — 5 image cards
11. Global reach stats — 3 metrics
12. Office locations — 4 cards with maps
13. Partner logo grid — 4 marks
14. Core capabilities — 6 icon blocks in a 2×3 grid
15. Culture section — alternating image/text blocks + 4 impact cards
16. Leadership — 4 profile cards
17. Timeline — horizontal chronological progression
18. Values — 5 icon statements in a single row
19. CTA band with form
20. Footer

**Note the asymmetric split in section 9** — ratings on the left, press logos on the right. This is one of the few non-symmetric layouts on the site and is a useful rhythm-breaker.

---

## Page 10 — Awards

**Purpose:** consolidated third-party validation.
**Section order:** Header → Hero → Award badge grid (grouped by year or body) → Ratings summary → Press mentions → CTA → Footer.

---

## Page 11 — Culture

**Purpose:** employer brand and human texture.
**Section order:** Header → Hero → Narrative block → Photo gallery/mosaic → Values grid → Team life cards → Careers cross-link CTA → Footer.

---

## Page 12 — Careers

**Purpose:** recruitment.
**Section order:** Header → Hero → Benefits grid → Open roles list (rows: title, location, type, apply link) → Hiring process timeline → Culture cross-link → Application form or CTA → Footer.
**Primary CTA:** the roles list itself.

---

## Page 13 — Contact

**Purpose:** direct conversion.
**Section order:** Header → Hero (short) → Two-column split: form left, supporting details right (or reversed) → Office location cards → Trust badge row → FAQ (short) → Footer.
**Primary CTA:** form submission — placed above the fold.

---

## Page 14 — Blog Index

**Purpose:** organic acquisition and topical authority.
**Section order:** Header → Page heading → Category filter row → Featured post (wide card) → Article grid (3-col → 2-col → 1-col) → Pagination → Newsletter capture → Footer.
**Layout note:** a `2fr 1fr` grid is defined for the blog area [VERIFIED], indicating a main-column-plus-sidebar option.

---

## Page 15 — Blog Category Archive

**Purpose:** topical clustering.
**Section order:** Header → Category heading + description → Article grid → Pagination → Newsletter → Footer.

---

## Page 16 — Article Detail

**Purpose:** engagement, then funnel entry.
**Section order:** Header → Article hero (category tag, title, meta: author/date/read time, featured image) → optional table of contents (sticky on desktop) [ESTIMATED] → Article body (narrow measure, ~`35rem`) → Author block → Share row → Related articles (3-col) → Newsletter or service CTA → Footer.
**Primary CTA:** inline or end-of-article service prompt.

---

## Page 17 — Expert Profile

**Purpose:** personal credibility and direct booking.
**Section order:** Header → Profile hero (portrait, name, role, social links) → Biography → Areas of expertise → Related content or case studies → Booking CTA → Footer.

---

## Page 18 — Events

**Purpose:** activity and presence signalling.
**Section order:** Header → Hero → Event card grid or carousel (image, title, date, location) → Past events → CTA → Footer.

---

## Page 19 — Sitemap

**Purpose:** human-readable navigation aid and internal link equity.
**Structure:** Header → Heading → Multi-column grouped link lists mirroring the route families → Footer. Plain, minimal styling.

---

## Page 20 — Legal (Privacy / Terms)

**Purpose:** compliance.
**Structure:** Header → Page heading + last-updated line → Long-form prose at a narrow measure (`~45rem`) with `h2`/`h3` hierarchy and generous paragraph spacing → Footer. No CTAs, no cards.

---

# 7. Detailed Section Layouts

Common rules applying to **every** section unless overridden below:

| Property | Value |
|---|---|
| Container | `max-width: 106rem`, `padding-inline: 3rem` (`1rem` mobile) |
| Vertical padding (desktop) | `4rem` top / `4rem` bottom — [VERIFIED as the dominant large pairing: `padding-top:4rem` ×59, `padding-bottom:4rem` ×40] |
| Vertical padding (large sections) | `5rem`–`8rem` [VERIFIED values present] |
| Vertical padding (compact strips) | `2rem`–`3rem` |
| Vertical padding (mobile) | `2rem`–`3rem` [ESTIMATED] |
| Default grid gap | `1rem` cards / `2rem` section-level |
| Background | `#0a0a0a`, alternating with `#040404` |
| Heading alignment | Centred for section headings; left for card content |
| Reveal animation | Fade-up on scroll into view, `0.3s`–`0.5s` |

---

### 7.1 Hero

- **Purpose:** state the core value proposition and offer two entry paths.
- **Background:** `#0a0a0a` with a large soft radial accent glow (`#00efd4` at low alpha) and/or a decorative illustration.
- **Layout:** centred single column, or a `1fr 1fr` split (text left, illustration right).
- **Padding:** top padding must clear the fixed header — `7rem`+ minimum, `8rem` used in the stylesheet [VERIFIED as a `padding-top` value].
- **Content order:** optional eyebrow → H1 → supporting paragraph (`~45rem` max) → dual CTA row → trust-badge strip.
- **CTA placement:** side by side, primary (filled accent pill) then secondary (outline or text-with-arrow). Gap ~`1rem`.
- **Trust badges:** horizontal row of 4 small rating cards directly beneath the CTAs — this is the site's most distinctive hero device.
- **Responsive:** split → stacked at 991px, image below text; CTA buttons go full-width and stack at 479px; badge row wraps to 2×2.
- **Animation:** staggered fade-up on load (heading → paragraph → CTAs → badges), ~80ms stagger [ESTIMATED].

### 7.2 Value proposition / benefit cards

- **Purpose:** deliver three quantified reasons to continue.
- **Background:** `#0a0a0a`.
- **Layout:** `grid-template-columns: 1fr 1fr 1fr`, gap `1rem`–`2rem`.
- **Card:** background `#262626`, padding `2rem 1.5rem` [VERIFIED as the most common card padding pairing, 11 occurrences], `border-radius: 1rem`.
- **Card content:** large accent numeral/metric (Archivo Thin, `3rem`–`4rem`) → title (`1.625rem`) → description (`1rem`, muted).
- **Alignment:** left, or centred if the metric leads.
- **Shadow:** none at rest; subtle accent glow on hover.
- **Responsive:** 3 → 1 column at 991px [ESTIMATED per the dominant `1fr` collapse pattern].
- **Animation:** hover lifts the card ~4px and warms the border to accent.

### 7.3 Capability / service card grid

- **Purpose:** expose the full capability set as linked entry points.
- **Layout:** either 4 thematic columns of linked lists (homepage) or a `1fr 1fr 1fr` card grid of 12+ items (service pages).
- **Card:** icon (`2rem`–`2.5rem`, accent stroke) → title (`1.625rem`) → one-line description (`0.938rem`, muted) → arrow affordance bottom-right.
- **Padding:** `2rem 1.5rem`.
- **Radius:** `1rem`, or the **signature asymmetric `1rem 3rem 1rem 1rem`** (see 7.11).
- **Border:** hairline `rgba(255,255,255,0.08)`, brightening to accent on hover.
- **Responsive:** 3 → 2 → 1 columns.
- **Interaction:** whole card is the click target; arrow translates right ~4px on hover, `0.2s`.

### 7.4 Logo / technology strip

- **Purpose:** signal ecosystem breadth without consuming vertical space.
- **Background:** `#040404` — a value shift from neighbouring sections, no borders.
- **Layout:** 6-column grid, or a continuously scrolling marquee (a `logos-moving` class exists [VERIFIED]).
- **Padding:** `3rem` top / `3rem` bottom [VERIFIED].
- **Logo box:** fixed height, `object-fit: contain`, white or monochrome treatment; opacity ~70% at rest rising to 100% on hover [ESTIMATED].
- **Responsive:** 6 → 4 → 3 → 2 columns, or the marquee simply continues.
- **Animation:** infinite horizontal marquee, linear, ~30–40s per loop [ESTIMATED].

### 7.5 Case study carousel

- **Purpose:** proof of delivery.
- **Layout:** 3 cards visible on desktop with peek; horizontal swipe. Built on Swiper [VERIFIED — the Swiper bundle is loaded from CDN].
- **Card:** 16:9 image top, `border-radius` matching the card top corners → category tag (uppercase, `0.75rem`, accent) → title (`1.625rem`) → short descriptor → read link.
- **Padding:** card body `2rem 1.5rem`.
- **Controls:** arrow buttons and/or dot pagination beneath, accent-coloured active state.
- **Index link:** "view all" placed at the section heading level, right-aligned, or centred beneath the carousel.
- **Responsive:** 3 → 2 → 1 slides per view.
- **Animation:** slide transition `0.3s`–`0.5s` ease.

### 7.6 Industry / sector tile grid

- **Purpose:** sector self-identification.
- **Layout:** dense tile grid, 4–6 columns, gap `1rem`.
- **Tile:** icon above a short label, centred, `#262626` background, `border-radius: 1rem`, padding `2rem 1rem` [VERIFIED padding pair].
- **Responsive:** 6 → 4 → 3 → 2 columns.
- **Interaction:** background lightens and icon shifts to accent on hover.

### 7.7 Process timeline

- **Purpose:** de-risk engagement by making delivery legible.
- **Layout:** 4 or 6 steps. Horizontal on desktop (`1fr` per step, connected by a hairline or accent rule), vertical on mobile.
- **Step:** large step numeral (Archivo Thin, `3rem`+, accent or outlined) → step title (`1.625rem`) → 3 supporting bullet points (`0.938rem`).
- **Connector:** 1px horizontal rule between step markers, `#3d3c3c`, optionally filling to accent as the section scrolls into view.
- **Responsive:** horizontal → vertical stack at 991px, connector rotates to a left rail.
- **Animation:** sequential fade-in per step as it enters the viewport.

### 7.8 Metric / stat row

- **Purpose:** compress credibility into scannable numbers.
- **Layout:** `1fr 1fr 1fr 1fr` (or 3-up), no card background — the numbers sit directly on the section background.
- **Numeral:** Archivo Thin `4rem`–`5rem`, accent or white, tracking `-0.1rem`.
- **Label:** `0.875rem`, uppercase, `+1px` tracking, muted.
- **Alignment:** centred.
- **Divider:** optional vertical hairline between items, `#3d3c3c`.
- **Responsive:** 4 → 2×2 → 1 column.
- **Animation:** count-up on scroll into view [ESTIMATED].

### 7.9 Testimonial section

- **Purpose:** third-party voice.
- **Layout:** 4-card grid, or a carousel on narrower viewports.
- **Card:** `#262626`, `border-radius: 1rem` or the asymmetric variant, padding `2rem 1.5rem`; optional oversized quotation glyph in accent at low opacity.
- **Content order:** quote (`1.125rem`, `1.6` line height) → divider → portrait (circular, `border-radius: 50%` [VERIFIED as an available radius], ~`3rem`) + attribution name (`1rem`, 500) + role (`0.875rem`, muted).
- **Responsive:** 4 → 2 → 1, becoming a swipe carousel below 767px.

### 7.10 Pricing / engagement model comparison

- **Purpose:** remove cost ambiguity before contact.
- **Layout:** `1fr 1fr 1fr`, equal-height cards, gap `1.5rem`–`2rem`.
- **Card:** `#262626`, `border-radius: 1.5rem`–`2rem`, padding `3rem 3rem` [VERIFIED padding pair] or `2rem 1.5rem`.
- **Card content:** model name (`1.625rem`) → short descriptor → feature bullet list with accent tick icons → button.
- **Emphasis:** one card may be highlighted with an accent border and/or a small uppercase badge; avoid scaling it up, which breaks the row rhythm.
- **Responsive:** 3 → 1 column, highlighted card first on mobile.

### 7.11 Signature asymmetric card

**The single most distinctive visual device on the site.** Verified radius patterns:

```css
border-radius: 1rem 3rem 1rem 1rem;      /* 14 occurrences */
border-radius: 1rem 4rem 1rem 1rem;      /*  5 occurrences */
border-radius: .7rem 2.625rem .7rem .7rem;
border-radius: .9375rem 3.75rem .9375rem .9375rem;
border-radius: .5rem .5rem .5rem 2rem;   /* mirrored, bottom-left */
```

**Rule:** three corners share a small radius; **one corner** (usually top-right, occasionally bottom-left) takes a radius **3–4× larger**. The ratio, not the absolute value, is what must be preserved. Apply it to feature cards, image frames and highlight blocks — but not to every card, or the effect flattens into noise. Reserve it for one or two card families per page.

### 7.12 Accordion (FAQ / problem-solution)

- **Purpose:** compress secondary content and handle objections.
- **Layout:** single column, `max-width: 60rem`–`75rem`, centred.
- **Row:** question (`1.25rem`–`1.5rem`, weight 500) left, toggle icon right (plus/minus or chevron).
- **Divider:** 1px `#3d3c3c` between rows; no card chrome.
- **Padding:** `1.5rem` vertical per row [ESTIMATED].
- **Open state:** answer at `1rem` / `1.75` line height, muted; icon rotates 180° or crosses to minus.
- **Animation:** height transition `0.3s` ease; icon rotation `0.2s`.
- **Behaviour:** single-open (accordion) is more likely than multi-open [ESTIMATED].

### 7.13 Tabbed / toggle explorer

- **Purpose:** present 7–21 variants without an enormous page.
- **Layout:** vertical tab list left (~`0.5fr`–`0.75fr`), content panel right (`1fr`) — matching the verified `0.5fr 1fr` and `0.75fr 1fr` grid patterns.
- **Tab:** left-aligned label; active state carries an accent left-border or accent text.
- **Panel:** heading, body copy, bullet list and a supporting image.
- **Responsive:** vertical tabs become a horizontal scrolling tab strip, or collapse into an accordion, below 991px.
- **Animation:** panel cross-fade `0.2s`–`0.3s`.

### 7.14 Comparison / before-after block

- **Purpose:** dramatise the delta between current and improved states.
- **Layout:** `1fr 1fr`, two visually distinct panels.
- **Left panel:** the negative state — muted background, neutral or desaturated icons.
- **Right panel:** the positive state — accent-tinted border or a subtle accent glow, accent icons.
- **Content:** panel title + 4–6 icon bullet rows each.
- **Padding:** `2rem 2rem` [VERIFIED padding pair].
- **Responsive:** stacked, negative state first.

### 7.15 Full-width CTA band

- **Purpose:** capture intent mid-scroll.
- **Background:** accent gradient, or `#040404` with a large radial accent glow. A verified glow value exists: `box-shadow: 0 0 5rem #01e3c9`.
- **Layout:** centred single column, or text left with a large illustration right.
- **Padding:** `4rem 5rem` or `4rem 6.5rem` [VERIFIED padding pairs] — noticeably wider inline padding than standard sections.
- **Content:** heading (`3rem`–`3.25rem`) → one supporting line → single button.
- **Button:** high-contrast against the band — white fill on accent, or accent fill on dark.
- **Responsive:** stacked and centred; inline padding drops to `1.5rem`.

### 7.16 Blog card grid

- **Purpose:** surface topical authority and feed the funnel.
- **Layout:** `1fr 1fr 1fr` (index) or a wider multi-row grid (homepage, 10 items).
- **Card:** 16:9 image top → category tag (uppercase micro-label, accent) → title (`1.25rem`–`1.625rem`, 2–3 line clamp) → optional excerpt → read link with arrow.
- **Background:** `#262626` or transparent with only the image carrying a radius.
- **Radius:** `1rem`.
- **Responsive:** 3 → 2 → 1 columns.
- **Interaction:** image scales ~1.03 inside an `overflow: hidden` frame on hover, `0.3s`.

### 7.17 Contact / newsletter section

- **Purpose:** final conversion.
- **Layout:** `1fr 1fr` — supporting content one side, form the other; or a single centred column for newsletter-only capture.
- **Background:** `#040404`, occasionally with an accent glow.
- **Form field:** `#262626` background, no visible border or a hairline `#3d3c3c`, `border-radius: 0.5rem` [VERIFIED radius value], padding ~`0.875rem 1rem`, white text, muted placeholder.
- **Submit:** accent pill button, full-width on mobile.
- **Supporting element:** trust-badge row beneath or beside the form.
- **States:** inline success and error messaging is present in the markup [VERIFIED] — implement both.
- **Responsive:** stacked, form last.

### 7.18 Footer

- **Purpose:** exhaustive navigation, credential reinforcement, final capture.
- **Background:** `#040404` (deepest value on the page).
- **Layout:** 4 columns — link column A (~11 links), link column B (~10 links), locations column (3 entries), newsletter column.
- **Padding:** `4rem`–`5rem` top, `2rem` bottom [ESTIMATED from the verified padding scale].
- **Heading:** `1.125rem`, weight 600, white. **Link:** `0.938rem`, white @ ~70%, `1.75` line height, brightening to accent on hover.
- **Newsletter:** heading + email input + submit, matching the form styling in 7.17.
- **Bottom bar:** separated by a hairline `#3d3c3c`; contains the trust-badge row, a social icon row (8 platforms), copyright and legal links.
- **Social icons:** ~`1.25rem`, circular or bare, muted at rest, accent on hover.
- **Cookie consent:** a modal/banner component is present [VERIFIED] with granular consent options and a `.cw-cookie_buttons` row (`gap: 1.625rem`, wrapping flex).
- **Responsive:** 4 → 2 → 1 columns; link groups may become accordions on mobile [ESTIMATED].

---

# 8. Reusable Components

| # | Component | Core visual rules | Responsive behaviour |
|---|---|---|---|
| 1 | **Header** | Fixed, transparent, `backdrop-filter: blur(5px)`, `1.563rem` vertical padding, logo `10rem × 3.75rem` left, nav cluster + accent pill CTA right | Logo → `8rem`, padding → `1.5rem` then `1rem`; nav → hamburger drawer at 991px |
| 2 | **Mega menu** | Dark `#262626` panel, multi-column link grid, icon + label + descriptor rows, rounded corners, elevated shadow, explicit close control | Becomes nested accordion groups inside the mobile drawer |
| 3 | **Footer** | `#040404`, 4 columns (links / links / locations / newsletter), hairline-separated bottom bar with badges + 8 social icons | 4 → 2 → 1 columns; link groups may collapse to accordions |
| 4 | **Primary button** | Pill `border-radius: 1.875rem`, `#00897a` fill, white text, `1.375rem`, uppercase, padding `.813rem .938rem`, `gap: .938rem` for a trailing icon | Full width below 479px; font drops to `1rem` |
| 5 | **Secondary / outline button** | Transparent fill, `#383737` border, white label, `gap: .6rem`, `transition: all .2s` | Full width and stacked beneath the primary on mobile |
| 6 | **Large inverted button** | `#ffffff` fill, `#000` text, `height: 4.75rem`, `border-radius: .625rem`, padding `.5rem 2.563rem`, `1.5rem`/500 | Height reduces to ~`3.5rem`; font to `1.125rem` |
| 7 | **Compact button** | `height: 2.875rem`, `#000` fill, `border-radius: .4rem`, `1.125rem`/600, inline padding `1.25rem` | Unchanged; used for in-card actions |
| 8 | **Standard card** | `#262626`, `border-radius: 1rem`, padding `2rem 1.5rem`, hairline border, no rest shadow | Full width, padding → `1.5rem 1rem` |
| 9 | **Signature asymmetric card** | Three small corners + one 3–4× larger corner (`1rem 3rem 1rem 1rem`) | Radius scales down proportionally (e.g. `.75rem 2rem .75rem .75rem`) |
| 10 | **Feature block** | Accent icon `2rem`–`2.5rem` → title `1.625rem` → description `0.938rem` muted → optional arrow link | 3 → 2 → 1 columns |
| 11 | **Metric block** | Archivo Thin numeral `4rem`–`5rem` accent, uppercase `+1px` label beneath, centred, no card chrome | 4 → 2×2 → 1 |
| 12 | **Testimonial card** | `#262626`, quote `1.125rem`, circular `3rem` portrait, name + role attribution, optional accent quote glyph | 4 → 2 → 1; becomes a swipe carousel below 767px |
| 13 | **Pricing / model card** | Equal height, `border-radius` `1.5rem`–`2rem`, padding up to `3rem`, tick-bullet list, one button, optional accent-bordered emphasis | 3 → 1; emphasised card first |
| 14 | **Form** | `#262626` field, `border-radius: .5rem`, white text, muted placeholder, accent pill submit, inline success/error states | Fields full-width, stacked; submit full-width |
| 15 | **Tabs** | Vertical list left (`0.5fr`–`0.75fr`) + panel right (`1fr`); active tab carries an accent left-border | Horizontal scroll strip or accordion below 991px |
| 16 | **Accordion** | Single column ≤`75rem`, hairline row dividers, question `1.25rem`, rotating toggle icon, `0.3s` height transition | Full width; question size → `1.125rem` |
| 17 | **Breadcrumbs** [ESTIMATED] | `0.875rem` muted, chevron separators, current item in white; sits directly beneath the header on interior pages | May truncate to the parent + current item on mobile |
| 18 | **Image gallery / mosaic** | Rounded frames, mixed aspect ratios in a masonry-ish grid, subtle darkening overlay | 3 → 2 → 1 columns |
| 19 | **Carousel** | Swiper-driven; 3-up with peek, arrows + dots, accent active dot, `0.3s`–`0.5s` slide | 3 → 2 → 1 slides; controls become swipe-primary |
| 20 | **Logo marquee** | Fixed-height `object-fit: contain` boxes, 70% → 100% opacity on hover, infinite linear scroll | Continues unchanged; height reduces |
| 21 | **CTA band** | Accent gradient or glow background, `4rem 5rem` padding, heading + one line + one button | Centred, stacked, inline padding → `1.5rem` |
| 22 | **Blog card** | 16:9 image, uppercase accent category tag, clamped title, read link with arrow, image scales 1.03 on hover | 3 → 2 → 1 |
| 23 | **Profile card** | Portrait (1:1 or 4:5, rounded), name `1.25rem`, role muted, social icon, profile link | 4 → 2 → 1 |
| 24 | **Trust badge** | Small rounded chip: platform mark + numeric rating + short label, `#262626` fill | Row of 4 wraps to 2×2 |
| 25 | **Contact section** | Split form/content, `#040404`, trust badges adjacent | Stacked, form last |
| 26 | **Cookie consent** | Fixed modal/banner, dark surface, granular toggles, wrapping button row `gap: 1.625rem` | Full-width bottom sheet on mobile |
| 27 | **Section heading group** | Optional accent uppercase eyebrow → H2 `3.25rem` centred → supporting paragraph ≤`45rem` centred | H2 → `1.875rem`; measure → 100% |

---

# 9. Buttons and Interactions

### Button sizes [VERIFIED]

| Size | Height | Padding | Font | Radius |
|---|---|---|---|---|
| Large | `4.75rem` | `.5rem 2.563rem` | `1.5rem` / 500 | `.625rem` |
| Default (pill) | auto | `.813rem .938rem` | `1.375rem` / 500 | `1.875rem` |
| Compact | `2.875rem` | `0 1.25rem` | `1.125rem` / 600 | `.4rem` |

### Button shape
Two coexisting shape languages:

1. **Pill** — `border-radius: 1.875rem` (30px), the most-used radius on the site (51 occurrences of `1.875rem` plus 20 of the equivalent `30px`). This is the **default CTA shape**.
2. **Soft rectangle** — `.4rem`–`.625rem`, used for compact and in-card actions.

Also present: `border-radius: 100px` and `6.25rem` for fully-round pills on small chips.

### Font styling
`Archivo`, weight 500–600, `text-transform: uppercase` on the primary CTA. A `lowercase` variant exists as a deliberate stylistic alternative — choose one convention as dominant.

### Icon usage [VERIFIED]
Buttons declare `gap: .938rem` (pill) and `gap: .6rem` (outline), and use `display: inline-flex; align-items: center` — confirming **trailing icons are standard**, typically an arrow. Icons should be ~`1rem`–`1.25rem`, inheriting `currentColor`.

### Primary button style

```css
.btn-primary {
  display: inline-flex; align-items: center; justify-content: flex-start;
  gap: .938rem;
  background: #00897a; color: #fff;
  border: none; border-radius: 1.875rem;
  padding: .813rem .938rem;
  font: 500 1.375rem/1.625rem Archivo, sans-serif;
  text-transform: uppercase; text-decoration: none;
  transition: all .2s;
}
.btn-primary:hover { background: #00efd4; color: #0a0a0a; }         /* [ESTIMATED] */
.btn-primary:focus-visible { outline: 2px solid #00efd4; outline-offset: 3px; }
```

### Secondary button style

```css
.btn-secondary {
  display: inline-flex; align-items: center; gap: .6rem;
  background: transparent; color: #fff;
  border: 1px solid #383737; border-radius: 1.875rem;
  padding: .813rem 1.5rem;
  transition: all .2s;
}
.btn-secondary:hover { border-color: #00efd4; color: #00efd4; }      /* [ESTIMATED] */
```

### Hover behaviour [ESTIMATED, consistent with the verified transition vocabulary]

- Primary: background brightens `#00897a` → `#00efd4`, text inverts to near-black; optional accent glow (`box-shadow: 0 0 5rem #01e3c9` is a verified value used elsewhere and suits a hover bloom).
- Secondary: border and label shift to accent, or the button fills and inverts.
- Trailing arrow translates right ~4px.
- Cards: lift ~4px, border warms to accent.
- Links: underline or colour shift to accent over `0.2s` (`a { transition: all .2s }` is [VERIFIED]).

### Focus behaviour
The platform default `box-shadow: 0 0 3px 1px #3898ec` is present [VERIFIED] — **this is a generic framework blue and should be replaced.** Use a `2px` accent (`#00efd4`) outline with `3px` offset so focus is visible against the dark canvas. Never remove focus styles: on a near-black background with low-contrast borders, keyboard focus is otherwise invisible.

### Animation speed [VERIFIED — frequency-ranked]

| Duration | Count | Use |
|---|---|---|
| `.2s` | 15 (`all`) + 8 (`opacity`) | **Default for all micro-interactions** |
| `.3s` | 6 (`all`) | Larger element transitions, accordions |
| `.4s` | 4 (`opacity`) + navbar + a compound `background-color/opacity/color` transition | Header state, panel fades |
| `.5s` | 2 (`all`) | Slow reveals |

**Use `0.2s` as the token default, `0.3s` for layout-affecting changes, `0.4s` for the header.** Easing is unspecified in most rules (browser default `ease`); one rule uses `ease-in`. Recommend `cubic-bezier(0.4, 0, 0.2, 1)` for a more considered feel.

### Scroll animations [ESTIMATED]
Fade-up on entry (opacity 0→1, translateY 20–30px→0) over `0.4s`–`0.5s`, triggered at ~15% viewport intersection, with an ~80ms stagger between siblings in a grid. Counters animate on entry. Timeline connectors fill progressively. Respect `prefers-reduced-motion` — the reference does not appear to, which is a defect to correct rather than copy.

### Menu animations
Mega menu: fade + slight translateY down, `0.2s`–`0.3s`. Mobile drawer: slide or fade, `0.3s`–`0.4s`, with body scroll lock. Dropdown chevrons rotate 180° over `0.2s`.

### Form interactions

- Focus: field border or ring shifts to accent, `0.2s`.
- Placeholder: muted, remains visible until typing.
- Validation: inline error text beneath the field in a warning colour; the success state replaces the form or appears above it (both message containers exist in the markup [VERIFIED]).
- Submit: disabled + label swap while pending [ESTIMATED].

### Micro-interactions observed or inferred

- Backdrop blur on the fixed header (verified) — a genuine hallmark, keep it.
- Logo marquee infinite scroll.
- Card arrow nudge on hover.
- Image scale-in-frame on card hover.
- Accordion icon rotation.
- Accent glow bloom behind hero and CTA blocks.
- Carousel drag with momentum (Swiper default).

---

# 10. Images, Icons, and Visual Assets

### Image style
Photography is **darkened, cooled and low-contrast-shadowed** so it recedes into the near-black canvas rather than punching out of it. Product and interface imagery is presented in rounded frames, often floated over an accent glow rather than pinned inside a bordered box. Illustration is used for hero and CTA moments — flat/semi-3D, transparent background, accent-family palette.

### Image cropping

- Cards: fixed-ratio containers with `object-fit: cover`, cropped from the centre.
- Logos: `object-fit: contain` in fixed boxes [VERIFIED] — never cropped or stretched.
- Portraits: 1:1 or 4:5, cropped to head-and-shoulders.
- Hero illustration: uncropped, free-floating.

### Image shape and corner radius

| Asset | Radius |
|---|---|
| Card image (full-bleed top) | inherits card top corners, `1rem` |
| Standalone image frame | `1rem`–`2rem` |
| Signature framed image | `1rem 3rem 1rem 1rem` (asymmetric) |
| Portrait — circular | `50%` [VERIFIED] |
| Portrait — rounded rect | `1rem`–`1.5rem` |
| Small thumbnail / chip | `.4rem`–`.5rem` |
| Logo mark | `0` (no radius) |

### Icon style
Consistent **line/outline icons** with a uniform stroke weight, drawn on a square grid, coloured with the accent (`#00efd4`) or white. Some appear inside a soft accent-tinted circular or rounded-square container (`#c0fff8` at low alpha, or `#262626`). No filled/duotone mixing — pick one family and hold it.

A `webflow-icons` font is loaded for platform UI chrome (dropdown arrows, slider controls) [VERIFIED]; product icons are separate SVG assets.

### Icon size and placement [ESTIMATED]

| Context | Size | Placement |
|---|---|---|
| Feature/service card | `2rem`–`2.5rem` | Top-left, above the title |
| Sector tile | `2.5rem`–`3rem` | Centred, above the label |
| Inline bullet (tick) | `1rem`–`1.25rem` | Left of the text, vertically centred |
| Button trailing icon | `1rem`–`1.25rem` | Right of the label, `gap: .938rem` [VERIFIED] |
| Social icon | `1.25rem` | Footer bottom bar row |
| Accordion toggle | `1.5rem` [VERIFIED on the close control] | Row right edge |

### Illustration style
Semi-abstract technical illustration — nodes, flows, layered planes and device frames — rendered in the accent family against transparency. Used at hero and full-width CTA moments only; never inside standard cards.

### Background graphics and decorative elements

- **Radial accent glow** — the dominant device. Large soft `#00efd4` radial at low alpha, positioned behind hero, CTA bands and occasionally card clusters. Verified glow values: `box-shadow: 0 0 5rem #01e3c9` and `0 4px 100px -17px rgba(0,239,212,0.1)`.
- Faint grid or dot patterns at very low opacity [ESTIMATED].
- Absolutely-positioned blurred colour blobs behind sections.
- **No** hard section dividers — separation is by background-value shift.

### Overlay effects

- Photo scrim: `rgba(0,0,0,0.4)`–`0.6` beneath white text.
- Gradient fade at the bottom of hero images into the page background.
- Card hover veil: accent at ~8–12% alpha.
- Header backdrop blur: `5px` [VERIFIED].

---

# 11. Spacing and Design Tokens

Copy-paste starting point. **[VERIFIED]** values were read from the reference stylesheet; **[EST]** values are reasoned defaults consistent with the observed system.

```css
:root {
  /* ---------- Containers ---------- */
  --container-max-width:        106rem;   /* 1696px  [VERIFIED] */
  --container-wide:             110rem;   /* 1760px  [VERIFIED] */
  --container-narrow:            75rem;   /* 1200px  [VERIFIED] */
  --container-reading:           45rem;   /*  720px  [VERIFIED] */
  --measure-paragraph:           35rem;   /*  560px  [VERIFIED] ≈65ch */

  --container-padding-desktop:    3rem;   /* [VERIFIED] */
  --container-padding-tablet:     2rem;   /* [VERIFIED on the wide shell] */
  --container-padding-mobile:     1rem;   /* [VERIFIED] */

  /* ---------- Section padding ---------- */
  --section-padding-desktop:      4rem;   /* [VERIFIED — dominant large value] */
  --section-padding-large:        8rem;   /* [VERIFIED] hero / major moments */
  --section-padding-medium:       5rem;   /* [VERIFIED] */
  --section-padding-compact:      3rem;   /* [VERIFIED] proof strips */
  --section-padding-strip:        2rem;   /* [VERIFIED — most frequent overall] */
  --section-padding-tablet:       3rem;   /* [EST] */
  --section-padding-mobile:       2rem;   /* [EST] */

  /* ---------- Spacing scale (4px base) ---------- */
  --space-1:  0.25rem;   --space-2:  0.5rem;    /* [VERIFIED in use] */
  --space-3:  0.75rem;   --space-4:  1rem;      /* [VERIFIED] */
  --space-5:  1.5rem;    --space-6:  2rem;      /* [VERIFIED] */
  --space-7:  2.5rem;    --space-8:  3rem;      /* [VERIFIED] */
  --space-9:  4rem;      --space-10: 5rem;      /* [VERIFIED] */
  --space-11: 6rem;      --space-12: 8rem;      /* [VERIFIED] */

  /* ---------- Grid gaps ---------- */
  --gap-xs:   0.5rem;    /* [VERIFIED]  49 uses */
  --gap-sm:   1rem;      /* [VERIFIED] 163 uses — DEFAULT card gap */
  --gap-md:   1.5rem;    /* [VERIFIED]  47 uses */
  --gap-lg:   2rem;      /* [VERIFIED]  95 uses — DEFAULT section gap */
  --gap-xl:   3rem;      /* [VERIFIED]  12 uses */
  --gap-2xl:  4rem;      /* [VERIFIED]   8 uses */

  /* ---------- Card padding ---------- */
  --card-padding:          2rem 1.5rem;  /* [VERIFIED] most common pairing */
  --card-padding-compact:  1rem 1.5rem;  /* [VERIFIED] */
  --card-padding-tile:     2rem 1rem;    /* [VERIFIED] */
  --card-padding-large:    3rem 3rem;    /* [VERIFIED] */
  --card-padding-cta:      4rem 5rem;    /* [VERIFIED] */
  --card-padding-mobile:   1.5rem 1rem;  /* [EST] */

  /* ---------- Typography ---------- */
  --font-heading: 'Archivo', 'Helvetica Neue', Arial, sans-serif;   /* [VERIFIED] */
  --font-body:    'Archivo', 'Montserrat', system-ui, sans-serif;   /* [VERIFIED] */
  --font-display: 'Archivo', sans-serif;  /* weight 100 = "Archivo Thin" [VERIFIED] */

  --fs-display:   5rem;      /* [VERIFIED] */
  --fs-h1:        4rem;      /* [VERIFIED] */
  --fs-h1-inner:  3.25rem;   /* [VERIFIED] most common large heading */
  --fs-h2:        3rem;      /* [VERIFIED] */
  --fs-h2-alt:    2.25rem;   /* [VERIFIED] h2 default */
  --fs-h3:        2rem;      /* [VERIFIED] */
  --fs-h4:        1.625rem;  /* [VERIFIED] card title */
  --fs-lead:      1.25rem;   /* [VERIFIED] */
  --fs-body-lg:   1.125rem;  /* [VERIFIED] */
  --fs-body:      1rem;      /* [VERIFIED] most-used */
  --fs-body-sm:   0.938rem;  /* [VERIFIED] 2nd most-used */
  --fs-caption:   0.875rem;  /* [VERIFIED] */
  --fs-micro:     0.75rem;   /* [VERIFIED] */

  --fs-h1-mobile:   2.25rem;  /* [EST] */
  --fs-h2-mobile:   1.875rem; /* [EST] */
  --fs-h4-mobile:   1.25rem;  /* [EST] */

  --lh-tight:   1.1;    --lh-heading: 1.2;
  --lh-snug:    1.4;    --lh-normal:  1.6;
  --lh-body:    1.75;   /* [VERIFIED] 16px/28px */

  --ls-display: -0.1rem;      /* [VERIFIED] */
  --ls-heading: -0.0625rem;   /* [VERIFIED] */
  --ls-normal:  0;            /* [VERIFIED] */
  --ls-label:   0.0625rem;    /* [VERIFIED] */

  --fw-light: 100;  --fw-regular: 400;
  --fw-medium: 500; --fw-semibold: 600;  --fw-black: 900;

  /* ---------- Heading & paragraph margins ---------- */
  --heading-margin-top:     0.625rem;  /* [VERIFIED] */
  --heading-margin-bottom:  0.625rem;  /* [VERIFIED] */
  --heading-margin-section: 1.5rem;    /* [EST] heading → body */
  --paragraph-margin:       1rem;      /* [EST] */
  --list-item-margin:       0.5rem;    /* [EST] */

  /* ---------- Colours ---------- */
  --color-primary:          #00efd4;   /* [VERIFIED] */
  --color-primary-mid:      #24c4b2;   /* [VERIFIED] */
  --color-primary-deep:     #0e9788;   /* [VERIFIED] */
  --color-secondary:        #00897a;   /* [VERIFIED] button base */
  --color-accent-tint:      #c0fff8;   /* [VERIFIED] */
  --color-accent-wash:      #f2fefd;   /* [VERIFIED] */

  --color-bg:               #0a0a0a;   /* [VERIFIED] */
  --color-bg-deep:          #040404;   /* [VERIFIED] */
  --color-surface:          #262626;   /* [VERIFIED] */
  --color-surface-raised:   #3d3c3c;   /* [VERIFIED] */
  --color-bg-light:         #f1f1f1;   /* [VERIFIED] */
  --color-white:            #ffffff;   /* [VERIFIED] */
  --color-black:            #000000;   /* [VERIFIED] */

  --color-text:             #ffffff;   /* on dark */
  --color-text-dark:        #1a1b1f;   /* [VERIFIED] on light */
  --color-text-body:        rgba(241,241,241,0.85);  /* [EST] */
  --color-text-muted:       rgba(255,255,255,0.60);  /* [EST] */
  --color-border:           rgba(255,255,255,0.08);  /* [EST] */
  --color-border-strong:    #3d3c3c;   /* [VERIFIED] */
  --color-border-button:    #383737;   /* [VERIFIED] */

  --color-overlay:          rgba(0,0,0,0.5);          /* [EST] */
  --gradient-accent:        linear-gradient(90deg, #00efd4, #00897a);   /* [EST] */
  --gradient-surface:       linear-gradient(180deg, #0a0a0a, #040404);  /* [EST] */

  /* ---------- Border radius ---------- */
  --radius-xs:      0.313rem;   /* [VERIFIED] */
  --radius-sm:      0.4rem;     /* [VERIFIED] */
  --radius-md:      0.5rem;     /* [VERIFIED] */
  --radius-lg:      0.75rem;    /* [VERIFIED] */
  --radius-card:    1rem;       /* [VERIFIED] 19 uses */
  --radius-xl:      1.5rem;     /* [VERIFIED] */
  --radius-2xl:     2rem;       /* [VERIFIED] */
  --radius-pill:    1.875rem;   /* [VERIFIED] 51 uses — MOST COMMON */
  --radius-round:   6.25rem;    /* [VERIFIED] */
  --radius-circle:  50%;        /* [VERIFIED] */
  --radius-signature:      1rem 3rem 1rem 1rem;   /* [VERIFIED] 14 uses */
  --radius-signature-lg:   1rem 4rem 1rem 1rem;   /* [VERIFIED]  5 uses */
  --radius-signature-alt:  0.5rem 0.5rem 0.5rem 2rem; /* [VERIFIED] mirrored */

  /* ---------- Shadows & glows ---------- */
  --shadow-card:   0 4px 24.2px rgba(0,0,0,0.25);       /* [VERIFIED] */
  --shadow-glow:   0 4px 100px -17px rgba(0,239,212,0.1); /* [VERIFIED] */
  --shadow-bloom:  0 0 5rem #01e3c9;                     /* [VERIFIED] */
  --shadow-focus:  0 0 0 2px #00efd4;                    /* [EST] replaces platform default */

  /* ---------- Breakpoints ---------- */
  --bp-ultrawide: 1920px;  /* [VERIFIED] min-width */
  --bp-desktop:    992px;
  --bp-tablet:     991px;  /* [VERIFIED] max-width */
  --bp-mobile:     767px;  /* [VERIFIED] max-width */
  --bp-mobile-sm:  479px;  /* [VERIFIED] max-width */

  /* ---------- Animation ---------- */
  --duration-fast:   0.2s;   /* [VERIFIED] default */
  --duration-base:   0.3s;   /* [VERIFIED] */
  --duration-slow:   0.4s;   /* [VERIFIED] header / panels */
  --duration-slower: 0.5s;   /* [VERIFIED] */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);  /* [EST] */
  --stagger-step: 80ms;                          /* [EST] */

  /* ---------- Layout ---------- */
  --header-height-desktop: 6.875rem;   /* [VERIFIED by calculation] */
  --header-height-mobile:  5rem;       /* [EST] */
  --header-blur:           5px;        /* [VERIFIED] */
  --z-header: 100;  --z-dropdown: 99;  /* [VERIFIED z-index: 99 on dropdown close] */
  --z-modal:  1000;
}
```

### Responsive token overrides

```css
@media (max-width: 991px) {
  :root {
    --container-padding-desktop: var(--container-padding-tablet);
    --section-padding-desktop:   var(--section-padding-tablet);
    --header-height-desktop:     6.75rem;
  }
}
@media (max-width: 767px) {
  :root {
    --container-padding-desktop: var(--container-padding-mobile);
    --section-padding-desktop:   var(--section-padding-mobile);
    --fs-h1:       var(--fs-h1-mobile);
    --fs-h2:       var(--fs-h2-mobile);
    --fs-h4:       var(--fs-h4-mobile);
    --card-padding: var(--card-padding-mobile);
    --header-height-desktop: var(--header-height-mobile);
  }
}
@media (prefers-reduced-motion: reduce) {
  :root { --duration-fast: 0.01ms; --duration-base: 0.01ms;
          --duration-slow: 0.01ms; --duration-slower: 0.01ms; --stagger-step: 0ms; }
}
```

---

# 12. Implementation Guidelines

## A. Reference design rules to follow

These are the transferable, non-proprietary rules. Adopting them reproduces the *design direction*; none of them carries reference content.

**Foundations — do these first, in this order:**

1. **Install the token layer** from Section 11 as the single source of truth. Do not hard-code colours, radii or spacing anywhere else.
2. **Set the dark canvas.** `#0a0a0a` primary, `#040404` for alternating sections and the footer, `#262626` for cards. Section separation comes from *background-value shifts*, not borders or rules.
3. **Adopt a single high-chroma accent.** One accent (`#00efd4`) plus its deeper button variant (`#00897a`). Resist adding a second brand hue — the discipline of the two-tone palette is what makes it read as premium.
4. **Set the wide container.** `max-width: 106rem` with `3rem` gutters. This is non-negotiable for the look; a 1200px container will make the design read as generic.
5. **Load the type pair.** Archivo across the board, with weight 100 reserved for large display numerals. Base body `1rem`/`1.75`; section headings `3.25rem` at **weight 400**.

**Layout and rhythm:**

6. Build sections from the CSS Grid patterns in Section 2 (`1fr 1fr 1fr` and `1fr 1fr 1fr 1fr` dominate). Collapse 4 → 2 → 1 and 3 → 1.
7. Use `4rem` as the standard section vertical padding, `8rem` for hero moments, `2rem`–`3rem` for proof strips.
8. Use `1rem` gaps between cards, `2rem` between larger blocks.
9. Alternate dense grids with short full-bleed proof strips so the page breathes.
10. Cap paragraph measure at `35rem`; centred section intros at `45rem`.

**Components and detail:**

11. Default CTA is a **pill** (`border-radius: 1.875rem`) with an accent fill, uppercase label and trailing arrow.
12. Deploy the **signature asymmetric radius** (`1rem 3rem 1rem 1rem`) on one or two card families per page — not everywhere.
13. Header: fixed, transparent, `5px` backdrop blur, tall (`~6.9rem`), transitioning over `0.4s`.
14. Use radial accent glows behind hero and CTA blocks instead of hard section borders.
15. All micro-interactions at `0.2s`; layout-affecting transitions at `0.3s`; header at `0.4s`.
16. Scroll-reveal is fade-up with an ~80ms stagger — subtle, never bouncy.

**Corrections to make rather than copy:**

17. **Replace the platform default focus ring** (`0 0 3px 1px #3898ec`) with an accent-based, high-contrast focus style. The default blue is a framework artefact, not a design decision.
18. **Add `prefers-reduced-motion` support** — the reference does not appear to honour it.
19. **Verify contrast.** `#00efd4` on `#0a0a0a` is strong, but `#00897a` with white text sits near the AA threshold at small sizes — use it at `1.125rem`+ or darken the text side. Muted body text at 60% opacity on `#0a0a0a` will likely fail AA; keep body text at ≥`#c9c9c9` equivalent.
20. **Reconsider the page length.** The reference's 17–23 section templates are aggressive. Adopt the *ordering logic*, but cut sections your content cannot fill genuinely — a half-empty section reads worse than an absent one.

## B. Existing website content to preserve

Apply the design system **as a re-skin over your current site**. Nothing in this document should trigger a content migration.

**Preserve without modification:**

- All existing copy — headings, body text, product and service descriptions, legal text.
- All existing business information — company name, addresses, phone numbers, email addresses, registration details, opening hours.
- All existing images and media, unless an asset is technically unusable at the required dimensions or aspect ratio. If a replacement is genuinely necessary, source it independently.
- The existing brand kit — **your** logo, **your** brand colours, **your** typefaces. Where your brand kit conflicts with a value in Section 11, **the brand kit wins.** Map your brand colours onto the *structural roles* (background / surface / accent / text) rather than adopting the reference's hex values.
- All existing functionality — forms and their handlers, search, filtering, authentication, cart or booking flows, integrations, analytics and tracking.
- All existing routes, URL structure and page hierarchy. Do not restructure the IA to match the reference's route families; the reference architecture in Section 6 is documented as *reasoning*, not as a migration target.
- Existing SEO assets: meta titles and descriptions, canonical URLs, structured data, `sitemap.xml`, `robots.txt`, alt text.
- Existing accessibility affordances already in place.

**How to apply the brand kit over this system:**

| Structural role | Take from |
|---|---|
| Page background, surfaces, borders | Reference system (dark neutral ladder) — or your brand's neutrals if defined |
| Accent / CTA / highlight | **Your brand primary** |
| Typography | **Your brand fonts**, mapped onto the reference *scale and weights* |
| Radii, spacing, grid, motion | Reference system |
| Layout patterns, section rhythm | Reference system |

If your brand accent is low-chroma, the dark canvas will feel flat. In that case either brighten the accent for interactive states only, or lift the background one step toward `#111`.

## C. Content and assets that must NOT be copied from the reference

Hard prohibitions. These are the reference site's property and none of them appear anywhere in this specification.

- ❌ Any headline, subheading, body paragraph, button label, FAQ question or answer, or microcopy.
- ❌ The company name, logo, wordmark, favicon, or any brand asset.
- ❌ Photographs, illustrations, icons, hero graphics or background images — **do not download or hotlink any asset**, including from the reference's CDN.
- ❌ Client names, partner logos, technology-partner marks, press or publication logos.
- ❌ Award badges, rating widgets, review scores, or third-party trust marks. These certify *that* organisation; reproducing them is misrepresentation. Use only badges your own business has earned.
- ❌ Testimonials, quotes, client attributions, portraits.
- ❌ Case study narratives, project names, screenshots, or the metrics within them.
- ❌ Team member names, portraits, biographies or profile content.
- ❌ Office addresses, phone numbers, email addresses, social media handles.
- ❌ Blog articles, titles, excerpts, or category taxonomies.
- ❌ Pricing structures presented as your own.
- ❌ Their stylesheets, scripts, or HTML lifted verbatim. Implement the *system* described here in your own code. The CSS values quoted in this document are recorded as **measurements for analysis**, in the same way one might note a building's ceiling height — reimplement them in your own stylesheet rather than copying their files.
- ❌ Meta descriptions, page titles, or structured data.

**Legal note:** design *ideas* — a dark palette, a wide container, a pill button, a card grid — are not protectable, and reimplementing them is legitimate. Specific creative *expression* — copy, imagery, logos, and the exact arrangement of their branded content — is. This specification stays firmly on the former side, and your implementation must too. When in doubt: if it identifies the reference business or its clients, don't use it.

## D. Suggested implementation order

1. Token layer (Section 11) → verify it compiles and nothing else hard-codes values.
2. Global base: body type, heading scale, link styles, focus styles, reduced-motion block.
3. Header and footer — they appear on every route, so they deliver the most visible change first.
4. Button and card components.
5. Homepage sections, top to bottom.
6. Interior page templates, highest-traffic first.
7. Forms and interactive components (accordion, tabs, carousel).
8. Motion layer — scroll reveals last, once layout is stable.
9. Responsive pass at 1920 / 1440 / 991 / 767 / 479.
10. Accessibility and functional regression pass.

---

# 13. Final Page-by-Page Checklist

Run this per template. `[ ]` = unverified, `[x]` = verified in browser at all breakpoints.

### Typography

- [ ] Heading font, body font and display weight loaded, with correct fallback stacks
- [ ] Font files self-hosted or preloaded; no layout shift on load (`font-display: swap`)
- [ ] Section headings at the large scale step, **weight 400** — not bolded by default
- [ ] Body copy at `1rem` with a `1.75` line height
- [ ] Negative tracking applied to large headings; positive tracking on uppercase labels
- [ ] Paragraph measure capped at ~`35rem` (≈65 characters)
- [ ] Text transform applied consistently (one dominant convention for buttons)
- [ ] Mobile type scale reduces headings; body stays ≥16px in form inputs
- [ ] No orphaned single words on hero headings at common widths

### Colours

- [ ] All colours resolve through tokens; zero hard-coded hex values outside the token block
- [ ] Dark canvas + alternating deeper sections applied
- [ ] Card surface distinguishable from page background without needing a border
- [ ] Single accent used consistently for CTAs, links, highlights and active states
- [ ] Brand-kit colours mapped to structural roles; brand kit takes precedence over reference hex values
- [ ] Body text contrast ≥ 4.5:1; large text ≥ 3:1 (**check muted text — most likely failure point**)
- [ ] Accent-on-dark and white-on-accent-button combinations both pass
- [ ] No decorative palette colours introduced without a categorical purpose

### Spacing

- [ ] Container max-width and gutters correct at every breakpoint
- [ ] Section vertical padding consistent; hero and CTA bands use the larger step
- [ ] Card gap `1rem`, section gap `2rem` (or documented deviation)
- [ ] Card padding consistent across every card family
- [ ] Heading-to-body and paragraph margins uniform
- [ ] No horizontal overflow at 479px, 767px, 991px, 1440px or 1920px
- [ ] Hero clears the fixed header with adequate breathing room

### Section order

- [ ] Sections follow the documented order for this template
- [ ] Objection-handling logic preserved (capability → proof → process → cost → people → CTA)
- [ ] Dense grids alternate with lighter proof strips
- [ ] Any omitted section removed cleanly — no empty containers or collapsed margins
- [ ] Every section has a genuine content payload (no filler)

### Responsive behaviour

- [ ] Verified at 1920, 1440, 1280, 991, 767, 479
- [ ] 4-col → 2-col → 1-col and 3-col → 1-col collapses correct
- [ ] Split sections stack in a sensible reading order (text before image)
- [ ] Carousels become swipe-driven with correct slides-per-view
- [ ] Logo grids and marquees reflow without squashing marks
- [ ] Stat rows become 2×2 then 1-col
- [ ] Buttons go full-width and stack on small screens
- [ ] Tables and comparison blocks scroll horizontally rather than breaking layout
- [ ] Images maintain aspect ratio; no distortion or unintended cropping
- [ ] Touch targets ≥ 44×44px

### Navigation

- [ ] Header fixed, transparent, backdrop blur applied
- [ ] Header height correct at each breakpoint; logo scales as specified
- [ ] Scroll behaviour implemented with `0.4s` timing
- [ ] Mega menus open on hover, dismiss on click-away and on Escape
- [ ] Mega menus keyboard-navigable; focus trapped appropriately when open
- [ ] Active/current state visible on the relevant nav item
- [ ] Mobile drawer opens, locks body scroll, closes on link selection
- [ ] Nested menu groups work as accordions on mobile
- [ ] Header CTA present and reachable on every breakpoint
- [ ] Nav legible against every hero variant (light hero images included)

### Buttons

- [ ] Primary, secondary, large and compact variants all implemented
- [ ] Pill radius correct on the default CTA
- [ ] Trailing icon spacing correct; icon inherits `currentColor`
- [ ] Hover states on all variants
- [ ] **Focus-visible states are accent-based, not the platform default blue**
- [ ] Active/pressed state present
- [ ] Disabled state defined and visually distinct
- [ ] Transitions at `0.2s`
- [ ] Buttons rendered as `<button>` or `<a>` as semantically appropriate

### Forms

- [ ] Field styling matches the surface/radius/placeholder spec
- [ ] Every field has a programmatically associated `<label>` (placeholder is not a label)
- [ ] Focus state clearly visible on the dark background
- [ ] Inline validation, error and success states implemented and announced to screen readers
- [ ] Required fields indicated non-visually as well as visually
- [ ] **Existing form handlers, endpoints and integrations still function**
- [ ] Spam protection preserved
- [ ] Submit shows a pending state; no double submission
- [ ] Input font-size ≥16px on mobile (prevents iOS zoom)
- [ ] Autocomplete attributes preserved

### Footer

- [ ] Deepest background value applied
- [ ] Column structure correct and collapsing properly
- [ ] All existing footer links preserved and functional
- [ ] Newsletter form styled and functional
- [ ] Social icons present, correctly sized, with accessible names
- [ ] Legal links and copyright intact
- [ ] Bottom bar hairline separator present
- [ ] Cookie consent component functional and compliant

### Accessibility

- [ ] Logical heading hierarchy — one `<h1>` per page, no skipped levels
- [ ] Landmark regions: `header`, `nav`, `main`, `footer`
- [ ] Skip-to-content link present and visible on focus
- [ ] Full keyboard operability — no traps; menus, tabs, accordions and carousels all reachable
- [ ] Visible focus indicator on every interactive element (critical on a dark canvas)
- [ ] `prefers-reduced-motion` honoured across scroll reveals, marquees and carousels
- [ ] Marquees and carousels pausable
- [ ] Meaningful alt text on content images; `alt=""` on decorative graphics
- [ ] Accordions and tabs use correct ARIA (`aria-expanded`, `aria-controls`, roles)
- [ ] Colour is never the sole means of conveying information
- [ ] Text contrast verified with a checker, not by eye
- [ ] Page zooms to 200% without loss of content or function
- [ ] Screen-reader pass on the homepage and one interior template

### Existing functionality

- [ ] All routes resolve; no 404s introduced
- [ ] Search, filtering and sorting still work
- [ ] Authentication and gated content unaffected
- [ ] Cart / booking / checkout flows unaffected
- [ ] Third-party embeds and integrations render correctly on the dark background
- [ ] Analytics and tracking still fire
- [ ] Dynamic/CMS content renders correctly in the new components
- [ ] Pagination and load-more behave
- [ ] Performance not regressed — check LCP, CLS and total page weight after adding glows, blurs and animations

### Content preservation

- [ ] All original copy intact — no reference wording introduced anywhere
- [ ] Business details unchanged
- [ ] Original images retained; any replacement independently sourced
- [ ] Brand kit correctly applied and taking precedence over reference values
- [ ] **No reference logos, client marks, award badges or rating widgets present**
- [ ] **No reference testimonials, case studies, team profiles or article content present**
- [ ] No reference assets loaded from their CDN, and no reference CSS/JS files copied
- [ ] Meta titles, descriptions, canonicals and structured data preserved
- [ ] Alt text preserved or improved
- [ ] Final review: search the codebase for the reference domain and company name — **zero occurrences expected**

---

## Appendix — Verification method

The [VERIFIED] values in this document were obtained by:

1. Fetching the homepage HTML and extracting all internal routes (~90 unique paths).
2. Downloading the two served Webflow stylesheets (≈482KB and ≈30KB) and reading them directly.
3. Extracting the `:root` custom property block verbatim for the colour system.
4. Running frequency analysis across `font-size`, `font-family`, `border-radius`, `max-width`, `padding`, `grid-template-columns`, `grid-column-gap`, `letter-spacing`, `text-transform`, `line-height`, `box-shadow` and `transition` declarations — frequency counts identify which values are *system defaults* versus one-off exceptions.
5. Reading the base element rules (`body`, `h2`, `h4`, `h6`, `a`, `blockquote`) and the header, logo, container and button class rules directly.
6. Enumerating the media queries present to establish the true breakpoint set.
7. Retrieving the rendered structure of the homepage, a service pillar page and the about page to establish section ordering and layout templates.

Everything not obtainable by those means — hover states, scroll-trigger thresholds, easing curves, mobile-specific type sizes, animation choreography — is labelled **[ESTIMATED]** and should be treated as a reasoned starting point to tune against the live reference, not as fact.

**Not independently verified in a browser:** rendered computed styles at each breakpoint, JavaScript-driven scroll behaviour, and hover/focus states. A developer implementing this should spot-check those interactively.
