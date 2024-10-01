"use client";

import React from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import bannerImg1 from "/public/images/smilelab/main-banner-01.jpg";
import bannerImg2 from "/public/images/smilelab/main-banner-02.jpg";
import { fetchLanguage } from "@/util/fetchLanguage";

const MainBanner = () => {
  
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="agency-portfolio-home-slides"
      >
        <SwiperSlide>
          <div
            className="agency-portfolio-main-banner"
            style={{ backgroundImage: `url(${bannerImg1.src})` }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="portfolio-banner-content">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="agency-portfolio-main-banner"
            style={{ backgroundImage: `url(${bannerImg2.src})` }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="portfolio-banner-content">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
