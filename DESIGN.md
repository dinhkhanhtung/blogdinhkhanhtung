# DESIGN.md - Source of Truth

This file contains the core design tokens and guidelines for "Phòng Chẩn Trị YHCT Thu Bẩy".
**Target Audience:** Middle-aged adults (45+)
**Vibe:** Professional, Calming, Authoritative, Traditional yet Modern.
**Aesthetic Family:** Premium Forest & Slate

## Design Dials
- **DESIGN_VARIANCE:** 6/10 (Clean, structured, bento-grid, asymmetrical balance)
- **MOTION_INTENSITY:** 4/10 (Subtle, slow fade-ins, gentle scale on hover, no jarring movements)
- **VISUAL_DENSITY:** 3/10 (High whitespace, clear separation, large tap targets)

## Typography
- **Primary Font (Headings):** Playfair Display (Serif) - communicates tradition and authority.
- **Secondary Font (Body):** Outfit or Geist (Sans-serif) - highly legible for 45+.
- **Scale:** Modular scale with higher base size (18px for body text).

## Color Palette (OKLCH / Hex)
- **Primary / Brand:** Forest Green (`#15803d` / green-700) - signifies nature, herbs, healing.
- **Accent:** Emerald (`#22c55e` / green-500) - used for highlights and counters.
- **Background (Light):** Slate-50 (`#f8fafc`) - softer than pure white.
- **Background (Dark):** Slate-900 (`#0f172a`) - premium dark sections.
- **Text (Primary):** Slate-900 (`#0f172a`)
- **Text (Secondary):** Slate-600 (`#475569`)

## Layout Paradigms
- **Hero:** Split-screen (Text left, Image right) or Asymmetrical.
- **Features/Services:** Bento Grid pattern - rhythm and visual interest.
- **Spacing:** Extensive use of `py-16`, `py-24` on desktop to give elements room to breathe.
- **Borders & Shadows:** Subtle hairline borders (`border-slate-200` or `border-white/20` in dark mode). Glassmorphism (`backdrop-blur-md`, `bg-white/10`) for overlays. Elevate elements with soft shadow (`shadow-xl` with low opacity).

## Interaction Models
- **Buttons:** Tactile feel. Active state compresses slightly (`active:scale-95`).
- **Cards:** Subtle hover lift (`hover:-translate-y-1`) and shadow expansion. Image slow scale (`group-hover:scale-105 duration-500`).
