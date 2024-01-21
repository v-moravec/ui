import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['components/**/*.{vue,ts}', 'layouts/**/*.vue', 'pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          contrast: 'hsl(var(--primary-contrast))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          contrast: 'hsl(var(--secondary-contrast))',
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          contrast: 'hsl(var(--disabled-contrast))',
        },
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 16px)',
      },
    },
  },
  plugins: [typography, containerQueries],
}
