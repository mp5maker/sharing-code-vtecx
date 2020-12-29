import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as English from "./en.json";
import * as Japanese from "./ja.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English
    },
    ja: {
      translation: Japanese
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
