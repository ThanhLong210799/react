import LocalizedStrings from "react-localization";
import { vnLanguage } from "./vnLanguage";
import { enLanguage } from "./enLanguage";

//tạo LocalizedStrings đa ngôn ngữ
export const strings = new LocalizedStrings({
  en: {
    screen: enLanguage,
  },
  vn: {
    screen: vnLanguage,
  },
  
});
