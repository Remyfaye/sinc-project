import { blogResources } from "@/constants";
import React from "react";

const BlogComponent = () => {
  return (
    <div className="lg:flex m-5 lg-m-0 gap-5 ">
      {blogResources.map((item) => (
        <div className="">
          {/* main image */}
          <img className="w-full " src="/blog-img.png" alt="" />

          <div className="my-5 flex gap-3">
            {/* text-content */}
            <div>
              <h2 className="font-semibold">{item.title}</h2>

              <p className="my-2 text-sm">{item.text}</p>
            </div>

            {/* image */}
            <img
              className="w-[4rem] h-[4rem] object-cover"
              src="/blog-img2.png"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;
