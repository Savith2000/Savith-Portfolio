import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // THIS STYLE
import "./codeblock.css"

const CodeBlock = ({ text = "", width =0, name = "" }) => {
  const [calc, setCalc] = useState(0);
  function unesc(s) {
    return s
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "«")
      .replace(/&gt;/g, "»")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"');
  }
  function calcNums() {
    let n = "1";

    for (
      let i = 2;
      i <=
      unesc(hljs.highlight(text, { language: "javascript" }).value).match(/\n/g)
        .length +
        2;
      i++
    ) {
      n += "\n" + i.toString();
    }
    setCalc(n);
  }

  useEffect(() => {
    calcNums();
  }, []);
  return (
    <div
      className="relative lg:w-auto self-center pb-8 lg:pb-0 w-full mx-auto "
      style={{ width: width }}
    >
      <div className="relative overflow-hidden md:rounded-xl shadow-2xl flex">
        <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-2xl backdrop-filter"></div>
        <div className="relative w-full flex flex-col bg-gray-800 bg-opacity-50">
          <div className="flex-none h-11 flex items-center px-4 bg-black bg-opacity-10">
            <span className=" w-full text-center text-gray-400 text-sm">
              {name}
            </span>
          </div>
          <div className="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col">
            <div
              className="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"
              style={{ width: "50px" }}
            ></div>
            <div
              className="w-full flex-auto flex min-h-0"
              style={{ opacity: "1" }}
            >
              <div className="w-full flex-auto flex min-h-0 overflow-auto">
                <div className="w-full relative flex-auto">
                  <pre
                    className="flex min-h-full text-xs md:text-sm"
                    style={{ color: "#adbac7" }}
                  >
                    <div
                      aria-hidden="true"
                      className="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none"
                      style={{ width: "50px" }}
                      id="nums"
                    >
                      {calc}
                    </div>
                    <div className="p-4">
                      <Typewriter
                        txt={unesc(
                          hljs.highlight(text, { language: "jsx" }).value
                        )}
                        speed={18}
                      />
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;