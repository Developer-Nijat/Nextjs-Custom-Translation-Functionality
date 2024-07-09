"use client";

import { createContext, useState, useEffect } from "react";

export const TranslationContext = createContext();

export const loadTranslation = async (locale) => {
  const res = await fetch(`/locales/${locale}.json`);
  return res.json();
};

export default function TranslationProvider({ children }) {
  const [locale, setLocale] = useState("en"); // Default language
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    const initialLocale = savedLocale || "en";
    setLocale(initialLocale);

    const fetchTranslations = async () => {
      const translations = await loadTranslation(initialLocale);
      setTranslations(translations);
    };
    fetchTranslations();
  }, []);

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = await loadTranslation(locale);
      setTranslations(translations);
    };
    fetchTranslations();
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </TranslationContext.Provider>
  );
}
