import React from "react";
import bannerImg from "../../imgs/bannerImg1.png";

const HomeBanner = () => {
  return (
    <div className="max-h-[500px]">
      <div>
        <img className="md:h-[450px] w-full" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
