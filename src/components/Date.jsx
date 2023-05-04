import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDayWithOrdinal = (day) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = (day < 30) ? day % 20 : day % 30;
    const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return `${day}${suffix}`;
  }

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = getDayWithOrdinal(date.getDate());
  const month = months[date.getMonth()];
  const year = date.getFullYear(); // vai buscar o ano mas não tamos a usar
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");;
  const seconds = date.getSeconds(); // vai buscar os segundos mas não tamos a usar

  return (
    <div className="text-white font-semibold flex text-xl mt-[40px]">
      
      <div className="ml-52 mr-16 mb-16 ">
        {hours}:{minutes}
      </div>
      <div className="mr-2">
        {dayOfWeek},
      </div>
      <div>
        {dayOfMonth} {month}
      </div>
      
    </div>
  );
}

export default Clock;
