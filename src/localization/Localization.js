import LocalizedStrings from "react-localization";
import { vnLanguage } from "./vnLanguage";
import { enLanguage } from "./enLanguage";

export const strings = new LocalizedStrings({
  en: {
    screen: enLanguage,
  },
  vn: {
    screen: vnLanguage,
  },
  
});
