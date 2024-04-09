import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { ClassProvider } from "../../context/StyleContext";
import { Link } from "react-router-dom";

export default function Card({ d }) {
  const { buttonClass } = useContext(ClassProvider);
  return (
    <div>
      <div className="w-96 my-10 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="p-8 rounded-t-lg h-64 w-full drop-shadow-md"
            src={d.picture}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {d.title}
            </h5>
            <h5 className="text-sm font-semibold tracking-tight text-gray-500">
              {d.description.slice(0,150)}
            </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <FaStar />
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">{d.price}</span>
            <Link to={`/land/${d.id}`} className={buttonClass}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
