# Portfolio Design Language (Observed)

This document outlines the core visual, layout, and typographic rules observed across the Home and About pages. This system ensures clean, consistent, and grid-aligned designs.

## 1. Grid & Borders (Bento-like Outline Grid)
* **Outline Grids:** Sections are divided by solid, distinct borders using `.border-outline` (or `border-border-default`) rather than card-based shadows.
* **Vertical/Horizontal Spans:** Inside grids, elements are structured cleanly into rows and columns with explicit boundaries (`border-b`, `border-r`, `border-t`, `border-outline`).
* **Border Radii:** Outer container blocks use `rounded-2xl` (16px) with `overflow-hidden` to clip contents. Internal grid elements meet the outer borders without nested rounding.
* **Page Wrapper:** Pages are wrapped in a centered container of fixed content width (`w-content` / `max-w-5xl`).

## 2. Typography
All text classes are defined in `globals.css` and use specific utility rules:
* **Headers:** 
  * `font-h1`: Large titles, clean displays.
  * `font-h2` / `font-h3`: Section headers, medium-to-large sizes.
  * `font-h4`: Card level titles.
* **Body:**
  * `font-body-lg` / `font-body-md`: Primary text descriptions.
  * `font-body-sm` / `font-body-sm-bold`: Detail text and secondary labels.
* **Monospace Labels:**
  * `font-label-lg-mono` / `font-label-md-mono`: Used for tags, roles, dates, and technical details.

## 3. Spacing & Padding
* **Section Padding:** Standard padding for content cells is `p-10` on large screens and `p-6` on smaller mobile screens.
* **Gap Scales:** Vertical spacing uses a standard scale: `gap-6` (24px) for medium elements, and `gap-10` (40px) to divide headers from content.

## 4. Interaction Patterns
* **Tactile Press Effects:** Clickable cards and CTA buttons use custom Framer Motion variants that spring vertically (animating `paddingBottom` and `marginTop` or scale) to simulate a physical push-button action.
* **Hover State Indicators:** Underlines, border color shifts, or background tint overlays transition smoothly to draw focus.
