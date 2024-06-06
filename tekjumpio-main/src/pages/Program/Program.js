import React from "react";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "../../components/Reviews/Reviews";

import { programFeatures } from "../../utils/programFeatures";

const Program = () => {
  return (
    <div className="pt-24 w-11/12 lg:w-5/6 mx-auto">
      <div className="animate-fadeIn">
        <div className="relative pb-10 bg-gray-800 rounded-lg gradient-border animate-animateGradient">
          <img
            className="rounded-tl-lg w-full h-full lg:h-90 rounded-tr-lg"
            src="https://tekjumpbucket.s3.amazonaws.com/Adobe_Cropped2.jpeg"
            alt="MERN STACK"
          ></img>
          <div className="flex flex-col lg:justify-end">
            <div className="grid grid-cols-1">
              <h1 className="text-indigo-500 text-6xl xl:text-7xl text-center font-black mt-4 lg:mt-6 xl:px-12 xl:pt-12 pr-4 animate-fadeIn">
                Our Program
              </h1>

              <p className="justify-self-start px-4 text-blue-200 mt-4 text-center text-xl  xl:px-16 xl:pt-4 animate-fadeIn">
                Our handcrafted curriculum will put you right in the role of a
                Full Stack Developer, giving you in-depth training in everything
                from the basics of web development, all the way up to the
                industry standards used by professionals every day. After completing our program, join our Graduate Development Team to build crucial professional experience building websites for real local clients.
              </p>
            </div>{" "}
            <AnimatedCard
              threshold={0.25}
              inactiveClassName={
                "transition-all grid grid-cols-1 w-full duration-1200 ease-in-out transform opacity-0"
              }
              activeClassName={
                "transform grid grid-cols-1 w-full opacity-100 transition-all duration-1200 ease-in-out"
              }
            >
              <p className="mt-6 px-4 xl:px-12 lg:mt-12 text-center text-4xl lg:text-5xl font-black text-indigo-500 tracking-tight">
                We want to show you the (Hello) World
              </p>
              <p className="mt-5 px-4 xl:px-16 xl:pt-4 text-center text-xl text-blue-200">
                Beyond the actual technologies you will be trained on, you will
                be immersed in developer methodologies, communities, and
                culture. You will be utilizing with your team the same practices
                that professional devs use everyday, from Tel Aviv to Silicon
                Valley.
              </p>
            </AnimatedCard>
          </div>

          <AnimatedCard
            threshold={0.10}
            inactiveClassName={
              "transition-all duration-1200 ease-in-out transform opacity-0"
            }
            activeClassName={
              "transform  opacity-100 transition-all duration-1200 ease-in-out"
            }
          >
            <div className="mx-auto max-w-md px-4 lg:mt-12 text-left sm:max-w-3xl lg:max-w-7xl">
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {programFeatures.map((feature) => (
                    <div key={feature.name} className="pt-6 transform transition-all duration-400 xl:hover:scale-110">
                      <div className="flow-root h-full bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div className="flex justify-center">
                            <span className="p-3 multiGradient animate-animateGradient rounded-md shadow-lg">
                              <feature.icon
                                className="h-6 w-6 text-blue-100"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-indigo-600 tracking-tight">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
      <div className="my-12">
        <AnimatedCard
          threshold={0.1}
          activeClassName={
            "transform translate-x-0 opacity-100 transition-all duration-1200 ease-in-out"
          }
          inactiveClassName="transition-all duration-1200 ease-in-out transform -translate-x-7 -translate-y-7 opacity-0"
        >
          <div className="mx-auto flex justify-center">
            <Reviews />
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Program;
