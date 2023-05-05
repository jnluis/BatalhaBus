import React, { useState } from "react";

function Home() {

    // <>
    // <input type="range" min="0" max="100" value="40" className="range" />
    // </>
  // );
  const [value, setValue] = useState(40);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleOnChange}
        className="range"
      />
    </>
  );
}

export default Home;

