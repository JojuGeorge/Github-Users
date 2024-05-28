import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Dashboard, Login, Error} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Dashboard/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>

    </div>
  );
}

export default App;
