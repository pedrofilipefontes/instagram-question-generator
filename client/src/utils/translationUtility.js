import * as enDictionary from "./../translations/en/content-en.json";
import * as ptDictionary from "./../translations/pt/content-pt.json";

export const translationUtil = (language) => {
  const languages = {
    en: enDictionary,
    pt: ptDictionary,
  };

  return languages[language].default;
};
