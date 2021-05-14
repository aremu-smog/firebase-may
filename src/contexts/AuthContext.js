import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    email: "hello@aremusmog.com",
    password: "email",
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user));
  });

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
