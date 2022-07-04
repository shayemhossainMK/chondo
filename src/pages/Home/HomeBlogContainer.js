import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeBlogContainer = ({ blog }) => {
  const navigate = useNavigate();
  const { _id, name, img, text, like, views } = blog;

  const navigateBlogDetails = () => {
    navigate(`/blogdetails/${_id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-[750px] mx-auto mt-5 mb-20 shadow-xl drop-shadow-md rounded-2xl p-5">
        <div className="col-span-2 order-2 md:order-1">
          <div>
            <h1
              onClick={() => navigateBlogDetails(_id)}
              className="text-2xl font-bold mt-1 hover:underline"
              style={{ fontFamily: "Ubuntu" }}
            >
              {name}
            </h1>

            <p className="mt-1" style={{ fontFamily: "Nunito" }}>
              {text}
            </p>
            <div className="flex mt-2">
              <p className="mr-4">
                <FontAwesomeIcon className="text-blue-500" icon={faThumbsUp} />{" "}
                {like} Likes
              </p>
              <p>
                <FontAwesomeIcon className="text-red-500" icon={faEye} />{" "}
                {views} views
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="h-48 w-full md:w-96" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBlogContainer;
