import { useContext } from "react";
import { ClassProvider } from "../../context/StyleContext";
import { Link } from "react-router-dom";

export default function SignIn() {
  const {buttonClass}=useContext(ClassProvider)
  return (
    <div>
      <div className="">
        <form className="max-w-sm mx-2/4 mx-auto py-16 px-6 drop-shadow-lg shadow-md shadow-slate-500 my-10 rounded-md">
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
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
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
            <h1 className=" text-sm font-medium text-gray-900 my-5">if don't have account <Link to='/signup' className="text-rose-600 hover:underline">sign up</Link> here</h1>
          </div>
          <button
            type="submit"
            className={buttonClass}
          >
            Sign In Now
          </button>
        </form>
      </div>
    </div>
  );
}
