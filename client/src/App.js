import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Pins from './pages/Pins';
import Location from './pages/Location';
import Notifs from './pages/Notifs';
import Source from './pages/Source';
import Login from './pages/Login';
import { Container } from 'react-bootstrap';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
