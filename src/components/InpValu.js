import React, { useState } from "react";

const InpValu = () => {
  const [value, setValue] = useState("dos");
  return (
    <>
      <p>Value:{value}</p>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};

export default InpValu;
