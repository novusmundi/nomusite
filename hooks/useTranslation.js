import { useContext } from "react";
import context from "../context/LanguageContext";
import es from "../public/locales/es";
import en from "../public/locales/en";

export default function useTranslation() {
  const { lang, toggleLang } = useContext(context);
  const translations = lang === "es" ? es : en;

  return { lang, toggleLang, translations };
}
