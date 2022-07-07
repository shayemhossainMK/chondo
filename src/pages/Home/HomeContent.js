import React from "react";
import homeImg1 from "../../imgs/homeImg1.png";
import homeImg2 from "../../imgs/homeImg2.png";
const HomeContent = () => {
  return (
    <div>
      <div className="md:px-36 px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="">
            <img className="h-72  " src={homeImg1} alt="" />
          </div>
          <div className="flex flex-col items-center md:items-end pr-3 md:pr-0 mt-7 md:mt-0 md:col-span-2">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Ubuntu" }}>
              Accept Who You Are
            </h2>
            <p
              className="text-center md:text-end  my-4 text-lg"
              style={{ fontFamily: "Nunito" }}
            >
              Menstruation or period is a natural phenomenon of every woman that
              happens during a certain age and reoccurs every month. The
              stigmatization around menstruation has created a huge barrier to
              knowledge sharing. Which is contributing to the rising cases of
              Cervical Cancer, Endometrial Cancer, Primary Peritoneal Cancer,
              Uterine Sarcoma, Vaginal Cancer, Vulvar Cancer and lot more
              similar diseases. However, knowing about the menstrual cycle is
              not only important to avoid diseases but also to create a good
              relationship with mind and body.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF7FA]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-36 px-5 py-10">
          <div className="flex flex-col items-center md:items-start md:col-span-2">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Ubuntu" }}>
              No Shame In Sharing
            </h2>
            <p
              className=" my-4 text-lg text-center md:text-start md:pr-10 "
              style={{ fontFamily: "Nunito" }}
            >
              Knowing is the first step of accepting. Chondo has your back.
              Chondo is a period tracker intended to assist you in staying
              informed and making educated health decisions, whether it's for
              period tracking, receiving reminders on the ovulation day, or
              simply learning more about your body's individual patterns. Learn
              & embrace the rhythm of your body with Chondo.
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
