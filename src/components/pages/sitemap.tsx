'use client'
import SmileLabNavbar from "@/components/Smilelab/SmileLabNavbar";
import PageBanner from "@/components/Smilelab/PageBanner";
import SmileLabFooter from "@/components/Smilelab/Footer";
import Link from "next/link";
import { useTranslation } from "react-i18next";
interface Props {
    language?:any
}
export default function SiteMapPage ({language} : Props) {
    return(
        <>
            <div className="container py-5 my-5">
                <div className="row sitemap">
                    <div className="col-md-3 px-4">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="#" className="text-white">Company</Link></p>
                                <ul className="ps-4">
                                    <li><Link href="/company/" className="fs-5 fw-bold">- {language.header_2}</Link></li>
                                    <li><Link href="/history/" className="fs-5 fw-bold">- {language.header_3}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 px-4">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="#" className="text-white">{language.header_4}</Link></p>
                                <ul className="ps-4">
                                    <li><Link href="/application/" className="fs-5 fw-bold">- {language.header_5}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 px-4">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="#" className="text-white">{language.header_6}</Link></p>
                                <ul className="ps-4">
                                    <li><Link
                                        href={{
                                            pathname: "/tests",
                                            query: {name: "pregable"}
                                        }}
                                        className="fs-5 fw-bold">- {language.header_7}
                                    </Link></li>
                                    <li><Link
                                        href={{
                                            pathname: "/tests",
                                            query: {name: "smiletests"}
                                        }}
                                        className="fs-5 fw-bold">- {language.header_8}
                                    </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 px-4">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="#" className="text-white">{language.header_9}</Link></p>
                                <ul className="ps-4">
                                    <li><Link href="/supplements/" className="fs-5 fw-bold">- {language.header_10}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 px-4 mt-5 pt-5">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="#" className="text-white">{language.header_11}</Link></p>
                                <ul className="ps-4">
                                    <li><Link href="/food/" className="fs-5 fw-bold">- {language.header_12}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 px-4 mt-5 pt-5">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="/news/" className="text-white">{language.header_13}</Link></p></li>
                        </ul>
                    </div>
                    <div className="col-md-3 px-4 mt-5 pt-5">
                        <ul className="p-0">
                            <li><p className="border text-center fs-2 fw-bold dots-bg-color1"><Link href="/contactus/" className="text-white">{language.header_14}</Link></p></li>
                        </ul>
                    </div>
                </div>
                <nav>

                </nav>
            </div>
        </>
    )
}