import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "./locales/i18n";

const App: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div>{t("Welcome to React")}</div>
      <button onClick={() => changeLanguage("de")}>de</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </>
  );
};

export default App;
