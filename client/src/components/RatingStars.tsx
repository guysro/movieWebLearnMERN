import { useState, useEffect } from "react";

interface Props {
  Rating: number;
}

function RatingStars({ Rating }: Props) {
  let StarsArr: number[] = [];

  for (let i = 0; i < Rating; i++) {
    StarsArr.push(0);
  }

  return StarsArr.map((zero, index) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      key={index}
    >
      {Rating.toFixed(0) === Rating.toString() ? (
        <path
          fill="yellow"
          d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
          strokeWidth={"0.5px"}
          stroke="black"
        />
      ) : index != Math.ceil(Rating - 1) ? (
        <path
          fill="yellow"
          d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
          strokeWidth={"0.5px"}
          stroke="black"
        />
      ) : (
        <>
          <defs>
            <clipPath id="right-half">
              <rect
                x="0"
                y="0"
                width="50%"
                height="100%"
              />
            </clipPath>
          </defs>
          <path
            fill="yellow"
            d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
            strokeWidth={"0.5px"}
            stroke="black"
            clipPath="url(#right-half)"
          />
        </>
      )}
    </svg>
  ));
}

export default RatingStars;
