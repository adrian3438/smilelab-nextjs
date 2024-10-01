'use client'
import React, { useEffect } from "react";
import Link from 'next/link';
import * as Icon from "react-feather";
import Image from "next/image";
import BlogSidebar from "../../components/Smilelab/BlogSidebar";
import blogDetails from "/public/images/blog-image/blog-details.jpg";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import axios from "axios";
interface Props {
  data : any
  popularData : any
}
const BlogDetailsContent:React.FC<Props> = ({data, popularData}) => {
  const router = useRouter()
  
  return (
    <>
      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {data?.map((list:any, index:number) => (
              <div className="blog-details-desc" style={{marginTop : '4%'}} key={index}>
                <div className="article-image">
                  <Image
                    src={list?.thumnailFile}
                    alt="image"
                    width={860}
                    height={700}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> {list?.createDate}
                      </li>
                      <li>
                        <Icon.User /> <Link href="#">작성자 : 관리자</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>
                  <a
                  href="#"
                  onClick={(e)=>{
                    e.preventDefault();
                    router.push(`/news/${list?.ID}`)
                  }}
                  >
                    {list?.promSubject}
                    </a></h2>

                  {list?.excerpt}
                </div>
              </div>
              ))}
              
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar data={popularData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
