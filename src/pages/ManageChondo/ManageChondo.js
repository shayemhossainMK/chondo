import React, { useEffect, useState } from "react";
import ManageChondoContainer from "./ManageChondoContainer";

const ManageChondo = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://guarded-reef-42297.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);
  return (
    <div className="bg-pink-50 h-screen">
      <div className="py-10 text-center uppercase  text-primary ">
        <h2 className="text-2xl font-semibold">All Blog</h2>
        <p className="text-sm text-black">
          <small>Total Blogs: {blogs.length}</small>
        </p>
      </div>
      <div className="px-5 md:px-28">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Number of users</th>
                <th>Blog Name</th>
                <th>Delete Blogs</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <ManageChondoContainer
                  key={blog._id}
                  blog={blog}
                  index={index}
                ></ManageChondoContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageChondo;
