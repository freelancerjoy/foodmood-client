import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className=" px-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  w-full max-w-lg  bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <h2 className="text-2xl text-rose-500 tracking-wide font-bold text-center mb-3">
                  User Create an account
                </h2>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  required
                  name="name"
                  placeholder="name"
                  className="input input-bordered bg-rose-50 rounded-full ps-6"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-rose-50 rounded-full ps-6"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="*******"
                  className="input input-bordered bg-rose-50 rounded-full ps-6"
                />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  required
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered bg-rose-50 rounded-full ps-6"
                />
                <label className="label">
                  <Link to="/login">
                    <a className="label-text-alt link link-hover">
                      if you have allready account please{" "}
                      <span className="text-rose-700">Login.</span>
                    </a>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-full bg-rose-500">
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <img
              className="w-full"
              src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?w=740"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
