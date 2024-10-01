"use client";

import React from "react";

interface Props {
  language?:any
}
const FunFactsArea:React.FC<Props> = ({language}) => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container ptb-80">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>{language?.main_7}</h2>
            <p>
            {language?.main_8}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsArea;
