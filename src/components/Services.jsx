import React from "react";

const Services = () => {
  const plans = [
    {
      title: "Standard Plan",
      price: "₹ 9,999",
      gst: "(+18% GST ₹ 1,800)",
      features: [
        "Upto 5 pages Website",
        "1 Year Free Domain & Hosting",
        "Free CDN",
        "Dynamic Website",
        "Free SSL Certificates",
        "30 Days SEO Support",
        "Free Support Yearly",
        "Hosting Renewal Rs.4,000 a Year",
      ],
    },
    {
      title: "Premium Plan",
      price: "₹ 15,999",
      gst: "(+18% GST ₹ 2,880)",
      features: [
        "Upto 10 pages Website",
        "1 Year Free Domain & Hosting",
        "Free CDN",
        "Dynamic Website",
        "Free SSL Certificates",
        "30 Days SEO Support",
        "Free Support Yearly",
        "Hosting Renewal Rs.4,000 a Year",
      ],
    },
    {
      title: "Custom Plan",
      price: "Custom Requirement",
      gst: "(+18% GST)",
      features: [
        "Unlimited pages Website",
        "1 Year Free Domain & Hosting",
        "Free CDN",
        "Dynamic Website",
        "Free SSL Certificates",
        "30 Days SEO Support",
        "Free Support Yearly",
        "Hosting Renewal Rs.4,000 a Year",
      ],
    },
  ];

  return (
    <section className="w-full h-full bg-diagonal-gradient">
      <div className="container pt-16 mx-auto w-[80%]">
        <div className="text-center text-white">
          <h3 className="font-bold text-xl lg:text-4xl">
            Web Development Services We Offer
          </h3>
          <p className="font-semibold text-sm lg:text-xl my-4">
            Explore how Mysticmaze can make your website awesome!
          </p>
          <p className="font-normal text-xs lg:text-lg">
            Check out our transparent pricing plans designed to fit your budget
            and needs, ensuring you get the best value for your investment. With
            Mysticmaze, building your dream website is easy and affordable!
          </p>
        </div>
        {/* Plan cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white text-red-700 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-lg lg:text-2xl font-bold ">{plan.title}</h2>
              <div className="flex items-center mt-4">
                <span className="text-sm lg:text-xl font-semibold ">
                  {plan.price}
                </span>
                <span className="ml-2 font-semibold text-sm lg:text-xl">
                  {plan.gst}
                </span>
              </div>
              <ul className="mt-4">
                <p className="font-semibold mt-8 mb-4 text-sm lg:text-xl">
                  Features includes{" "}
                </p>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-red-700 text-sm lg:text-base font-semibold list-disc ml-4"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className=" bg-red-700 text-sm lg:text-lg mt-5 py-1 px-2 rounded-sm text-white">
                Call Now
              </button>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-2xl lg:text-4xl text-center text-white mt-8">
          E-commerce Website Plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white text-red-700 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-lg lg:text-2xl font-bold ">{plan.title}</h2>
              <div className="flex items-center mt-4">
                <span className="text-sm lg:text-xl font-semibold ">
                  {plan.price}
                </span>
                <span className="ml-2 font-semibold text-sm lg:text-xl">
                  {plan.gst}
                </span>
              </div>
              <ul className="mt-4">
                <p className="font-semibold mt-8 mb-4 text-sm lg:text-xl">
                  Features includes{" "}
                </p>
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-red-700 text-sm lg:text-base font-semibold list-disc ml-4"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className=" bg-red-700 text-sm lg:text-lg mt-5 py-1 px-2 rounded-sm text-white">
                Call Now
              </button>
            </div>
          ))}
        </div>
        <button className="block mx-auto text-sm lg:text-lg bg-white font-semibold mb-4 mt-5 py-3 px-3 rounded-sm text-red-600">
          Click here
        </button>
        <span className="my-2 inline-block"></span>
      </div>
    </section>
  );
};

export default Services;
