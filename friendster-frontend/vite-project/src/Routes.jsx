import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import EventDetails from './components/EventDetail';
import Layout from './components/Layout';

const Router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: 'events/:id',
        element: <EventDetails />,
      },
      {
        path: 'MyEvents',
        element: <MyEvents />,
      }
    ]
  }
]);

export default Router;
