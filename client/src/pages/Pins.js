import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPins } from '../actions/pins';
import { useDispatch } from 'react-redux';
import PinCard from '../components/PinCard';

const Pins = () => {
  const user = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();

  useEffect(() => {
    if (user[0] === null) {
      dispatch(getPins(0));
    } else {
      dispatch(getPins(user[0].result._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pins = useSelector((state) => {
    return state.pins;
  });

  function getCards() {
    console.log(pins);
    const stats = pins.map((pin) => {
      return <PinCard pin={pin} />;
    });
    return stats;
  }

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
          ) : pins.length === 0 ? (
            <div>No pins to show.</div>
          ) : (
            <div
              style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}
            >
              {getCards()}
            </div>
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
