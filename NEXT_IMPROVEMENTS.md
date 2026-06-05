# Next.js Improvement Notes

Scope: full-code scan for improvements that keep the current interactions and visual behavior the same.

Checks run:

- `npm run lint`: passes with one warning in `src/app/layout.tsx`.
- `npx tsc --noEmit --incremental false`: passes.

## Priority 1

### Remove the unused `localFont` import

`src/app/layout.tsx` imports `localFont` from `next/font/local`, but the only local font setup is commented out. ESLint reports this as the only current warning.

Recommended change:

- Delete the unused import if Google fonts are the intended setup.
- Or restore the `GeneralSans` local font configuration and remove the unused Google font if the local font is the intended design system font.

Why this preserves interaction: it only removes dead code or clarifies the active font source.

### Move route-specific hero rendering out of `usePathname`

`src/components/Hero.tsx` is a client component only because it calls `usePathname()` to choose the hero variant. Every page already knows which variant it needs, so the page can pass a `variant` prop instead.

Recommended change:

- Change `Hero` to accept `variant="home" | "experiments" | "resume" | "printhub" | "youtube"`.
- Keep animation in a small client wrapper if Framer Motion is still required.
- Update pages to render `<Hero variant="..." />`.

Why this preserves interaction: the same hero content and animation can render, but the routing decision moves out of the browser.

### Split `Navbar` into server shell plus client controls

`src/components/Navbar.tsx` is a large client component because it uses `usePathname()`, menu state, Framer Motion, and the email shortcut. The static nav link structure and project labels do not need to run as client JavaScript.

Recommended change:

- Keep the mobile menu toggle and email-copy behavior in client subcomponents.
- Pass the current section/project label from each route, or derive active state from a small client child only where needed.
- Keep the same links, labels, hover states, and shortcut behavior.

Why this preserves interaction: the interactive controls remain client-side, while static nav markup becomes easier to test and reason about.

### Add per-route metadata

Only global metadata exists in `src/app/layout.tsx`. The case-study, experiments, and resume routes can expose more specific titles/descriptions without changing UI behavior.

Recommended change:

- Add static `metadata` exports in:
  - `src/app/printhub/page.tsx`
  - `src/app/youtube/page.tsx`
  - `src/app/experiments/page.tsx`
  - `src/app/resume/page.tsx`
- Use route-specific Open Graph titles/descriptions where the same `/og-image.png` is acceptable.

Why this preserves interaction: metadata changes search/social previews only.

## Priority 2

### Reduce case-study page size by extracting sections (Ignore)

`src/app/printhub/page.tsx` is about 100 KB and `src/app/youtube/page.tsx` is about 67 KB. Both contain repeated section patterns, repeated image clusters, and narrative blocks.

Recommended change:

- Extract local route components such as `IntroSection`, `ProblemSection`, `JourneySection`, `DecisionSection`, and `StorySection`.
- Keep these components colocated under route folders, for example `src/app/printhub/_components/*`.
- Keep data close to the page if the content is still one-off; do not over-abstract copy into a CMS-style structure unless editing friction becomes real.

Why this preserves interaction: JSX is reorganized, but rendered markup and assets can stay equivalent.

### Normalize import aliases

Some files use `@/components/...`; others use relative imports like `../../components/...`.

Recommended change:

- Prefer `@/...` aliases consistently for cross-folder app/component imports.
- Keep same-folder relative imports where they are clearer.

Why this preserves interaction: import path cleanup has no runtime behavior change.

### Review `Image` quality and `sizes`

The app uses `next/image` consistently, which is good. The main follow-up is tuning payload size: many case-study images force `quality={100}` or `quality={90}`, and several `fill` images omit a precise `sizes` value.

Recommended change:

- Use `quality={90}` only for screenshots where visible UI text needs it.
- Use the default quality or `quality={75}` for decorative SVG/PNG assets and smaller thumbnails.
- Add precise `sizes` to `fill` images in the long case-study pages.
- Consider converting large PNG screenshots to AVIF/WebP in `public/` where visual fidelity remains acceptable.

Why this preserves interaction: images remain the same content and layout, but downloaded bytes should drop.

### Remove or relocate `public/page.tsx`

`public/page.tsx` appears to be an old React/Next page copy stored inside the static assets folder. Next will not route it from `public`, but it is confusing because it imports application code from `../src/...`.

Recommended change:

- Delete it if it is obsolete.
- Or move it to a clearly named archive folder outside `public` if it is still useful as reference.

Why this preserves interaction: the file is not part of the active app route tree.

## Priority 3

### Revisit clipboard shortcut behavior

`useEmailShortcut()` copies the email whenever `c` is pressed. `useKeyboardPress()` ignores Ctrl/Meta/Alt, but it does not ignore focused inputs, textareas, selects, or contenteditable elements.

Recommended change:

- Match the input guard already used in `ResumeViewer` for the `v` shortcut.
- Also skip repeated `keydown` events if needed to avoid repeated clipboard writes while a key is held.

Why this preserves interaction: the shortcut remains `C`, but it avoids surprising copy actions during text entry.

### Clean up PDF viewer options

Both `src/components/ResumeViewer.tsx` and `src/components/PdfViewer.tsx` exist, but the resume route only uses `ResumeViewer`. `PdfViewer` also points to `/pdf.worker.min.mjs`, which is not present in the current `public/` file list.

Recommended change:

- Remove `PdfViewer` if unused.
- Or align it with the worker setup used in `ResumeViewer`.

Why this preserves interaction: the active resume viewer can remain unchanged.

### De-duplicate email tooltip/copy UI

`Navbar` and `Footer` both define similar copied/tooltips and both use `useEmailShortcut()`.

Recommended change:

- Extract a small `EmailCopyButton` or shared tooltip primitives.
- Keep each placement's existing classes so desktop/mobile/footer visuals do not change.

Why this preserves interaction: same shortcut and feedback, less repeated UI state code.

### Add route-level loading/error boundaries only where useful

The app has `not-found.tsx`, but no route-level `loading.tsx` or `error.tsx`. Most pages are static, so this is not urgent. The resume page is the main candidate because it does browser-side PDF work.

Recommended change:

- Add a focused error boundary only if PDF rendering failures need a route-level fallback beyond the current component error state.
- Avoid adding generic loading files to static routes unless there is real async work.

Why this preserves interaction: this is optional resilience work, not a UI redesign.

## Already In Good Shape

- App Router structure is in use.
- TypeScript strict mode is enabled.
- `next/image` is used instead of raw `<img>`.
- `next/font` is used for Google fonts.
- No `cookies()`, `headers()`, `params`, or `searchParams` migration issues were found in the current route files.
- Lint and type checks pass apart from the one unused import warning.

## Suggested Order

1. Fix the `layout.tsx` unused import warning.
2. Add route metadata.
3. Remove or archive `public/page.tsx`.
4. Guard global keyboard shortcuts around text-entry targets.
5. Extract `Hero` routing logic out of `usePathname`.
6. Split `Navbar` and then de-duplicate email copy UI.
7. Tune image quality/sizes and convert large screenshots after visual comparison.
8. Break up the large case-study pages once the smaller cleanup is complete.
