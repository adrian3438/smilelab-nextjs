'use client'

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";
interface Props {
  language?:any
}
const FaqContent:React.FC<Props> = ({language} : Props) => {
  return (
      <>
        <div className="container">
          <div className="row mt-5 pt-5 justify-content-center">
            <div className="col-md-8 mt-5">
              <p className="dots-color1 fs-5 mb-0 fw-bold">{language.application_14}</p>
              <p className="fs-4 text-black">{language.application_15}</p>
            </div>
          </div>
        </div>

        <div className="faq-area mt-5 mb-5 pb-5">
          <div className="container">
            <div className="faq-accordion">
              <Accordion preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{language.application_16}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{language.application_17}</p>
                    <p>{language.application_18}</p>
                    <p>{language.application_19}</p>
                    <p>{language.application_20}</p>
                    <p>{language.application_21}</p>
                    <p>{language.application_22}</p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{language.application_23}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p><img src="/images/smilelab/application/faq-02-01.webp" alt="smile leader"/></p>
                    <p>{language.application_24}</p>
                    <p>{language.application_25}<br/>
                    {language.application_26}<br/>
                    {language.application_27}<br/>
                    {language.application_28}
                    </p>
                    <p>{language.application_29}</p>
                    <p>{language.application_30}</p>
                    <p><a href="https://youtu.be/007s5rWpUBE">https://youtu.be/007s5rWpUBE</a><br/><a href="https://youtu.be/MJnQMXsVdWc">https://youtu.be/MJnQMXsVdWc</a></p>
                    <p>{language.application_31}</p>
                    <p>{language.application_32} :)</p>
                    <p><img src="/images/smilelab/application/faq-02-02.webp" alt="smile leader"/></p>
                    <p>{language.application_33} :(</p>
                    <p><img src="/images/smilelab/application/faq-02-03.webp" alt="smile leader"/></p>
                    <p>{language.application_34}.<br/>{language.application_35}</p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <span>
                    {language.application_36}
                    </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{language.application_37}</p>
                    <p>{language.application_38}<br/>{language.application_39}</p>
                    <p><img src="/images/smilelab/application/faq-03-01.webp" alt="smile leader"/></p>
                    <p>{language.application_40}</p>
                    <p>{language.application_41}<br/>{language.application_42}</p>
                    <p><img src="/images/smilelab/application/faq-03-02.webp" alt="smile leader"/></p>
                    <p>{language.application_43}</p>
                    <p>{language.application_44}</p>
                    <p>{language.application_45} <br/>{language.application_46}<br/>{language.application_47}</p>
                    <p><img src="/images/smilelab/application/faq-03-03.webp" alt="smile leader"/></p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{language.application_48}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p><img src="/images/smilelab/application/faq-04-01.webp" alt="smile leader"/></p>
                    <p>{language.application_49}</p>
                    <p>{language.application_50}</p>
                    <p>{language.application_51}</p>
                    <p>{language.application_52}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </>
  );
};

export default FaqContent;
