'use client'
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
export default function LangBox () {
    const router = useRouter()
    const query = useSearchParams()
    const currentRoute = usePathname()
    const [cookie , setCookie] = useCookies(['LANG'])
    const [lang , setLang] = useState<any>(null)
    const {t, i18n} = useTranslation()
    function handleLang (e : any, lang : string) {
        e.preventDefault()
        setCookie('LANG', lang, {path : '/'})
        i18n.changeLanguage(lang)
        // 언어 변경 시 , url 변경
        const newParams = new URLSearchParams(query.toString())
        newParams.set('lang', lang)
        router.push(`${currentRoute}?${newParams?.toString()}`)
    }
    
    useEffect(()=>{setLang(cookie.LANG)} , [setCookie, cookie])
    
    return(
        <>
        <li className="nav-item">
            <a
                href="#"
                className="nav-link"
            >
            {langArr?.map((langValue : any) => {
                if (langValue.lang === lang) {
                    return <>{langValue.text}</>;
                }
            })}
            </a>
            <ul className="dropdown-menu">
                <li className="nav-item" style={{display : lang === 'kr' ? 'none' : 'block'}}>
                    <a
                        href="#"
                        onClick={(e)=>handleLang(e, 'kr')}
                        className={`nav-link ${
                            currentRoute == "/food/" && "active"
                        }`}
                    >
                    KO
                    </a>
                </li>
                <li className="nav-item" style={{display : lang === 'en' ? 'none' : 'block'}}>
                    <a
                        href="#"
                        onClick={(e)=>handleLang(e, 'en')}
                        className={`nav-link ${
                            currentRoute == "/food/" && "active"
                        }`}
                    >
                    EN
                    </a>
                </li>
                <li className="nav-item" style={{display : lang === 'jp' ? 'none' : 'block'}}>
                    <a
                        href="#"
                        onClick={(e)=>handleLang(e, 'jp')}
                        className={`nav-link ${
                            currentRoute == "/food/" && "active"
                        }`}
                    >
                    JP
                    </a>
                </li>
            </ul>
        </li>
        </>
    )
}

export const langArr = [
    {lang : 'kr', text : 'KO'},
    {lang : 'en', text : 'EN'},
    {lang : 'jp', text : 'JP'},
]