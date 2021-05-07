import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
