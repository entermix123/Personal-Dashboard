import withMT from "@material-tailwind/react/utils/withMT";
import plugin from "tw-elements/plugin.cjs";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [plugin],
});
