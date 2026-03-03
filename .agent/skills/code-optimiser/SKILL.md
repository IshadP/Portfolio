---
name: code-optimiser
description: >
  Optimise the code quality, structure, performance, and file/folder architecture
  of React/JSX, TypeScript, and Framer Motion projects according to industry best
  practices. Use this skill whenever the user asks to "clean up", "refactor",
  "optimise", "improve", "review", or "restructure" their code or files — even if
  they just say "make this better" or "is this good code?". Also trigger for requests
  like "how should I organise this project?", "review my component", "this feels
  messy", "fix my animations", or any task where code quality, readability,
  performance, animation patterns, variable usage, or file layout is at stake.
  Always trigger when the user mentions design tokens, color variables, text styles,
  or Tailwind config. Uses Tailwind CSS v4 (CSS-first @theme tokens — no tailwind.config.ts).
---

# Code Optimiser — React + TypeScript + Framer Motion (Tailwind v4)

This skill guides Claude through systematically optimising React/JSX, TypeScript,
and Framer Motion codebases across five dimensions:
**structure, performance, naming/readability, file architecture, and animation patterns.**

> **Tailwind version**: This skill targets **Tailwind CSS v4**. There is no
> `tailwind.config.ts`. All design tokens are defined in CSS using `@theme`.

---

## 0. Approach

Before making any changes:
1. **Read first** — scan all relevant files before editing anything
2. **Audit variables first** — run the variable audit (Section 1a) before touching components
3. **Categorise issues** — sort findings into the five dimensions
4. **Prioritise** — fix high-impact issues before cosmetic ones
5. **Explain changes** — summarise every non-trivial edit to the user

Always preserve existing behaviour. Flag any change that could alter runtime output.

---

## 1a. Color & Text Variable Audit (Always Run First)

### Tailwind v4 key facts
- **No `tailwind.config.ts`** — do not create or reference one
- All tokens live in a single CSS file (typically `src/app/globals.css` or `src/styles/global.css`)
- Tokens are declared inside an `@theme` block as CSS custom properties
- Token naming follows `--color-*` for colors and `--font-size-*` for text sizes
- Tailwind auto-generates utility classes from these: `--color-brand-primary` → `bg-brand-primary`, `text-brand-primary`
- v4 entry point: `@import "tailwindcss"` (replaces the old three `@tailwind` directives)

### Step 1 — Inventory all values
Scan every `.tsx`, `.ts`, `.css` file and collect:
- Every hardcoded hex, RGB, HSL, or named color
- Every hardcoded font size, weight, line height, letter spacing
- Every existing `--color-*` or `--font-size-*` CSS custom property in `@theme`
- Every JS/TS constant used as a style value

### Step 2 — Count usage frequency

| Usage count | Action |
|---|---|
| **≥ 3 times** | **Must** become a named `@theme` token in the global CSS file |
| **< 3 times** | **Remove** any variable that exists — inline with Tailwind arbitrary syntax instead |
| **1–2 times, one-off** | Use arbitrary syntax inline: `text-[#1A2B3C]`, `text-[14px]` |

### Step 3 — Define canonical tokens in `globals.css`

