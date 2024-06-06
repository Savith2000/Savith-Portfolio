import AnimatedCard from "../../components/AnimatedCard";
import { graduates } from "../../utils/students";
import { trainingFeatures, communityFeatures } from "../../utils/aboutFeatures";
const people = require("../../utils/people.json");

export default function About() {
  return (
    <>
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center  pt-28 pb-16 px-4 sm:pb-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            <span className="block">Our Mission </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our mission at Tekjump is to provide not only the training you need
            to be a full stack web developer, but also the crucial real world
            experience you need to land the job of your dreams.{" "}
          </p>
        </div>
      </div>
      <div className="pb-16 pt-8 bg-gray-800 overflow-hidden lg:pb-24 lg:pt-12">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 z-0 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>
          <div className="relative  lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative animate-fadeIn ">
              <h3 className="text-2xl font-extrabold text-indigo-500 tracking-tight sm:text-4xl">
                Jump Into a New Career
              </h3>

              <dl className="mt-10 space-y-10 animate-fadeIn ">
                {trainingFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md multiGradient animate-animateGradient text-white">
                        <item.icon
                          className="h-6 w-6 text-blue-100 fill-current"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-indigo-300">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-indigo-100">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0 " aria-hidden="true">
              <svg
                className="absolute left-1/2 transform z-0 scale-y-75 -translate-x-1/2 translate-y-8 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <img
                className="relative mx-auto animate-fadeIn w-4/5 shadow-2xl rounded-xl"
                width={490}
                src="https://tekjumpbucket.s3.amazonaws.com/Adobe_Cropped1.jpg"
                alt=""
              />
            </div>
          </div>
          <svg
            className="hidden lg:block absolute right-full z-0 transform  translate-x-1/2 translate-y-12"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <AnimatedCard
              activeClassName={"opacity-1 z-0 transition-all duration-1000"}
              inactiveClassName={"opacity-0 z-0 transition-all duration-1000"}
              threshold={0.10}
            >
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-indigo-500 tracking-tight sm:text-3xl">
                    Let's Build a Community
                  </h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Tekjump isn't just building individually strong developers - we are growing an active community of developers that strives to enrich our society with elegant and responsible software.
                  </p>

                  <dl className="mt-10 space-y-10">
                    {communityFeatures.map((item) => (
                      <div key={item.id} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md multiGradient animate-animateGradient text-white">
                            <item.icon
                              className="h-6 w-6 text-blue-100 fill-current"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-indigo-300">
                            {item.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-blue-100">
                          {item.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="mt-10 z-0 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <svg
                    className="absolute left-1/2 z-0 transform  -translate-x-1/2 scale-y-75 translate-y-16 lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-300 z-0"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                    />
                  </svg>
                  <img
                    className=" w-4/5 relative mx-auto rounded-xl shadow-2xl"
                    width={490}
                    src="https://tekjumpbucket.s3.amazonaws.com/Adobe_Cropped4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard
              threshold={0.1}
              activeClassName={"opacity-1 transition-all duration-1000 z-10"}
              inactiveClassName={"opacity-0 transition-all duration-1000 z-10"}
            >
              <div className="bg-gray-100 mt-12 md:mt-28 rounded-xl">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                  <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="space-y-5 sm:space-y-4">
                      <h2 className="text-3xl text-indigo-500 font-extrabold tracking-tight sm:text-4xl">
                        Meet Our Team
                      </h2>
                      <p className="text-xl text-gray-500">
                        Tekjump is a close knit team of tech and training
                        experts who are obsessed with helping you launch your
                        new career.
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <ul
                        role="list"
                        className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                      >
                        {people.map((person) => (
                          <li key={person.name} className="sm:py-8">
                            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img
                                  className="shadow-lg rounded-lg"
                                  src={person.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="sm:col-span-2">
                                <div className="space-y-4">
                                  <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3>{person.name}</h3>
                                    <p className="text-indigo-600">
                                      {person.role}
                                    </p>
                                  </div>
                                  <div className="text-lg">
                                    <p className="text-gray-500">
                                      {person.bio}
                                    </p>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
               
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </>
  );
}
