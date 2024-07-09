import { useContext } from "react";
import { TranslationContext } from "./TranslationProvider";

export default function LanguageDropdown() {
  const { locale, setLocale } = useContext(TranslationContext);

  const changeLanguage = async (lang) => {
    try {
      setLocale(lang);
      localStorage.setItem("locale", lang);

      const res = await fetch("/api/translation/update-lang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedLang: lang }),
      });

      if (!res.ok) {
        throw new Error("Failed to update language");
      }

      const data = await res.json();
      if (data.message === "Language updated successfully") {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav>
      <p>Selected lang: {locale}</p>
      <button
        onClick={() => changeLanguage("az")}
        style={{ color: locale === "az" ? "red" : "#fff", marginRight: 10 }}
      >
        AZ
      </button>
      <button
        onClick={() => changeLanguage("en")}
        style={{ color: locale === "en" ? "red" : "#fff", marginRight: 10 }}
      >
        EN
      </button>
      {/* <button onClick={() => changeLanguage("ru")} style={{ color: locale === 'ru' ? 'red': '#fff' }}>RU</button> */}
    </nav>
  );
}
