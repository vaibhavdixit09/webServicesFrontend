import React from "react";

const Capabilities = () => {
  return (
    <section className="w-full h- bg-diagonal-gradient">
      <div className="container pt-16  mx-auto w-[80%] text-white">
        <h3 className="text-xl lg:text-4xl font-bold text-center">
          Our Capabilities
        </h3>
        <p className="text-sm lg:text-xl font-semibold text-center my-4">
          We mainly works in website SEO and Web design and development.
        </p>
        <div className="flex justify-between w-full my-12 flex-col lg:flex-row">
          <p className="w-[100%] lg:w-[47%] text-base">
            At Mysticmaze, we create captivating websites that are both visually
            stunning and highly functional. Our web development team specializes
            in custom designs, responsive layouts, and seamless integration with
            content management systems like WordPress. We prioritize user
            experience, ensuring that your website not only looks great but is
            also easy to navigate and manage.
          </p>
          <p className="w-[100%] lg:w-[47%] text-base">
            Our SEO services are designed to boost your website’s visibility on
            search engines. We implement comprehensive SEO strategies that
            include keyword research, on-page optimization, and high-quality
            content creation. With our focus on both technical and content-based
            SEO, we help you achieve higher rankings and attract more organic
            traffic.
          </p>
        </div>
        <p className="text-lg text-center">
          In summary, Mysticmaze is your go-to partner for all things web
          development and SEO. We combine technical expertise with creative
          design to help your business succeed online.
        </p>
        <button className="block mx-auto text-sm lg:text-xl bg-white font-semibold mb-4 mt-6 py-2 px-3 rounded-sm text-red-600">
          contact us
        </button>
        <div className="inline-block my-2"></div>
      </div>
    </section>
  );
};

export default Capabilities;
