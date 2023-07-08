import React from 'react';
import { json } from 'react-router-dom';

function Register() {
  /**
   * private String username;
   * public String getUsername(){return this.username}
   */
  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [email,setEmail] = React.useState('');
  

  const doRegister = ()=>{
    /**
     * 1- fetch
     * 2- 3. taraf kütüphanerler kullanılabilir. axios gibi
     * URL -> bu adres eğer uygulamanız bulutta ise o adrestir. şuan localde kullandığımız içi localhost olarak geçicektir.
     * DİKKAT!!!!!
     * Eğer göndereceğiniz parametre adları ile sunucu tarafından talep edilen parametre adları bir birine eşit ise key:value şeklinde
     * kullanmak zorunda değilsiniz. direkt değişken adını yazabilirsiniz.
     * JSON.stringify({
         username,
         password,
         email
      })
     */
    fetch('http://localhost:9090/api/v1/user/register',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
      },
      body: JSON.stringify({
         'username': username,
         'password': password,
         'email': email
      })
    }).then(data=>data.json()) // gelen datayı json formatına döndür.
    .then(data=>{ 
      /**
       * işlem başarılı bir şekilde bittiğinde sunucudan gelen datayı kullan
       */
      console.log(data);
      if(data.statusCode===200){
        alert('Kayıt Başarı ile tamamlandı');
      }
    }).catch(data=>{
      console.log(data);
    })


  };

  /**
   * bir fonksiyon içinde kodlama yapacak iseniz, her hangi bir değer return etmeden önce kodlamalarınız yaparsınız.
   * aslında java da yazdığınız methodlar ile aynı presipte çalışıyor.
   */
  /*
   function name(params) {
    
   }
   const fnam = name;

   name(4343224);
   fnam(34334);
   */
    const degisiklik_oldu = (deger) =>{
        console.log(deger.target.value);
    }

    const getUsername = (event) =>{
      setUsername(event.target.value);
    }

    /*
    biseyler_oldu(deger){

    }

    onChange(event=>{
      biseyler_oldu(event);
    })
    */
    /**
     * 
     * musteriListesi.forEach(x->{
     *  x.getId();
     * });
     * 
     * onChange(event=>{})
     * 
     */

    return(
        <>
    
		<header id="header-inverse">
      <nav class="navbar navbar-default navbar-fixed-top menu">
        <div class="container">

          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index-register.html"><img src="images/logo.png" alt="logo" /></a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span><img src="images/down-arrow.png" alt="" /></span></a>
                  <ul class="dropdown-menu newsfeed-home">
                    <li><a href="index.html">Landing Page 1</a></li>
                    <li><a href="index-register.html">Landing Page 2</a></li>
                  </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Newsfeed <span><img src="images/down-arrow.png" alt="" /></span></a>
                  <ul class="dropdown-menu newsfeed-home">
                    <li><a href="newsfeed.html">Newsfeed</a></li>
                    <li><a href="newsfeed-people-nearby.html">Poeple Nearly</a></li>
                    <li><a href="newsfeed-friends.html">My friends</a></li>
                    <li><a href="newsfeed-messages.html">Chatroom</a></li>
                    <li><a href="newsfeed-images.html">Images</a></li>
                    <li><a href="newsfeed-videos.html">Videos</a></li>
                  </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Timeline <span><img src="images/down-arrow.png" alt="" /></span></a>
                <ul class="dropdown-menu login">
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
              <li class="dropdown">
                <a href="#" class="dropdown-toggle pages" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Pages <span><img src="images/down-arrow.png" alt="" /></span></a>
                <ul class="dropdown-menu page-list">
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
              <li class="dropdown"><a href="contact.html">Contact</a></li>
            </ul>
            <form class="navbar-form navbar-right hidden-sm">
              <div class="form-group">
                <i class="icon ion-android-search"></i>
                <input type="text" class="form-control" placeholder="Search friends, photos, videos" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <div id="lp-register">
    	<div class="container wrapper">
        <div class="row">
        	<div class="col-sm-5">
            <div class="intro-texts">
            	<h1 class="text-white">Make Cool Friends !!!</h1>
            	<p>Friend Finder is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />Why are you waiting for? Buy it now.</p>
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        	<div class="col-sm-6 col-sm-offset-1">
            <div class="reg-form-container"> 
            
              <div class="reg-options">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="/register">Register</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
              </div>
          
              <div class="tab-content">
                <div class="tab-pane active" id="register">
                  <h3>Register Now !!!</h3>
                  <p class="text-muted">Be cool and join today. Meet millions</p>
                                  
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="firstname" class="sr-only">UserName</label>
                        <input onChange={getUsername} id="username" class="form-control input-group-lg" type="text" name="firstname" title="Enter username" placeholder="Username"/>
                      </div>
                      
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="email" class="sr-only">Email</label>
                        <input onChange={(event)=>setEmail(event.target.value)} id="email" class="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="Your Email"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="password" class="sr-only">Password</label>
                        <input onChange={(data)=> setPassword(data.target.value)} id="password" class="form-control input-group-lg" type="password" name="password" title="Enter password" placeholder="Password"/>
                      </div>
                    </div>
               
                  <p><a href="/login">Already have an account?</a></p>
                  <button onClick={doRegister} class="btn btn-primary">Register Now</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-6">
          
            <ul class="list-inline social-icons">
              <li><a href="#"><i class="icon ion-social-facebook"></i></a></li>
              <li><a href="#"><i class="icon ion-social-twitter"></i></a></li>
              <li><a href="#"><i class="icon ion-social-googleplus"></i></a></li>
              <li><a href="#"><i class="icon ion-social-pinterest"></i></a></li>
              <li><a href="#"><i class="icon ion-social-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

        </>
    )    
}

export default Register;