import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../App.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import Footer from './Footer';

export const Layout = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  async function handleLogout() {
    // await logout();
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
    setUser(null);
  }
  return (
    <div className="outer">
      <div className="app content">
        <div className="header">
          <h1 className="header-title">COVID-19 Dashboard</h1>
          {user !== null ? (
            <button className="logout" type="submit" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            ''
          )}
        </div>

        <div style={{ display: 'flex' }}>
          <Sidebar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
