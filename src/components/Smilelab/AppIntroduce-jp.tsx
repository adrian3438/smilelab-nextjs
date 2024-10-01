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
export default function AppIntroduceJp({language} : Props) {
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
                                        <h2 className="fw-bold">検査する</h2>
                                        <p className="fs-5">スマイルリーダーアプリは、テストの時間になると通知を送るので、最適なタイミングを逃すことがありません。</p>
                                        <p className="fs-5">これにより、排卵テストを順調に進めることができ、生殖健康の管理が効果的に行えます。タイムリーなリマインダーで、正確な結果を得るために自信を持ってテストを受けることができます。</p>
                                        <Lottie loop animationData={lottieJson01} play/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-01.webp" alt="스마일리더 앱 홈화면"/>
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
                                        <h2 className="fw-bold text-light">読みとる</h2>
                                        <p className="fs-5 text-light">スマイルリーダーアプリは、テストストリップの画像を保存できるため、テスト履歴を確認できます。この機能により、時間の経過とともに変化を追跡し、結果のパターンを見ることが容易になります。</p>
                                        <p className="fs-5 text-light">視覚的な記録を持つことで、生殖サイクルをよりよく理解し、より情報に基づいた判断ができます。これにより、テストスケジュールをしっかり管理でき、医療提供者に相談する際に貴重なデータを提供できます。</p>
                                        <Lottie loop animationData={lottieJson02} play style={{height: '30vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-02.webp" alt="스마일리더 앱 달력"/>
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
                                        <h2 className="fw-bold">記録する</h2>
                                        <p className="fs-5 text-light">体温、性交、メモ、頸管粘液、症状、気分などのさまざまな情報を入力して管理できます。画面は、頸管粘液の状態、分泌量、幸福、心配、怒り、悲しみなどの感情、食欲、疲労、吐き気、筋肉痛などの詳細を簡単に記録し、確認できるように設計されています。</p>
                                        <Lottie loop animationData={lottieJson03} play style={{height: '40vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-03.webp" alt="스마일리더 앱 커뮤니티"/>
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
                                        <h2 className="fw-bold">観察する</h2>
                                        <p className="fs-5">入力したデータはチャートに表示され、ユーザーはチャートに表示された情報を通じて自分の状態を簡単かつ迅速に評価できます。</p>
                                        <Lottie loop animationData={lottieJson04} play style={{height: '50vh'}}/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-04.webp" alt="스마일리더 앱 쇼핑"/>
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
                                        <h2 className="fw-bold">追跡する</h2>
                                        <p className="fs-5">入力データに基づいて、アプリはカレンダーに最も fertile な2日間をハイライトし、受胎の確率を高める手助けをします。</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-05.webp" alt="스마일리더 앱 쇼핑"/>
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
                                        <h2 className="fw-bold text-light">把握する</h2>
                                        <p className="fs-5 text-light">スマイルリーダーアプリは、最適な fertile ウィンドウを計算し、メイン画面に「ピークを取得しました！」というメッセージを表示して、完璧なタイミングを逃さないようにします。</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-06.webp" alt="스마일리더 앱 쇼핑"/>
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
                                        <h2 className="fw-bold">共有する</h2>
                                        <p className="fs-5 text-light">スマイルリーダーアプリは、パートナー用にも利用できるため、情報を共有することができます。</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src="/images/smilelab/application/app-jp-07.webp" alt="스마일리더 앱 쇼핑"/>
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
