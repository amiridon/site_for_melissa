# GitHub Copilot – UI Design Instructions (Tailwind, Dark/Light)

Use these rules in your Copilot **instructions** so the agent consistently generates clean, accessible UI with Tailwind CSS. The guidance distills the “neutral + brand + semantic” approach and the HSL/OKLCH palette method shown in the transcript/screenshots.

---

## 1) Color System & Tokens

### 1.1 Core idea
- **Neutrals** power backgrounds, text, borders, and surfaces.
- **Brand (primary)** adds character and drives main actions.
- **Semantic** (success, warning, danger, info) communicate state.
- Create shades by **fixing Hue=0, Saturation=0** (neutral) and only varying **Lightness** for predictable steps in **HSL**.  
- Tailwind v4 uses **OKLCH** by default. Provide both **HSL** & **OKLCH** tokens and prefer OKLCH when possible.

### 1.2 Neutral tokens (HSL)  
Use the same logical names for both themes—values change per mode.

**Dark mode (HSL)**
- `--bg-dark: hsl(0 0% 0%);`      // app/page background
- `--bg:      hsl(0 0% 5%);`      // surfaces/cards
- `--bg-light:hsl(0 0% 10%);`     // raised/important surfaces
- `--text:    hsl(0 0% 95%);`     // headings, strong text
- `--text-muted: hsl(0 0% 70%);`  // body, secondary text
- `--border:  hsl(0 0% 20%);`
- `--shadow-a: hsla(0 0% 0% / 0.07);`  // short/dark
- `--shadow-b: hsla(0 0% 0% / 0.15);`  // long/light

**Light mode (HSL)**
- Start by flipping `L` (≈ `100 - L`) then adjust by eye:
- `--bg-dark: hsl(0 0% 90%);`
- `--bg:      hsl(0 0% 95%);`
- `--bg-light:hsl(0 0% 100%);`
- `--text:    hsl(0 0% 5%);`
- `--text-muted: hsl(0 0% 30%);`
- `--border:  hsl(0 0% 85%);`
- `--shadow-a: hsla(0 0% 0% / 0.07);`
- `--shadow-b: hsla(0 0% 0% / 0.15);`

**OKLCH mirrors** (good defaults)
- Replace HSL with OKLCH equivalents, e.g.  
  `--text-oklch: oklch(0.95 0 0);` and `--bg-oklch: oklch(0.95 0 0);`  
  Keep **C (chroma)** low for neutrals (`0–0.02`), bump for brand/semantic.

### 1.3 Brand & semantic (OKLCH recommended)
- Define brand hues once; vary only **L** & **C** for states.
- Example brand (blue-ish):
  - `--brand:        oklch(0.62 0.09 240);`
  - `--brand-hover:  oklch(0.58 0.09 240);`
  - `--brand-pressed:oklch(0.54 0.09 240);`
  - `--brand-fg:     oklch(0.98 0.02 240);` // text on brand
- Semantic (sample):  
  `--success: oklch(0.62 0.12 145);` `--warning: oklch(0.75 0.12 75);` `--danger: oklch(0.62 0.15 25);`

---

## 2) CSS Variables & Theme Switch

Place defaults on `:root` (dark or light—your choice) and override for the opposite theme. Prefer **data-attribute** or **prefers-color-scheme**.

