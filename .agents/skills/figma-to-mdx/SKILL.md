---
name: figma-to-mdx
description: Extract a single section/component from Figma (via Figma MCP) and turn it into a content-only MDX section for the PrintHub case study page, using an existing component from src/components/caseStudy/LayoutPrimitives.tsx. Trigger this skill whenever the user pastes a Figma URL together with a LayoutPrimitives section/component name, or asks to "pull this section from Figma into the case study", "add this Figma component to printhub", or similar. Also trigger if the user mentions data/casestudies/printhub/page.mdx alongside a Figma link. Do not trigger for general Figma-to-code UI implementation (that's a different workflow) — this skill is strictly for populating page.mdx content in the printhub case study using pre-existing layout primitives, never for writing or editing React/JSX/Tailwind.
---

# Figma → PrintHub Case Study Section

Turns one Figma component into one content-only section of
`data/casestudies/printhub/page.mdx`, backed by an existing component in
`src/components/caseStudy/LayoutPrimitives.tsx`. Extracted images are saved to
`public/casestudies/printhub/`.

This skill is intentionally narrow and strict. It never writes React, JSX, or
Tailwind. It never invents content. It never guesses a prop mapping it isn't
sure of. When anything is ambiguous, it stops and asks.

## Required input

Each invocation needs:
1. A Figma URL (node/frame link) — pasted by the user.
2. The name of the target section/component in `LayoutPrimitives.tsx` —
   stated by the user right after the URL.

If either is missing, ask for it before doing anything else. Do not guess
which component the user means from context alone.

## Workflow — follow these steps in order, do not skip or reorder

### Step 1 — Fetch the Figma component

Use the Figma MCP tools to get the design context / structure for the node in
the pasted URL (layers, text nodes, image/fill nodes, nesting). This is your
source of truth for content — never rely on memory or assumption about what
the frame contains.

### Step 2 — Read the target LayoutPrimitives component

Open `src/components/caseStudy/LayoutPrimitives.tsx` and locate the exported
component matching the name the user gave you. Read its props/type definition
carefully — every prop name, whether it's required or optional, and its shape
(string, string[], image url, nested object, array of items, etc).

This is the schema you must match the Figma content against. Do not proceed
from memory of what similar components usually look like — read the actual
current definition in this file, every time.

### Step 3 — Fit check (STOP if it fails)

Compare the Figma component's layers structurally against the LayoutPrimitives
component's props:

- Does every required prop have a clearly corresponding Figma layer?
- Does every text layer in the Figma component map to a defined prop (no
  orphan text layers)?
- Does every image/fill in the Figma component map to a defined image prop
  (no orphan images)?
- Are repeating groups (e.g. a list of cards) consistent with an
  array-shaped prop, if the component expects one?

**If everything maps cleanly:** proceed to Step 4.

**If anything does not map** (extra Figma layer with no matching prop,
required prop with no corresponding Figma layer, ambiguous grouping, a
repeating structure that doesn't match the prop shape, etc.):
- **Stop immediately.**
- Do not guess a prop name or force a mapping.
- Explain exactly what doesn't fit (name the layer/prop involved).
- Ask the user what to do next (e.g. pick a different component, skip the
  unmapped layer, or they'll adjust the Figma file/component first).

This check is the whole point of the skill — never skip it or wave it through
to save time.

### Step 4 — Extract text content

For every text layer that maps to a prop, extract the text **verbatim** —
exactly as written in Figma. Do not:
- fix typos or grammar
- reword, shorten, or "clean up" copy
- change casing, punctuation, or line breaks
- translate or paraphrase

Copy-paste equivalent fidelity is the bar. If something in the Figma copy
looks like an error, mention it to the user after finishing rather than
silently fixing it.

### Step 5 — Extract and save images

Determine the section number. Section numbers are sequential per invocation
of this skill in the order the user is walking through Figma sections with
you — ask the user which section number this is if it isn't already obvious
from the conversation (they've said "we'll always go section by section").

Number images within the section by order of appearance: `{section}.1`,
`{section}.2`, etc. Section numbering counts sections with no images too —
e.g. if section 2 has no image, the next image-bearing section (section 3)
still starts at `3.1`, never `2.1`.

For each image/fill node that maps to an image prop:
- Try to download/export it directly via the Figma MCP asset tools.
- Save it to `public/casestudies/printhub/` named `{section}.{index}.webp`.
- **Convert to `.webp`** if the export tool gives you another format —
  don't leave PNG/JPG in this directory.
- If the MCP tool cannot download the asset for any reason, do not guess or
  fabricate a file. Tell the user the image couldn't be downloaded, give
  them the exact filename/path it should end up at (`{section}.{index}.webp`),
  and let them place it manually before you continue to Step 6.

### Step 6 — Write the MDX section

Edit `data/casestudies/printhub/page.mdx`:
- Insert the new section **after the last existing section** in the file.
- always wrap in section with id if it isn't in a `<section>` tag already.
- Use the matched component from LayoutPrimitives, passing the extracted
  text and the image path(s) you just saved (`/casestudies/printhub/{section}.{index}.webp`).
- **Content only.** Never write inline JSX, React, or Tailwind classes.
  Only use the component invocation syntax already established by the
  existing sections in the file (mirror their exact pattern/syntax) and fill
  it with the extracted props.
- If the file has no existing sections yet (first section ever), ask the
  user for the minimal wrapping structure expected at the top of the file
  rather than inventing one.

### Step 7 — Summary

After writing, give a short summary:
- Which component was used
- Section/image numbers written, and their file paths
- Any images that couldn't be auto-downloaded and still need manual placement
- Any copy that looked like a possible typo in the source Figma (flagged, not fixed)

## Hard rules (never violate)

- Never write React/JSX/Tailwind code into page.mdx or anywhere else — content only.
- Never alter the wording of extracted text from Figma.
- Never guess a prop mapping — an unclear mapping is always a stop-and-ask, per Step 3.
- Never skip the fit check in Step 3, even if the user seems to be in a hurry.
- Never renumber or reuse an image number once assigned in the conversation.
- Always re-read LayoutPrimitives.tsx fresh each run — don't rely on a cached idea of its props from earlier in the session, since it may change between sections.
