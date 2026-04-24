import i18n from "i18next"
import languageDetector from "i18next-browser-languagedetector"
import backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

i18n.use(backend).use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  detection: {
    order: ['navigator', 'querystring', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
