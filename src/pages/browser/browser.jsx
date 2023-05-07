import React from "react";


function Browser() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <iframe src="https://www.google.com" style={{ width: '100%', height: '100%' }}></iframe>
    </div>
  );
}

export default Browser;