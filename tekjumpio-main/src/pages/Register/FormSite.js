import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { dayWeeks, nightWeeks } from "../../utils/schedules";
import { registerInfo } from "../../utils/registerInfo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FormSite = () => {
  const [toggle, setToggle] = useState(true);
  const regRef = useRef();
  const embedForm = () => {
    window.EmbedManager.embed({
      key: "https://fs26.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTASBU8K-Mte1yJ-zpXHYORbFzpUCZwnDno&1948865317",
      width: "100%",
      mobileResponsive: true,
    });
  };
  useEffect(() => {
    embedForm();
    return () => window.removeEventListener("message", embedForm);
  }, []);

  const handleToRegClick = () => {
    regRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="pt-24 mx-auto w-full lg:w-2/3">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="pt-2 text-lg align-middle inline-block px-2 md:px-8 lg:px-10">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <div className="flex-col space-y-4 lg:flex-row  multiGradient animate-animateGradient px-6 pt-12 pb-2 rounded-tl-lg rounded-tr-lg ">
                <span className="text-4xl xl:text-5xl font-semibold text-gray-50">
                  Class Details and Registration
                </span>
              </div>
              <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                  <div className="pb-16 xl:flex xl:items-center xl:justify-between">
                    <div>
                      <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                        <span className="text-gray-900">
                          Expert, remote training for{" "}
                        </span>
                        <span className="text-pink-600">$500</span>
                      </h1>
                      <p className="mt-5 text-xl text-gray-500">
                        Jumpstart your skills with our meticulously crafted
                        curriculum.
                      </p>
                    </div>
                    <button
                      onClick={handleToRegClick}
                      className="mt-8 w-full multiGradient animate-animateGradient border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
                    >
                      Sign up now
                    </button>
                  </div>
                  <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
                    <div>
                      <h2 className="text-base font-semibold text-pink-600 tracking-wide uppercase">
                        Get trained, Stand out
                      </h2>
                      <p className="mt-2 text-3xl font-extrabold text-gray-900">
                        Your path to a new career.
                      </p>
                      <p className="mt-4 text-lg text-gray-500">
                        Complete our 225 hour training program and join our
                        <span className="text-pink-500 font-bold"> Graduate Dev Path.</span> Receive continued training, interview
                        preparation, placement assistance and career coaching.
                        Work alongside our Dev team -at your own pace- to build
                        <span className="text-pink-500 font-bold"> crucial real world experience on live projects for real
                        clients.</span> You don't pay anything until you've landed your first role as a software developer!
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                      <ul role="list" className="divide-y divide-gray-200">
                        {registerInfo.slice(0, 5).map((feature, featureIdx) =>
                          featureIdx === 0 ? (
                            <li
                              key={feature}
                              className="py-4 flex md:py-0 md:pb-4"
                            >
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base text-gray-500">
                                {feature}
                              </span>
                            </li>
                          ) : (
                            <li key={feature} className="py-4 flex">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base text-gray-500">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <ul
                        role="list"
                        className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0"
                      >
                        {registerInfo.slice(5).map((feature, featureIdx) =>
                          featureIdx === 0 ? (
                            <li
                              key={feature}
                              className="py-4 flex md:border-t-0 md:py-0 md:pb-4"
                            >
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base text-gray-500">
                                {feature}
                              </span>
                            </li>
                          ) : (
                            <li key={feature} className="py-4 flex">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base text-gray-500">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4   pt-8 font-semibold text-indigo-600">
                <span className=" text-pink-600 text-4xl">
                  {" "}
                  Class Schedule{" "}
                </span>
                <span className="text-pink-600 text-lg ml-2">
                  {toggle ? "(Day)" : "(Night)"}
                </span>
                <span>
                  {" "}
                  <Switch.Group as="div" className="flex items-center">
                    <Switch
                      checked={toggle}
                      onChange={setToggle}
                      className={classNames(
                        toggle ? "bg-yellow-300 " : "bg-blue-900",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none "
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          toggle ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                    <Switch.Label as="span" className="ml-3">
                      <span className="text-sm font-medium text-gray-600">
                        {toggle
                          ? "See the night class schedule"
                          : "See the day class schedule"}
                      </span>
                    </Switch.Label>
                  </Switch.Group>
                </span>
                <p className="text-gray-600 font-normal text-lg pb-8 w-11/12 lg:w-2/3">
                  {" "}
                  {toggle
                    ? "Our day sessions will be Monday - Friday, from 9am to 3pm EST, with an hour lunch in the middle of the session. Our instructors will have office hours every day for an hour after the class ends, and upon request."
                    : "Our night sessions will be Monday - Friday, from 6pm to 9pm EST. Our instructors will have office hours every day for an hour before the class starts, and upon request."}{" "}
                </p>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Week
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {toggle
                    ? dayWeeks.map((week, weekIndx) => (
                        <tr
                          key={week.week}
                          className={
                            weekIndx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {week.week}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {week.unit}
                          </td>
                        </tr>
                      ))
                    : nightWeeks.map((week, weekIndx) => (
                        <tr
                          key={week.week}
                          className={
                            weekIndx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {week.week}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {week.unit}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div ref={regRef}>
        <a name="form1948865317" id="formAnchor1948865317"></a>{" "}
      </div>
    </div>
  );
};

export default FormSite;
