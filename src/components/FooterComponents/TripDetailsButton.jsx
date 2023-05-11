import React from "react";

function TripDetailsButton({ className }) {
  return (
    <button
      className={
        "h-[100px] w-[100px] border-2 border-black text-black font-semibold bg-white rounded-full text-[14px] ml-20 mt-2 " +
        className
      }
    >
      <svg
        width="40"
        height="50"
        transform="scale(0.8,0.8)"
        className="ml-7"
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6328 4.68726C12.2864 14.1404 4.15704 29.9998 0.461894 47.4216L0 49.9998H4.89607C8.49885 49.9998 9.9769 49.6873 10.4388 48.8279C11.0855 47.2654 14.6882 47.2654 14.6882 48.8279C14.6882 49.6873 15.7968 49.9998 19.5843 49.9998H24.388V38.0466C24.4804 20.3904 27.7136 10.781 36.2125 3.28101L40 -0.000244141H33.903H27.806L22.6328 4.68726ZM29.9307 4.68726C27.8984 6.40601 25.8661 7.81226 25.4042 7.81226C24.8499 7.81226 26.3279 6.24976 28.545 4.29663C30.7621 2.42163 32.7945 1.01538 33.0716 1.17163C33.2564 1.40601 31.8707 2.96851 29.9307 4.68726ZM23.9261 11.2498C23.9261 11.406 23.0947 13.1248 22.0785 15.156C20.3233 18.4373 18.3834 19.9216 18.3834 17.9685C18.3834 16.4841 22.0785 10.9373 23.0023 10.9373C23.5566 10.9373 23.9261 11.0935 23.9261 11.2498ZM18.3834 23.0466C18.3834 23.2029 17.9215 25.156 17.3672 27.3435C16.7206 29.9216 15.8891 31.2498 14.9654 31.2498C13.9492 31.2498 13.6721 30.7029 14.1339 29.2185C14.5035 28.0466 15.0577 26.1716 15.3349 24.9216C15.612 23.6716 16.4434 22.656 17.0901 22.656C17.8291 22.656 18.3834 22.8123 18.3834 23.0466ZM15.612 36.0935C15.612 36.6404 15.3349 38.4373 15.0577 39.9998C14.5958 42.2654 14.0416 42.9685 12.6559 42.9685C11.1778 42.9685 10.9007 42.5779 11.3626 41.1716C11.6397 40.2341 11.9169 38.5154 11.9169 37.2654C11.9169 35.7029 12.3788 35.156 13.7644 35.156C14.7806 35.156 15.612 35.6248 15.612 36.0935Z"
          fill="black"
        />
      </svg>
      <h5>Trip</h5>
      <h5>Details </h5>
    </button>
  );
}

export default TripDetailsButton;
