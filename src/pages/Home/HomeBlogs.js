import React, { useEffect, useState } from "react";
import HomeBlogContainer from "./HomeBlogContainer";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://guarded-reef-42297.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="px-3 md:px-20 py-5  items-center">
      <div>
        <h1
          className="text-center text-3xl mt-5"
          style={{ fontFamily: "Ubuntu" }}
        >
          Our Recent Blogs
        </h1>
        <hr className="w-48 mx-auto mb-10 mt-2 text-red-500" />
      </div>
      <div>
        {blogs.map((blog) => (
          <HomeBlogContainer key={blog.index} blog={blog}></HomeBlogContainer>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
