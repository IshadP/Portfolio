# Style System Migration Guide
## Old `global.css` → New `global.css`

You are helping migrate a personal portfolio codebase from an old Tailwind v4 style system to a new, structured one. Apply every substitution below **exactly and exhaustively** across all files (`.tsx`, `.jsx`, `.html`, `.css`, `.mdx`, or any file containing class names or CSS custom properties).

---

## 1. Typography Classes

All typography utility classes have been renamed. The prefix changed from `font-` to `text-`. Some classes were merged or split.

| Old class | New class | Notes |
|---|---|---|
| `font-h1` | `text-h1` | Identical styles, just renamed |
| `font-h2` | `text-h2` | Refined size + tracking |
| `font-h3` | `text-h3` | Refined size + tracking |
| `font-h4` | `text-h4` | Now `font-medium` instead of `font-semibold` |
| `font-body` | `text-body` | Now `font-normal`; use for primary prose |
| `font-body-mono` | `text-body-mono` | Mono prose, same intent |
| `font-label-lg` | `text-label-lg` | Now uppercase + wide tracking |
| `font-label-md` | `text-label` | Renamed; now uppercase + widest tracking |
| `font-mono` | `text-code` | Inline code / snippets |
| `font-card-mono` | `text-code-sm` | Small mono annotations |
| `font-label-mono` | `text-code-sm` | Merged into `text-code-sm` |

### New classes with no old equivalent — use where appropriate
| New class | When to use |
|---|---|
| `text-body-sm` | Supporting / secondary prose (captions, footnotes) |
| `text-code-block` | Multi-line code blocks or terminal output |

### Tailwind font-family utilities
The underlying font family utilities also changed. If any component uses these directly (e.g. `font-inter-display`, `font-geist`, `font-geist-mono`), replace them:

| Old utility | New utility |
|---|---|
| `font-inter-display` | `font-display` |
| `font-geist` | `font-sans` |
| `font-geist-mono` | `font-mono` |

---

## 2. Color Tokens — CSS Custom Properties

Replace every CSS custom property reference (`var(--...)` or direct token usage in Tailwind classes like `text-grey-text`, `bg-bg-primary`, etc.).

### 2a. Primitive Palette — Neutral Scale

| Old token | New token |
|---|---|
| `--color-grey-10` | `--color-neutral-10` |
| `--color-grey-20` | `--color-neutral-20` |
| `--color-grey-30` | `--color-neutral-30` |
| `--color-grey-40` | `--color-neutral-40` |
| `--color-grey-50` | `--color-neutral-50` |
| `--color-grey-60` | `--color-neutral-60` |
| `--color-grey-70` | `--color-neutral-70` |
| `--color-grey-80` | `--color-neutral-80` |
| `--color-grey-90` | `--color-neutral-90` |
| `--color-grey-100` | `--color-neutral-100` |

### 2b. Semantic / Alias Tokens

| Old token | New token | Notes |
|---|---|---|
| `--color-bg-primary` | `--color-bg-default` | White background |
| `--color-bg-secondary` | `--color-bg-subtle` | Light grey surface |
| *(no equivalent)* | `--color-bg-muted` | Mid grey surface; new addition |
| `--color-text-primary` | `--color-text-primary` | Unchanged name ✓ |
| `--color-text-secondary` | `--color-text-secondary` | Unchanged name ✓ |
| `--color-grey-text` | `--color-text-muted` | Renamed for clarity |
| `--color-text-tertiary` | `--color-text-disabled` | Renamed to convey intent |
| `--color-outline-primary` | `--color-border-default` | "border" replaces "outline" |
| *(no equivalent)* | `--color-border-strong` | Stronger border; new addition |
| `--color-bg-green` | `--color-status-success-bg` | |
| `--color-bg-red` | `--color-status-error-bg` | |
| `--color-bg-blue` | `--color-status-info-bg` | |
| `--color-text-green` | `--color-status-success-fg` | |
| `--color-text-blue` | `--color-status-info-fg` | |

### 2c. Tailwind Color Utilities

