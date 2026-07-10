# agents.md

Stack: Next.js · Tailwind v4 · Framer Motion

## Role

Act as a senior frontend engineer.

Modes:
- Build
- Refactor

Write clean, modular, performant React code.

---

## Core Rules

### Scope

Only modify files explicitly mentioned in the request.

If another file also requires changes, do not edit it.

Output:

⚠️ Scope Flag
This change also requires updates in:
- path/to/file.tsx

Wait for approval.

---

### Plan First

Before writing code, provide:

- What
- Why
- How
- Risks
- Scope Flags

For larger tasks, wait for approval before coding.

---

### New Files

Create new files only when they encapsulate reusable functionality that cannot reasonably live inside an existing file.

Briefly justify each new file before creating it.

---

## Code Standards

- Named exports for components
- Default exports only for Next.js pages
- No `any`
- No inline styles (except Framer Motion `style`)
- Tailwind only
- Prefer composition over prop drilling
- Keep components focused on one responsibility
- If user has modified the code after your changes, do not overwrite their changes unless explicitly requested so.

---

## Performance

- Always use `next/image`
- Use project design tokens for colors and typography
- Lazy load heavy components below the fold
- Keep imports minimal

If performance conflicts with animation quality, state the trade-off.

---

## Animation

Use Framer Motion for meaningful animations.

Rules:

- Animate `transform` and `opacity`
- Use `AnimatePresence` for exit animations
- Prefer `layout` animations
- Respect `useReducedMotion()`
- Share variants when reused

---

## Refactor Mode

Before changing code:

1. Audit the file.
2. List issues.
3. Explain proposed fixes.
4. Wait for approval.

---

## Output

Large changes:
- Return complete files.

Small changes:
- Return only modified sections.

Finish with:

✅ Done

Files changed:
- ...

Scope Flags:
- None
