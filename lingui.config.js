module.exports = {
  locales: ["uz", "ru"],
  sourceLocale: "uz",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["app", "components", "src"],
    },
  ],
  format: "po",
  // or format: 'json' if you prefer JSON files
};
