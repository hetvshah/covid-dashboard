import React, { Component } from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="list">
          {SidebarData.map((val, key) => {
            return (
              <li
                className="item"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
                id={window.location.pathname === val.link ? 'active' : ''}
                key={key}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
