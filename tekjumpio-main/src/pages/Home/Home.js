import React from "react";
import { Link } from "react-router-dom";

// Components
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "../../components/Reviews/Reviews";
import CodeBlock from "./CodeBlock";

// utils
import { codeBlockText } from "../../utils/codeBlockText";

const Home = () => {
  //Ok so the <AnimatedCard>s use IntersectionObserver API. Google it if you mess with the way they are called here. Use them for any scroll event based animations (although it doesnt really look at scrolling)

  return (
    <div>
      <div className="relative">
        {/* CONTENT ON TOP OF ANIMATED GRADIENT */}
        <div className="absolute flex flex-col top-24 justify-center md:top-32 md:flex-row z-10 ">
          {/* Headers */}
          <div className="flex-col w-full xl:w-1/2 space-y-6 xl:space-y-8 ">
            <h1 className="text-white px-2 text-4xl md:text-5xl 2xl:text-6xl flex-col space-y-2 xl:space-y-4 2xl:space-y-6 animate-fadeIn">
              <p className="flex md:justify-center xl:justify-start">
                Learn <span className="text-indigo-800 mx-2"> Real</span> Skills.
              </p>
              <p className="flex md:justify-center xl:justify-start">
                Engage <span className="text-indigo-800 mx-1"> Real</span>{" "}
                Clients.
              </p>
              <p className="flex md:justify-center xl:justify-start">
                Build <span className="text-indigo-800 mx-2"> Real</span>{" "}
                Projects.
              </p>
            </h1>

            {/* Text Paragraph */}
            <div className="flex md:text-center lg:text-left xl:w-11/12 2xl:w-2/3 px-2 md:leading-loose text-2xl 2xl:text-3xl text-gray-300 animate-fadeIn">
              Join Tekjump today to not only receive expert and comprehensive web development training, but
              also crucial real world experience and career preparation that will make you stand out from your peers and
              jumpstart your new software career!
            </div>
            <div className="flex md:justify-center  lg:justify-start xl:w-2/3 2xl:w-1/2 animate-fadeIn">
              <Link
                to="/register"
                className="py-3 md:my-4 px-12 group multiGradient animate-animateGradient text-gray-100 rounded-xl text-2xl transition duration-300 text-center font-bold w-11/12 md:w-1/2 xl:w-full 2xl:w-4/5 mx-auto md:mx-0"
              >
                Register Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline h-8 w-6 transform duration-300 group-hover:translate-x-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center pt-14 md:pt-24 text-indigo-200 animate-bounce lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>

          <div className="hidden xl:flex 2xl:-ml-14 z-20 ">
            <AnimatedCard
              threshold={0.5}
              activeClassName="transform -translate-x-4 opacity-100 transition-all duration-1000 ease-in"
              inactiveClassName="transform opacity-0 translate-x-0 transition-all duration-1000 ease-in"
            >
            
              <CodeBlock text={codeBlockText} width={700} name="Student.js" />
            </AnimatedCard>
          </div>
        </div>

        {/* WAVY SVG HEADER */}
        <svg className="absolute">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0.042,0.995 C0.083,0.991,0.167,0.982,0.25,0.88 C0.333,0.779,0.417,0.586,0.5,0.554 C0.583,0.522,0.667,0.651,0.75,0.703 C0.833,0.756,0.917,0.733,0.958,0.722 L1,0.71 L1,0 L0.958,0 C0.917,0,0.833,0,0.75,0 C0.667,0,0.583,0,0.5,0 C0.417,0,0.333,0,0.25,0 C0.167,0,0.083,0,0.042,0 L0,0"></path>
          </clipPath>
        </svg>

        <div className="md:h-128 h-96 transform scale-y-125 md:scale-y-100 origin-top animate-animateGradient z-0 clipped"></div>
      </div>

      <div className="flex md:mb-10 flex-col justify-center pt-12 pb-4">
        <div className=" relative py-3 w-11/12 md:w-2/3 xl:w-2/5 2xl:w-1/3 mx-auto mb-10">
          <AnimatedCard
            threshold={0.25}
            activeClassName="transition-all duration-1400 ease-in transform scale-105 md:rotate-12 opacity-100  absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg rounded-xl"
            inactiveClassName="transition-all duration-1400 ease-in scale-y-100 md:translate-y-0 opacity-0 absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg rounded-xl"
          />

          <div className="relative px-4 py-10 bg-gray-200 shadow-lg rounded-xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-black text-4xl">Jump Start Your Career</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>
                    Join us to be trained in the fundamentals all the way up to
                    the modern standards.{" "}
                  </p>
                  <ul className="list-disc space-y-2">
                    <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Learn in demand technologies centered around the{" "}
                        <span className="tooltip">
                          MERN{" "}
                          <span className="tooltiptext">
                            {" "}
                            <span className="text-white font-bold">M</span>
                            ongoDB,{" "}
                            <span className="text-white font-bold"> E</span>
                            xpress,{" "}
                            <span className="text-white font-bold"> R</span>
                            eact,{" "}
                            <span className="text-white font-bold"> N</span>
                            ode.js
                          </span>
                        </span>{" "}
                        stack.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Build a robust portfolio of fully developed
                        applications.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="ml-2">
                        Upon completion, join our Graduate Development Team for critical
                        work experience, building and deploying live sites for real local
                        clients.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Join our growing development community and take the plunge
                    into the software development world. Gain not only the
                    training, but the real world experience to launch yourself
                    into a new career.
                  </p>
                </div>
                <div className="w-full flex justify-center">
                <Link
                to="/program"
                className="py-3 md:my-8 px-12 group multiGradient animate-animateGradient text-gray-100 rounded-xl text-xl transition duration-300 text-center font-semibold w-full mx-auto md:mx-0"
              >
                Check It Out{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline h-8 w-6 transform duration-300 group-hover:translate-x-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-8 md:w-2/3 md:mb-20 md:pt-16">
        <AnimatedCard
          threshold={0.25}
          activeClassName={
            "md:transform md:translate-x-0 opacity-100 transition-all duration-1200 ease-in"
          }
          inactiveClassName="transition-all duration-1200 ease-in md:transform md:-translate-x-7 md:-translate-y-7 opacity-0"
        >
          <div className="w-11/12 mx-auto lg:w-full flex justify-center">
            <Reviews />
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Home;
