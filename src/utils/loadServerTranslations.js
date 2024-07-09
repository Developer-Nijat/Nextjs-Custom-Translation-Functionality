import fs from "fs";
import path from "path";

export const loadServerTranslation = (locale) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    `${locale}.json`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
};

export const getSelectedLangFromConfig = async () => {
  const filePath = path.join(process.cwd(), "public", "locales", `config.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const config = fileContents ? JSON.parse(fileContents) : undefined;
  const lang = config?.selectedLang || "az";

  return lang;
};

export const getServerTranslations = async () => {
  try {
    const locale = await getSelectedLangFromConfig();
    const lang = locale || "az";
    const data = await loadServerTranslation(lang);
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
