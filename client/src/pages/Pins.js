import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPins } from '../actions/pins';
import { useDispatch } from 'react-redux';

const Pins = () => {
  // const [pins, setPins] = useState([]);
  const user = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPins());
  }, [dispatch]);

  const pins = useSelector((state) => {
    return state.pins;
  });

  console.log(pins);

  return (
    <div>
      <Layout>
        <div>
          <h1>Pins</h1>
          {user[0] === null ? (
            <div>
              <Link to="/signup">Sign up</Link> or{' '}
              <Link to="/login">log in</Link> to make and view pins.
            </div>
          ) : (
            ''
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Pins;

// class Pins extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       pins: [],
//       user: JSON.parse(localStorage.getItem('profile')),
//     };
//   }

//   render() {
//     return (
//       <Layout>
//         <div>
//           <h1>Pins</h1>
//           {this.state.user === null ? (
//             <div>
//               <Link to="/signup">Sign up</Link> or{' '}
//               <Link to="/login">log in</Link> to make and view pins.
//             </div>
//           ) : (
//             ''
//           )}
//         </div>
//       </Layout>
//     );
//   }
// }

// export default Pins;