```css
:root {
  /* neutrals (dark base example) */
  --bg-dark: hsl(0 0% 0%);
  --bg: hsl(0 0% 5%);
  --bg-light: hsl(0 0% 10%);
  --text: hsl(0 0% 95%);
  --text-muted: hsl(0 0% 70%);
  --border: hsl(0 0% 20%);
  --shadow-a: 0px 2px 2px hsla(0,0%,0%,0.07);
  --shadow-b: 0px 4px 24px hsla(0,0%,0%,0.15);

  /* brand */
  --brand: oklch(0.62 0.09 240);
  --brand-hover: oklch(0.58 0.09 240);
  --brand-pressed: oklch(0.54 0.09 240);
  --brand-fg: oklch(0.98 0.02 240);

  /* borders & highlights for glossy cards */
  --highlight: hsl(0 0% 16%); /* top border in dark */
  --gradient: linear-gradient(0deg, var(--bg) 95%, var(--bg-light));
  --gradient-hover: linear-gradient(0deg, var(--bg-light), var(--bg));
  --border-card: 1px solid var(--border);
}

/* light override */
[data-theme="light"] {
  --bg-dark: hsl(0 0% 90%);
  --bg: hsl(0 0% 95%);
  --bg-light: hsl(0 0% 100%);
  --text: hsl(0 0% 5%);
  --text-muted: hsl(0 0% 30%);
  --border: hsl(0 0% 85%);
  --highlight: hsl(0 0% 100%);   /* brighter top edge */
  --gradient: linear-gradient(0deg, var(--bg) 95%, var(--bg-light));
  --gradient-hover: linear-gradient(0deg, var(--bg-light), var(--bg));
  --border-card: 1px solid hsl(0 0% 92%); /* blend into card */
}
```

**Theme toggle**  
- Add `data-theme="light"` to `<html>` or `<body>` for light mode.
- Or auto-detect:

```css
@media (prefers-color-scheme: light) {
  :root { color-scheme: light; }
  html:not([data-theme="dark"]) { /* copy light overrides here if you prefer */ }
}
```

---

## 3) Tailwind Wiring

### 3.1 Using CSS vars inside Tailwind (v3 & v4 friendly)

```js
// tailwind.config.{js,ts}
module.exports = {
  content: ["./src/**/*.{html,razor,cshtml,tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        bg:       "hsl(var(--bg) / <alpha-value>)",
        bgDark:   "hsl(var(--bg-dark) / <alpha-value>)",
        bgLight:  "hsl(var(--bg-light) / <alpha-value>)",
        text:     "hsl(var(--text) / <alpha-value>)",
        muted:    "hsl(var(--text-muted) / <alpha-value>)",
        border:   "hsl(var(--border) / <alpha-value>)",
        brand:        "oklch(var(--brand) / <alpha-value>)",
        brandHover:   "oklch(var(--brand-hover) / <alpha-value>)",
        brandPressed: "oklch(var(--brand-pressed) / <alpha-value>)",
        brandFg:      "oklch(var(--brand-fg) / <alpha-value>)",
      },
      boxShadow: {
        card: "var(--shadow-a), var(--shadow-b)",
      },
      backgroundImage: {
        surface: "var(--gradient)",
        surfaceHover: "var(--gradient-hover)",
      },
      borderColor: {
        card: "var(--border-card)",
        highlight: "var(--highlight)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            a: { color: theme("colors.brand"), "&:hover": { color: theme("colors.brandHover") } },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
```

---

## 4) Component Recipes (Tailwind classes)

### 4.1 Page & text
- `class="min-h-dvh bg-bgDark text-muted antialiased"`  
- Headings use strong color:  
  `class="text-text font-semibold tracking-tight"`

### 4.2 Card (with glossy top edge & subtle gradient)
```html
<div class="rounded-2xl bg-bg shadow-card border-card border bg-surface p-6">
  <div class="border-t border-highlight rounded-t-2xl"></div>
  <h2 class="text-text text-2xl font-semibold">Sharp heading</h2>
  <p class="mt-2">A muted shade for the rest of the text.</p>
  <button class="mt-4 inline-flex items-center rounded-xl bg-bgLight px-4 py-2 border border-card shadow-sm hover:bg-[image:var(--gradient-hover)]">Some Action</button>
</div>
```

### 4.3 Primary button
```html
<button class="inline-flex items-center gap-2 rounded-xl px-4 py-2
  bg-brand text-brandFg font-medium shadow-sm
  hover:bg-brandHover active:bg-brandPressed
  focus:outline-none focus:ring-2 focus:ring-brand/40
  disabled:opacity-50 disabled:pointer-events-none">
  Continue
</button>
```

