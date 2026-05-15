/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-container-highest": "#323537",
        "secondary": "#afecff",
        "on-tertiary-container": "#008fa1",
        "tertiary-fixed-dim": "#44d8f1",
        "inverse-surface": "#e0e3e5",
        "secondary-container": "#14d8ff",
        "on-tertiary": "#00363e",
        "slate-gray": "#525656",
        "on-secondary-fixed": "#001f27",
        "on-tertiary-fixed": "#001f25",
        "on-primary-container": "#74829d",
        "surface-variant": "#323537",
        "inverse-on-surface": "#2d3133",
        "electric-cyan": "#00D8FF",
        "surface-container": "#1d2022",
        "on-primary-fixed-variant": "#39475f",
        "primary-fixed-dim": "#b9c7e4",
        "secondary-fixed-dim": "#14d8ff",
        "on-background": "#e0e3e5",
        "on-primary-fixed": "#0d1c32",
        "on-tertiary-fixed-variant": "#004e59",
        "tertiary-container": "#001c21",
        "surface": "#101415",
        "on-secondary-fixed-variant": "#004e5d",
        "surface-tint": "#b9c7e4",
        "surface-container-high": "#272a2c",
        "surface-bright": "#363a3b",
        "on-surface-variant": "#c5c6cd",
        "primary": "#b9c7e4",
        "primary-fixed": "#d6e3ff",
        "on-secondary": "#003641",
        "tertiary": "#44d8f1",
        "surface-dim": "#101415",
        "outline": "#8f9097",
        "error-container": "#93000a",
        "tertiary-fixed": "#a1efff",
        "muted-teal": "#00BCD4",
        "on-primary": "#233148",
        "surface-container-low": "#191c1e",
        "on-secondary-container": "#005b6c",
        "inverse-primary": "#515f78",
        "secondary-fixed": "#afecff",
        "background": "#101415",
        "primary-container": "#0a192f",
        "deep-navy": "#0A192F",
        "error": "#ffb4ab",
        "surface-dark": "#112240",
        "on-error-container": "#ffdad6",
        "surface-container-lowest": "#0b0f10",
        "outline-variant": "#44474d",
        "on-error": "#690005",
        "on-surface": "#e0e3e5"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "base-unit": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px"
      },
      "fontFamily": {
        "headline-md": ["Montserrat"],
        "button": ["Montserrat"],
        "body-md": ["Inter"],
        "headline-xl": ["Montserrat"],
        "headline-lg-mobile": ["Montserrat"],
        "headline-lg": ["Montserrat"],
        "label-sm": ["JetBrains Mono"],
        "body-lg": ["Inter"]
      },
      "fontSize": {
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "button": ["14px", { "lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
      },
      "keyframes": {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      "animation": {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards"
      }
    },
  },
  plugins: [],
}
