'use client'

import React, {useEffect, useRef, useState} from "react";
import Lottie from "react-lottie-player";
import lottieJson01 from "../../../public/Health-check-app.json";
import lottieJson02 from "../../../public/Schedule-planning.json";
import lottieJson03 from "../../../public/community-manager.json";
import lottieJson04 from "../../../public/online-shopping.json";
import { useTranslation } from "react-i18next";

interface Props {
    language?:any
  }
export default function AppIntroduce({language} : Props) {
    const section01:any = useRef<HTMLDivElement>(null);
    const section02:any = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [changeNumber, setChangeNumber] = useState<number>(0);
    const stopScrollRef = useRef(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const section2Y = section02.current.getBoundingClientRect().top + scrollTop;
        setScrollPosition(scrollTop);
        if(scrollTop >= section2Y && !stopScrollRef.current) {
            setChangeNumber(1);
            window.scrollTo({top: section2Y, behavior: 'instant'});
        }
        if(stopScrollRef.current) {
            if(scrollTop < section2Y) {
                setChangeNumber(1);
                window.scrollTo({top: section2Y, behavior: 'instant'});
            }
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(scrollPosition > 199) {
            section01.current.classList.remove('opacity-50');
        } else {
            section01.current.classList.add('opacity-50');
        }
    }, [scrollPosition]);

    useEffect(() => {
        if(changeNumber === 1) {
            document.body.style.overflowY = "hidden";
        } else if (changeNumber === 4) {
            stopScrollRef.current = true;
            document.body.style.overflowY = "visible";
        } else if (changeNumber === 5) {
            stopScrollRef.current = false;
            document.body.style.overflowY = "visible";
        }
    }, [changeNumber]);


    const section02_01:any = useRef<HTMLDivElement>(null);
    const section02_02:any = useRef<HTMLDivElement>(null);
    const section02_03:any = useRef<HTMLDivElement>(null);
    const section02_04:any = useRef<HTMLDivElement>(null);
    let pixel = 200;

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if(event.deltaY > 0 && event.deltaY < section02.current.clientHeight) {
            section02_01.current.style.height = (section02_01.current.clientHeight - pixel) + 'px';
            if(section02_01.current.clientHeight <= pixel) {
                section02_01.current.style.height = 0;
                if(section02_01.current.clientHeight === 0) {
                    section02_02.current.style.height = (section02_02.current.clientHeight - pixel) + 'px';
                    if(section02_02.current.clientHeight <= pixel) {
                        section02_02.current.style.height = 0;
                        if(section02_02.current.clientHeight === 0) {
                            section02_03.current.style.height = (section02_03.current.clientHeight - pixel) + 'px';
                            if(section02_03.current.clientHeight <= pixel) {
                                section02_03.current.style.height = 0;
                                setChangeNumber(4);
                            }
                        }
                    }
                }
            }
        } else {
            section02_03.current.style.height = (section02_03.current.clientHeight + pixel) + 'px';
            if(section02_03.current.clientHeight >= section02.current.clientHeight) {
                section02_03.current.style.height = section02.current.clientHeight + 'px';
                section02_02.current.style.height = (section02_02.current.clientHeight + pixel) + 'px';
                if(section02_02.current.clientHeight >= section02.current.clientHeight) {
                    section02_02.current.style.height = section02.current.clientHeight + 'px';
                    section02_01.current.style.height = (section02_01.current.clientHeight + pixel) + 'px';
                    if(section02_01.current.clientHeight >= section02.current.clientHeight) {
                        section02_01.current.style.height = section02.current.clientHeight + 'px';
                        setChangeNumber(5);
                    }
                }
            }
        }
    };

    return (
        <>
            <div className="container pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 opacity-50" ref={section01}>
                            <p className="dots-color1 fs-2">{language.application_53}</p>
                            <p className="fs-5">{language.application_54}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5" ref={section02} onWheel={handleWheel}>
                <div className="dots-effect position-relative" id="section02">
                    <div className="dots-effect1 position-absolute" ref={section02_01}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold">{language.application_55}</h2>
                                        <p className="fs-5">{language.application_56}</p>
                                        <Lottie loop animationData={lottieJson01} play />
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/smiler-reader-app-home.jpg" alt="스마일리더 앱 홈화면" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dots-effect2 position-absolute" ref={section02_02}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold text-light">{language.application_57}</h2>
                                        <p className="fs-5 text-light">{language.application_58}</p>
                                        <Lottie loop animationData={lottieJson02} play style={{height: '50vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/smiler-reader-app-love.jpg" alt="스마일리더 앱 달력"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dots-effect3 position-absolute" ref={section02_03}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold">{language.application_59}</h2>
                                        <p className="fs-5 text-light">{language.application_60}</p>
                                        <p className="fs-5 text-light">{language.application_61}</p>
                                        <Lottie loop animationData={lottieJson03} play style={{height: '50vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/smiler-reader-app-community.jpg" alt="스마일리더 앱 커뮤니티"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dots-effect4 position-absolute" ref={section02_04}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold">{language.application_62}</h2>
                                        <p className="fs-5">{language.application_63}</p>
                                        <p className="fs-5">{language.application_64}</p>
                                        <Lottie loop animationData={lottieJson04} play style={{height: '50vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/smiler-reader-app-shopping.jpg" alt="스마일리더 앱 쇼핑"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