### 4.4 Input
```html
<input class="w-full rounded-lg bg-bgLight text-text placeholder:opacity-60
  border border-card focus:border-brand focus:ring-2 focus:ring-brand/30 px-3 py-2" />
```

### 4.5 Elevation guidelines
- **Base surface**: `bg-bg`.
- **Raised/interactive**: `bg-bgLight` + `shadow-card`.
- **Panels/sections**: `bg-bg` with `border-card`, use gradient backgrounds sparingly.

---

## 5) Interaction, Gradient & Shadow Rules

- Borders must be **visible but quiet**; use `border-card` not pure black/white.  
- **Gradient surfaces**: default to `bg-[image:var(--gradient)]`, swap to `--gradient-hover` on hover for a subtle “light from top” sheen.  
- **Highlight line** at top of raised cards: `border-t border-highlight`.  
- Shadows: **pair a short/dark + long/light** (`shadow-card`). Never use a single heavy drop shadow.

---

## 6) Accessibility & Contrast

- Body text: target **WCAG ≥ 4.5:1** contrast versus background.  
- Headings/primary actions: **≥ 7:1** preferred.  
- Never use `#000` on `#fff` for long text (too harsh); use `--text` & `--text-muted`.  
- Focus states must be visible: Tailwind rings with brand color: `focus:ring-brand/40`.

---

## 7) Layout, Type & Spacing

- **Type scale**: `text-sm, base, lg, xl, 2xl, 3xl` with `font-semibold` for headings.  
- **Line-height**: `leading-6` for body, tighter for headings `leading-tight`.  
- **Spacing rhythm**: multiples of `4px` (`1, 1.5, 2, 3, 4, 6, 8`).  
- **Containers**: `max-w-3xl/5xl` with `mx-auto px-4 sm:px-6 lg:px-8`.  
- Avoid cramming; prefer `gap-4/6` in grids & flex groups.

---

## 8) Copilot Prompts (drop-in examples)

> **Global:**  
> “Use the neutral palette defined in `:root` CSS variables (HSL/OKLCH). For dark mode use `--bg-dark:0%`, `--bg:5%`, `--bg-light:10%`, `--text:95%`, `--text-muted:70%`. For light mode flip and adjust: `--bg-dark:90%`, `--bg:95%`, `--bg-light:100%`, `--text:5%`, `--text-muted:30%`. Wire colors to Tailwind via `colors.bg`, `colors.text`, etc. Build components that only reference these tokens, not raw hex.”

> **Card:**  
> “Create a card with subtle depth: base `bg-bg`, border `border-card`, gradient background `bg-surface`, top highlight `border-t border-highlight`, rounded-2xl, internal spacing `p-6`, and `shadow-card`. Include heading with `text-text` and body copy with default `text-muted`.”

> **Primary button:**  
> “Button uses brand tokens (`--brand`), has hover/active states (`--brand-hover`, `--brand-pressed`), ring focus, 12px–16px padding, rounded-xl.”

> **Input group:**  
> “Inputs are `bg-bgLight`, `border-card`, `focus:ring-brand/30`, include label with `text-muted`, and error text using semantic colors.”

---

## 9) Do / Don’t Checklist

**Do**
- Use tokens (`bg`, `text`, `muted`, `border`, `brand`) everywhere.
- Keep neutrals saturation `S=0` (HSL) or `C≈0` (OKLCH).
- Use `bg-light` only for **raised/important** elements.
- Pair shadows (short/dark + long/light).
- Ensure focus rings and contrast meet WCAG.

**Don’t**
- Hardcode hex colors in components.
- Use pure black/white for long text or borders.
- Add heavy gradients or shadows on every element.
- Rely on single shadow or border without considering light direction.

---

## 10) Quick Example (page scaffold)

