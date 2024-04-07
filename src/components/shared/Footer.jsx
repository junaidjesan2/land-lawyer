import { Link } from "react-router-dom";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Land Lawyer
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a to="" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a to="" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              LandLawyer™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="" className="text-gray-500 hover:text-gray-900 ">
              <CiFacebook></CiFacebook>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <CiInstagram></CiInstagram>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="" className="text-gray-500 hover:text-gray-900  ms-5">
              <CiTwitter></CiTwitter>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="" className="text-gray-500 hover:text-gray-900 ms-5">
              <CiLinkedin></CiLinkedin>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