Tailwind generates utility classes from the tokens above. Rename these wherever they appear in className strings.

| Old Tailwind class | New Tailwind class |
|---|---|
| `bg-bg-primary` | `bg-bg-default` |
| `bg-bg-secondary` | `bg-bg-subtle` |
| `bg-bg-green` | `bg-status-success-bg` |
| `bg-bg-red` | `bg-status-error-bg` |
| `bg-bg-blue` | `bg-status-info-bg` |
| `text-grey-text` | `text-text-muted` |
| `text-text-tertiary` | `text-text-disabled` |
| `text-text-green` | `text-status-success-fg` |
| `text-text-blue` | `text-status-info-fg` |
| `border-outline-primary` | `border-border-default` |
| `outline-outline-primary` | `outline-border-default` |
| `ring-outline-primary` | `ring-border-default` |
| `text-grey-10` … `text-grey-100` | `text-neutral-10` … `text-neutral-100` |
| `bg-grey-10` … `bg-grey-100` | `bg-neutral-10` … `bg-neutral-100` |
| `border-grey-10` … `border-grey-100` | `border-neutral-10` … `border-neutral-100` |

---

## 3. Step-by-step Migration Process

Follow these steps in order.

### Step 1 — Replace typography classes
Search for every old `font-h*`, `font-body*`, `font-label*`, `font-mono`, `font-card-mono`, `font-label-mono` class and replace using the table in Section 1. Check both `className="..."` strings and any `@apply` rules in CSS files.

### Step 2 — Replace font-family utilities
Search for `font-inter-display`, `font-geist` (as a standalone class, not as a substring), and `font-geist-mono`. Replace with `font-display`, `font-sans`, and `font-mono` respectively.

### Step 3 — Replace CSS custom property references
Scan all files for `var(--color-grey-`, `var(--color-bg-`, `var(--color-text-`, `var(--color-outline-`. Replace every occurrence using Section 2a and 2b tables.

### Step 4 — Replace Tailwind color utility classes
Scan `className` / `class` attributes and `@apply` rules for old Tailwind color utilities listed in Section 2c. Replace each one.

### Step 5 — Verify no old tokens remain
After all replacements, confirm that none of the following strings appear anywhere in the codebase:
- `font-h1`, `font-h2`, `font-h3`, `font-h4`
- `font-body`, `font-label`, `font-mono`, `font-card-mono`, `font-label-mono`
- `font-inter-display`, `font-geist-mono` (as a class)
- `--color-grey-`
- `--color-bg-primary`, `--color-bg-secondary`
- `--color-text-tertiary`, `--color-grey-text`
- `--color-outline-primary`
- `--color-bg-green`, `--color-bg-red`, `--color-bg-blue`
- `--color-text-green`, `--color-text-blue`
- `bg-bg-primary`, `bg-bg-secondary`, `text-grey-text`, `border-outline-primary`

---

## 4. Tokens With No Direct Replacement (Removed)

The following tokens existed in the old system but have no equivalent. If you encounter them, choose the closest semantic replacement from the new system or flag them for human review.

| Removed token | Recommended replacement |
|---|---|
| `--color-grey-text` (duplicate of grey-60) | `--color-text-muted` |

---

## 5. New Tokens to Use Going Forward

These tokens are new additions. Do not back-port them to the old naming system — use the new names from now on.

| Token | Purpose |
|---|---|
| `--color-bg-muted` | Third background layer (e.g. disabled inputs, table headers) |
| `--color-border-strong` | Emphasis borders, focused states |
| `text-body-sm` | Caption text, footnotes, secondary descriptions |
| `text-code-block` | Multi-line terminal / code block output |

---

## 6. What Did NOT Change

These things are identical in the new system — do not touch them:

- All `--spacing-*` tokens (names and values unchanged)
- `--breakpoint-is: 780px` (unchanged)
- `--color-text-primary` and `--color-text-secondary` (names unchanged)
- The `text-h1` style (was `font-h1`; only the class prefix changed, styles are identical)
- Spacing utility classes (`p-*`, `m-*`, `gap-*`, etc.) are all standard Tailwind and unaffected
