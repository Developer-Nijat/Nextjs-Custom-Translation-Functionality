import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const configFilePath = path.join(
      process.cwd(),
      "public",
      "locales",
      `config.json`
    );
    const configFileContents = fs.readFileSync(configFilePath, "utf8");
    const configData = configFileContents
      ? JSON.parse(configFileContents)
      : undefined;
    const lang = configData?.selectedLang || "az";

    const translationPath = path.join(
      process.cwd(),
      "public",
      "locales",
      `${lang}.json`
    );
    const translationFileContents = fs.readFileSync(translationPath, "utf8");
    const translationData = translationFileContents
      ? JSON.parse(translationFileContents)
      : {};

    return NextResponse.json({ data: translationData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching to translation file", error },
      { status: 500 }
    );
  }
}