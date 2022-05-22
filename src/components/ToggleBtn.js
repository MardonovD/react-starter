import React, { useState } from "react";

const ToggleBtn = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggleBtn(!toggleBtn)}
        className="btn btn-secondary my-2"
      >
        Toggle Btn
      </button>
      {toggleBtn ? <p className="lead">You tube content...</p> : null}
    </>
  );
};

export default ToggleBtn;
