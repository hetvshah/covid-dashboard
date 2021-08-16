import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Layout = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleLogout() {
    // await logout();
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
  }
  return (
    <div className="app">
      <div className="header">
        <h1 className="header-title">COVID-19 Dashboard</h1>
        <button className="logout" type="submit" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <div style={{ display: 'flex' }}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
