import { navItems } from "@/constants";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between pt-5 lg:px-20 px-5">
      {/* left */}
      <div className="flex gap-5 items-center">
        {/* logo*/}
        <div className="flex justify-between ">
          <Image width={100} height={100} alt="" src="/logo.png" />
        </div>

        {/* nav items */}
        <div className="lg:flex gap-3 hidden">
          {navItems.map((item) => (
            <>
              <p>{item.name}</p>
            </>
          ))}
        </div>
      </div>

      {/* right - buttons */}
      <div className="lg:flex hidden gap-3">
        <button className="btn-blue">SINC With Us</button>
        <button className="btn-black">Apply to SIP 1.0</button>
      </div>

      <Image
        className="lg:hidden "
        width={55}
        height={55}
        alt=""
        src="/menu.png"
      />
    </div>
  );
};

export default Header;
