// DefaultLayout.js
import React from 'react';
import NavBar from './navBar';

const ChildrenLayout = ({ children }) => (
  <div>
    <div className="mb-5">
    <NavBar />

    </div>
    {children}
  </div>
);

export default ChildrenLayout;