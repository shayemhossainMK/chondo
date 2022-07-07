import React from "react";

const MakeAdminContianer = ({ user, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://guarded-reef-42297.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "contant-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => toast.success("Make admin done"));
  };
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role ? (
          <p>Already an admin</p>
        ) : (
          <button onClick={makeAdmin} className="btn btn-primary btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminContianer;
