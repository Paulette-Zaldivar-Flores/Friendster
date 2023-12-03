import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import EventDetails from './components/EventDetail';
import Layout from './components/Layout';
import { useAuth } from "./components/auth/AuthProvider";


const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? <Element /> : <Navigate to="/login" replace />
      }
    />
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/home/*",
        element: <Home />,
      },
      {
        path: "events/:id",
        element: <PrivateRoute element={<EventDetails />} />,
      },
      {
        path: "MyEvents",
        element: <PrivateRoute element={<MyEvents />} />,
      },
    ],
  },
]);

export default Router;
