import { useState } from "react";

import useInterval from "../../hooks/useInterval";
import { reviews } from "../../utils/students"
function Reviews() {
  const [slide, setSlide] = useState(0);

  useInterval(() => {
    if (slide === reviews.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }, 12000);

  return (
    <div className="relative w-full group">
      <div className="relative w-full transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 grid-rows-1">
          <div className="bg-gray-800 gradient-border rounded-xl p-8">
            {/* CONTENT */}
            <div className="quote-start">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-10 fill-current text-blue-200 text-opacity-50"
              >
                <path
                  fill=""
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div className="review-text flex flex-col items-center text-center">
              <h2 className="review-title font-bold text-3xl text-gray-100 m-5 overflow-ellipsis w-4/6">
                {reviews[slide].title}
              </h2>
              <p className="italic text-gray-300">{reviews[slide].message}</p>
              <div className="review-user mt-5">
                <h3 className="text-gray-100 text-xl">{reviews[slide].name}</h3>
                <h4 className="text-gray-300 text-xs">{reviews[slide].class}</h4>
            
              </div>
            </div>
            <div className="quote-end flex flex-row-reverse">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-10 fill-current text-blue-200 text-opacity-50"
              >
                <path
                  fill=""
                  d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Reviews;
