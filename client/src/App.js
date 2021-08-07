import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <h1 style={{ paddingLeft: '1rem' }}>COVID-19 Dashboard</h1>
    </div>
  );
}

export default App;
