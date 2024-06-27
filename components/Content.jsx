import { cardItems } from "@/constants";
import React from "react";
import InvestorsNetwork from "./InvestorsNetwork";
import EquityJobs from "./EquityJobs";
import BlogComponent from "./BlogComponent";
import FeaturedIn from "./FeaturedIn";

const Content = ({
  title,
  subtitle,
  content,
  serviceIncubation,
  startLayout,
  investorsNetwork,
  equityJobs,
  blogs,
  featuredIn,
  aof,
  studioPortfolio,
}) => {
  return (
    <section className="lg:px-20 my-[4rem]">
      {/* content heading */}
      <div className=" flex flex-col items-center justify-center text-center ">
        <h2 className="content-header">{title}</h2>
        <h2 className="lg:my-5 my-8 w-[90%] lg:w-[70%]">{subtitle}</h2>
      </div>

      {serviceIncubation && (
        <div className="my-10 m-5 lg:m-0">
          <h2 className="font-semibold text-lg">Hypothesis</h2>
          <p className="mt-1">
            Just a few reasons we know its time for this model
            within the ecosystem
          </p>
        </div>
      )}

      {/* default content */}
      <div className="lg:flex lg:m-0 m-5  justify-between gap-4 ">
        {content?.map((item) => (
          <>
            <div
              className={
                startLayout
                  ? " bg-white flex my-4 flex-col gap-3 p-5 rounded-[10px]"
                  : "flex items-center gap-5 my-5 flex-col bg-white p-5 rounded-[10px]"
              }
            >
              <div
                className={
                  item.icon &&
                  "text-center flex items-center justify-center text-xl rounded-full text-white bg-pink-300 h-[60px] w-[60px]"
                }
              >
                {item.icon}
              </div>
              {item.serviceIcon && (
                <img
                  className="w-[2rem] h-[2rem] object-cover"
                  src={item.serviceIcon}
                  alt=""
                />
              )}

              <h2 className="font-bold">{item.heading}</h2>
              <h2>{item.content}</h2>
            </div>
          </>
        ))}
      </div>

      {/* investorsNetwork content */}
      {investorsNetwork && <InvestorsNetwork />}

      {/* investorsNetwork content */}
      {aof && <img src="/cards.png" alt="" />}

      {/*equity jobs */}
      {equityJobs && <EquityJobs />}

      {/*blogs*/}
      {blogs && <BlogComponent />}

      {/*our studio portfolio*/}
      {studioPortfolio && (
        <img
          className="lg:max-w-5xl mx-auto overflow-hidden"
          src="/portfolio.png"
          alt=""
        />
      )}

      {/*featuredIn */}
      {featuredIn && <FeaturedIn />}

      {serviceIncubation && (
        <div className="my-10 m-5 lg:m-0">
          <h2 className="font-semibold text-lg">Case study</h2>
          <p className="mt-1">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
          <div className="mt-5 gap-3 lg:flex-row  flex flex-col ">
            <button className="rounded-full px-3 py-2 bg-white text-black">
              Service Incubator Equity
            </button>
            <button className="rounded-full px-3 py-2 bg-white text-black">
              SEEQ Maths Equation
            </button>
            <button className="rounded-full px-3 py-2 bg-white text-black">
              Value of my Equity Over Time
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Content;
