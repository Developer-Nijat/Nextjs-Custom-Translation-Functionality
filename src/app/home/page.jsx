import { getServerTranslations } from "@/utils/loadServerTranslations";
import HomePage from "@/views/HomePage";
import { Suspense } from "react";

const Page = async () => {
  const data = await getServerTranslations();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
      <h3>Server side translation: {data.hello}</h3>
    </Suspense>
  );
};

export default Page;
