import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
// import {Home as HomePage} from './pages/Home';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';


function App() {
  let islogin = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={islogin ? <Home /> : <Login /> }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
