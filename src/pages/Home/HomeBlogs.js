import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../../imgs/photo1.jpeg";
import photo2 from "../../imgs/photo2.jpeg";

const HomeBlogs = () => {
  return (
    <div className="px-3 md:px-20 py-5  items-center">
      <div>
        <h1 className="text-center text-3xl mt-5">Our Recent Blogs</h1>
        <hr className="w-48 mx-auto mb-16 mt-2 text-red-500" />
      </div>
      <div className="grid grid-cols-3 gap-4 w-[750px] mx-auto mt-5 mb-20">
        <div className="col-span-2">
          <div className="flex items-center">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
            <div>
              <p className="ml-4">Yael Wolfe</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mt-1">
              Are you using our identity to connect- or control?
            </h1>
            <p className="mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              aliquid.
            </p>
            <div className="flex mt-2">
              <p>
                <FontAwesomeIcon icon={faThumbsUp} /> 1422 Likes
              </p>
              <p className="ml-5">
                <FontAwesomeIcon icon={faComment} /> 342 comments
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={photo1} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-[750px] mx-auto">
        <div className="col-span-2">
          <div className="flex items-center">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
            <div>
              <p className="ml-4">Dan Busso</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mt-1 hover:underline">
              <Link to="/"> Overcomming Social Desirability Bias</Link>
            </h1>
            <p className="mt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              velit quis voluptates facilis odio asperiores magni nihil maxime
              animi illo!
            </p>
            <div className="flex mt-2">
              <p>
                <FontAwesomeIcon icon={faThumbsUp} /> 3454 Likes
              </p>
              <p className="ml-5">
                <FontAwesomeIcon icon={faComment} /> 1214 comments
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={photo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
