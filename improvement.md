# Portfolio Improvements Plan

Based on the analysis of the Next.js repository, here are the smallest to most impactful improvements that can be made, focusing on code maintainability, website loading performance, web accessibility, SEO, and AEO.

## 1. Code Maintainability
*   **Enable Cache Components (Next.js 16+)**: The `next.config.ts` is missing `cacheComponents: true`. Enabling this allows Partial Prerendering (PPR) and prepares the app for advanced caching features like the `'use cache'` directive.
*   **Optimize `"use client"` Boundaries**: Almost all components (`Navbar`, `Footer`, `PrimaryProjectCard`, etc.) are currently Client Components due to `framer-motion` and React hooks. While necessary for animations, non-interactive wrapper components can be kept as Server Components by pushing "use client" down to the leaf nodes (e.g., creating specific animated wrappers).
*   **Code Cleanup**: `src/app/layout.tsx` imports `localFont` but the `generalSans` font is commented out. We should remove the unused import to keep the code clean.

## 2. Website Loading Performance
*   **Caching Strategy**: Explicitly leverage Next.js 16 cache capabilities once `cacheComponents` is enabled. For any future data fetching (like pulling case studies from a CMS), use `cacheLife` and `cacheTag`.
*   **Image Optimization**: The `PrimaryProjectCard` already uses `priority` and `sizes` nicely. However, we can evaluate if `quality={90}` is strictly necessary for all images, as lowering it slightly (e.g., to `75` or `80`) can significantly reduce image sizes without noticeable visual degradation.

## 3. Web Accessibility (A11y)
*   **Accessible Social Links**: The social links in `Footer.tsx` (X, LinkedIn, Behance) use SVG icons inside `<a>` tags without any accompanying text or `aria-label`. This makes them invisible/unclear to screen readers. We must add `aria-label={platform.name}`.
*   **Semantic Interactive Elements**: In `Navbar.tsx`, the mobile menu toggle is implemented as a `<div onClick={...}>`. This is an accessibility anti-pattern. It must be converted to a `<button>` with `aria-expanded={menuOpen}` and an `aria-label="Toggle menu"`.
*   **Copy Buttons**: The "Copy Email" buttons in `Navbar` and `Footer` use `title`, which is good for tooltips, but should also have explicit `aria-label`s for screen reader announcements.

## 4. SEO (Search Engine Optimization)
*   **Image Alt Texts**: While decorative images correctly use `alt=""`, we should ensure that any meaningful image (like the profile photo in `page.tsx`) has a highly descriptive `alt` attribute (e.g., "Ishad Pande - Product Designer").
*   **Semantic Structure**: Ensure `<section>` and `<article>` tags are used effectively. `page.tsx` uses mostly `<div>` for sections. Wrapping the Experience and Projects sections in proper `<section>` tags with `aria-labelledby` will improve document outline.

## 5. AEO (Answer Engine Optimization)
*   **Structured Data (JSON-LD)**: Answer Engines (like ChatGPT, Gemini, Perplexity) rely heavily on structured data. We should inject a `Person` or `ProfilePage` Schema.org JSON-LD script into the `<head>` of `layout.tsx`. This explicitly tells bots your identity, profession ("Product Designer"), education ("Government College of Engineering, Nagpur"), and social links.
*   **Declarative Content**: Ensure the text on the landing page clearly states the "Who, What, and Where". The current copy is good, but reinforcing semantic meaning through structured data is the biggest AEO win.

---
**Next Steps**: Review these findings. Once approved, I can systematically implement these small, high-impact changes across the repository.
