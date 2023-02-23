export const language = (defaultLang) => {
  const set = (lang) =>
    typeof window !== "undefined" && window.localStorage.setItem("lang", lang);

  const get = () => {
    const lang =
      typeof window !== "undefined"
        ? window.localStorage.getItem("lang") || "en"
        : defaultLang;
    set(lang);
    return lang;
  };

  return {
    get,
    set,
  };
};
