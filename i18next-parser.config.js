module.exports = {
  locales: ["uz", "ru"],
  output: "i18n/locales/$LOCALE/$NAMESPACE.json",
  input: [
    "app/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
    "lib/**/*.{js,jsx,ts,tsx}",
    "!app/**/*.test.{js,jsx,ts,tsx}",
    "!components/**/*.test.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
  ],

  defaultNamespace: "common",

  lexers: {
    js: ["JavascriptLexer"],
    ts: ["JavascriptLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],
  },

  keepRemoved: false,
  sort: true,

  keySeparator: ".",
  namespaceSeparator: false,

  indentation: 2,

  defaultValue: (locale, namespace, key) => key,
};
