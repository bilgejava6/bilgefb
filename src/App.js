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
import {useSelector} from 'react-redux';
function App() {
 
  const isAuth = useSelector((state)=> state.auth.isAuthenticated);

  const logout = ()=>{
    fetch('http://localhost:9090/api/v1/user/logout',{
    headers:{
            'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({
            token: localStorage.getItem('TOKEN')
    })

    }).then(res=>res.json())
    .then(res=>{               
    })
}
  React.useEffect(()=>{   
    
   // window.addEventListener('beforeunload', alertUser)
   window.addEventListener("beforeunload", (ev) => 
  {  
      ev.preventDefault();
      return ev.returnValue = 'Are you sure you want to close?';
  });
    window.addEventListener('unload', logout);
    return () => {
      //  window.removeEventListener('beforeunload', alertUser)
        window.removeEventListener('unload', logout);
    }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuth ? <Home /> : <Login />}/>
        <Route path='/home' element={isAuth ? <Home /> : <Login />}/>        
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={isAuth ? <Profile /> : <Login />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
