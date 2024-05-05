import React from "react";
import { useForm } from "react-hook-form";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showMessage, setShowMessage] = React.useState(false);

  const onSubmit = (data: any) => {
    setShowMessage(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white shadow-lg rounded p-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Email:
              </label>
              <div className="flex items-center bg-gray-100 rounded py-3 px-4">
                <RiUserFill className="text-sky-700 text-lg mr-2" />
                <input
                  type="email"
                  id="email"
                  className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  Email is required.
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-xs mt-1">
                  Format doğru değil
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Password:
              </label>
              <div className="flex items-center bg-gray-100 rounded py-3 px-4">
                <RiLockPasswordFill className="text-sky-700 text-lg mr-2" />
                <input
                  type="password"
                  id="password"
                  className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">
                  Password is required.
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-sky-700 text-white font-semibold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline w-full transition-colors duration-300"
            >
              Login
            </button>
          </form>
          {showMessage && (
            <div className="text-center mt-4">
              <p className="text-green-500 text-xs">Login successful!</p>
            </div>
          )}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              <NavLink to="/HomePage" className="text-sky-700">
                <span className="ml-2">Back to homepage</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
