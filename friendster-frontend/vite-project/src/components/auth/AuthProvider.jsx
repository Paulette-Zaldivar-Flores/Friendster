// AuthProvider.js
import React, { createContext, useState, useEffect, useContext, useCallback} from "react";
import { auth } from "../../firebase";

const AuthContext = createContext();


const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSignIn = useCallback(() => {
    setIsAuthenticated(true);
  }, []); // Empty dependency array means this function will only be created once.

  const handleSignOut = useCallback(() => {
   
    setIsAuthenticated(false);
  }, []);

  const handleSignUp = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    //return a loading indicator or null while authentication state is being determined.
    return <div className="loader"></div>;
  }


  const authContextValue = {
    isAuthenticated,
    isLoading,
    signIn: handleSignIn,
    signOut: handleSignOut,
    signUp: handleSignUp,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
