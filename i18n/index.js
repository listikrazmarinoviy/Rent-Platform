import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (cb) => {
    const lan =
      typeof window !== "undefined" ? localStorage.getItem("lan") : null;
    cb(lan || "uz");
  },
  init: () => {},
  cacheUserLanguage: (lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lan", lang);
    }
  },
};

const options = {
  resources,
  lng: "uz",
  fallbackLng: "uz",
  supportedLngs: ["uz", "ru"], // Changed from whitelist (deprecated)
  ns: ["common"], // Changed from "main" to "common"
  defaultNS: "common", // Changed from "main" to "common"
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  debug: true, // Set to true to see debug logs
  react: {
    useSuspense: false, // Important for Next.js
  },
};

// Initialize i18n
i18n.use(languageDetector).use(initReactI18next).init(options);

export default i18n;
