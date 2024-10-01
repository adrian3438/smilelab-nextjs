'use client'
import React from "react";
import { useTranslation } from "react-i18next";
interface Props {
    language?:any
}
const SmileTests:React.FC<Props> = ({language}) => {
    return (
        <>
            <div className="container mb-5 pb-5">
                <div className="row text-center justify-content-center ">
                    <h2 className="fw-bold mb-3">{language.smiletest_1}</h2>
                    <p className="col-md-7 mb-4"><img src="/images/smilelab/tests/tests2.png" alt="스마일 배테기 데이비드, 스마일 배테기 데이비드S"/></p>
                    <p className="col-md-8 fs-6 text-start">{language.smiletest_2}</p>
                </div>
                <div className="row text-center justify-content-center mt-5">
                    <h3 className="fw-bold">{language.smiletest_3} <span className="dots-color1">{language.smiletest_4}</span></h3>
                    <p className="fs-4 my-4"><i className="bi bi-arrow-down-circle"></i> {language.smiletest_5}</p>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4">
                            <a href="https://smartstore.naver.com/smilelab">
                                <img src="/images/smilelab/tests/11st.jpg" alt="11번가"/>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://www.coupang.com/np/search?q=%EC%8A%A4%EB%A7%88%EC%9D%BC%EB%9E%A9&channel=user&eventCategory=GNB&eventLabel=search">
                                <img src="/images/smilelab/tests/coupang.jpg" alt="coupang"/>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="http://shop.11st.co.kr/stores/348047?pdpPrdNo=1415109102">
                                <img src="/images/smilelab/tests/NaverStoreFarm.jpg" alt="naver store farm"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmileTests;
