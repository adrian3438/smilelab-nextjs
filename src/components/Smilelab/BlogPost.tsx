import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

interface Props {
  language?:any
  data?:any
}
const BlogPost:React.FC<Props> = ({language, data}) => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <span className="sub-title fw-bold fs-6">{language?.main_4}</span>
            <h2>{language?.main_5}</h2>
            <div className="bar"></div>
            <p className="fs-5">
            {language?.main_6}
            </p>
          </div>

          <div className="row justify-content-center">
            {data?.map((list:any, index:number) => (
            <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
                key={index}
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href={`/news/${list?.ID}`}>
                    <Image
                        src={list?.thumnailFile}
                        alt="image"
                        width={860}
                        height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar/> {list?.createDate}
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href={`/news/${list?.ID}`}>
                      {list?.promSubject?.length > 45 ? list?.promSubject?.slice(0, 45) + "..." : list?.promSubject}
                    </Link>
                  </h3>

                  <p>
                    {list?.excerpt?.length > 70 ? list?.excerpt?.slice(0, 70) + "..." : list?.excerpt}
                  </p>

                  <Link
                      href={`/news/${list?.ID}`}
                      className="read-more-btn"

                  >
                    더보기 <Icon.ArrowRight/>
                  </Link>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
