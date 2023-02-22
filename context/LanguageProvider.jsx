import { useCallback, useState, useMemo, useEffect } from "react";
import context from "./LanguageContext";
import { language } from "../helpers/utils";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = useCallback(() => {
    setLang((currentLang) => {
      const { set } = language("en");
      const newLang = currentLang === "es" ? "en" : "es";
      set(newLang);
      return newLang;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, toggleLang, setLang }),
    [lang, toggleLang]
  );

  useEffect(() => {
    const { get } = language("en");
    setLang(get());
  }, []);

  return <context.Provider value={value}>{children}</context.Provider>;
}
