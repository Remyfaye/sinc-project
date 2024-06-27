import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-white mt-10 lg:flex items-center">
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
          <img
            className=""
            alt=""
            src="https://s3-alpha-sig.figma.com/img/abb0/c7a2/0efff7a9c9d7f75651fd8441c39f2496?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfmppBlskZzg6fxaErrTzJlB9u~2xkL8Vm71LF-PEIrXgBI-xD~6uxmU1Q-8n2AdVQPD~wTY8a5wrWoQk60CfkwSV0o6nUmDRuzsKH~uzuZ26Kw4cRdAn28g9-W~xGp9i7gaKdQTfuZ21wCDFNIEu7g3LLsegAgtvIqeMfkNwb55GoB6odU85XBuYSKbOUhCg-ytHYhzr9KwGi70wydoea5zO5GyU0u8eU8mW0sF9wU32no0BcwFn5ZP42bZhk32jjsfNeqZc-GUQStlCknLTusZ1no-8oZPcCqNn757YVIlmD9RBVKp0DhveeTv-W~dTtGvDvR1ElCjugS0mWiqpg__"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
