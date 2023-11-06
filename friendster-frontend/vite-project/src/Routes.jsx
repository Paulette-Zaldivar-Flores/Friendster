import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Results from './pages/Results';
import EventDetails from './components/EventDetail';
import Layout from './components/Layout';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'events/:eventId',
        element: <EventDetails />,
      },
      {
        path: '/Results',
        element: <Results />,
      }
    ]
  }
]);

export default Router;
