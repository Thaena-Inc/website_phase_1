/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./index.html",
    ],
    theme: {
      extend: {
        colors: {
          // Core neutrals
          "neutral-light": "#FFFFFF",
          "neutral-warm": "#F9F5F1",    // warm panels / backgrounds
  
          // Main text
          "slate-dark": "#44414E",      // body text
  
          // Greens / teals
          "teal-green": "#1C5E54",      // hero H1, CTAs
          "teal-dark": "#275B52",       // icons, borders, accents
          sage: "#A8B3A8",              // dividers, badges
          "sage-grey": "#A8B3A8",       // for text-sage-grey / border-sage-grey
  
          // Browns / earth tones
          "earth-brown": "#6D4F2C",     // icons, headings, chips
          sepia: "#9F5D3C",             // warm brown accent
          rust: "#9F5D3C",              // pricing / “Best value” card text
          "rust-dark": "#6B3C22",       // “Best Value” pill & icons
  
          // Purples / mauves
          mauve: "#8F5681",             // CHLOE & some CTAs
          purple: "#8F5681",            // for text-purple / border-purple
  
          // Gold / highlights
          golden: "#D6A85A",            // vertical rules, small accents
        },
      },
    },
    plugins: [],
  };