import { Spinner } from "react-bootstrap";

import React from "react";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: 100,
        height: 100,
        opacity: 0.1,
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
