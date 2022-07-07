import React, { useEffect, useState } from "react";
import MakeAdminContianer from "./MakeAdminContianer";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://guarded-reef-42297.herokuapp.com/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return (
    <div className="bg-pink-50 h-screen">
      <div className="py-10 text-center uppercase text-2xl text-primary font-semibold">
        <h2>All user</h2>
      </div>
      <div className="px-5 md:px-28">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr className="text-center">
                <th>Number of users</th>
                <th>Email</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <MakeAdminContianer
                  key={user._id}
                  user={user}
                  index={index}
                ></MakeAdminContianer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
