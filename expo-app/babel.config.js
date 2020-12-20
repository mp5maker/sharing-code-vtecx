const path = require("path");
const paths = {
  "@web": path.join(__dirname, "..", "web-app/src"),
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".android.js",
            ".ios.js",
            ".web.js",
          ],
          root: ["./"],
          alias: paths,
        },
      ],
    ],
  };
};
