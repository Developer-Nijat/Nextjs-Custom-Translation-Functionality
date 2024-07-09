import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching to translation file", error },
      { status: 500 }
    );
  }
}
