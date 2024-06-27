import { investorsNetwork } from "@/constants";
import React from "react";

const InvestorsNetwork = () => {
  return (
    <>
      <h2 className="mb-5 m-5 lg:m-0">
        <span className="font-semibold ">
          Micro Angel Investors & Service incubators
        </span>
        <span>(Invest from $500 & above)</span>
      </h2>
      <div className="lg:grid lg:m-0 m-5 grid-cols-4  gap-4 ">
        {investorsNetwork?.map((item) => (
          <>
            <div
              className={
                "flex border gap-3 flex-col border-black/30 p-5 rounded-[10px]"
              }
            >
              <p className="font-bold">{item.heading}</p>
              <p className="text-sm">{item.option1}</p>
              <p className="text-sm">{item.option2}</p>
              <p className="text-sm">{item.option3}</p>
              <p className="text-sm">{item.option4}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default InvestorsNetwork;
