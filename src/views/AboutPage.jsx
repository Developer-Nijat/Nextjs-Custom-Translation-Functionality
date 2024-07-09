"use client";

import LanguageDropdown from "@/components/LanguageDropdown";
import useTranslation from "@/components/useTranslation";
import Link from "next/link";

const AboutPage = () => {
    const clientTranslations = useTranslation();
  return (
    <>
      <div style={{ padding: 20 }}>
        <div>AboutPage</div>
        <h5>{clientTranslations.hello}</h5>
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

export default AboutPage;
