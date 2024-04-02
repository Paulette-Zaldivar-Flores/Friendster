import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import EventDetails from './components/EventDetail';
import Layout from './components/Layout';
import { useAuth } from "./components/auth/AuthProvider";

import AuthenticatedRoute from "./components/auth/AuthenticatedComponent";


const Router = createBrowserRouter([
  {
    path: "/*",
    element: <Layout />,
    children: [
      {
        path: "/*",
        element: <AuthenticatedRoute elementName={Home} />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "events/:id",
        element: <AuthenticatedRoute elementName={EventDetails} />
      },
      {
        path: "MyEvents",
        element: <AuthenticatedRoute elementName={MyEvents} />
      },
    ],
  },
]);

export default Router;
