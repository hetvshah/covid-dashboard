import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../App.css';

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <h1 className="header-title">COVID-19 Dashboard</h1>
      <div className="break" />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
