import { createContext } from "react";

export const ClassProvider = createContext(null);
export default function StyleContext({ children }) {
  const buttonClass =
    "bg-rose-700 px-6 py-2 text-slate-200 font-semibold rounded-lg hover:text-slate-100 hover:bg-rose-800";

  const classes = {
    buttonClass,  
  };
  return (
    <div>
      <ClassProvider.Provider value={classes}>
        {children}
      </ClassProvider.Provider>
    </div>
  );
}
