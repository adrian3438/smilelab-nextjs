'use client'
import PageBanner from "../Smilelab/PageBanner"
import SmileLabNavbar from "../Smilelab/SmileLabNavbar"
import Image from "next/image";
import SmileLabFooter from "@/components/Smilelab/Footer";
import { useTranslation } from "react-i18next";
interface Props {
    language?:any
}
export default function HistoryPage ({language} : Props) {
    return(
        <>
        <div className="container">
            <div className="container-fluid my-5 pb-5">
                <div className="history">
                    <div className="row">
                        <div>
                            <h2>2022~</h2>
                            <ol>
                                <li>- {language.history_1}</li>
                                <li>- {language.history_2}</li>
                            </ol>
                        </div>
                        <div>
                            <h2>2021~2022</h2>
                            <ol>
                                <li>- {language.history_3}</li>
                                <li>- {language.history_4}</li>
                                <li>- {language.history_5}</li>
                                <li>- {language.history_6}</li>
                            </ol>
                        </div>
                        <div>
                            <h2>2019~2020</h2>
                            <ol>
                                <li>- {language.history_7}</li>
                                <li>- {language.history_8}</li>
                                <li>- {language.history_9}</li>
                                <li>- {language.history_10}</li>
                            </ol>
                        </div>
                        <div>
                            <h2>2018</h2>
                            <ol>
                                <li>- {language.history_11}</li>
                                <li>- {language.history_12}</li>
                            </ol>
                        </div>
                        <div>
                            <h2>2014~2016</h2>
                            <ol>
                                <li>- {language.history_13}</li>
                                <li>- {language.history_14}</li>
                                <li>- {language.history_15}</li>
                            </ol>
                        </div>
                        <div>
                            <h2>2014~2016</h2>
                            <ol>
                                <li>- {language.history_16}</li>
                                <li>- {language.history_17}</li>
                                <li>- {language.history_18}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}