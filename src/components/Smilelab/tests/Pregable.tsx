'use client'

import React, {useState} from "react";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import * as Icon from "react-feather";
import { useTranslation } from "react-i18next";
interface Props {
    language?:any
}
const Pregable:React.FC<Props> = ({language}) => {
    const [pregableNumber, setPregableNumber] = useState<number>(1);

    const testsChange = (changeNumber:number) => {
        setPregableNumber(changeNumber);
    }

    return (
        <>
            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <p className="col-md-8 fs-5 text-black">{language.pregable_1}</p>
                </div>
                <div className="row text-center dots-button-group justify-content-center mb-5">
                    <div className="col-md-3">
                        <button onClick={() => testsChange(1)}>
                            <img src="/images/smilelab/tests/ovulation-tests.png" alt="Ovulation tests"/>
                        </button>
                    </div>
                    <div className="col-md-3 border-start">
                        <button onClick={() => testsChange(2)}>
                            <img src="/images/smilelab/tests/pregnancy-tests.png" alt="Pregnancy tests"/>
                        </button>
                    </div>
                    <div className="col-md-3 border-start">
                        <button>
                            <img src="/images/smilelab/tests/ovulation-tests.png" alt="Ovulation tests"/>
                        </button>
                    </div>
                    <div className="col-md-3 border-start">
                        <button>
                            <img src="/images/smilelab/tests/pregnancy-tests.png" alt="Pregnancy tests"/>
                        </button>
                    </div>
                </div>
            </div>

            {pregableNumber === 1 && <div className="container">
                <div className="row mb-5">
                    <div className="py-4 px-5 bg-f9fafb border">
                        <h4 className="fw-bold mb-3">{language.pregable_2}</h4>
                        <ul className="mb-0 p-0">
                            <li className="fs-6"><a href="#tests-01-01">{language.pregable_3}</a></li>
                            <li className="fs-6"><a href="#tests-01-02">{language.pregable_4}</a></li>
                            <li className="fs-6"><a href="#tests-01-03">{language.pregable_5}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center pt-5" id="tests-01-01">
                    <h2 className="text-center fw-bold dots-color1 mb-4">{language.pregable_3}</h2>
                    <div className="col-md-7 fs-6">
                        <p>{language.pregable_6}</p>
                        <p>{language.pregable_7}</p>
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>{language.pregable_8}<br/>{language.pregable_9}</th>
                                <th>{language.pregable_10}<br/>{language.pregable_11}</th>
                                <th>{language.pregable_8}<br/>{language.pregable_9}</th>
                                <th>{language.pregable_10}<br/>{language.pregable_11}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{language.pregable_12}</td>
                                <td>{language.pregable_13}</td>
                                <td>{language.pregable_14}</td>
                                <td>{language.pregable_15}</td>
                            </tr>
                            <tr>
                                <td>{language.pregable_12}</td>
                                <td>{language.pregable_13}</td>
                                <td>{language.pregable_14}</td>
                                <td>{language.pregable_15}</td>
                            </tr>
                            <tr>
                                <td>{language.pregable_12}</td>
                                <td>{language.pregable_13}</td>
                                <td>{language.pregable_14}</td>
                                <td>{language.pregable_15}</td>
                            </tr>
                            <tr>
                                <td>{language.pregable_12}</td>
                                <td>{language.pregable_13}</td>
                                <td>{language.pregable_14}</td>
                                <td>{language.pregable_15}</td>
                            </tr>
                            <tr>
                                <td>{language.pregable_12}</td>
                                <td>{language.pregable_13}</td>
                                <td>{language.pregable_14}</td>
                                <td>{language.pregable_15}</td>
                            </tr>
                            <tr>
                                <td>{language.pregable_12}</td>
                                <td>{language.pregable_13}</td>
                                <td>{language.pregable_14}</td>
                                <td>{language.pregable_15}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="/images/smilelab/tests/PREG5.jpg" alt="PREGABLE OVULATION"/>
                    </div>
                </div>
                <div className="row align-items-center mt-5 justify-content-evenly" id="tests-01-02">
                    <h2 className="text-center fw-bold dots-color1 mb-4">{language.pregable_4}</h2>
                    <div className="col-md-7 fs-6">
                        <ol className="m-0 p-0">
                            <li><p>{language.pregable_16}</p></li>
                            <li><p>{language.pregable_17}</p></li>
                            <li><p>{language.pregable_18}</p>
                                <p>{language.pregable_19}</p>
                                <p></p>
                            </li>
                            <li><p>{language.pregable_20}</p></li>
                        </ol>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="/images/smilelab/tests/how-test01-01.png" alt="PREGABLE OVULATION"/>
                    </div>
                </div>
                <div className="row align-items-center mt-5 justify-content-evenly" id="tests-01-03">
                    <h2 className="text-center fw-bold dots-color1 mb-4">{language.pregable_5}</h2>
                    <div className="col-md-7 fs-6">
                        <p><span className="fw-bold">{language.pregable_21}</span>: {language.pregable_22}</p>
                        <p><span className="fw-bold">{language.pregable_23}</span>: {language.pregable_24}</p>
                        <p><span className="fw-bold">{language.pregable_25}</span>: {language.pregable_26}</p>
                        <br/>
                        <p>{language.pregable_27}</p>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="/images/smilelab/tests/how-test01-02.png" alt="PREGABLE OVULATION"/>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                        <p className="dots-color1 fs-5 mb-0 fw-bold">{language.pregable_28}</p>
                        <p className="fs-4 text-black">{language.pregable_29}</p>
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
                                                            Read more <Icon.ArrowRight/>
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
                        <h2 className="text-center fs-4">What application user community are saying</h2>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}


            {pregableNumber === 2 && <div className="container">
                <div className="row mb-5">
                    <div className="py-4 px-5 bg-f9fafb border">
                        <h4 className="fw-bold mb-3">{language.pregable_2}</h4>
                        <ul className="mb-0 p-0">
                            <li className="fs-6"><a href="#tests-02-01">{language.pregable_3}</a></li>
                            <li className="fs-6"><a href="#tests-02-02">{language.pregable_4}</a></li>
                            <li className="fs-6"><a href="#tests-02-03">{language.pregable_5}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center pt-5" id="tests-02-01">
                    <h2 className="text-center fw-bold dots-color1 mb-4">{language.pregable_3}</h2>
                    <div className="col-md-7 fs-6">
                        <p>{language.pregable_30}</p>
                        <p>{language.pregable_31}</p>
                        <p>{language.pregable_32}</p>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="/images/smilelab/tests/PREG6.jpg" alt="PREGABLE OVULATION"/>
                    </div>
                </div>
                <div className="row align-items-center mt-5 justify-content-evenly" id="tests-02-02">
                    <h2 className="text-center fw-bold dots-color1 mb-4">{language.pregable_4}</h2>
                    <div className="col-md-7 fs-6">
                        <ol className="m-0 p-0">
                            <li><p>{language.pregable_16}</p></li>
                            <li><p>{language.pregable_17}</p></li>
                            <li><p>{language.pregable_18}</p>
                                <p>{language.pregable_19}</p>
                                <p></p>
                            </li>
                            <li><p>{language.pregable_33}</p></li>
                        </ol>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="/images/smilelab/tests/how-test02-01.png" alt="PREGABLE OVULATION"/>
                    </div>
                </div>
                <div className="row align-items-center mt-5 justify-content-evenly" id="tests-02-03">
                    <h2 className="text-center fw-bold dots-color1 mb-4">{language.pregable_5}</h2>
                    <div className="col-md-7 fs-6">
                        <p><span className="fw-bold">{language.pregable_21}</span>: {language.pregable_22}</p>
                        <p><span className="fw-bold">{language.pregable_23}</span>: {language.pregable_24}</p>
                        <p><span className="fw-bold">{language.pregable_25}</span>: {language.pregable_26}</p>
                        <br/>
                        <p>{language.pregable_27}</p>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src="/images/smilelab/tests/how-test02-02.png" alt="PREGABLE OVULATION"/>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                        <p className="dots-color1 fs-5 mb-0 fw-bold">{language.pregable_28}</p>
                        <p className="fs-4 text-black">{language.pregable_29}</p>
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
                                                            Read more <Icon.ArrowRight/>
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
                        <h2 className="text-center fs-4">What application user community are saying</h2>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
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
                                                    Read more <Icon.ArrowRight/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default Pregable;
