import React from "react";

function MediaButton({ className }) {
  return (
    <button
      className={
        "h-[100px] w-[100px] text-black font-semibold bg-white rounded-full text-[14px] ml-12 mt-2 " +
        className
      }
    >
      <svg
        width="48"
        height="41"
        viewBox="0 0 48 41"
        className="ml-7 mb-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 20.5L-9.53674e-07 41L-9.53674e-07 0L48 20.5Z"
          fill="black"
        />
      </svg>
      Media
    </button>
  );
}

export default MediaButton;
