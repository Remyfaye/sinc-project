import { ejobs } from "@/constants";
import React from "react";

const EquityJobs = () => {
  return (
    <div className="lg:flex gap-3">
      {ejobs.map((item) => (
        <div className="m-5 lg:m-0 flex flex-col gap-3 bg-white rounded-[10px] p-3">
          {/* logo */}

          <img src="" alt="" />

          {/* text */}
          <h2>
            This company is a SAAS Startup that builds AI copy generator...
          </h2>

          {/* title */}
          <h2 className="font-bold">Chief Executive Officer</h2>

          {/* content */}
          <div className="text-sm flex justify-between my-5">
            {/* left */}
            <div className="text-sm">
              <div>
                <p>LOCATION</p>
                <p className="font-semibold">Abuja, Nigeria</p>
              </div>

              <div className="my-5  ">
                <p>EQUITY</p>
                <p className="font-semibold">1.2%</p>
              </div>

              <div>
                <p>deadline</p>
                <p className="font-semibold">24th, January 2024</p>
              </div>
            </div>

            {/* right */}
            <div className=" text-right">
              <div>
                <p>INDUSTRY</p>
                <p className="font-semibold text-sm">On-demand print</p>
              </div>

              <div className="my-5">
                <p>STIPEND</p>
                <p className="font-semibold text-sm">NGN 200,000/mth </p>
              </div>

              <div>
                <p>ROLE TYPE</p>
                <p className="font-semibold text-sm">Full-time</p>
              </div>
            </div>
          </div>

          <button className="btn-black w-[60%]">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default EquityJobs;
