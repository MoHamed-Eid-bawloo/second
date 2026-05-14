@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-gold: var(--gold);
  --color-whatsapp: var(--whatsapp);
  --color-surface: var(--surface);

  --font-sans: "Tajawal", "Inter", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.875rem;

  /* ========================================
     CYBER BLUE PREMIUM THEME
  ======================================== */

  /* Backgrounds */
  --background: oklch(59.206% 0.09914 211.991);
  --surface: oklch(52% 0.055 212);

  /* Text */
  --foreground: oklch(97% 0.01 220);

  /* Cards */
  --card: oklch(63% 0.06 212);
  --card-foreground: oklch(97% 0.01 220);

  /* Popovers */
  --popover: oklch(61% 0.055 212);
  --popover-foreground: oklch(97% 0.01 220);

  /* Primary */
  --primary: oklch(68% 0.11 215);
  --primary-foreground: oklch(99% 0.01 220);

  /* Secondary */
  --secondary: oklch(55% 0.045 212);
  --secondary-foreground: oklch(96% 0.01 220);

  /* Muted */
  --muted: oklch(50% 0.03 212);
  --muted-foreground: oklch(88% 0.015 220);

  /* Accent */
  --accent: oklch(78% 0.12 200);
  --accent-foreground: oklch(18% 0.02 220);

  /* Danger */
  --destructive: oklch(62% 0.22 27);
  --destructive-foreground: oklch(99% 0 0);

  /* Borders */
  --border: oklch(72% 0.05 212 / 28%);
  --input: oklch(58% 0.04 212);
  --ring: oklch(72% 0.11 215);

  /* Extras */
  --gold: oklch(0.74 0.15 175.86);
  --whatsapp: oklch(70% 0.18 145);
}

.dark {
  color-scheme: dark;
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);

    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;

    /* ========================================
       PREMIUM BACKGROUND
    ======================================== */

    background-image:
      radial-gradient(
        1200px 700px at 85% -10%,
        oklch(82% 0.10 215 / 0.35),
        transparent 60%
      ),

      radial-gradient(
        900px 500px at -10% 20%,
        oklch(52% 0.08 205 / 0.30),
        transparent 60%
      ),

      radial-gradient(
        800px 500px at 50% 100%,
        oklch(74% 0.08 200 / 0.18),
        transparent 60%
      ),

      linear-gradient(
        180deg,
        oklch(58% 0.08 212),
        oklch(46% 0.05 215)
      );

    background-attachment: fixed;
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-primary-foreground);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: -0.02em;
  }
}

@layer utilities {

  /* ========================================
     GLASS CARD
  ======================================== */

  .glass-card {
    background: linear-gradient(
      180deg,
      oklch(72% 0.04 212 / 0.22),
      oklch(60% 0.03 212 / 0.14)
    );

    border: 1px solid oklch(82% 0.08 215 / 0.14);

    box-shadow:
      0 10px 40px -20px oklch(0.08 0.03 220 / 0.55),
      0 0 30px oklch(72% 0.11 215 / 0.16);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    border-radius: 1.5rem;
  }

  /* ========================================
     GOLD TEXT
  ======================================== */

  .gold-text {
    background: linear-gradient(
      180deg,
      oklch(0.98 0.03 100),
      oklch(0.74 0.15 175.86)
    );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
  }

  /* ========================================
     GLOW EFFECTS
  ======================================== */

  .ring-glow {
    box-shadow:
      0 0 0 1px var(--color-primary),
      0 0 35px oklch(72% 0.11 215 / 0.35);
  }

  .btn-glow {
    box-shadow:
      0 10px 30px -12px oklch(72% 0.11 215 / 0.45),
      inset 0 1px 0 oklch(1 0 0 / 0.10);
  }

  /* ========================================
     TEXT SHADOW
  ======================================== */

  .text-shadow {
    text-shadow:
      0 2px 10px oklch(0.10 0.02 220 / 0.30);
  }

  /* ========================================
     SOFT BORDER
  ======================================== */

  .soft-border {
    border: 1px solid oklch(1 0 0 / 0.06);
  }

  /* ========================================
     GRID BACKGROUND
  ======================================== */

  .grid-bg {
    background-image:
      linear-gradient(
        to right,
        oklch(1 0 0 / 0.04) 1px,
        transparent 1px
      ),

      linear-gradient(
        to bottom,
        oklch(1 0 0 / 0.04) 1px,
        transparent 1px
      );

    background-size: 40px 40px;
  }

  /* ========================================
     ANIMATIONS
  ======================================== */

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite alternate;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes glow {
    from {
      box-shadow:
        0 0 10px oklch(72% 0.11 215 / 0.15),
        0 0 20px oklch(72% 0.11 215 / 0.10);
    }

    to {
      box-shadow:
        0 0 25px oklch(72% 0.11 215 / 0.30),
        0 0 45px oklch(72% 0.11 215 / 0.18);
    }
  }

  /* ========================================
     SCROLLBAR
  ======================================== */

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: oklch(48% 0.03 212);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      oklch(75% 0.10 215),
      oklch(60% 0.08 210)
    );

    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: oklch(82% 0.11 215);
  }
}
