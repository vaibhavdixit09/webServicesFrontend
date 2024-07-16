import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <section className="w-full h-[15vh]">
      <div className="container mx-auto w-[80%] py-2 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo div */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 lg:h-14" />
          </div>
          {/* Navlinks div */}
          <div className=" w-[55%] lg:block hidden">
            <ul className="flex justify-between items-center p-4  ">
              <li className="text-red-600 font-semibold cursor-pointer mr-1">
                Home
              </li>
              <li className="text-red-600 font-semibold cursor-pointer mr-1">
                About us
              </li>
              <li className="text-red-600 font-semibold cursor-pointer mr-1">
                Portfolio
              </li>
              <li className="text-red-600 font-semibold cursor-pointer mr-1">
                Services
              </li>
              <li className="text-red-600 font-semibold cursor-pointer mr-1">
                Contact us
              </li>
              <li className="text-red-600 font-semibold cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
