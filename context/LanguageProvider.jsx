import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import context from "./LanguageContext";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = useCallback(() => {
    setLang((currentLang) => (currentLang === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(() => ({ lang, toggleLang }), [lang, toggleLang]);

  return <context.Provider value={value}>{children}</context.Provider>;
}
