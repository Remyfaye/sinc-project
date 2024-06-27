import {
  coFound,
  conceptInnovations,
  eir,
  landingContent1,
  landingContent2,
  landingContent3,
  serviceIncubation,
} from "@/constants";
import React from "react";
import Content from "./Content";

const Landing = () => {
  return (
    <div>
      <section className="w-[90%] rounded-xl lg:max-w-3xl gap-4 p-5 mx-auto my-10 bg-white lg:rounded-[5px] flex flex-col justify-center items-center">
        <p className="text-center">
          Nigeria and Africa has a massive network effect that have not be fully
          utilized. With Nigerians/Africans in every country and territory of
          the world, we can scale an African business to 100+ countries in few
          weeks"
        </p>
        <div className="text-center">
          <p>Daniel Izeghs Oratokhai</p>
          <p className="text-gray-600">Managing Partner at SINC Partners Ltd</p>
        </div>
      </section>

      <section className="lg:px-20 mt-20 flex flex-col items-center justify-center gap-10">
        <h2 className="lg:text-5xl text-2xl w-[80%] lg:w-[60%]  text-center">
          Network of builders helping startup scale
        </h2>

        <div className="lg:flex  gap-3 ">
          {landingContent1.map((item) => (
            <>
              <div className="flex rounded-xl m-5 lg:m-0 p-5 lg:w-[50%] flex-col gap-3 bg-white lg:rounded-lg">
                <p className="font-bold">{item.heading}</p>
                <p>{item.content}</p>
                <p className="font-bold">Learn more</p>
              </div>
            </>
          ))}
        </div>
      </section>

      <>
        <Content
          title={"Our Area of Focus"}
          subtitle={
            "In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the la"
          }
          content={landingContent2}
        />

        <Content
          title={"Our Concept Innovations"}
          subtitle={
            "We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;"
          }
          content={conceptInnovations}
        />

        <Content
          title={"Our Service Incubation Model"}
          subtitle={
            "The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest."
          }
          content={serviceIncubation}
          serviceIncubation
          startLayout
        />

        <Content
          title={"Co-found With Us"}
          subtitle={
            "We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed "
          }
          content={coFound}
          startLayout
        />

        <Content
          title={"Join Our Entrepreneur In Residence (EIR) Program"}
          subtitle={
            "Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."
          }
          content={eir}
          startLayout
        />

        <Content
          title={"SINC Investors Network"}
          subtitle={
            "Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. "
          }
          investorsNetwork
        />
        <Content
          title={"Equity jobs"}
          subtitle={
            "See companies and startups offering equity or a mix of cash and equity for very important position in their company "
          }
          equityJobs
        />
        <Content title={"Blogs & Resources"} subtitle={""} blogs />
        <Content title={"As Featured In"} subtitle={""} featuredIn />
      </>

      <div className="flex max-w-3xl mx-auto items-center justify-normal flex-col">
        <h2 className="text-3xl lg:text-5xl text-center">
          Let's build companies that help everyone succeed
        </h2>
        <div className="mt-10">
          <button className="border mr-5 rounded-full border-black/60 px-4 py-2">
            SINC With Us
          </button>
          <button className="btn-black">Apply to SIP 1.0</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
