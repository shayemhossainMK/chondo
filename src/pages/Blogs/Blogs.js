import React, { useEffect, useState } from "react";
import BlogContainer from "./BlogContainer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[800px] mx-auto">
        {blogs.map((blog) => (
          <BlogContainer key={blog._id} blog={blog}></BlogContainer>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
