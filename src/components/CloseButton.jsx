import React from "react";

const CloseButton = ({ handleClose }) => {
  return (
    <div>
      <button onClick={handleClose}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.0893 0.803571C35.6845 0.267857 36.369 0 37.1429 0C37.9167 0 38.6012 0.267857 39.1964 0.803571C39.7321 1.39881 40 2.08333 40 2.85714C40 3.63095 39.7321 4.31548 39.1964 4.91071L24.0179 20L39.1964 35.0893C39.7321 35.6845 40 36.369 40 37.1429C40 37.9167 39.7321 38.6012 39.1964 39.1964C38.6012 39.7321 37.9167 40 37.1429 40C36.369 40 35.6845 39.7321 35.0893 39.1964L20 24.0179L4.91071 39.1964C4.31548 39.7321 3.63095 40 2.85714 40C2.08333 40 1.39881 39.7321 0.803571 39.1964C0.267857 38.6012 0 37.9167 0 37.1429C0 36.369 0.267857 35.6845 0.803571 35.0893L15.9821 20L0.803571 4.91071C0.267857 4.31548 0 3.63095 0 2.85714C0 2.08333 0.267857 1.39881 0.803571 0.803571C1.39881 0.267857 2.08333 0 2.85714 0C3.63095 0 4.31548 0.267857 4.91071 0.803571L20 15.9821L35.0893 0.803571Z"
            fill="#3B4949"
          />
        </svg>
      </button>
    </div>
  );
};

export default CloseButton;
