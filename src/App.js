import logo from './logo.svg';
import './App.css';
import {Dashboard, Login, Error} from './pages'

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <Login/>
      <Error/>
    </div>
  );
}

export default App;
