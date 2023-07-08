import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
// import {Home as HomePage} from './pages/Home';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import React from 'react';

function App() {
  const [islogin,setIslogin] = React.useState(false);
  const token = localStorage.getItem('TOKEN');
  if(token!==null)
    setIslogin(true);
  else
    setIslogin(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={islogin ? <Home /> : <Login /> }/>
        <Route path='/home' element={<Home />}/>        
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