```html
<body class="min-h-dvh bg-bgDark text-muted">
  <header class="sticky top-0 z-10 backdrop-blur border-b border-card bg-bg/70">
    <div class="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
      <h1 class="text-text font-semibold">App</h1>
      <button class="rounded-lg px-3 py-1.5 bg-brand text-brandFg hover:bg-brandHover focus:ring-2 focus:ring-brand/40">Sign in</button>
    </div>
  </header>

  <main class="mx-auto max-w-3xl px-4 py-10">
    <div class="rounded-2xl border border-card shadow-card bg-surface p-6">
      <div class="border-t border-highlight rounded-t-2xl"></div>
      <h2 class="text-text text-3xl font-semibold tracking-tight">Sharp heading</h2>
      <p class="mt-2">A muted shade for the rest of the text.</p>
      <div class="mt-4 flex gap-3">
        <button class="rounded-xl bg-brand text-brandFg px-4 py-2 hover:bg-brandHover active:bg-brandPressed focus:ring-2 focus:ring-brand/40">Primary</button>
        <button class="rounded-xl bg-bgLight px-4 py-2 border border-card hover:bg-[image:var(--gradient-hover)]">Some Action</button>
      </div>
    </div>
  </main>
</body>
```

---

# 11) Depth & Elevation System (Light/Dark)

> **Goal:** Make “clean but flat” UIs feel tactile and well‑organized using a small set of **layer shades** and **paired shadows**. Works in both themes and aligns with the existing neutral/brand tokens.

## 11.1 Layering with three neutrals
Create **three to four shades of the same neutral** and stack them to imply depth. Slightly increase lightness (`+0.05–0.12 L`) as you elevate elements.
- **Base page**: `--bg-dark` (dark mode) or `--bg` (light mode) — the canvas everything sits on.
- **Surface**: `--bg` — standard cards/sections.
- **Raised surface / interactive**: `--bg-light` — important/interactive elements (search, selected tab, focused cards).
- (Optional) **Sunken**: a shade *darker than the page* to imply recessed areas (tables, wells).

> **Tip:** On light theme, the “raised” layer is **lighter** than the surface; on dark theme, “raised” is **darker** than the surface only when you deliberately want it to feel heavier. Prefer lighter‑on‑dark for a glossy, approachable feel.

## 11.2 Shadow tokens (paired for realism)
Use a **light inset top highlight** + **soft dark drop**. Avoid single heavy shadows.

```css
:root {
  /* Small / natural */
  --shadow-s:
    inset 0 1px 2px hsla(0,0%,100%,0.25),  /* top highlight */
    0 1px 2px   hsla(0,0%,0%,0.18),        /* short/dark */
    0 2px 6px   hsla(0,0%,0%,0.10);        /* soft/ambient */

  /* Medium */
  --shadow-m:
    inset 0 1px 2px hsla(0,0%,100%,0.35),
    0 2px 4px   hsla(0,0%,0%,0.22),
    0 4px 12px  hsla(0,0%,0%,0.12);

  /* Large */
  --shadow-l:
    inset 0 1px 2px hsla(0,0%,100%,0.45),
    0 4px 8px   hsla(0,0%,0%,0.24),
    0 8px 24px  hsla(0,0%,0%,0.14);
}
```

> **Hover rule:** Keep base at `--shadow-s`, on hover promote to `--shadow-m`; reserve `--shadow-l` for hero tiles/overlays.

### Tailwind wiring
```js
// tailwind.config.* (extend)
boxShadow: {
  s: "var(--shadow-s)",
  m: "var(--shadow-m)",
  l: "var(--shadow-l)",
},
```

## 11.3 Gradient sheen & top highlight
Add a subtle **top-to-bottom gradient** plus a thin **top highlight border** to sell the “light from above” cue.

```css
:root {
  --surface-gradient: linear-gradient(180deg, hsl(var(--bg-light)) 0%, hsl(var(--bg)) 100%);
  --surface-gradient-light: linear-gradient(180deg, hsl(var(--bg)) 0%, hsl(var(--bg-light)) 100%); /* for light theme */
  --highlight: hsl(0 0% 100% / 0.6); /* light line at the top edge */
}
```

