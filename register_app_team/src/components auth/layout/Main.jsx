import React from 'react';
import Home from '../../pages/demo/Home';
import Reports, { Report1, Report2, Report3 } from '../../pages/demo/Reports';
import Products from '../../pages/demo/Products';
//import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/notfound/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export  const routeList = [
    {index:true, Component: Home},
    {path:"home", Component: Home},
    {path:"reports", Component: Reports},
    {path:"reports/report1", Component: Report1},
    {path:"reports/report2", Component: Report2},
    {path:"reports/report3", Component: Report3},
    {path:"products", Component: Products},


  ];

function Main() {
  return (
    <main>
      <Outlet/>
    </main>
  );
}

export default Main;
