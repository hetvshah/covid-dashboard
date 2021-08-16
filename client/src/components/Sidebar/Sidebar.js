import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
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
};

export default Sidebar;

// export class Sidebar extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: JSON.parse(localStorage.getItem('profile')),
//     };
//   }

//   render() {
//     return (
//       <div className="sidebar">
//         {console.log(this.state.user)}
//         <ul className="list">
//           {SidebarData.map((val, key) => {
//             return (
//               <li
//                 className="item"
//                 onClick={() => {
//                   window.location.pathname = val.link;
//                 }}
//                 id={window.location.pathname === val.link ? 'active' : ''}
//                 key={key}
//               >
//                 <div id="icon">{val.icon}</div>
//                 <div id="title">{val.title}</div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Sidebar;
