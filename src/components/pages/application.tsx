'use client'

import AppIntroduce from "@/components/Smilelab/AppIntroduce";
import AppIntroduceEn from "@/components/Smilelab/AppIntroduce-en";
import Image from "next/image";
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";
import '@smastrom/react-rating/style.css'
import {Rating} from "@smastrom/react-rating";
import Link from "next/link";
import * as Icon from "react-feather";
import FaqContent from "@/components/Smilelab/FaqContent";
import { useTranslation } from "react-i18next";
import {useSearchParams} from "next/navigation";
import AppIntroduceJp from "@/components/Smilelab/AppIntroduce-jp";
interface Props {
    lang?:any
    language?:any
  }
export default function ApplicationPage ({lang , language} : Props) {

    return(
        <>
            <div className="page-title-area mb-5">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="repair-banner-content col-md-6 text-start">
                                    <h3>{language.application_1}<br/>{language.application_2}<br/> {language.application_3}</h3>
                                    <button className="btn btn-primary">
                                    {language.application_4}
                                    </button>
                                </div>
                                <div className="col-md-6 position-relative">
                                    <Image src="/images/smilelab/company/intro/app_main.png" alt="스마일리더 앱 메인화면" width={331} height={465} className="position-absolute" style={{top: "-50%", right: 0}}/>
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

            {lang === 'en' || lang === 'jp' ? lang === 'en' ? <AppIntroduceEn language={language}/> : <AppIntroduceJp language={language}/> : <AppIntroduce language={language}/>}

            <div className="container my-5 py-5">
                <div className="row justify-content-between pt-5">
                    <div className="col-md-5">
                        <img src="/images/smilelab/application/application-01.jpg" alt="스마일리더앱"/>
                    </div>
                    <div className="col-md-6 dots-bg-color1 row align-items-center">
                        <div className="col-md-12">
                            <h3 className="fs-2 fw-bold" style={{color: "#B5E61D"}}>{language.application_5}</h3>
                            <p className="text-white fs-3">{language.application_6}</p>
                            <div className="text-center">
                                <a href="#"><img src="/images/smilelab/application/google-play-btn.svg" alt="구글 플레이 스토어"/></a>
                                <a href="#"><img src="/images/smilelab/application/app-store-btn.svg" alt="앱 스토어"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-md-6">
                        <img src="/images/smilelab/application/application-02.jpg" alt="스마일리더앱"/>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/smilelab/application/application-03.jpg" alt="스마일리더앱"/>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5 pt-5 justify-content-center">
                        <div className="col-md-8">
                            <p className="dots-color1 fs-5 mb-0 fw-bold">{language.application_7}</p>
                            <p className="fs-4 text-black">{language.application_8}</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <img src="/images/smilelab/application/application-04.jpg" alt="스마일리더앱" className="w-100"/>
                    </div>
                </div>
            </div>

            <div className="bg-secondary-subtle text-center row align-items-center" style={{height: '60vh'}}>
                <div className="col-md-12 fs-1 text-white fw-bold">
                    비디오 삽입 예정 영역
                </div>
            </div>

            <div className="container">
                <div className="row mt-5 pt-5 justify-content-center">
                    <div className="col-md-8 mt-5">
                        <p className="dots-color1 fs-5 mb-0 fw-bold">{language.application_9}</p>
                        <p className="fs-4 text-black">{language.application_10}</p>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src="/images/smilelab/tests/exam.png" alt="exam"/>
                            </div>
                            <div className="col-md-6">
                                <div className="blog-area pt-80 pb-50">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div
                                                className="col-lg-12 col-md-12"
                                                data-aos="fade-up"
                                                data-aos-delay="100"
                                                data-aos-duration="500"
                                                data-aos-once="true"
                                            >
                                                <div className="single-blog-post">
                                                    <div className="blog-post-content">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black">Accurate results, very user friendly app!</p>
                                                        <p>
                                                            accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                        </p>
                                                        <div className="row align-items-center">
                                                            <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                            <div className="col-md-8">
                                                                <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                                2,488 Genuine rating
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href="/blog/blog-details/"
                                                            className="read-more-btn"
                                                        >
                                                            {language.application_12} <Icon.ArrowRight/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h2 className="text-center fs-4">{language.application_13}</h2>
                        <div className="blog-area pt-5 pb-50">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div
                                        className="col-lg-4 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <div className="single-blog-post">
                                            <div className="blog-post-content">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <div className="text-center bg-white" style={{width: "100px", height: "100px", borderRadius: "100px"}}>
                                                            <i className="bi bi-person display-1"></i>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-8">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black lh-1">Accurate results, very user friendly app!</p>
                                                    </div>
                                                </div>

                                                <p>
                                                    accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                    <div className="col-md-8">
                                                        <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                        2,488 Genuine rating
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/blog-details/"
                                                    className="read-more-btn"
                                                >
                                                    {language.application_12} <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <div className="single-blog-post">
                                            <div className="blog-post-content">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <div className="text-center bg-white" style={{width: "100px", height: "100px", borderRadius: "100px"}}>
                                                            <i className="bi bi-person display-1"></i>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-8">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black lh-1">Accurate results, very user friendly app!</p>
                                                    </div>
                                                </div>

                                                <p>
                                                    accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                    <div className="col-md-8">
                                                        <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                        2,488 Genuine rating
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/blog-details/"
                                                    className="read-more-btn"
                                                >
                                                    {language.application_12} <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <div className="single-blog-post">
                                            <div className="blog-post-content">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <div className="text-center bg-white" style={{width: "100px", height: "100px", borderRadius: "100px"}}>
                                                            <i className="bi bi-person display-1"></i>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-8">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black lh-1">Accurate results, very user friendly app!</p>
                                                    </div>
                                                </div>

                                                <p>
                                                    accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                    <div className="col-md-8">
                                                        <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                        2,488 Genuine rating
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/blog-details/"
                                                    className="read-more-btn"
                                                >
                                                    {language.application_12} <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <div className="single-blog-post">
                                            <div className="blog-post-content">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <div className="text-center bg-white" style={{width: "100px", height: "100px", borderRadius: "100px"}}>
                                                            <i className="bi bi-person display-1"></i>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-8">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black lh-1">Accurate results, very user friendly app!</p>
                                                    </div>
                                                </div>

                                                <p>
                                                    accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                    <div className="col-md-8">
                                                        <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                        2,488 Genuine rating
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/blog-details/"
                                                    className="read-more-btn"
                                                >
                                                    {language.application_12} <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <div className="single-blog-post">
                                            <div className="blog-post-content">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <div className="text-center bg-white" style={{width: "100px", height: "100px", borderRadius: "100px"}}>
                                                            <i className="bi bi-person display-1"></i>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-8">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black lh-1">Accurate results, very user friendly app!</p>
                                                    </div>
                                                </div>

                                                <p>
                                                    accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                    <div className="col-md-8">
                                                        <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                        2,488 Genuine rating
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/blog-details/"
                                                    className="read-more-btn"
                                                >
                                                    {language.application_12} <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <div className="single-blog-post">
                                            <div className="blog-post-content">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <div className="text-center bg-white" style={{width: "100px", height: "100px", borderRadius: "100px"}}>
                                                            <i className="bi bi-person display-1"></i>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-8">
                                                        <p className="dots-color1">s***</p>
                                                        <p className="text-black lh-1">Accurate results, very user friendly app!</p>
                                                    </div>
                                                </div>

                                                <p>
                                                    accurate results, easy to read and the app is very user friendly! I was a little nervous when I first used these because the lines take a little bit to appear, but it does state to wait “10 minutes” for ……
                                                </p>
                                                <div className="row align-items-center">
                                                    <div className="col-md-4 fw-bold fs-1 border-end text-center">4.8</div>
                                                    <div className="col-md-8">
                                                        <Rating style={{maxWidth: 100}} value={4.8} readOnly/>
                                                        2,488 Genuine rating
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/blog-details/"
                                                    className="read-more-btn"
                                                >
                                                    {language.application_12} <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}