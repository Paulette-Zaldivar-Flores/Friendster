import React from 'react';
import { createBrowserRouter } from "react-router-dom";
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
