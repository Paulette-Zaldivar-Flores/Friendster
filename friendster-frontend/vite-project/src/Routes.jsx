import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import EventDetails from './components/EventDetail';
import Layout from './components/Layout';
import Search from './components/Search';
import { useAuth } from "./components/auth/AuthProvider";

import AuthenticatedRoute from "./components/auth/AuthenticatedComponent";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
      {
        path: "search",
        element: <Search />,
      }
    ],
  },
]);

export default Router;
