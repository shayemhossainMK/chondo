import React from "react";
import homeImg1 from "../../imgs/homeImg1.png";
import homeImg2 from "../../imgs/homeImg2.png";
const HomeContent = () => {
  return (
    <div>
      <div className="md:px-20 px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img className="h-72" src={homeImg1} alt="" />
          </div>
          <div className="flex flex-col items-end pr-3 md:pr-0 mt-7 md:mt-0">
            <h2 className="text-3xl font-bold">Accept Who You Are</h2>
            <p className="text-end my-4 text-lg">
              General Texts General Texts General Texts General Texts <br />
              General Texts General TextsGeneral Texts General Texts <br />
              General Texts General Texts General Texts <br /> General
              TextsGeneral Texts <br /> l Texts General Texts
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF7FA]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 px-5 py-10">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold">No Shame In Sharing</h2>
            <p className=" my-4 text-lg">
              General Texts General Texts General Texts General Texts <br />
              General Texts General TextsGeneral Texts General Texts <br />
              General Texts General Texts General Texts <br /> General
              TextsGeneral Texts <br /> l Texts General Texts
            </p>
          </div>
          <div className="flex justify-end">
            <img className="h-72" src={homeImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
