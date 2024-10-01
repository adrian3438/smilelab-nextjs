'use client'

import PageBanner from "../Smilelab/PageBanner"
import SmileLabNavbar from "../Smilelab/SmileLabNavbar"
import Image from "next/image";
import SmileLabFooter from "@/components/Smilelab/Footer";
import { useTranslation } from "react-i18next";
interface Props {
    language?:any
}
export default function CompanyPage ({language} : Props) {

    return(
        <>
        <div className="container my-5 pb-5">
            <div className="text-center mb-5 py-5">
                <h2 className="fw-bold">{language.company_1} <Image src="/images/smilelab/company/intro/wellness.svg" alt="wellness" width={215} height={77}/>
                    <br/>{language.company_2}
                </h2>
                <p className="fw-bold fs-4 mb-5">{language.company_3}</p>
                <p className="fs-5">
                {language.company_4}
                </p>
                <p className="fs-5">
                {language.company_5}<br/> {language.company_6}<br/>
                {language.company_7}
                </p>
                <p className="text-black fs-4 fw-bold">{language.company_8}</p>
            </div>
            <hr />
            <div className="text-center mt-5 pt-5">
                <h2 className="fw-bold">{language.company_9}</h2>
                <h3>{language.company_10} <strong>{language.company_11}</strong></h3>
                <p className="fs-5">{language.company_12}</p>
                <h3 className="fw-bold pt-5 mb-3">{language.company_13}<span>.</span></h3>
                <div className="row justify-content-evenly dots-brand py-5 align-items-center">
                    <div className="col-md-2">
                        <div className="bg-white m-auto">
                            <img src="/images/smilelab/smileReader-logo-green.png" alt="test"/>
                            <p className="lh-sm fs-6">{language.company_14}<br/> {language.company_15}<br/>
                                <strong>{language.company_16}</strong></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="bg-white m-auto">
                            <img src="/images/smilelab/tests/tests.png" alt="pregable"/>
                            <p className="lh-sm fs-6">{language.company_17}<br/> {language.company_18}<br/>
                            <strong>{language.company_19}/<br/>
                            {language.company_20}</strong></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="bg-white m-auto">
                            <img src="/images/smilelab/tests/pregable-image.png" alt="Nutrimore"/>
                            <p className="lh-sm fs-6">{language.company_21}<br/> {language.company_22}<br/>
                                <strong>{language.company_23}</strong></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="bg-white m-auto">
                            <img src="/images/smilelab/nutriMore-color-horizontal.png" alt="Nutrimore"/>
                            <p className="lh-sm fs-6">{language.company_24}<br/> {language.company_25}<br/>
                                <strong>{language.company_26}</strong></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="bg-white m-auto align-middle">
                            <img src="/images/smilelab/letsee-logo-color.png" alt="letsee"/>
                            <p className="lh-sm fs-6">{language.company_27}<br/>
                                <strong>{language.company_28}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}