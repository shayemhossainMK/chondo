import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogContainer = ({ blog }) => {
  const navigate = useNavigate();
  const { _id, name, text, img, like, views } = blog;

  const navigateBlogDetails = () => {
    navigate(`/blogdetails/${_id}`);
  };

  return (
    <div>
      <div className="bg-base-100 grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-2xl py-3 h-auto px-3 ">
        <div>
          <img className="w-96 h-[250px] p-2 rounded-xl" src={img} alt="" />
        </div>
        <div className="px-2">
          <h1
            className="font-semibold text-xl mt-2 mb-5"
            style={{ fontFamily: "Ubuntu" }}
          >
            {name}
          </h1>
          {/* <div className="flex mt-2">
            <p className="mr-4 mb-4">
              <FontAwesomeIcon className="text-blue-500" icon={faThumbsUp} />{" "}
              {like} Likes
            </p>
            <p>
              <FontAwesomeIcon className="text-red-500" icon={faEye} /> {views}{" "}
              views
            </p>
          </div> */}
          <p style={{ fontFamily: "Nunito" }}>
            {text.lenght <= 200 ? text : text.slice(0, 200) + `...`}
          </p>
          <p
            onClick={() => navigateBlogDetails(_id)}
            className="mt-3 underline hover:cursor-pointer text-primary"
          >
            Read more
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
