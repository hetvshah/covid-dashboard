import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Pins from './pages/Pins';
import Location from './pages/Location';
import Notifs from './pages/Notifs';
import Source from './pages/Source';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Pins {...props} />} />
        <Route
          exact
          path="/locations"
          render={(props) => <Location {...props} />}
        />
        <Route exact path="/notifs" render={(props) => <Notifs {...props} />} />
        <Route
          exact
          path="/sources"
          render={(props) => <Source {...props} />}
        />

        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      </Switch>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
