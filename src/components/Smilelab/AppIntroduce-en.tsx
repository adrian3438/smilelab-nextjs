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
export default function AppIntroduceEn({language} : Props) {
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
    const section02_05:any = useRef<HTMLDivElement>(null);
    const section02_06:any = useRef<HTMLDivElement>(null);
    const section02_07:any = useRef<HTMLDivElement>(null);
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
                                if(section02_03.current.clientHeight === 0) {
                                    section02_04.current.style.height = (section02_04.current.clientHeight - pixel) + 'px';
                                    if(section02_04.current.clientHeight <= pixel) {
                                        section02_04.current.style.height = 0;
                                        if(section02_04.current.clientHeight === 0) {
                                            section02_05.current.style.height = (section02_05.current.clientHeight - pixel) + 'px';
                                            if(section02_05.current.clientHeight <= pixel) {
                                                section02_05.current.style.height = 0;
                                                if(section02_05.current.clientHeight === 0) {
                                                    section02_06.current.style.height = (section02_06.current.clientHeight - pixel) + 'px';
                                                    if(section02_06.current.clientHeight <= pixel) {
                                                        section02_06.current.style.height = 0;
                                                        setChangeNumber(4);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            section02_06.current.style.height = (section02_06.current.clientHeight + pixel) + 'px';
            if(section02_06.current.clientHeight >= section02.current.clientHeight) {
                section02_06.current.style.height = section02.current.clientHeight + 'px';
                section02_05.current.style.height = (section02_05.current.clientHeight + pixel) + 'px';
                if(section02_05.current.clientHeight >= section02.current.clientHeight) {
                    section02_05.current.style.height = section02.current.clientHeight + 'px';
                    section02_04.current.style.height = (section02_04.current.clientHeight + pixel) + 'px';
                    if(section02_04.current.clientHeight >= section02.current.clientHeight) {
                        section02_04.current.style.height = section02.current.clientHeight + 'px';
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
                                        <h2 className="fw-bold">Test</h2>
                                        <p className="fs-5">The Smile Reader app sends you notifications when it's time to test, so you won't miss the optimal timing.</p>
                                        <p className="fs-5">This ensures that you stay on track with your ovulation tests, making it easier to manage your fertility journey effectively. With timely reminders, you can confidently take each test at the right moment and get accurate results.</p>
                                        <Lottie loop animationData={lottieJson01} play/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-01.webp" alt="스마일리더 앱 홈화면"/>
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
                                        <h2 className="fw-bold text-light">Read</h2>
                                        <p className="fs-5 text-light">The Smile Reader app can save images of your test strips, allowing you to review your test history. This feature makes it easy to track changes over time and see patterns in your results.</p>
                                        <p className="fs-5 text-light">By having a visual record, you can better understand your fertility cycle and make more informed decisions. This helps ensure that you are on top of your testing schedule and can provide valuable data if you need to consult with a healthcare provider.</p>
                                        <Lottie loop animationData={lottieJson02} play style={{height: '30vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-02.webp" alt="스마일리더 앱 달력"/>
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
                                        <h2 className="fw-bold">Record</h2>
                                        <p className="fs-5 text-light">You can input and manage various information such as temperature, intercourse, notes, cervical mucus, symptoms, and mood. The screen is designed to easily record and review details about cervical mucus condition, discharge amount, emotions like happiness, worry, anger, and sadness, as well as appetite, fatigue, nausea, and muscle pain.</p>
                                        <Lottie loop animationData={lottieJson03} play style={{height: '40vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-03.webp" alt="스마일리더 앱 커뮤니티"/>
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
                                        <h2 className="fw-bold">Monitor</h2>
                                        <p className="fs-5">The input data is displayed on the chart, allowing users to easily and quickly assess their status through the information shown on the chart.</p>
                                        <Lottie loop animationData={lottieJson04} play style={{height: '50vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-04.webp" alt="스마일리더 앱 쇼핑"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dots-effect5 position-absolute" ref={section02_05}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold">Track</h2>
                                        <p className="fs-5">Based on the input data, the app highlights the 2 most fertile days on the calendar, helping to increase the chances of conception.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-05.webp" alt="스마일리더 앱 쇼핑"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dots-effect6 position-absolute" ref={section02_06}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold text-light">Find</h2>
                                        <p className="fs-5 text-light">The Smile Reader app calculates your optimal fertile window and displays a message saying "You got a peak!" on the main screen to ensure you don't miss the perfect moment.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-06.webp" alt="스마일리더 앱 쇼핑"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dots-effect7 position-absolute" ref={section02_07}>
                        <div className="container">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 row justify-content-between align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="fw-bold">Share</h2>
                                        <p className="fs-5 text-light">The Smile Reader app is also available for your partner, allowing you to share information with them.</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-en-07.webp" alt="스마일리더 앱 쇼핑"/>
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
