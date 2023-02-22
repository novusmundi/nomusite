export const language = (defaultLang) => {
  console.log({ localStorage });
  const set = (lang) =>
    typeof window !== "undefined" && window.localStorage.set("lang", lang);

  const get = () => {
    const lang =
      typeof window !== "undefined"
        ? window.localStorage.getItem("lang")
        : defaultLang;
    set(lang);
    return lang;
  };

  return {
    get,
    set,
  };
};