Use in components:
```html
<div class="rounded-2xl border border-card shadow-s bg-[image:var(--surface-gradient)]">
  <div class="border-t border-highlight rounded-t-2xl"></div>
  <!-- content -->
</div>
```

## 11.4 Elevation by component

### Navigation bar
- **Container:** `bg-bg` with subtle blur: `backdrop-blur`.
- **Search/input pill:** `bg-bg-light shadow-s` and slightly lighter text/icon.
- **Active tab:** move it up a layer: `bg-bg-light shadow-s` (+ stronger text/icon color).
- **Hover:** promote to `shadow-m`.

```html
<nav class="sticky top-0 z-10 bg-bg/70 backdrop-blur border-b border-card">
  <div class="mx-auto max-w-6xl flex items-center gap-4 px-4 py-3">
    <a class="text-text font-semibold">Brand</a>
    <div class="ml-auto flex items-center gap-2 rounded-full bg-bg shadow-s px-2 py-1">
      <button class="rounded-full px-3 py-1 bg-bg-light shadow-s hover:shadow-m">Docs</button>
      <button class="rounded-full px-3 py-1">Components</button>
      <button class="rounded-full px-3 py-1">Product</button>
    </div>
  </div>
</nav>
```

### Cards & profile tiles
- **Default:** `bg-bg` + `shadow-s` + gradient sheen + `border-t border-highlight`.
- **Hover:** escalate to `shadow-m`.
- **Selected/Important:** keep `shadow-s` but shift layer to `bg-bg-light` and strengthen text contrast.

### Tables (sunken)
- Make tables feel **recessed** vs. adjacent cards.
- Use a **darker container** than page plus **inset shadows** to push content down.

```css
.table-well {
  background: hsl(var(--bg-dark));
  box-shadow:
    inset 0 2px 4px hsla(0,0%,0%,0.18),   /* top dark */
    inset 0 -2px 4px hsla(0,0%,100%,0.20);/* bottom light */
}
```

### Radio groups & options
- Wrap the group in a **lighter card** (`bg-bg-light`) with `shadow-s`.
- Each option is a small card; the **selected** one gets either:
  - `bg-bg-light` + `shadow-m`, **or**
  - `outline` with brand ring `focus:ring-brand/40` and slight elevation.

```html
<fieldset class="grid grid-cols-2 gap-3 rounded-2xl bg-bg p-4 shadow-s">
  <label class="rounded-xl bg-bg-light p-4 shadow-s has-[:checked]:shadow-m cursor-pointer">
    <input type="radio" name="model" class="sr-only">
    <div class="flex items-center gap-3">
      <svg class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" /></svg>
      <div>
        <div class="text-text font-medium">Safe &amp; Stable</div>
        <div class="text-sm opacity-70">Good default choice</div>
      </div>
    </div>
  </label>
  <!-- another option -->
</fieldset>
```

## 11.5 Light vs Dark specifics
- **Light theme:** depth reads strongest; avoid over‑dark shadows. Prefer higher **top highlight** opacity and gentler ambient shadows.
- **Dark theme:** reduce top highlight opacity; keep ambient shadows subtle; increase gradient contrast slightly if surfaces blend.

## 11.6 When *not* to add depth
- Dense data tables, long forms, or utility panels where shadows add noise.
- If everything is elevated, **nothing** feels elevated. Keep a clear hierarchy: page → surface → raised.

## 11.7 Quick Before/After playbook
1) Pick **three neutral layers** (page, surface, raised).  
2) Apply **shadow-s** everywhere that needs a hint of elevation.  
3) Promote important/interactive elements to **bg-light**.  
4) Add **gradient sheen** + **top highlight** on hero cards.  
5) Use **shadow-m** on hover; reserve **shadow-l** sparingly.  
6) Recess low‑attention areas with **darker well** + **inset shadows**.  
7) Re‑balance contrast and type hierarchy after layering.

---
