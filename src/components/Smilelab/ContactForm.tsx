"use client";

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
interface Props {
  language?:any
}
const ContactForm: React.FC<Props> = ({language}) => {
  const router = useRouter()
  const [cookie , setCookie] = useCookies()
  const [data, setData] = useState({
    company : "", // 회사명
    name: "", // 이름
    position : "", // 직급
    email: "", // 이메일
    number: "", // 연락처
    time : "", // 연락가능한 시간
    type : "S", // 문의 유형
    subject: "", // 문의제목
    message: "", // 문의내용
    attachedFile : null, // 첨부파일
    message2: "",
    agreeTerms: false, // 필수동의
    adagree : false // 선택광고동의
  });

  const [fileName, setFileName] = useState<string>('')
  
  const handleChange = (
    e: any
  ) => {
    const {type , name , value, files} = e.target;
    if(type === 'file'){
      const reader = new FileReader()
      if(files[0]){reader.readAsDataURL(files[0])}
      reader.onload = () =>{
        setData((prev) => ({...prev, [name] : files[0]}))
        setFileName(files[0].name)
      }
    }else{
      setData((prev) => ({...prev, [name] : value}))
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    if(checked) {setData((prev) => ({...prev, [name] : true}))}
    else {setData((prev) => ({...prev, [name] : false}))}
  };

  async function handleSubmit (e: React.FormEvent) {
    // e.preventDefault()
    const formData : any = new FormData()
    formData.append('inquiryCompanyName', data?.company)
    formData.append('inquiryName', data?.name)
    formData.append('inquiryPosition', data?.position)
    formData.append('inquiryEmail', data?.email)
    formData.append('inquiryPhone', data?.number)
    formData.append('inquiryType', data?.type)
    formData.append('inquiryContent' , data?.message)
    if(cookie?.LANG === 'kr'){formData.append('inquiryLang', 'KR')}
    if(cookie?.LANG === 'en'){formData.append('inquiryLang', 'EN')}
    if(cookie?.LANG === 'jp'){formData.append('inquiryLang', 'JP')}
    if(data?.attachedFile)formData.append('files_length', data?.attachedFile)
    formData.append('advertiseAgree', data?.adagree ? 'Y' : 'N')
    try {
      const response = await api.post(`/user/inquiry/setInquiry.php`, formData)
      if(response?.data?.result === true) {
        alert(response?.data?.resultMsg)
      }else{
        alert(response?.data?.resultMsg)
      }
    }catch {alert('Server Error')}
    // router.refresh()
  };

  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>{language.contactus_2}</h2>
            <div className="bar"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <h3 className="mb-4 fw-bold"><i className="bi bi-1-square-fill"></i> {language.contactus_3}</h3>
                  <div className="col-lg-3 col-md-12">
                    <div className="form-group">
                      <label className="fs-5">{language.contactus_4}</label>
                      <input
                          type="text"
                          name="company"
                          placeholder={language.contactus_5}
                          className="form-control fs-6"
                          value={data.company}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12">
                    <div className="form-group">
                      <label className="fs-5">{language.contactus_6}</label>
                      <input
                          type="text"
                          name="name"
                          placeholder={language.contactus_7}
                          className="form-control fs-6"
                          value={data.name}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-12">
                    <div className="form-group">
                      <label className="fs-5">{language.contactus_8}</label>
                      <input
                          type="text"
                          name="position"
                          placeholder={language.contactus_9}
                          className="form-control fs-6"
                          value={data.position}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-12">
                    <div className="form-group">
                      <label className="fs-5">{language.contactus_10}</label>
                      <input
                          type="text"
                          name="number"
                          placeholder={language.contactus_11}
                          className="form-control fs-6"
                          value={data.number}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="fs-5">{language.contactus_12}</label>
                      <input
                          type="text"
                          name="email"
                          placeholder={language.contactus_13}
                          className="form-control fs-6"
                          value={data.email}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-12">
                    <div className="form-group">
                      <label className="fs-5">{language.contactus_14}</label>
                      <input
                          type="text"
                          name="time"
                          placeholder={language.contactus_15}
                          className="form-control fs-6"
                          value={data.time}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>
                </div>
                <div className="row order-details dots-order-details mt-5 pt-5">
                  <h3 className="mb-4 fw-bold"><i className="bi bi-2-square-fill"></i> {language.contactus_16}</h3>
                  <div className="col-lg-2 col-md-12 payment-method dots-form-radio">
                    <p>
                      <input
                          type="radio"
                          id="스마일리더 앱"
                          value={"S"}
                          name="type"
                          onChange={handleChange}
                          checked={data?.type === 'S'}
                          defaultChecked
                          className="pt-3"
                      />
                      <label className="fs-5 lh-1 pt-1" htmlFor="스마일리더 앱">
                      {language.contactus_17}
                      </label>
                    </p>
                  </div>

                  <div className="col-lg-2 col-md-12 payment-method dots-form-radio">
                    <p>
                      <input
                          type="radio"
                          id="테스트"
                          name="type"
                          value={'T'}
                          onChange={handleChange}
                          checked={data?.type === 'T'}
                      />
                      <label className="fs-5 lh-1 pt-1" htmlFor="테스트">
                      {language.contactus_18}
                      </label>
                    </p>
                  </div>

                  <div className="col-lg-2 col-md-12 payment-method dots-form-radio">
                    <p>
                      <input
                          type="radio"
                          id="영양제"
                          name="type"
                          value={'N'}
                          onChange={handleChange}
                          checked={data?.type === 'N'}
                      />
                      <label className="fs-5 lh-1 pt-1" htmlFor="영양제">
                      {language.contactus_19}
                      </label>
                    </p>
                  </div>

                  <div className="col-lg-2 col-md-12 payment-method dots-form-radio">
                    <p>
                      <input
                          type="radio"
                          id="식품"
                          name="type"
                          value={'F'}
                          onChange={handleChange}
                          checked={data?.type === 'F'}
                      />
                      <label className="fs-5 lh-1 pt-1" htmlFor="식품">
                      {language.contactus_20}
                      </label>
                    </p>
                  </div>

                  <div className="col-lg-2 col-md-12 payment-method dots-form-radio">
                    <p>
                      <input
                          type="radio"
                          id="기타"
                          name="type"
                          value={'O'}
                          onChange={handleChange}
                          checked={data?.type === 'O'}
                      />
                      <label className="fs-5 lh-1 pt-1" htmlFor="기타">
                      {language.contactus_21}
                      </label>
                    </p>
                  </div>
                </div>

                <div className="row mt-5 pt-5">
                  <h3 className="mb-4 fw-bold"><i className="bi bi-3-square-fill"></i> {language.contactus_22}</h3>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                          type="text"
                          name="subject"
                          placeholder={language.contactus_23}
                          className="form-control fs-6"
                          value={data.subject}
                          onChange={handleChange}
                          required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                      <textarea
                          name="message"
                          cols={30}
                          rows={5}
                          placeholder={language.contactus_24}
                          className="form-control fs-6"
                          value={data.message}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div className="form-group dots-input-file">
                    <p className="fs-6">{language.contactus_25} {fileName}</p>
                    <div className="position-relative">
                      <label htmlFor="inquiry_file">{language.contactus_26}</label>
                      <input id="inquiry_file" onChange={handleChange} name="attachedFile" type="file"/>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-check">
                      <input
                          className="form-check-input fs-5"
                          type="checkbox"
                          name="agreeTerms"
                          checked={data.agreeTerms}
                          onChange={handleCheckboxChange}
                          id="flexCheckDefault"
                          required
                      />
                      <label
                          className="form-check-label fs-5"
                          htmlFor="flexCheckDefault"
                      >
                        {language.contactus_27}
                      </label>
                      <p className="fs-6">{language.contactus_28}<br/>
                      {language.contactus_29}<br/>
                      {language.contactus_30}</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-check">
                      <input
                          className="form-check-input fs-5"
                          type="checkbox"
                          name="adagree"
                          checked={data.adagree}
                          onChange={handleCheckboxChange}
                          id="flexCheck"
                      />
                      <label
                          className="form-check-label fs-5"
                          htmlFor="flexCheck"
                      >
                        {language.contactus_31}
                      </label>
                      <p className="fs-6">{language.contactus_32}<br/>
                      {language.contactus_33}</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12 mt-5 text-center">
                    <button type="submit" className="btn btn-primary fs-5">
                    {language.contactus_34}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
