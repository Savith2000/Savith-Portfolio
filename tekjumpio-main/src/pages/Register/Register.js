import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
  };

  const [data, setData] = useState({});

  return (
    <div className="pt-24 pb-10">
      <div className="container rounded-xl py-10 px-4 xl:px-14 mx-auto bg-gray-200 w-11/12 xl:w-2/3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 className=" flex justify-center text-3xl leading-6 font-semibold text-gray-900">
                  Fall 2021 Registration
                </h3>
              </div>

              <div className=" mt-6 font-normal text-gray-700 text-lg">
                Price! Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem
              </div>

              <div className=" mt-6 font-normal text-gray-700 text-lg">
                Start Time! Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className={"sm:col-span-3 "}>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                  {errors.firstName && (
                    <p className="inline text-red-600 ml-6">
                      Please enter first name
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    placeholder=" "
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.firstName
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("firstName", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                  {errors.lastName && (
                    <p className="inline text-red-600 ml-6">
                      Please enter last name
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.lastName
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                  {errors.email && (
                    <p className="inline text-red-600 ml-6">Invalid email</p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.email
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("email", {
                      required: true,
                      pattern:
                        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
                    })}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                  {errors.phoneNumber && (
                    <p className="inline text-red-600 ml-6">
                      Invalid phone number
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    autoComplete="phoneNumber"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.phoneNumber
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("phoneNumber", {
                      required: true,
                      pattern:
                        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g,
                    })}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                  {errors.streetAddress && (
                    <p className="inline text-red-600 ml-6">
                      Please enter street address
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.streetAddress
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("streetAddress", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                  {errors.city && (
                    <p className="inline text-red-600 ml-6">
                      Please enter city
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.city
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("city", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                  {errors.state && (
                    <p className="inline text-red-600 ml-6">
                      Please enter state
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.state
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("state", { required: true })}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal
                  {errors.zip && (
                    <p className="inline text-red-600 ml-6">Invalid zip code</p>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    autoComplete="postal-code"
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.zip
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("zip", {
                      required: true,
                      pattern: /^\d{5}(?:[-\s]\d{4})?$/g,
                    })}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  Do you have any programming experience?
                  {errors.experience && (
                    <p className="inline text-red-600 ml-6">
                      Please describe your programming experience
                    </p>
                  )}
                </label>
                <div className="mt-1">
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                    className={`shadow-sm  block w-full sm:text-sm rounded-md  ${
                      errors.experience
                        ? "bg-red-300 border-red-600 focus:ring-red-600 focus:border-red-500 animate-shake"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                    {...register("experience", { required: true })}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Please detail any experience with web development you have.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Terms of Service
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Please read and accept before continuing.
                </p>
              </div>
              <div className="mt-6">
                <fieldset>
                  <div className="mt-4 space-y-4">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="termsCheck"
                          name="termsCheck"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <p className="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting. LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacyPolicy"
                          name="privacyPolicy"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <p className="text-gray-500 ">
                          Get notified when someones posts a comment on a
                          posting. LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                          LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex-col space-y-2 xl-flew-row xl:space-y-0 xl:space-x-2 justify-center">
              <button
                type="submit"
                className="flex xl:inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register with Square
              </button>
              <button
                type="submit"
                className="flex xl:inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register with Paypal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
