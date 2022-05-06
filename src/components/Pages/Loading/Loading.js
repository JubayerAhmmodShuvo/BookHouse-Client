import React from 'react';
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="  grid my-80  ">
      <Spinner className="  mx-auto" animation="grow" variant="info" />
    </div>
  );
};

export default Loading;