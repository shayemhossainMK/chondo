import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://guarded-reef-42297.herokuapp.com/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user, admin]);

  return [admin, adminLoading];
};

export default useAdmin;
