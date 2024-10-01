"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import logo from "/public/images/smilelab/smilelab-logo-green.png";
import LangBox from "./LangBox";
import { useTranslation } from "react-i18next";
interface Props {
  language?:any
}
const SmileLabNavbar: React.FC<Props> = ({language}) => {
  const {t} = useTranslation()
  
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get('name');

  const [menu, setMenu] = useState<boolean>(true);

  function toggleNavbar () {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
  const classTwo = menu
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

  return (
      <>
        <header id="header" className="headroom navbar-style-three">
          <div className="startp-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/" className="navbar-brand">
                  <Image src={logo} alt="logo" width={200} height={36}/>
                </Link>

                <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link fs-5 px-3"
                      >
                        {language?.header_1}
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                              href="/company/"
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  currentRoute == "/company/" && "active"
                              }`}

                          >
                            {language?.header_2}
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                              href="/history/"
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  currentRoute == "/history/" && "active"
                              }`}
                          >
                            {language?.header_3}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link fs-5 px-3"
                      >
                        {language?.header_4}
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                              href="/application/"
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  currentRoute == "/about/" && "active"
                              }`}

                          >
                            {language?.header_5}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link fs-5 px-3"
                      >
                        {language?.header_6}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                              href={{
                                pathname: "/tests",
                                query: {name: "pregable"}
                              }}
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  search == "pregable" && "active"
                              }`}
                          >
                            {language?.header_7}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                              href={{
                                pathname: "/tests",
                                query: {name: "smiletests"}
                              }}
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  search == "smiletests" && "active"
                              }`}
                          >
                            {language?.header_8}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link fs-5 px-3"
                      >
                        {language?.header_9}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                              href="/supplements/"
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  currentRoute == "/supplements/" && "active"
                              }`}
                          >
                           {language?.header_10}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link fs-5 px-3"
                      >
                        {language?.header_11}
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                              href="/food/"
                              onClick={toggleNavbar}
                              className={`nav-link fs-6 ${
                                  currentRoute == "/food/" && "active"
                              }`}
                          >
                            {language?.header_12}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                          href="/news/"
                          onClick={toggleNavbar}
                          className={`nav-link fs-5 px-3 ${
                              currentRoute == "/news/" && "active"
                          }`}
                      >
                        {language?.header_13}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                          href="/contactus/"
                          onClick={toggleNavbar}
                          className={`nav-link fs-5 px-3 ${
                              currentRoute == "/contactus/" && "active"
                          }`}
                      >
                        {language?.header_14}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Others option */}
                <div className="others-option">
                  <ul className="navbar-nav m-auto">
                    <LangBox

                    />
                    <li className="nav-item">
                      <Link
                          href="/sitemap/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                              currentRoute == "/sitemap/" && "active"
                          }`}
                      >
                        {language?.header_15}
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </>
  );
};

export default SmileLabNavbar;
