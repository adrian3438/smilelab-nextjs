import React from "react";
import { cookies } from "next/headers";
import { fetchLanguage } from "@/util/fetchLanguage";
import api from "@/lib/api";

export default async function Home({searchParams : {lang}} : any) {
  // const language = await fetchLanguage(lang)
  const cookie = cookies()
  const cookieLang : any = cookie.get('LANG') || 'kr'
  const langValue = lang || cookieLang?.value
  const response = await api.get(`/user/promotion/getContentsList.php?contentType=${1}&userLang=${langValue}&page=1&size=10&keyword=&sortColumn=date&sortOrder=desc`)
  // const data = response?.data?.List?.length > 0 ?  response?.data?.List : [];
  return (
      <>
        {/* <Suspense> */}
          test
        {/*<SmileLabNavbar language={language}/>

        <MainBanner/>

        <Partner language={language}/>

        <BlogPost language={language} data={data}/>

        <FunFactsArea language={language}/>

        <SmileLabFooter language={language}/>*/}
        {/* </Suspense> */}
      </>
  );
}
