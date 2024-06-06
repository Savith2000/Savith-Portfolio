import React, { useState, useEffect, useRef } from "react";

let timer = (func, speed) => {
  setTimeout(func, speed)
}
const Typewriter = ({ txt, speed = 0 }) => {
  const [HTML, setHTML] = useState(txt);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const setUpType = (t) => {
    t.innerHTML = "";
    let cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = speed,
      tempTypeSpeed = 0,
      offset = speed;
    let type = function () {
      if (writingTag === true) {
        tag += HTML[cursorPosition];
      }
      if (HTML[cursorPosition] === "<") {
        tempTypeSpeed = 0;
        if (tagOpen) {
          tagOpen = false;
          writingTag = true;
        } else {
          tag = "";
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
        }
      }

      if (!writingTag && tagOpen) {
        if (tag) {
          tag.innerHTML += HTML[cursorPosition];
        } else {
          t.innerHTML += HTML[cursorPosition];
        }
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === " ") {
          tempTypeSpeed = 0;
        } else {
          tempTypeSpeed = Math.floor(Math.random() * typeSpeed) + offset;
        }
        if (HTML[cursorPosition] === "«") {
          t.innerHTML += "<";
        } else if (HTML[cursorPosition] === "»") {
          t.innerHTML += ">";
        } else {
          t.innerHTML += HTML[cursorPosition];
        }
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
        tempTypeSpeed = Math.floor(Math.random() * typeSpeed) + offset;
        writingTag = false;
        if (tagOpen) {
          let newSpan = document.createElement("span");
          t.appendChild(newSpan);
          newSpan.innerHTML = tag;
          tag = newSpan.firstChild;
        }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length) {
        timer(type, tempTypeSpeed);
      } else {
        setDone(true);
      }
    };
    return {
      type: type,
    };
  };
  useEffect(() => {
    const type = setUpType(ref.current);
    type.type();
    return (clearTimeout(timer))
  }, []);
  return (
    <div>
      <div ref={ref} id="type" style={{ "--time": done ? "0.7s" : "0s" }}></div>
    </div>
  );
};

export default Typewriter;
