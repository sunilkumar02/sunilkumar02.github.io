const semanticColorTokens = [
  'page-bg',
  'overlay-lightbox',
  'panel-bg',
  'panel-bg-02',
  'panel-bg-03',
  'panel-bg-04',
  'markdown-code-bg',
  'line-rule',
  'icon-brand',
  'icon-neutral',
  'accent-primary',
  'accent-branded',
  'shadow-color',
  'text-body',
  'text-body-high-contrast',
  'text-strong',
  'text-subhead',
  'text-subtle',
  'text-subtle-01',
  'text-subtle-02',
  'text-button',
  'nav-bg',
  'nav-selected-tab',
  'nav-selected-tab-bg',
  'nav-footer-bg',
  'footer-bg',
  'brand-oai',
  'brand-writer',
  'brand-video',
  'brand-audio',
  'brand-graphics',
  'gradient-stop-1',
  'gradient-stop-2',
  'neutral-surface',
  'neutral-dark-to-light',
  'button-secondary',
  'button-secondary-hover',
  'button-high-contrast',
]

const alphaSteps = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const semanticColors = Object.fromEntries(
  semanticColorTokens.flatMap((token) => [
    [`semantic-${token}`, `var(--semantic-${token})`],
    ...alphaSteps.map((step) => [
      `semantic-${token}-${step}`,
      `var(--semantic-${token}-${step})`,
    ]),
  ]),
)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: semanticColors,
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'theme-gradient':
          'linear-gradient(to right, var(--semantic-gradient-stop-1), var(--semantic-gradient-stop-2))',
      },
    },
  },
  plugins: [],
}
