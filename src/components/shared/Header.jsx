import { Link, NavLink } from "react-router-dom";

import { FaRegCircleUser } from "react-icons/fa6";


export default function Header() {
  const buttonClass =
    "bg-rose-700 px-6 py-2 text-slate-200 font-semibold rounded-lg";
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Update Profile", path: "/updateProfile" },
];
  return (
    <div className="flex items-center justify-evenly py-4">
      <div>
        <h1 className="text-3xl font-bold">LandLawyer</h1>
      </div>
      <div className="flex gap-3">
        {navLinks.map((NL) => (
          <NavLink key={NL.id} to={NL.path}>
            {NL.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button><FaRegCircleUser className="w-8 h-8"/></button>
        <Link to='/signin' className={buttonClass}>Sign In</Link>
        <Link to='/signup' className={buttonClass}>Sign Up</Link>
      </div>
    </div>
  );
}
