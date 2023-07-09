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

  const getIdLogin = async ()=>{
    let token = await localStorage.getItem('TOKEN');
        if(token!==null)
          setIslogin(true);
        else
          setIslogin(false);
  }
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
    getIdLogin();
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
        <Route path='/' element={<Login /> }/>
        <Route path='/home' element={islogin ? <Home /> : <Login />}/>        
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={islogin ? <Profile /> : <Login />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
