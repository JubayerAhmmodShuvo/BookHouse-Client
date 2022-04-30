import React from 'react';

const Loading = () => {
  return (
    <div>
      <button type="button" className="bg-indigo-500 " disabled>
        <svg
          className="		animation: spin 1s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}"
          viewBox="0 0 100 10"
        ></svg>
        Processing...
      </button>
    </div>
  );
};

export default Loading;