import { useEffect, useState } from "react";

const useBlogDetails = ({ id }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`https://guarded-reef-42297.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id, blog]);
  return [blog];
};
export default useBlogDetails;
