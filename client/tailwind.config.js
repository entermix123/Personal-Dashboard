import withMT from "@material-tailwind/react/utils/withMT";
import plugin from "tw-elements/plugin.cjs";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      // ... other extensions ...
      backdropFilter: {
        'none': 'none',
      },
    },
  },
  darkMode: "class",
  plugins: [
    plugin,
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-filter-none': {
          'backdrop-filter': 'none',
          '-webkit-backdrop-filter': 'none',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
});
