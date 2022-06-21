import React from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../imgs/google.svg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  let errorElement;
  if (error || googleError) {
    errorElement = (
      <div>
        <p>
          <span className="text-primary ml-1">
            {error?.message} {googleError?.message}
          </span>
        </p>
      </div>
    );
  }
  if (user || googleUser) {
    navigate("/");
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-xl text-center font-semibold pt-5">Sign Up</h1>
          <div class="card-body">
            <form action="" onSubmit={handleSignup}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label text-xs">
                  Already have an account?
                  <p className="text-pink-500 hover:text-pink-300 text-sm ml-2">
                    <Link to="/login">please login here</Link>
                  </p>
                </label>
              </div>
              {errorElement}
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  Sign up
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="flex justify-center">
              <button
                onClick={() => signInWithGoogle()}
                className="p-3 bg-base-100 shadow-xl drop-shadow-xl rounded-full"
              >
                <img src={google} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;