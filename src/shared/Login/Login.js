import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import useToken from "../../hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const [token] = useToken(user);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  const resetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast("Reset email send!");
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-primary text-xs mt-2 px-3">
          User or password are not valid!
          <span
            onClick={resetPassword}
            className="text-green-400 ml-1 cursor-pointer underline"
          >
            Forget password?
          </span>
        </p>
      </div>
    );
  }
  if (token) {
    navigate("/");
  }
  return (
    <div className="flex justify-center items-center h-[600px] md:h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-xl text-center font-semibold pt-5">Login Please</h1>
        <div className="card-body">
          <form action="" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label text-xs">
                Don't have account?
                <p className="text-pink-500 ml-2 text-sm">
                  <Link to="/onlychondoadmincanbehere/signup">
                    create a new account
                  </Link>
                </p>
              </label>
            </div>
            {errorElement}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
