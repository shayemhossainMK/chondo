import React from "react";
import bannerImg from "../../imgs/Chondo App 1.png";
import watch from "../../imgs/Vector 50.png";

const HomeBanner = () => {
  return (
    <div className="bg-[#FFF7FA]">
      <div className="md:py-10">
        <div className=" grid grid-cols-1 px-5 md:px-0 pt-16 md:pt-0 md:flex md:justify-center md:items-center">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold md:mb-5">
              Track Your Period <br /> Know Your Body
            </h1>
            <div className="mt-10 flex ">
              <button className="btn bg-primary text-white border-none hover:bg-primary">
                Download
              </button>
              <button className="btn btn-primary btn-outline ml-5">
                {" "}
                <img
                  className="bg-[#FF4085] h-5 w-5 p-1 mr-2 rounded-full"
                  src={watch}
                  alt=""
                />
                Watch
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="h-72 mx-auto my-5 md:my-0 md:h-[500px]"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
