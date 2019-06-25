import React, { Component } from 'react';
import Home from './containers/Pages/Home';
import Contact from './containers/Pages/Contact';
import About from './containers/Pages/AboutUs';
import Error404 from './containers/Pages/Error404';

const routes =
  [
    { path: '/home', Component: <Home /> },
    { path: '/contact', Component: <Contact /> },
    { path: '/about', Component: <About /> },
  ]

export default routes;

export const errorRoute = { path: '/error404', Component: <Error404 /> }




