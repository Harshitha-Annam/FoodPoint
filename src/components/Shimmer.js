import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-content">
        <div className="shimmer-title"></div>
        <div className="shimmer-rating"></div>
        <div className="shimmer-cuisines"></div>
        <div className="shimmer-area"></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-filters">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
