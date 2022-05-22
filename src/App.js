import React, { useState } from "react";
import BtnIncrDecr from "./components/Counter";
import InpValu from "./components/InpValu";
import ToggleBtn from "./components/ToggleBtn";
import "./style/styles.css";
function App() {
  return (
    <>
      <div className="app w-50 mx-auto">
        <BtnIncrDecr />

        <hr />
        <InpValu />
        <ToggleBtn />
      </div>
    </>
  );
}

export default App;
