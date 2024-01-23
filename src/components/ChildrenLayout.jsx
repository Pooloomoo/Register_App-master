// DefaultLayout.js
import React from 'react';
import NavBar from './NavBar';

const ChildrenLayout = ({ children }) => (
  <div>
    <div className="mb-5">
    </div>
    {children}
  </div>
);

export default ChildrenLayout;
