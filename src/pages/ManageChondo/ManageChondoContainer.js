import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ManageChondoContainer = ({ blog, index }) => {
  const { _id, img, name, text } = blog;
  const handleDeleteBlog = () => {
    fetch(`https://guarded-reef-42297.herokuapp.com/blogs/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete successfull.");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <button onClick={handleDeleteBlog} className="btn  btn-error btn-xs">
          Delete
        </button>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default ManageChondoContainer;
