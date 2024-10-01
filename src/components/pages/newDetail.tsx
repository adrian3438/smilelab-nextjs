'use client'

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
    data : any
}
export default function NewsDetailPage ({data} : Props) {
    const router = useRouter()
    const {List, prev, next} = data;
    function page (e : any, url : string) {
        e.preventDefault()
        router.push(``)
    }
    useEffect(()=>{
        async function fetchCountView () {
            if(List[0]?.ID) {
                const formData = new FormData()
                formData.append('ID', List[0]?.ID)
                const response = await api.post(`/user/promotion/updContentsViewCnt.php`, formData)
            }
        }
        fetchCountView()
    }, [data])
    return(
        <>
        <div className="container my-5 py-5">
            <section className="row my-10 justify-content-center">
                <div className="col-md-9">
                    <p className="fs-18 fw-600">NEWS</p>
                    <h2 className="text-black fw-600">{List?.length > 0 ? List[0]?.promSubject : ''}</h2>
                    <p className="fs-16 fw-500">{List?.length > 0 ? List[0]?.createDate : ''}</p>
                    <hr className="mt-5 mb-3"/>
                    <article className="mb-5" 
                        dangerouslySetInnerHTML={{
                            __html : List?.length > 0 ? List[0]?.description : ''
                        }}
                    >
                    </article>
                    <div className="mt-4 border-bottom">
                        {prev?.length > 0 ? 
                        <>
                            {prev[0]?.prevUrl ? 
                            <div className="py-4 px-5 border-top">
                                <i className="bi bi-chevron-compact-up me-3"></i>
                                <span className="text-black fw-bold me-4">이전글</span>
                                <a href="#" onClick={(e)=>page(e, prev[0]?.prevUrl)} className="text-medium-gray fw-bold">{prev[0]?.prevSubject}</a>
                            </div>
                            :''
                            }
                        </>
                        : ''
                        }
                        {next?.length > 0 ?
                        <>
                            {next[0]?.nextUrl ? 
                            <div className="py-4 px-5 border-top">
                                <i className="bi bi-chevron-compact-down me-3"></i>
                                <span className="text-black fw-bold me-4">다음글</span>
                                <a href="#" onClick={(e)=>page(e, next[0]?.nextUrl)} className="text-medium-gray fw-bold">{next[0]?.nextSubject}</a>
                            </div>
                            :''
                            }
                        </>
                        :''
                        }
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}