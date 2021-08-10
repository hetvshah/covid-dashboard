import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Pins from './pages/Pins';
import Location from './pages/Location';
import Notifs from './pages/Notifs';
import Source from './pages/Source';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="header-title">COVID-19 Dashboard</h1>
        <div className="break" />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Switch>
            <Route exact path="/" render={(props) => <Pins {...props} />} />
            <Route
              exact
              path="/locations"
              render={(props) => <Location {...props} />}
            />
            <Route
              exact
              path="/notifs"
              render={(props) => <Notifs {...props} />}
            />
            <Route
              exact
              path="/sources"
              render={(props) => <Source {...props} />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
