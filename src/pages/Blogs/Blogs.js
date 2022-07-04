import React, { useEffect, useState } from "react";
import BlogContainer from "./BlogContainer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://guarded-reef-42297.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="py-16 bg-[#FFF7FA]">
      <div className="text-center pb-10 px-5">
        <input
          type="text"
          placeholder="Type Keywords"
          class="input w-full max-w-xl input-sm border-2 border-primary rounded-full  "
        />

        <div className="flex justify-center mt-5 gap-5 w-96 overflow-x-scroll mx-auto px-10 py-2">
          <p className="pl-28"></p>
          <p className="text-white btn btn-xs btn-primary rounded-full">All</p>
          <p className="text-white btn btn-xs btn-primary rounded-full">New</p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Saved
          </p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Topic
          </p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Topi2
          </p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Topi3
          </p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Topi4
          </p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Topi5
          </p>
          <p className="text-white btn btn-xs btn-primary rounded-full">
            Topi6
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:w-[800px] mx-auto">
        {blogs.map((blog) => (
          <BlogContainer key={blog._id} blog={blog}></BlogContainer>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
