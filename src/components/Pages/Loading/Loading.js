import React from 'react';

const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;