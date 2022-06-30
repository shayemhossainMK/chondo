import { useEffect, useState } from "react";

const useBlogDetails = ({ id }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id, blog]);
  return [blog];
};
export default useBlogDetails;
