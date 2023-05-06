import React from "react";
import { Helmet } from "react-helmet";

function Browser() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Helmet>
        <script type="module" src="https://unpkg.com/x-frame-bypass"></script>
      </Helmet>
      <iframe is = "x-frame-bypass" src="https://www.google.com" style={{ width: '80%', height: '80%' }}></iframe>
    </div>
  );
}

export default Browser;