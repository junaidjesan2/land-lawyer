import { Link, NavLink } from "react-router-dom";

import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { ClassProvider } from "../../context/StyleContext";


export default function Header() {
  const {buttonClass}=useContext(ClassProvider)
  
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Update Profile", path: "/updateProfile" },
    { id: 3, name: "Projects", path: "/projects" },
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
