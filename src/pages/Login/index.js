import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchDoLogin} from '../../store/features/authSlice';
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  
  const doLogin = ()=>{

    const header = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
    };

    const data = JSON.stringify({
      username,
      password
    });

    axios({
      method: 'post',
      url: 'http://localhost:9090/api/v1/user/login',
      headers: header,
      data: data
    }).then(result=>{
      console.log(result);
      if(result.data.statusCode===200){
        //alert(result.data.token);
        /**
         * Eğer kullanıcı doğru bilgiler ile giriş yapar ise, kişinin kimlik bilgilerini tutan token ı lokalde bir yere yaz.
         * KEY/VALUE
         */
        localStorage.setItem('TOKEN', result.data.token);
        /**
         * giriş yapıp token bilgisini yazdıktan sonra ana sayfaya yönlendirme yapacağız.
         */
        navigate('/home');
      }
    }).catch(data=>{
      const result = data.response.data;
      alert(result.message);
    })
  }

  const doLoginSlice = ()=>{
    dispatch(fetchDoLogin({username,password}));
  }
  
    return(
        <>
    
		<header id="header-inverse">
      <nav className="navbar navbar-default navbar-fixed-top menu">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index-register.html"><img src="images/logo.png" alt="logo" /></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right main-menu">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span><img src="images/down-arrow.png" alt="" /></span></a>
                  <ul className="dropdown-menu newsfeed-home">
                    <li><a href="index.html">Landing Page 1</a></li>
                    <li><a href="index-register.html">Landing Page 2</a></li>
                  </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Newsfeed <span><img src="images/down-arrow.png" alt="" /></span></a>
                  <ul className="dropdown-menu newsfeed-home">
                    <li><a href="newsfeed.html">Newsfeed</a></li>
                    <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                    <li><a href="newsfeed-friends.html">My friends</a></li>
                    <li><a href="newsfeed-messages.html">Chatroom</a></li>
                    <li><a href="newsfeed-images.html">Images</a></li>
                    <li><a href="newsfeed-videos.html">Videos</a></li>
                  </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Timeline <span><img src="images/down-arrow.png" alt="" /></span></a>
                <ul className="dropdown-menu login">
                  <li><a href="timeline.html">Timeline</a></li>
                  <li><a href="timeline-about.html">Timeline About</a></li>
                  <li><a href="timeline-album.html">Timeline Album</a></li>
                  <li><a href="timeline-friends.html">Timeline Friends</a></li>
                  <li><a href="edit-profile-basic.html">Edit: Basic Info</a></li>
                  <li><a href="edit-profile-work-edu.html">Edit: Work</a></li>
                  <li><a href="edit-profile-interests.html">Edit: Interests</a></li>
                  <li><a href="edit-profile-settings.html">Account Settings</a></li>
                  <li><a href="edit-profile-password.html">Change Password</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle pages" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Pages <span><img src="images/down-arrow.png" alt="" /></span></a>
                <ul className="dropdown-menu page-list">
                  <li><a href="index.html">Landing Page 1</a></li>
                  <li><a href="index-register.html">Landing Page 2</a></li>
                  <li><a href="newsfeed.html">Newsfeed</a></li>
                  <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                  <li><a href="newsfeed-friends.html">My friends</a></li>
                  <li><a href="newsfeed-messages.html">Chatroom</a></li>
                  <li><a href="newsfeed-images.html">Images</a></li>
                  <li><a href="newsfeed-videos.html">Videos</a></li>
                  <li><a href="timeline.html">Timeline</a></li>
                  <li><a href="timeline-about.html">Timeline About</a></li>
                  <li><a href="timeline-album.html">Timeline Album</a></li>
                  <li><a href="timeline-friends.html">Timeline Friends</a></li>
                  <li><a href="edit-profile-basic.html">Edit Profile</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="faq.html">FAQ Page</a></li>
                  <li><a href="404.html">404 Not Found</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="contact.html">Contact</a></li>
            </ul>
            <form className="navbar-form navbar-right hidden-sm">
              <div className="form-group">
                <i className="icon ion-android-search"></i>
                <input type="text" className="form-control" placeholder="Search friends, photos, videos" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <div id="lp-register">
    	<div className="container wrapper">
        <div className="row">
        	<div className="col-sm-5">
            <div className="intro-texts">
            	<h1 className="text-white">Make Cool Friends !!!</h1>
            	<p>Friend Finder is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />Why are you waiting for? Buy it now.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        	<div className="col-sm-6 col-sm-offset-1">
            <div className="reg-form-container"> 
            
              <div className="reg-options">
                <ul className="nav nav-tabs">
                  <li ><a href="/register">Register</a></li>
                  <li className="active"><a href="/login" >Login</a></li>
                </ul>
              </div>
          
              <div className="tab-content">
                             
                <div className="tab-pane active" id="login">
                  <h3>Login</h3>
                  <p className="text-muted">Log into your account</p>
                  
                 
                  <form name="Login_form" id='Login_form'>
                     <div className="row">
                      <div className="form-group col-xs-12">
                        <label htmlFor="my-email" className="sr-only">Username</label>
                        <input id="my-email" onChange={event=>setUsername(event.target.value)} className="form-control input-group-lg" type="text" name="Email" title="Enter Username" placeholder="Username"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-xs-12">
                        <label htmlFor="my-password" className="sr-only">Password</label>
                        <input autoComplete='false' id="my-password" onChange={event=>setPassword(event.target.value)} className="form-control input-group-lg" type="password" name="password" title="Enter password" placeholder="Password"/>
                      </div>
                    </div>
                  </form>
                  <p><a href="#">Forgot Password?</a></p>
                  <button onClick={doLoginSlice} className="btn btn-primary">Login Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-6">
          
            <ul className="list-inline social-icons">
              <li><a href="#"><i className="icon ion-social-facebook"></i></a></li>
              <li><a href="#"><i className="icon ion-social-twitter"></i></a></li>
              <li><a href="#"><i className="icon ion-social-googleplus"></i></a></li>
              <li><a href="#"><i className="icon ion-social-pinterest"></i></a></li>
              <li><a href="#"><i className="icon ion-social-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

        </>
    )    
}

export default Login;