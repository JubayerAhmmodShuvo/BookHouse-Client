import React from 'react';
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="container  ">
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Loading;