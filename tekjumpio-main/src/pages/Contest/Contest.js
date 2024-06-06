import React from "react";
import ContestForm from "./ContestForm";

import {  CheckIcon } from "@heroicons/react/outline";

import { rules, prizes } from "../../utils/contestFeatures";

export default function Example() {
  return (
    <div className="multiGradient animate-animateGradient pt-16 lg:pt-24">
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-800" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-3xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://tekjumpbucket.s3.amazonaws.com/contestDesigners.jpeg"
                  alt="Graphic Designers"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-contest-red  mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Enter Your Logo Design
                  </span>
                  <span className="block text-indigo-200">
                    to Win a SmartWatch
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  We are excited to announce our Logo Contest! We want to
                  promote amatuer graphic designers and brand our website with
                  an amazing design. The winner will be rewarded a top of the
                  line smart watch of their choice, as well as having their
                  design be used as our official logo! See the rules, prizes,
                  and conditions below.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-16 pb-16 bg-gray-800 overflow-hidden">
          <div className="relative flex flex-col justify-center w-full">
            <div className="w-11/12 mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 border-b-2 border-l-2 border-indigo-400 border-opacity-50 rounded-xl shadow-3xl">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div></div>
                  <div className="mt-6">
                    <h2 className="text-4xl font-extrabold tracking-tight text-contest-red">
                      Aesthetic and Design
                    </h2>
                    <p className="mt-4 text-2xl font-thin text-gray-200">
                      We are looking for a creative, bright and modern logo to
                      brand our new program with! We want to see your
                      creativity... and reward it! We are looking for a logo
                      that fits with the website's current vibrant aesthetic,
                      and we can't wait to see the design you come up with!
                      Check below to see the rules, guidelines and conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className=" rounded-xl h-full w-full shadow-3xl lg:h-full lg:w-auto lg:max-w-3xl"
                    src="https://tekjumpbucket.s3.amazonaws.com/graphic1.jpg"
                    alt="Graphic 2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="w-11/12 mx-auto lg:max-w-7xl border-b-2 border-r-2 border-indigo-400 border-opacity-50 rounded-xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense shadow-3xl lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div></div>
                  <div className="mt-6">
                    <h2 className="text-4xl font-extrabold tracking-tight text-contest-red">
                      Prizes
                    </h2>
                    <p className="mt-4 font-thin text-2xl text-gray-200">
                      The winner will be selected and announced on January 10th,
                      2022! The designer of our new logo will be able
                      to choose from three top-of-the-line Smart Watches as
                      their prize, see below for more detail!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 ">
                <div className="lg:relative lg:h-full">
                  <img
                    className="w-full h-full rounded-xl shadow-3xl  lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-3xl"
                    src="https://tekjumpbucket.s3.amazonaws.com/graphic2.jpg"
                    alt="graphic 1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
              <a
                className="bg-green-400 p-4 mt-20 rounded-xl text-center w-2/3 lg:w-1/3"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdG3MEU4YhyC-0HLymgLWCPt_KcxvF2gnALsXxVJVvIPV1rgA/viewform?usp=sf_link"
              >
                Submit your design
              </a>
            </div>
        </div>
        
        <div className="bg-white">
          <div className="w-3/4 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-contest-red">
              The Winner will select one of the following:
            </h2>

            <div className="mt-6 flex flex-col space-y-6 md:flex-row items-end justify-between">
              {prizes.map((prize) => (
                <div key={prize.id} className="group relative">
                  <div className="w-full  min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={prize.imageSrc}
                      alt={prize.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-contest-red ">
                        <a href={prize.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {prize.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Rules, Guidelines and Conditions
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              To be eligible to win, there are a few things you need to make
              sure to do:
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              <div>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <CheckIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    Like and Share our Facebook
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    To be eligible to win, please Like and Share our{" "}
                    <a
                      className="underline"
                      href="https://www.facebook.com/tekjumpio"
                    >
                      Facebook.
                    </a>
                  </p>
                </div>
              </div>
              {rules.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <CheckIcon
                        className="h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center">
              <a
                className="bg-green-400 p-4 mt-8 rounded-xl text-center w-2/3 lg:w-1/3"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdG3MEU4YhyC-0HLymgLWCPt_KcxvF2gnALsXxVJVvIPV1rgA/viewform?usp=sf_link"
              >
                Submit your design
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
