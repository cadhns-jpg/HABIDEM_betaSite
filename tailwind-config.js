/* Configuration Tailwind (thème HABIDEM) */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003e1e",
        "primary-container": "#1a5632",
        "primary-fixed": "#b2f1c1",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#00210e",
        secondary: "#8e4d2d",
        "secondary-container": "#feaa82",
        "secondary-fixed": "#ffdbcc",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#351000",
        "on-secondary-container": "#783c1d",
        error: "#ba1a1a",
        background: "#fbf9f5",
        surface: "#fbf9f5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3ef",
        "surface-container": "#efeeea",
        "surface-container-high": "#eae8e4",
        "on-surface": "#1b1c1a",
        "on-surface-variant": "#404941",
        "outline-variant": "#c0c9bf",
        "typha-green-light": "#E9F2EC",
        "typha-green-deep": "#123D23",
        "terracotta-soft": "#F6EDE8",
        "sand-canvas": "#FBF9F5",
        "slate-text": "#2D3748",
        "slate-muted": "#718096",
        "border-subtle": "#E5E1D8"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "space-xs": "0.25rem", "space-sm": "0.5rem", "space-md": "1rem",
        "space-lg": "1.5rem", "space-xl": "2.5rem", gutter: "1.5rem",
        "gutter-mobile": "1rem", margin: "3rem", "margin-tablet": "2rem",
        "margin-mobile": "1.25rem"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        "label-md": ["Plus Jakarta Sans"], "label-sm": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"], "headline-sm": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"], "headline-xl": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "label-sm": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-md": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-sm": ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.625rem", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "headline-sm": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "headline-md": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-xl": ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "4.25rem", letterSpacing: "-0.03em", fontWeight: "700" }]
      }
    }
  }
};
