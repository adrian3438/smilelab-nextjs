'use client'

import Summernote from "@/components/DotsAdmin/Editor/Summernote"
import api from "@/lib/api"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props {
    id : any
}
export default function InquiryPage ({id} : any) {
    const router = useRouter()
    const [data, setData] = useState<any>(null)
    const [isActive , setActive] = useState<boolean>(false)
    async function save () {

    }
    async function reply () {

    }
    useEffect(()=>{
        async function fetchDetail () {
            if(id) {
                try {
                    const response = await api.get(`/admin/inquiry/getInquiryDetail.php?ID=${id}`)
                    if(response?.data?.result === true) {
                        setData(response?.data)
                    }else{
                        alert(response?.data?.resultMsg)
                    }
                }catch {alert('Server Error')}
            }
        }
        fetchDetail()
    }, [id])
    useEffect(() => {
        const links = [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
            },
            {
                rel: "stylesheet",
                href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.css"
            }
        ];

        links.forEach(({ rel, href }) => {
            const link = document.createElement("link")
            link.rel = rel;
            link.href = href;
            document.head.appendChild(link);
        });

        // Cleanup function to remove the links when the component is unmounted or updated
        return () => {
            links.forEach(({ href }) => {
                const link = document.querySelector(`link[href="${href}"]`);
                if (link) {
                    document.head.removeChild(link);
                }
            });
        };
    }, []);
    return(
        <>
        <div className="contentBox inquiry_common">
            <h3>Inquiry</h3>
            <div className="flexBox">
                <div>
                    <h4>고객문의</h4>
                </div>
                <div className="btnBox">
                    <button className="blackBtn" onClick={()=>router.back()}>목록으로</button>
                </div>
            </div>

            <div className="titleBox">
                <div>
                    {data?.replyStatus === 'U'?
                    <button className={isActive ? 'red active' : 'red'} onClick={()=>setActive(!isActive)}>
                        답변전
                    </button> : ''}
                    {data?.replyStatus !== 'U' ?
                    <button className={isActive ? 'blue active' : 'blue'} onClick={()=>setActive(!isActive)}>
                        답변완료
                    </button>
                    :''
                    }
                    <div>
                        <span>답변전</span>
                        <span>답변완료</span>
                    </div>
                </div>
                <h5>{}</h5>
            </div>

            <div className="before">
                <div className="inquiry_table">
                    <ul>
                        <li>
                            <div>
                                <span>문의 유형</span>
                                <span>
                                    {data?.inquiryType === 'S' && '스마일리더 앱'}
                                    {data?.inquiryType === 'T' && '테스터'}
                                    {data?.inquiryType === 'N' && '영양제'}
                                    {data?.inquiryType === 'F' && '식품'}
                                    {data?.inquiryType === 'O' && '기타'} 
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>회사명</span>
                                <span>{data?.inquiryCompanyName}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>이름</span>
                                <span>{data?.inquiryName}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>직급</span>
                                <span>{data?.inquiryPosition}</span>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                                <span>이메일</span>
                                <span>{data?.inquiryEmail}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>연락처</span>
                                <span>{data?.inquiryPhone}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>연락가능시간</span>
                                <span>{data?.availableTime}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>광고성정보수신동의</span>
                                <span>{data?.adsAgreeStatus === 'Y' ? '동의' : '미동의'}</span>
                            </div>
                        </li>
                    </ul>

                    <div className="inquiry_details">
                        <span>문의내용</span>
                        <div dangerouslySetInnerHTML={{
                            __html : data?.inquiryContent
                        }}>
                        </div>
                    </div>
                    
                    <div className="fileName">
                        <span>첨부파일</span>
                        {data?.attachedFilename ?
                        <div>
                            {/* <span onClick={()=>useFileDownLoad(data?.attachedFilename, `https://dklok.com${data?.attachedFile}`)}>{data?.attachedFilename}</span> */}
                        </div>
                        :''
                        }
                    </div>
                </div>
                
                {data?.replyStatus === 'U' ?

                <div className="answerBox">
                    <h5>문의답변</h5>
                    <Summernote
                        initData={data?.description}
                        setData={setData}
                        name={'description'}
                    />
                </div>

                :

                <div className="inquiry_table">
                    <div className="inquiry_details">
                        <span>답변내용</span>
                        <div dangerouslySetInnerHTML={{__html : data?.replyList?.length > 0 && 
                            data?.replyList[0]?.replyContent}}>
                        </div>
                    </div>
                </div>
                }


                <div className="btnBox">
                    {/* <button className="blackBtn">초기화</button> */}
                    {data?.replyStatus === 'U' ?
                    <>
                    <button className="blueBtn" onClick={()=>reply()}>답변하기</button>
                    </>
                    : ''
                    }
                </div>
            </div>
            
        </div>
        </>
    )
}