# Copilot Instructions for site_for_melissa

This is a concept website project for Melissa built with a comprehensive Tailwind CSS design system.

## Design System Architecture

The project follows a **neutral + brand + semantic** color approach using HSL/OKLCH tokens defined in `copilot-ui-design-instructions+depth.md`. This isn't just documentation—it's the core specification that drives all UI decisions.

### Color Token System
- **Neutrals**: Power backgrounds (`--bg-dark`, `--bg`, `--bg-light`), text (`--text`, `--text-muted`), and borders
- **Brand**: Primary actions and identity using OKLCH for better color consistency
- **Theme-aware**: Same logical token names work in both dark/light modes by changing only the values

```css
/* Dark base example */
--bg-dark: hsl(0 0% 0%);    /* app background */
--bg: hsl(0 0% 5%);         /* surfaces/cards */  
--bg-light: hsl(0 0% 10%);  /* raised/interactive */
--text: hsl(0 0% 95%);      /* headings */
--text-muted: hsl(0 0% 70%); /* body text */
```

### Tailwind Integration Pattern
Wire CSS variables to Tailwind using the `<alpha-value>` pattern:
```js
colors: {
  bg: "hsl(var(--bg) / <alpha-value>)",
  text: "hsl(var(--text) / <alpha-value>)",
  brand: "oklch(var(--brand) / <alpha-value>)",
}
```

## Component Patterns

### Elevation System
Use a 3-layer depth system with paired shadows (never single heavy shadows):
- **Base**: `bg-bg` for standard surfaces
- **Raised**: `bg-bgLight` + `shadow-card` for interactive elements
- **Glossy effects**: `bg-surface` gradient + `border-t border-highlight` for premium feel

### Standard Component Classes
- **Cards**: `rounded-2xl bg-bg shadow-card border-card border bg-surface p-6`
- **Primary buttons**: `bg-brand text-brandFg hover:bg-brandHover focus:ring-2 focus:ring-brand/40`
- **Inputs**: `bg-bgLight border-card focus:border-brand focus:ring-brand/30`

## Key Files & References

- **`copilot-ui-design-instructions+depth.md`**: Complete design system specification with CSS tokens, Tailwind wiring, component recipes, and accessibility guidelines
- **README.md**: Basic project description (currently minimal)

## Development Principles

1. **Token-first development**: Never use raw hex colors—always reference design tokens
2. **Theme consistency**: Components must work in both light and dark modes using the same token names
3. **Contrast compliance**: Target WCAG 4.5:1+ for body text, 7:1+ for headings
4. **Subtle depth**: Use gradient backgrounds and paired shadows, avoid harsh single shadows
5. **Focus accessibility**: Always include visible focus rings using brand colors

## When Building Components

- Reference the design instructions document for exact token usage and component recipes
- Use the elevation guidelines (shadow-s, shadow-m, shadow-l) for consistent depth
- Apply the gradient sheen pattern (`bg-surface`) for premium card treatments
- Include proper hover states that promote shadow levels (`shadow-s` → `shadow-m`)

This design system prioritizes consistency, accessibility, and a polished "clean but not flat" aesthetic suitable for professional concept websites.