import React, { useState } from "react";
import { Link } from "react-router-dom";

function Callout(props) {
  const [hovering, setHovering] = useState(false);
  const [animation, setAnimation] = useState(0);
  const [usedAnimations, setUsedAnimations] = useState([]);
  // Reusable animation elements:
  const star = "l 3,-8 l 3,8 l 7,0 l -6,4 l 2,7 l -6,-3 l -6,3 l 2,-7 l -6,-4 l 8,0";
  const firework = "l 3,0 l 0,-2 l -2,0 l 0,1 l 1,0 m 5,0 l 11,0 m -12,4 l 7,7 m -11,-6 l 0,10 m -4,-11 l -7,7 m 6,-11 l -10,0 m 11,-4 l -7,-7 m 11,6 l 0,-10 m 4,11 l 7,-7";
  // Different svg paths (each animation has a path at the same index number of each array):
  const path1 = [
    "M 10,1 C 10,15 40,3 55,15",
    "M 20,1 l 35,20",
    "M 10,1 L 55,20 l -1,-7 M 55.5,21 l -10,2",
    `M 30,30 ${star}`,
    `M 40,14 ${firework}`,
    /* "M 22,20 Q 30,30 40,25 T 55,30", */
  ];
  const path2 = ["", "", "", "", ""];
  const path3 = [
    "M 10,50 C 10,70 55,35 55,45",
    "M 10,59 l 45,-10",
    "M 10,59 L 55,48 l -6,-4 M 56,48 l-4,6",
    "",
    `M 30,60 ${firework}`,
  ];
  const path4 = [
    "M 10,20 C 10,30 60,0 60,0",
    "M 15,25 l 55,-19",
    "M 15,30 l 1,-8 M 14,30 l 8,1 M 15,30 l 40,-29",
    `M 40,17 ${star}`,
    `M 27,15 ${firework}`,
  ];
  const path5 = ["M 10,37 l 40,2", "M 15,40 l 35,-1", "", "", ""];
  const path6 = [
    "M 10,50 C 10,60 70,59 70,59",
    "M 15,50 l 55,9",
    "M 12,50 l 5,6 M 12,51 l 5,-5 M 12,50 l 40,9",
    `M 24,60 ${star}`,
    `M 33,60 ${firework}`,
  ];
  function onHovering() {
    setHovering(true);
    console.log(usedAnimations);
    const length = path1.length; // Total animations
    // Run through all animations once in a random order:
    let newAnimation = 1;
    if (usedAnimations.length && usedAnimations.length !== length) {
      // Check if array has any values so code doesn't break below running array functions below, also check if array is full
      while (usedAnimations.includes(newAnimation)) {
        newAnimation = Math.floor(Math.random() * length);
      }
      setUsedAnimations([...usedAnimations, newAnimation]);
    } else {
      setUsedAnimations([newAnimation]);
    }
    setAnimation(newAnimation);
  }
  function onNotHovering() {
    setHovering(false);
  }
  return (
    <>
      {hovering ? (
        <svg
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", left: "-70px", marginRight: "-80px" }}
        >
          <defs>
            <linearGradient y2="0" x2="1" y1="0" x1="0" id="gradient1">
              <stop offset="0" stopOpacity="0.99609" stopColor="rgba(139, 0, 219, 0.808)" />
              <stop offset="1" stopOpacity="0.80" stopColor="rgba(190, 0, 127, 0.726)" />
            </linearGradient>
          </defs>
          <g>
            <path
              d={path1[animation]}
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="transparent"
            />
            <path
              d={path2[animation]}
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="transparent"
            />
            <path
              d={path3[animation]}
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="transparent"
            />
          </g>
        </svg>
      ) : null}
      <Link
        to={props.to}
        className={props.className}
        onMouseOver={onHovering}
        onMouseLeave={onNotHovering}
        style={{ height: "fit-content" }}
      >
        {props.children}
      </Link>
      {hovering ? (
        <svg
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative" }}
        >
          <defs>
            <linearGradient y2="0" x2="1" y1="0" x1="0" id="gradient2">
              <stop offset="0" stopOpacity="0.99609" stopColor="#d642ff" />
              <stop offset="1" stopOpacity="0.99609" stopColor="#e80013" />
            </linearGradient>
          </defs>
          <g>
            <path
              d={path4[animation]}
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="transparent"
            />
            <path
              d={path5[animation]}
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="transparent"
            />
            <path
              d={path6[animation]}
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="transparent"
            />
          </g>
        </svg>
      ) : null}
    </>
  );
}

export default Callout;