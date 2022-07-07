import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import useBlogDetails from "../../hooks/useBlogDetails";

const BlogDetails = () => {
  const id = useParams();
  const [blog, setBlog] = useBlogDetails(id);
  const { _id, name, text, img, like, views } = blog;

  return (
    <div className="px-4 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-auto mt-5 md:mt-10 mb-20 p-5">
        <div className="col-span-2 order-2 md:order-1">
          <div>
            <h1 className="text-3xl font-bold mt-1">{name}</h1>
            {/* <div className="flex mt-2 mb-5">
              <p className="mr-4">
                <FontAwesomeIcon className="text-blue-500" icon={faThumbsUp} />{" "}
                {like} Likes
              </p>
              <p>
                <FontAwesomeIcon className="text-red-500" icon={faEye} />{" "}
                {views} views
              </p>
            </div> */}
            <p className="mt-1 md:mt-5">{text}</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="h-72 w-[700px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
