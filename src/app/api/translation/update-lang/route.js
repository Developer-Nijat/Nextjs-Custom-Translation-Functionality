import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const { selectedLang } = await request.json();

  if (!selectedLang) {
    return NextResponse.json(
      { message: "Selected language is required" },
      { status: 400 }
    );
  }

  const configPath = path.join(
    process.cwd(),
    "public",
    "locales",
    "config.json"
  );
  const configData = JSON.stringify({ selectedLang }, null, 2);

  try {
    fs.writeFileSync(configPath, configData);
    return NextResponse.json(
      { message: "Language updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error writing to config file", error },
      { status: 500 }
    );
  }
}
