import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neutral colors with hierarchy
        bg: 'hsl(var(--bg) / <alpha-value>)',
        bgDark: 'hsl(var(--bg-dark) / <alpha-value>)',
        bgLight: 'hsl(var(--bg-light) / <alpha-value>)',
        text: 'hsl(var(--text) / <alpha-value>)',
        muted: 'hsl(var(--text-muted) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        
        // Primary brand colors (theme-aware accents)
        brand: 'hsl(var(--brand) / <alpha-value>)',
        brandHover: 'hsl(var(--brand-hover) / <alpha-value>)',
        brandPressed: 'hsl(var(--brand-pressed) / <alpha-value>)',
        brandFg: 'hsl(var(--brand-fg) / <alpha-value>)',
        brandFgDim: 'hsl(var(--brand-fg-dim) / <alpha-value>)',
        
        // Secondary brand colors
        brandSoft: 'hsl(var(--brand-soft) / <alpha-value>)',
        brandSoftHover: 'hsl(var(--brand-soft-hover) / <alpha-value>)',
        brandSoftPressed: 'hsl(var(--brand-soft-pressed) / <alpha-value>)',
        
        // Theme-aware accent system
        accentPrimary: 'hsl(var(--accent-primary) / <alpha-value>)',
        accentPrimaryHover: 'hsl(var(--accent-primary-hover) / <alpha-value>)',
        accentPrimaryPressed: 'hsl(var(--accent-primary-pressed) / <alpha-value>)',
        accentPrimaryFg: 'hsl(var(--accent-primary-fg) / <alpha-value>)',
        accentPrimaryFgDim: 'hsl(var(--accent-primary-fg-dim) / <alpha-value>)',
        
        accentSecondary: 'hsl(var(--accent-secondary) / <alpha-value>)',
        accentSecondaryHover: 'hsl(var(--accent-secondary-hover) / <alpha-value>)',
        accentSecondaryPressed: 'hsl(var(--accent-secondary-pressed) / <alpha-value>)',
        accentSecondaryFg: 'hsl(var(--accent-secondary-fg) / <alpha-value>)',
        accentSecondaryFgDim: 'hsl(var(--accent-secondary-fg-dim) / <alpha-value>)',
        
        // Semantic colors
        success: 'hsl(var(--success) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
        danger: 'hsl(var(--danger) / <alpha-value>)',
        
        // Additional design system colors
        card: 'hsl(var(--border) / <alpha-value>)',
        highlight: 'hsl(var(--highlight) / <alpha-value>)',
      },
      boxShadow: {
        's': 'inset 0 1px 2px hsla(0, 0%, 100%, 0.25), 0 1px 2px hsla(0, 0%, 0%, 0.18), 0 2px 6px hsla(0, 0%, 0%, 0.10)',
        'm': 'inset 0 1px 2px hsla(0, 0%, 100%, 0.35), 0 2px 4px hsla(0, 0%, 0%, 0.22), 0 4px 12px hsla(0, 0%, 0%, 0.12)',
        'l': 'inset 0 1px 2px hsla(0, 0%, 100%, 0.45), 0 4px 8px hsla(0, 0%, 0%, 0.24), 0 8px 24px hsla(0, 0%, 0%, 0.14)',
        'card': 'inset 0 1px 2px hsla(0, 0%, 100%, 0.25), 0 1px 2px hsla(0, 0%, 0%, 0.18), 0 2px 6px hsla(0, 0%, 0%, 0.10)',
      },
      backgroundImage: {
        'surface': 'var(--surface-gradient)',
        'surface-hover': 'var(--surface-gradient-hover)',
      }
    },
  },
  plugins: [],
}

export default config