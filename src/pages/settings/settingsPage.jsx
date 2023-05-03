import React, { Component } from "react";

const values = {};

function SettingsPage() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/5">Navbar</div>
      <div className="basis-3/5 flex-nowrap">Actual Settings</div>
    </div>
  );
}

export default SettingsPage;
