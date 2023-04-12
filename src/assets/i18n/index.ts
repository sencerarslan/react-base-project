import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./translations/tr.json";
import en from "./translations/en.json";
import de from "./translations/de.json";
import LanguageDetector from "i18next-browser-languagedetector";

export const languages = ["tr", "en", "de"];
const lang = window.localStorage.getItem("currentLang");

i18n
  .use(LanguageDetector) // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: tr,
      },
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    lng: lang == null ? "tr" : lang,
    // fallbackLng: defaultLang == null ? 'en' : defaultLang,
    // interpolation: {
    //     escapeValue: false,
    // },
    // lng: "en",
    // lng: document.querySelector("html")?.lang,
    // lng: languages.includes(window.navigator.language)
    //   ? window.navigator.language
    //   : "de",
    supportedLngs: languages,
    fallbackLng: "tr",
    detection: {
      order: ["path", "navigator"],
      caches: ["cookie"],
    },
  });

export default i18n;
