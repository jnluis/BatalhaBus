import React from "react";

function GamesButton({className}) {
  return (
    <button className={"h-[100px] w-[100px] text-black font-semibold bg-white rounded-full text-[14px] " + className}>
        <svg width="50" height="40" viewBox="0 0 50 40" className="ml-[22px] mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30.0893V30.3571C0.0520833 33.0952 0.885417 35.3571 2.5 37.1429C4.0625 38.9881 6.04167 39.9405 8.4375 40C10.4167 39.9405 12.1354 39.256 13.5938 37.9464C15.1042 36.6369 16.0938 34.881 16.5625 32.6786L16.875 31.4286H33.125L33.4375 32.6786C33.9062 34.881 34.8958 36.6369 36.4062 37.9464C37.8646 39.256 39.5833 39.9405 41.5625 40C43.9583 39.9405 45.9375 38.9881 47.5 37.1429C49.1146 35.3571 49.9479 33.0952 50 30.3571V30.0893C50 29.5536 49.9479 29.0179 49.8438 28.4821L47.3438 11.4286C46.9792 9.10714 46.1979 7.11309 45 5.44643C43.8021 3.72024 42.2135 2.55952 40.2344 1.96429C36.6406 0.833333 31.5625 0.178571 25 0C18.4375 0.178571 13.3594 0.833333 9.76562 1.96429C7.78646 2.55952 6.19792 3.72024 5 5.44643C3.80208 7.11309 3.02083 9.10714 2.65625 11.4286L0.15625 28.4821C0.0520833 29.0179 0 29.5536 0 30.0893ZM33.75 25C32.8646 25 32.1354 24.6429 31.5625 23.9286C30.9375 23.2738 30.625 22.4405 30.625 21.4286C30.625 20.4167 30.9375 19.5833 31.5625 18.9286C32.1354 18.2143 32.8646 17.8571 33.75 17.8571C34.6354 17.8571 35.3646 18.2143 35.9375 18.9286C36.5625 19.5833 36.875 20.4167 36.875 21.4286C36.875 22.4405 36.5625 23.2738 35.9375 23.9286C35.3646 24.6429 34.6354 25 33.75 25ZM41.875 12.8571C41.875 13.869 41.5625 14.7024 40.9375 15.3571C40.3646 16.0714 39.6354 16.4286 38.75 16.4286C37.8646 16.4286 37.1354 16.0714 36.5625 15.3571C35.9375 14.7024 35.625 13.869 35.625 12.8571C35.625 11.8452 35.9375 11.0119 36.5625 10.3571C37.1354 9.64286 37.8646 9.28571 38.75 9.28571C39.6354 9.28571 40.3646 9.64286 40.9375 10.3571C41.5625 11.0119 41.875 11.8452 41.875 12.8571ZM16.875 12.1429V15H19.375C20.5208 15.119 21.1458 15.8333 21.25 17.1429C21.1458 18.4524 20.5208 19.1667 19.375 19.2857H16.875V22.1429C16.7708 23.4524 16.1458 24.1667 15 24.2857C13.8542 24.1667 13.2292 23.4524 13.125 22.1429V19.2857H10.625C9.47917 19.1667 8.85417 18.4524 8.75 17.1429C8.85417 15.8333 9.47917 15.119 10.625 15H13.125V12.1429C13.2292 10.8333 13.8542 10.119 15 10C16.1458 10.119 16.7708 10.8333 16.875 12.1429Z" fill="black" />
        </svg>
        Games
        </button>
  );
}

export default GamesButton;