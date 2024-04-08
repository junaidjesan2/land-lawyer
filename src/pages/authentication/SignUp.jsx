import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGithub, FaGoogle, FaRegEye } from "react-icons/fa";

import { ClassProvider } from "../../context/StyleContext";
import { AuthProvider } from "../../context/AuthContext";

export default function SignUp() {
  const { buttonClass } = useContext(ClassProvider);
  const [showPass, setShowPass] = useState(false);

  const { googleSignIn, githubSignIn } = useContext(AuthProvider);

  return (
    <div>
      <Helmet>
        <title>Sign Up | Land Lawyer</title>
      </Helmet>
      <div className="max-w-sm w-5/6 mx-auto py-16 px-6 drop-shadow-lg shadow-md shadow-slate-500 my-10 rounded-md">
        <form>
          <div className="mb-5">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="max-w-lg mx-auto">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              for="user_avatar"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">
              A profile picture is useful to confirm your are logged into your
              account
            </div>
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <div className="flex flex-row items-center gap-3">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <FaRegEye
                onClick={() => setShowPass(!showPass)}
                className="h-5 w-5"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              for="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              for="terms"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              I agree with the{" "}
              <a href="#" className="text-rose-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <div>
            <h1 className=" text-sm font-medium text-gray-900 my-5">
              if already have account{" "}
              <Link to="/signin" className="text-rose-600 hover:underline">
                sign In
              </Link>{" "}
              here
            </h1>
          </div>
          <button type="submit" className={buttonClass}>
            Sign Up Now
          </button>
        </form>
        <h1 className="text-center mt-4 text-rose-500">Sign Up With</h1>
        <div className="flex justify-center gap-5 mt-3">
          <FaGoogle
            onClick={googleSignIn}
            className="w-7 h-7 hover:drop-shadow-lg hover:text-rose-700 text-rose-500"
          />
          <FaGithub
            onClick={githubSignIn}
            className="w-7 h-7 hover:drop-shadow-lg hover:text-rose-700 text-rose-500"
          />
        </div>
      </div>
    </div>
  );
}
