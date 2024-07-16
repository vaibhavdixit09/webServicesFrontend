import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "What types of websites does Mysticmaze specialize in developing?",
      answer:
        "Mysticmaze specializes in developing a diverse range of websites, including e-commerce sites, portfolio websites, and corporate websites, tailored to suit your specific business needs.",
    },
    {
      question:
        "How long does it typically take to develop a website with Mysticmaze?",
      answer:
        "At Mysticmaze, we strive for swift project completion, typically delivering most websites within a timeframe of 2 to 3 weeks.",
    },
    {
      question:
        "Will I be able to update and manage my website after it's developed?",
      answer:
        "Yes, Mysticmaze provides user-friendly content management systems (CMS), enabling you to effortlessly update and manage your website’s content without any technical expertise. Additionally, we offer support for one year to ensure your website remains up-to-date and well-maintained.",
    },
    {
      question: "Can Mysticmaze help with redesigning an existing website?",
      answer:
        "Absolutely. Mysticmaze offers website redesign services to refresh the look and functionality of your existing website, ensuring it remains modern and effective.",
    },
    {
      question:
        "What sets Mysticmaze apart from other web development companies?",
      answer:
        "Mysticmaze stands out for its commitment to delivering custom, high-quality websites that are tailored to each client’s unique needs. We prioritize communication, transparency, and customer satisfaction throughout the development process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-[100vw] h-full mb-12 ">
      <div className=" pt-16  mx-auto w-[80%]    flex justify-center items-center flex-col">
        <h3 className="text-xl lg:text-4xl font-semibold text-center text-red-700 my-8">
          FAQs – Mysticmaze
        </h3>
        <div className="w-[80%] lg:w-[60%]  ">
          {faqs.map((faq, index) => (
            <div key={index} className="text-xs lg:text-lg">
              <button
                className="flex justify-between items-center py-4  transition duration-300 ease-in-out transform  focus:outline-none "
                onClick={() => toggleAccordion(index)}
              >
                <svg
                  className={`w-5 h-5 ${
                    activeIndex === index ? "-rotate-180" : ""
                  } text-red-600 transition-transform duration-500 transform`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="font-semibold text-red-600 ">
                  {faq.question}
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 px-4 py-2 text-xs lg:text-lg text-red-700 font-normal transition duration-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
