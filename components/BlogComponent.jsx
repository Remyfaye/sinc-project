import { blogResources } from "@/constants";
import React from "react";

const BlogComponent = () => {
  return (
    <div className="lg:flex m-5 lg-m-0 gap-5">
      {blogResources.map((item) => (
        <>
          {/* main image */}
          <img src="" alt="" />

          <div>
            {/* text-content */}
            <div>
              <h2 className="font-semibold">{item.title}</h2>

              <p className="my-2 text-sm">{item.text}</p>
            </div>

            {/* image */}
            <img src="" alt="" />
          </div>
        </>
      ))}
    </div>
  );
};

export default BlogComponent;
