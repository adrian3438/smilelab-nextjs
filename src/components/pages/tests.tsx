'use client'
import SmileLabNavbar from "@/components/Smilelab/SmileLabNavbar";
import SmileLabFooter from "@/components/Smilelab/Footer";
import Image from "next/image";
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";
import SmileTests from "@/components/Smilelab/tests/SmileTests";
import Pregable from "@/components/Smilelab/tests/Pregable";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useTranslation } from "react-i18next";
interface Props {
    language?:any
}
export default function TestsPage ({language} : Props) {
    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    const tabName = query.get('name')
    function tabChange (e:React.MouseEvent, queryString:string) {
        const newParams = new URLSearchParams(query.toString())
        newParams.set('name', queryString)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
<>
            <div className="page-title-area dots-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 position-relative">
                                    <img src="/images/smilelab/tests/tests.png" alt="Korea’s #1 ovulation test kit" className="position-absolute top-50 start-50 translate-middle"/>
                                </div>
                                <div className="col-md-6 position-relative">
                                    <img src="/images/smilelab/tests/PREG1re.png" alt="Combo test kit for the global market" className="position-absolute top-50 start-50 translate-middle w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <Image src={shape1} alt="shape" width={202} height={202}/>
                </div>
                <div className="shape2 rotateme">
                    <Image src={shape2} alt="shape" width={22} height={22}/>
                </div>
                <div className="shape3">
                    <Image src={shape3} alt="shape" width={28} height={28}/>
                </div>
                <div className="shape4">
                    <Image src={shape4} alt="shape" width={21} height={20}/>
                </div>
                <div className="shape5">
                    <Image src={shape5} alt="shape" width={182} height={146}/>
                </div>
                <div className="shape6 rotateme">
                    <Image src={shape4} alt="shape" width={21} height={20}/>
                </div>
                <div className="shape7">
                    <Image src={shape4} alt="shape" width={21} height={20}/>
                </div>
                <div className="shape8 rotateme">
                    <Image src={shape2} alt="shape" width={22} height={22}/>
                </div>
            </div>

            <ul className="nav nav-pills justify-content-center py-5 dots-tab">
                <li className="nav-item">
                    <a style={{cursor: 'pointer'}} className={`fs-5 nav-link${tabName === 'pregable' ? ' active' : ''}`} onClick={(e) => {tabChange(e, 'pregable')}}>{language.test_1}</a>
                </li>
                <li className="nav-item">
                    <a style={{cursor: 'pointer'}} className={`fs-5 nav-link${tabName === 'smiletests' ? ' active' : ''}`} onClick={(e) => {tabChange(e, 'smiletests')}}>{language.test_2}</a>
                </li>
            </ul>

            {tabName === 'pregable' && <Pregable language={language}/>}

            {tabName === 'smiletests' && <SmileTests language={language}/>}

        </>
    )
}