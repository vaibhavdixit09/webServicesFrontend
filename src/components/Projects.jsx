import React from "react";
import image1 from "../assets/Digisoftech.jpg";
import image2 from "../assets/Youbets.jpg";
const Projects = () => {
  return (
    <section className="w-full h-full ">
      <div className="container pt-16 -10 mx-auto w-[80%] ">
        <h3 className="text-center text-red-500 font-bold text-xl lg:text-4xl mb-8">
          Our Latest Web Developed Projects
        </h3>

        {/* First Row */}
        <div className="flex flex-wrap -mx-4 mb-8">
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" rounded-lg  overflow-hidden">
              <img src={image2} alt="Project 1" className="w-full h-auto" />
            </div>
            <a
              href="https://www.urbanrose.ae/"
              className="mt-4 block text-center text-red-600 hover:underline font-semibold"
            >
              https://www.urbanrose.ae/
            </a>
          </div>
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" rounded-lg  overflow-hidden">
              <img src={image1} alt="Project 1" className="w-full h-auto" />
            </div>
            <a
              href="https://www.urbanrose.ae/"
              className="mt-4 block text-center text-red-600 hover:underline font-semibold"
            >
              https://www.urbanrose.ae/
            </a>
          </div>
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" rounded-lg  overflow-hidden">
              <img src={image2} alt="Project 1" className="w-full h-auto" />
            </div>
            <a
              href="https://www.urbanrose.ae/"
              className="mt-4 block text-center text-red-600 hover:underline font-semibold"
            >
              https://www.urbanrose.ae/
            </a>
          </div>
        </div>
        {/* second Row */}
        <div className="flex flex-wrap -mx-4 mb-8">
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" rounded-lg  overflow-hidden">
              <img src={image1} alt="Project 1" className="w-full h-auto" />
            </div>
            <a
              href="https://www.urbanrose.ae/"
              className="mt-4 block text-center text-red-600 hover:underline font-semibold"
            >
              https://www.urbanrose.ae/
            </a>
          </div>
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" rounded-lg  overflow-hidden">
              <img src={image2} alt="Project 1" className="w-full h-auto" />
            </div>
            <a
              href="https://www.urbanrose.ae/"
              className="mt-4 block text-center text-red-600 hover:underline font-semibold"
            >
              https://www.urbanrose.ae/
            </a>
          </div>
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className=" rounded-lg  overflow-hidden">
              <img src={image1} alt="Project 1" className="w-full h-auto" />
            </div>
            <a
              href="https://www.urbanrose.ae/"
              className="mt-4 block text-center text-red-600 hover:underline font-semibold"
            >
              https://www.urbanrose.ae/
            </a>
          </div>
        </div>
        <button className="block mx-auto text-sm lg:text-lg bg-red-700 font-semibold mb-4 mt-5 py-3 px-3 rounded-sm text-white">
          view more projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
