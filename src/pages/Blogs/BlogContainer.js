import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlogContainer = ({ blog }) => {
  const { name, text, img, like, views } = blog;

  return (
    <div>
      <div className="bg-base-100 shadow-xl rounded-2xl py-5 h-auto">
        <div>
          <img className="w-96 h-[250px] p-2" src={img} alt="" />
        </div>
        <div className="px-5">
          <h1 className="font-semibold text-xl mt-2 mb-1">{name}</h1>
          <div className="flex mt-2">
            <p className="mr-4 mb-4">
              <FontAwesomeIcon className="text-blue-500" icon={faThumbsUp} />{" "}
              {like} Likes
            </p>
            <p>
              <FontAwesomeIcon className="text-red-500" icon={faEye} /> {views}{" "}
              views
            </p>
          </div>
          <p>{text.lenght <= 200 ? text : text.slice(0, 200) + `...`}</p>
        </div>
        <div className="mt-3 px-5">
          <button className="btn btn-primary btn-sm text-white">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
