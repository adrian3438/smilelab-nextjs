"use client";

import React from "react";
import Link from "next/link";

import blogImg1 from "/public/images/blog-image/blog7.jpg";
import blogImg2 from "/public/images/blog-image/blog8.jpg";
import blogImg3 from "/public/images/blog-image/blog9.jpg";
interface Props {
  data?: any
}
const BlogSidebar:React.FC<Props> = ({data}) => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_startp_posts_thumb">
          <h3 className="widget-title pt-4">Popular Posts</h3>
          {data?.map((list:any, index:number) => (

          <article className="item" key={index}>
            <Link href={`/news/${list?.ID}`} className="thumb">
              <span
                  className="fullimage cover"
                  role="img"
                  style={{backgroundImage: `url(${list?.thumnailFile})`}}
              ></span>
            </Link>

            <div className="info">
              <h4 className="title usmall">
                <Link href={`/news/${list?.ID}`}>
                {list?.promSubject}
                </Link>
              </h4>
              <time>{list?.createDate}</time>
            </div>

            <div className="clear"></div>
          </article>
          ))}
        </div>

        {/* <div className="widget widget_categories">
          <h3 className="widget-title">Explore category</h3>

          <ul>
            <li>
              <Link href="/blog">
                Business
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Tips
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Uncategorized
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Stay connected</h3>

          <div className="row justify-content-center">
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-facebook"></i> Facebook</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-youtube"></i> Youtube</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-dribbble"></i> Dribble</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-twitter"></i> Twitter</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-instagram"></i> Instagram</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-vimeo"></i> Vimeo</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-linkedin"></i> linkedin</Link>
            </div>
            <div className="col-6">
              <Link href="/blog"><i className="bi bi-behance"></i> Behance</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
