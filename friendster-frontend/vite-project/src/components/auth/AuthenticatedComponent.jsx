import React from "react";
import { useAuth } from "./AuthProvider";
import Login from "../Login";
const AuthenticatedComponent = ({ element: Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <Element />;
};

const AuthenticatedRoute = ({ elementName }) => {
  return <AuthenticatedComponent element={elementName} />;
};

export default AuthenticatedRoute;
