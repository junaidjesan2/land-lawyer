import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { Auth } from "../firebase/firebase.config";

export const AuthProvider = createContext();

export default function AuthContext({ children }) {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  const authValues = { googleSignIn };
  return (
    <div>
      <AuthProvider.Provider value={authValues}>
        {children}
      </AuthProvider.Provider>
    </div>
  );
}
