import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("./form");
  };
  return (
    <section className="w-full h-[85vh] bg-diagonal-gradient">
      <div className="container pt-16 -10 mx-auto w-[80%] ">
        <div className="w-[50%] text-white">
          <h2 className="font-bold text-xl lg:text-4xl">
            Web Development Company
          </h2>
          <p className="my-5 font-medium text-xs lg:text-xl">
            Mysticmaze is your go-to web development company, offering simple
            yet powerful solutions tailored to your needs.
          </p>
          <p className="my-9 text-lg hidden lg:block">
            Elevate your business with Mysticmaze, India’s top Web Development
            Company. We offer end-to-end solutions, from website development to
            digital marketing, ensuring your success at every stage. Let
            Mysticmaze take care of your business needs, so you can focus on
            what matters most.
          </p>
          <button
            onClick={handleclick}
            className="bg-white text-red-600 px-2 text-sm lg:text-lg rounded-sm font-semibold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
