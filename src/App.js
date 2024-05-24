import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Dashboard, Login, Error} from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact={true} element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      {/* <Dashboard></Dashboard> */}
       {/* <Login/> */}
      {/* <Error/> */}
    </div>
  );
}

export default App;
