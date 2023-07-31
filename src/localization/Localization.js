import LocalizedStrings from "react-localization";
import { vnLanguage } from "./vnLanguage";
import { enLanguage } from "./enLanguage";

//create Multilingual LocalizedStrings
export const strings = new LocalizedStrings({
  en: {
    screen: enLanguage,
  },
  vn: {
    screen: vnLanguage,
  },
  
});
