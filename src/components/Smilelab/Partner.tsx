import React from "react";
import Image from "next/image";
import image01 from "/public/images/smilelab/smileReader-logo-green.png";
import image02 from "/public/images/smilelab/smile-smile.png";
import image03 from "/public/images/smilelab/pregable-logo-color.png";
import image04 from "/public/images/smilelab/nutrimore-color-horizontal.png";
import image05 from "/public/images/smilelab/letsee-logo-color.png";
import { useTranslation } from "react-i18next";
interface Props {
  language?:any
}
const Partner:React.FC<Props>= ({language}) => {
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <p className="sub-title fw-bold fs-6">{language?.main_1}</p>
          <h3><span className="fw-bold">{language?.main_2}</span><br/> {language?.main_3}</h3>
        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">
          <div>
            <div className="row justify-content-center align-items-center bg-white">
              <div className="col-lg-2 col-md-3 col-6">
                <a href="#" target="_balnk">
                  <Image
                    src={image01}
                    alt="partner"
                    width={190}
                    height={54}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="#" target="_balnk">
                  <Image
                    src={image02}
                    alt="partner"
                    width={126}
                    height={69}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="#" target="_balnk">
                  <Image
                    src={image03}
                    alt="partner"
                    width={190}
                    height={54}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="#" target="_balnk">
                  <Image
                    src={image04}
                    alt="partner"
                    width={172}
                    height={75}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a href="#" target="_balnk">
                  <Image
                    src={image05}
                    alt="partner"
                    width={117}
                    height={47}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