All colors and text styles used ≥ 3 times must be declared inside `@theme`:
```css
/* src/app/globals.css  (or src/styles/global.css) */
@import "tailwindcss";

@theme {
  /* ─── Brand colors ─────────────────────────────── */
  --color-brand-primary:    #3A82F5;   /* usage: 14 */
  --color-brand-secondary:  #6366F1;   /* usage: 8  */
  --color-brand-accent:     #F59E0B;   /* usage: 5  */

  /* ─── Surfaces ──────────────────────────────────── */
  --color-surface-default:  #FFFFFF;   /* usage: 22 */
  --color-surface-subtle:   #F9FAFB;   /* usage: 9  */
  --color-surface-overlay:  #111827;   /* usage: 6  */

  /* ─── Text ──────────────────────────────────────── */
  --color-text-primary:     #111827;   /* usage: 31 */
  --color-text-secondary:   #6B7280;   /* usage: 17 */
  --color-text-inverse:     #FFFFFF;   /* usage: 11 */
  --color-text-disabled:    #D1D5DB;   /* usage: 4  */

  /* ─── Borders ───────────────────────────────────── */
  --color-border-default:   #E5E7EB;   /* usage: 12 */
  --color-border-focus:     #3A82F5;   /* usage: 7  */

  /* ─── Status ────────────────────────────────────── */
  --color-status-success:   #10B981;   /* usage: 5  */
  --color-status-warning:   #F59E0B;   /* usage: 4  */
  --color-status-error:     #EF4444;   /* usage: 6  */

  /* ─── Typography ────────────────────────────────── */
  /* Only sizes used ≥ 3 times */
  --font-size-display-lg:   3rem;
  --font-size-display-sm:   2.25rem;
  --font-size-heading-lg:   1.5rem;
  --font-size-heading-sm:   1.25rem;
  --font-size-body-lg:      1rem;
  --font-size-body-sm:      0.875rem;
  --font-size-label:        0.75rem;
  --font-size-caption:      0.6875rem;

  /* Matching line heights */
  --line-height-display-lg: 1.1;
  --line-height-display-sm: 1.2;
  --line-height-heading-lg: 1.3;
  --line-height-heading-sm: 1.4;
  --line-height-body-lg:    1.6;
  --line-height-body-sm:    1.5;
  --line-height-label:      1.4;
  --line-height-caption:    1.4;

  /* Letter spacing */
  --letter-spacing-display: -0.02em;
  --letter-spacing-heading: -0.01em;
  --letter-spacing-label:   0.05em;

  /* Font families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

**How generated classes work in v4:**

| CSS custom property | Generated Tailwind class |
|---|---|
| `--color-brand-primary` | `bg-brand-primary`, `text-brand-primary`, `border-brand-primary` |
| `--color-text-secondary` | `text-text-secondary` |
| `--color-surface-default` | `bg-surface-default` |
| `--font-size-body-sm` | `text-body-sm` |
| `--font-size-heading-lg` | `text-heading-lg` |

### Step 4 — Replace all occurrences
- `text-[#111827]` → `text-text-primary`
- `bg-[#FFFFFF]` → `bg-surface-default`
- `text-[14px]` → `text-body-sm`
- `border-[#E5E7EB]` → `border-border-default`
- Delete any `--color-*` or `--font-size-*` token in `@theme` with < 3 actual usages — inline instead

### Step 5 — Validate
- Search for remaining hardcoded hex/RGB values — none should exist for colors used ≥ 3 times
- Verify no token in `@theme` has fewer than 3 real usages — remove any that were added prematurely
- Confirm the CSS file begins with `@import "tailwindcss"` (not the old `@tailwind` directives)
- Check no `tailwind.config.ts` or `tailwind.config.js` exists — delete if found

---

## 1. Code Structure & Organisation

### Component design
- One component per file; filename matches the exported component name
- Keep components **focused** — if a component exceeds ~150 lines, split it
- Separate **UI components** (pure rendering) from **container components**
  (data fetching, state management)
- Extract repeated JSX blocks (≥ 3 occurrences) into their own component

### Hooks
- Custom hooks live in `src/hooks/` and are prefixed `use`
- A hook should do **one thing** — split hooks that manage multiple unrelated concerns
- Never call hooks conditionally; move conditional logic inside the hook body

### TypeScript
- Prefer `interface` for object shapes, `type` for unions/intersections/aliases
- Avoid `any` — use `unknown` with narrowing, or a specific generic
- Export types alongside the code that defines them
- Use `satisfies` operator to validate shapes without widening the inferred type
- Enable strict mode in `tsconfig.json` (`"strict": true`)

### Module exports
- Named exports for utilities and components; default exports for page-level components only
- Barrel files (`index.ts`) acceptable for public API surfaces; avoid deep chains

### Dead code
- Remove commented-out blocks, unused imports, and unreachable branches

---

## 2. Performance Optimisation

- `React.memo()` only when profiling confirms unnecessary re-renders
- `useCallback` for functions passed to memoised children
- `useMemo` for expensive computations only — not trivial derivations
- No inline object/array literals in JSX props (new reference every render)
- Colocate state; prefer `useReducer` when ≥ 3 related states change together
- No derived values in state — compute during render
- React Query / SWR over raw `useEffect` + fetch; abort controllers on cleanup
- Named imports for tree-shaking; lazy-load heavy components
- Stable unique `key` props on lists; virtualise lists > 100 items

---

## 3. Naming Conventions & Readability

| Item | Convention | Example |
|---|---|---|
| React components | PascalCase | `UserProfileCard` |
| Functions / variables | camelCase | `fetchUserData` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT` |
| TypeScript types/interfaces | PascalCase | `UserProfile` |
| CSS token names (`@theme`) | kebab-case with namespace | `--color-brand-primary` |
| Tailwind utility classes | auto-generated from tokens | `bg-brand-primary` |
| Component files | PascalCase | `UserProfileCard.tsx` |
| Hook / util files | camelCase | `useAuth.ts` |
| Test files | mirror source + `.test` | `UserProfileCard.test.tsx` |

- Names reveal intent, not implementation
- Booleans as questions: `isLoading`, `hasError`, `canEdit`
- `handle*` internally, `on*` as prop names
- Destructure props at top of component
- JSDoc on all exported functions and complex hooks

---

## 4. File & Folder Architecture
```
src/
  app/
    globals.css           ← @import "tailwindcss" + ALL @theme tokens live here
    layout.tsx
    page.tsx
  components/
    ui/                   ← reusable primitives (Button, Modal, Input)
    [FeatureName]/        ← feature-scoped components
      ComponentName.tsx
      ComponentName.test.tsx
      index.ts
  hooks/                  ← shared custom hooks
  lib/
    animations.ts         ← Framer Motion variants & transitions
  services/               ← pure TS API functions (no React)
  store/                  ← global state (Zustand / Redux slices)
  types/                  ← truly shared types only
  utils/                  ← pure helper functions
  assets/                 ← static files
public/
```

> `src/app/globals.css` is the **single source of truth** for all design tokens.
> There is no `tailwind.config.ts` in a Tailwind v4 project.

### Colocation principle
Tests and types live next to their component. Promote to a higher level only
when used across 3+ features.

### Import order
1. Node built-ins → 2. External packages → 3. Internal aliases (`@/`) →
4. Relative imports → 5. Type-only imports

---

## 5. Framer Motion — Animation Best Practices

- All animation configs in `src/lib/animations.ts`
- Variant objects at **module scope** — never inside render functions
- Use `variants` + state strings over inline animation props
- Stagger via `staggerChildren` in parent variant, not manual `delay` on children
- Wrap conditional `motion.*` in `<AnimatePresence>` with stable unique `key`
- Only animate `opacity` + `transform` (`x`, `y`, `scale`, `rotate`)
- Use `layout` prop for layout animations — never animate `width`/`height` directly
- `useReducedMotion()` in all motion-heavy components
- Type configs with `Variants` and `Transition` from `framer-motion`
```tsx
// src/lib/animations.ts
import type { Variants, Transition } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: 24 },
};

