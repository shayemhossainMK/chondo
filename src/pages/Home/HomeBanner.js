import React from "react";
import bannerImg from "../../imgs/Chondo App 1.png";
import watch from "../../imgs/Vector 50.png";

const HomeBanner = () => {
  return (
    <div className="bg-[#FFF7FA]">
      <div className="md:py-10">
        <div className=" grid grid-cols-1 px-5 md:px-0 pt-16 md:pt-0 md:flex md:justify-evenly md:items-center">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1
              className="text-4xl md:text-5xl font-bold md:mb-5"
              style={{ fontFamily: "Ubuntu" }}
            >
              Track Your Period <br /> Know Your Body
            </h1>
            <div className="mt-10 flex ">
              <div className="dropdown">
                <label
                  tabindex="0"
                  className="btn bg-primary text-white border-none hover:bg-primary"
                >
                  Download
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 mt-3 shadow bg-red-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <a
                href="https://www.youtube.com/channel/UCJ3sW_6kBDZqDRGAqPQg8NA"
                target="_blank"
              >
                <button className="btn btn-primary btn-outline ml-5">
                  {" "}
                  <img
                    className="bg-[#FF4085] h-5 w-5 p-1 mr-2 rounded-full"
                    src={watch}
                    alt=""
                  />
                  Watch
                </button>
              </a>
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
