import { NavLink } from "react-router-dom";

export default function Header() {
  const buttonClass =
    "bg-rose-700 px-6 py-2 text-slate-200 font-semibold rounded-lg";
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Update Profile", path: "/updateProfile" },
];
  return (
    <div className="flex items-center justify-evenly py-4 bg-slate-100">
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
        <button className={buttonClass}>User Profile</button>
        <button className={buttonClass}>Sign In</button>
        <button className={buttonClass}>Sign Up</button>
      </div>
    </div>
  );
}
