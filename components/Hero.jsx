import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-white mt-4 lg:flex items-center">
        {/* left */}
        <div className="  lg:w-[60%] lg:px-20 lg:pl-20 p-5">
          <h1>SINC Partners is a service incubation company</h1>
          <p className="mt-5">
            Connecting experts in product development and growth marketing
            willing to offer their services to amazing startups in exchange
            for minute equity (usually 0.5% to 2%).
          </p>
          <button className="btn-black mt-5">SINC With Us</button>
        </div>

        {/* right */}
        <div className="bg-black/70 inset-0">
          <img className="" alt="" src="/bg.png" />
        </div>
      </div>
    </>
  );
};

export default Hero;
