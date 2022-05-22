import React, { useState } from "react";
import BtnIncrDecr from "./components/BtnIncrDecr";
import "./style/styles.css";
function App() {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [value, setValue] = useState("dos");

  return (
    <>
      <div className="app w-50 mx-auto">
        <BtnIncrDecr />
        <hr />
        <p>Value:{value}</p>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button
          onClick={() => setToggleBtn(!toggleBtn)}
          className="btn btn-secondary"
        >
          Toggle Btn
        </button>
        {toggleBtn ? <p className="lead">You tube content...</p> : null}
      </div>
    </>
  );
}

export default App;
