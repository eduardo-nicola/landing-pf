import pt from "./pt.json";
import en from "./en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: process.client ? localStorage.getItem("language") || "en" : "en",
  fallbackLocale: "en",
  detectBrowserLanguage: true,
  messages: {
    en,
    pt,
  },
}));
