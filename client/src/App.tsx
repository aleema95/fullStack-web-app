import './App.css';
import { Routes, Route, Link } from "react-router-dom"; 
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {


  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
