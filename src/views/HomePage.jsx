"use client";

import LanguageDropdown from "@/components/LanguageDropdown";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div style={{ padding: 20 }}>
        <div>HomePage</div>
        <br />
        <LanguageDropdown />
        <br />
        <Link href={"/"}>Go to main</Link><br />
        <Link href={"/home"}>Go to home</Link><br />
        <Link href={"/about"}>Go to about</Link>
      </div>
    </>
  );
};

export default HomePage;
