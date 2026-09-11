# Eaquirs Tech — Session Resume

## Project

Next.js 15 / React 19 marketing website in `D:\HussainDeveloper\eaquirs-tech`.

## Brand system in use

- Navy: `#071B3A`
- Yellow: `#FFD230`
- Primary font: Archivo
- Light sections should use browser white; navy sections keep white text and yellow headings or accents.
- Image overlays use `BrandedVisual` for the Eaquirs Tech signature/logo treatment.

## Recent completed work

- Reworked Services, Industries, Consultancy, About, and Work page cards to use consistent navy/yellow/white treatments.
- Reduced excessive vertical section spacing, especially on Industries, Consultancy, and Work pages.
- Added restrained hover effects to consultancy cards, industry cards, Work delivery highlights, and final Work outcome cards.
- Improved typography: clearer body sizing, stronger muted copy, brighter dark-section copy, and no weak `font-light` text.
- Replaced the Services hero image and removed its yellow floating badges.
- Replaced the DevOps & CI/CD service hero visual.
- Made the Work hero full screen with its own panoramic background visual.
- Restyled the OpenInterview.me AI proof card yellow in its regular and hover states.
- Footer now uses the icon plus an Archivo text label below it for a consistent footer wordmark.

## New generated image assets

- `public/service-visuals/services-hero-team.png`
- `public/service-visuals/devops-cicd-operations.png`
- `public/service-visuals/work-hero-production.png`
- Brand wordmark: `public/brand/eaquirs-tech-logo-navy-amber.png`

## Verification

Run `npx.cmd tsc --noEmit` after changes. It has passed after the recent updates.

## Known environment note

`next build` may fail in this sandbox only because Google Font fetching is blocked. This is not a TypeScript or application-code error.
