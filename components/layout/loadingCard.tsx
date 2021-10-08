import React from "react";

const LoadingCard = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <div className="w-80 h-64 rounded bg-gray-200 animate-pulse"></div>
      </div>
    </>
  );
};

export default LoadingCard;
