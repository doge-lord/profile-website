import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations.en.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  ns: "common",
  fallbackNS: "common",
  resources: { en },
  interpolation: {
    format(value, format) {
      if (format === "uppercase") {
        return value?.toUpperCase();
      }
      return value;
    },
  },
});

export default i18next;
