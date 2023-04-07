/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    '../trpc-panel/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        querySolid: "#22c55e",
        queryBg: "#f0fdf4",
        queryBgDark: "#dcfce7",
        queryText: "#16a34a",
        mutationSolid: "#3b82f6",
        mutationBg: "#eff6ff",
        mutationText: "#2563eb",
        mutationBgDark: "#dbeafe",
        routerSolid: "#8b5cf6",
        routerBg: "#faf5ffaa",
        routerBgDark: "#f3e8ff",
        routerText: "#9333ea",
        subscriptionSolid: "#F34213",
        subscriptionBg: "#FEF0EC",
        subscriptionBgDark: "#FCD1C5",
        subscriptionText: "#E93C0C",
        neutralSolid: "#52525b",
        neutralSolidTransparent: "#64748b",
        selectedListItem: "#063352",
        neutralBg: "#f1f5f922",
        neutralBgDark: "#e2e8f0",
        neutralBgVeryDark: "#3f3f46",
        neutralText: "#0f172a",
        light: "#f8fafc",
        white: "#fcfcfc", // not actually white btw
        whiteTransparent: "#ffffff77",
        whiteLessTransparent: "#ffffffcc",
        actuallyWhite: "#ffffff",
        error: "#ef4444",
        mainBackground: "#f9fafb",
        panelBorder: "#d4d4d8",
        overlayBackground: "#999a9b88",
        separatorLine: "#d4d4d888",
      }
    },
  },
  plugins: [],
}

