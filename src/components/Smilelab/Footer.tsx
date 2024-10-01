'use client'
import React from "react";

import Link from "next/link";




// Shape Images

import { useTranslation } from "react-i18next";
interface Props {
  language?:any
}
const Footer:React.FC<Props> = ({language}) => {
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row justify-content-evenly align-items-center mb-5">

          </div>

          <div className="row justify-content-between">
            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5">{language.header_1}</h3>

                <ul className="list fs-6">
                  <li>
                    <Link href="/about">
                    {language.header_2}
                    </Link>
                    <ul>
                      <li><Link href="/">- {language.footer_1}</Link></li>
                      <li><Link href="/">- {language.footer_2}</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/services">
                    {language.header_3}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5">{language.header_4}</h3>

                <ul className="list fs-6">
                  <li>
                    <Link href="/about">
                    {language.header_5}
                    </Link>
                    <ul>
                      <li><a style={{cursor : 'pointer'}}>- {language.header_2}</a></li>
                      <li><Link href="/">- {language.footer_3}</Link></li>
                      <li><Link href="/">- {language.footer_4}</Link></li>
                      <li><Link href="/">- {language.footer_22}</Link>
                        <ul>
                          <li><Link href="/">a. {language.footer_5}</Link></li>
                          <li><Link href="/">b. {language.footer_6}</Link></li>
                          <li><Link href="/">c. {language.footer_7}</Link></li>
                          <li><Link href="/">d. {language.footer_8}</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5">{language.header_6}</h3>

                <ul className="list fs-6">
                  <li>
                    <Link href="/about">
                    {language.header_7}
                    </Link>
                    <ul>
                      <li><Link href="/">- {language.header_2}</Link></li>
                      <li><Link href="/">- {language.footer_9}</Link>
                        <ul>
                          <li><Link href="/">a. {language.footer_10}</Link></li>
                          <li><Link href="/">b. {language.footer_11}</Link></li>
                          <li><Link href="/">c. {language.footer_12}</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/">- {language.footer_13}</Link></li>
                      <li><Link href="/">- {language.footer_14}</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/about">
                    {language.header_8}
                    </Link>
                    <ul>
                      <li><Link href="/">- {language.header_2}</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5">{language.header_9}</h3>

                <ul className="list fs-6">
                  <li>
                    <Link href="/about">
                    {language.header_10}
                    </Link>
                    <ul>
                      <li><Link href="/">- {language.footer_15}</Link></li>
                      <li><Link href="/">- {language.footer_16}</Link></li>
                      <li><Link href="/">- {language.footer_17}</Link></li>
                      <li><Link href="/">- {language.footer_18}</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5">{language.header_11}</h3>

                <ul className="list fs-6">
                  <li>
                    <Link href="/">
                    {language.header_12}
                    </Link>
                    <ul>
                      <li><Link href="/">- {language.footer_15}</Link></li>
                      <li><Link href="/">- {language.footer_16}</Link></li>
                      <li><Link href="/">- {language.footer_17}</Link></li>
                      <li><Link href="/">- {language.footer_18}</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5"><Link href="/">{language.header_13}</Link></h3>
              </div>
            </div>
            <div
                className="col-md-auto"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3 className="fs-5"><Link href="/">{language.header_14}</Link></h3>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                {language.footer_19} &copy; {language.footer_20}
                  | &nbsp;
                  <a href="https://envytheme.com/" target="_blank">
                  {language.footer_21}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
