import React from "react";
import { Link } from "react-router-dom";
import google from "../../imgs/google.svg";
import facebook from "../../imgs/facebook.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-xl text-center font-semibold pt-5">Login Please</h1>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label text-xs">
              Don't have account?
              <p className="text-pink-500 ml-2 text-sm">
                <Link to="/signup">create a new account</Link>
              </p>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <button
            onClick={() => signInWithGoogle()}
            className="p-3 bg-base-100 shadow-xl drop-shadow-xl rounded-full"
          >
            <img src={google} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