export const smoothSpring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};
```

---

## 6. Tooling Checklist

- **ESLint** — `@typescript-eslint/recommended` + `eslint-plugin-react-hooks`
- **Prettier** + `eslint-config-prettier`
- **TypeScript** — `"strict": true` in `tsconfig.json`
- **Husky + lint-staged** — lint on pre-commit
- **Vitest / Jest + React Testing Library**
- **Tailwind IntelliSense** (VS Code) — picks up `@theme` tokens automatically in v4

---

## 7. Master Optimisation Checklist

### Variable audit (always first)
- [ ] `globals.css` starts with `@import "tailwindcss"` (not old `@tailwind` directives)
- [ ] No `tailwind.config.ts` / `tailwind.config.js` exists in the project
- [ ] All colors used ≥ 3 times defined as `--color-*` inside `@theme`
- [ ] All font sizes used ≥ 3 times defined as `--font-size-*` inside `@theme`
- [ ] No `@theme` token exists with < 3 actual usages — removed and inlined
- [ ] No hardcoded hex/RGB values remain for tokenised colors
- [ ] `globals.css` `@theme` block is the single source of truth for all tokens

### Structure
- [ ] Single responsibility per component/file; none > ~150 lines
- [ ] Hooks extracted and prefixed `use`; no conditional calls
- [ ] No `any` types; strict mode on
- [ ] Dead code removed

### Performance
- [ ] No inline object/array literals in JSX props
- [ ] `useCallback`/`useMemo` justified by profiling
- [ ] Derived values computed, not stored in state
- [ ] Fetch effects have abort cleanup
- [ ] No array index as `key` in dynamic lists

### Naming & Readability
- [ ] Names reveal intent; booleans are questions
- [ ] `handle*` / `on*` convention followed
- [ ] JSDoc on exported functions

### Architecture
- [ ] Files colocated with tests and types
- [ ] Shared code promoted to the right level
- [ ] Import order consistent

### Animation
- [ ] Variants in `src/lib/animations.ts`, at module scope
- [ ] Stagger via `staggerChildren`
- [ ] `<AnimatePresence>` with stable `key`
- [ ] Only `opacity` + `transform` animated
- [ ] `useReducedMotion()` implemented

---

## 8. Common Anti-Patterns to Fix
```css
/* ❌ Old Tailwind v3 config approach — delete this file entirely in v4 */
/* tailwind.config.ts with theme.extend.colors */

/* ✅ Tailwind v4 — tokens in @theme inside globals.css */
@import "tailwindcss";
@theme {
  --color-brand-primary: #3A82F5;
}
```
```css
/* ❌ Old v3 directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ✅ v4 single import */
@import "tailwindcss";
```
```tsx
// ❌ Hardcoded color used in many places
<p className="text-[#111827]">Hello</p>
// ✅ Named @theme token (used ≥ 3 times), inform user about new token created.
<p className="text-text-primary">Hello</p>
```
```tsx
// ❌ Orphan token — used only once, wastes @theme space
// globals.css: --color-one-off-blue: #1E3A5F;
// used in: 1 component, 1 place
<div className="bg-one-off-blue" />
// ✅ Remove the token, inline it but inform user about it
<div className="bg-[#1E3A5F]" />
```
```tsx
// ❌ Variants inside render
function Card() {
  const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return <motion.div variants={variants} />;
}
// ✅ Module scope
const variants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
function Card() { return <motion.div variants={variants} />; }
```
```tsx
// ❌ Animating layout properties (causes reflow)
<motion.div animate={{ width: isOpen ? 300 : 0 }} />
// ✅ layout prop
<motion.div layout style={{ width: isOpen ? 300 : 0 }} />
```
```tsx
// ❌ Missing AnimatePresence — exit never runs
{isOpen && <motion.div exit={{ opacity: 0 }}>...</motion.div>}
// ✅
<AnimatePresence>
  {isOpen && <motion.div key="panel" exit={{ opacity: 0 }}>...</motion.div>}
</AnimatePresence>
```