import UserCard from '../../component/Home/UserCard';
import ChatBlock from '../../component/Home/ChatBlock';
import NewUsers from '../../component/Home/NewUsers';
import Post from '../../component/Home/Post';
import React from 'react';

function Home() {

  const [profile,setProfile] = React.useState(null);
  const [newUsers,setNewUsers] = React.useState([]);
  const [online,setOnline] = React.useState([]);
  const [postList,setPostList] = React.useState([]);
    
  React.useEffect(()=>{
    let token =  localStorage.getItem('TOKEN'); 
   
    fetch('http://localhost:9090/api/v1/user/getProfileByToken',{
      method: 'post',      
      headers:{       
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
      },
      body: JSON.stringify({
        token
      })
    }).then(data=>data.json())
    .then(data=>{
      console.log(data);
      setProfile(data.data);
    }).catch(hata=>{
      alert(hata.message);
    })
  },[]);

    const posts = [
      {
        postimage: '/images/post-images/1.jpg',
        userimg: '/images/users/user-1.jpg',
        username: 'Ahmet',
        sharedtime: '2 gün önce',
        isfollow: true,
        likecount: 1223,
        dislikecount: 3,
        usercomment: 'Bugün hava çoooooooooooooooook sıcak'
      },
      {
        postimage: '/images/post-images/2.jpg',
        userimg: '/images/users/user-2.jpg',
        username: 'Deniz',
        sharedtime: '2 gün önce',
        isfollow: true,
        likecount: 1223,
        dislikecount: 3,
        usercomment: 'Bugün hava çoooooooooooooooook sıcak'
      },
      {
        postimage: '/images/post-images/3.jpg',
        userimg: '/images/users/user-3.jpg',
        username: 'Bahar',
        sharedtime: '2 gün önce',
        isfollow: true,
        likecount: 1223,
        dislikecount: 3,
        usercomment: 'Bugün hava çoooooooooooooooook sıcak'
      },
      {
        postimage: '/images/post-images/4.jpg',
        userimg: '/images/users/user-4.jpg',
        username: 'Fatma',
        sharedtime: '2 gün önce',
        isfollow: true,
        likecount: 1223,
        dislikecount: 3,
        usercomment: 'Bugün hava çoooooooooooooooook sıcak'
      }




    ]
    /**
     * Kullanıcı profil bilgiledri
     * Post Listesi
     * Online Kişiler
     * En son kayıt olan kişiler
     */
    console.log("Ana sayfa render oldu.");
    return(
        <>
	    <header id="header">
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


      <div id="page-contents">
        <div className="container">
          <div className="row">


            <div className="col-md-3 static">
              <UserCard data={profile}/>
              <ul className="nav-news-feed">
                <li><i className="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
                <li><i className="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
                <li><i className="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
                <li><i className="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
                <li><i className="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
                <li><i className="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
              </ul>
             <ChatBlock />
            </div>
            <div className="col-md-7">

            <div className="create-post">
                  <div className="row">
                    <div className="col-md-8 col-sm-7">
                      <div className="form-group">
                        <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
                       
                        <textarea name="content" id="exampleTextarea" cols="50" rows="1" className="form-control" placeholder="Write what you wish">

                        </textarea>
                        <div className='hide' hidden>
                           <input type="file" name="file" id="file" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-5">
                      <div className="tools">
                        <ul className="publishing-tools list-inline" style={{marginRight:5}}>                         
                          <li><a href="#"><i className="ion-images"></i></a></li>                    
                        </ul>
                        <button className="btn btn-primary pull-right" type="submit" >Publish</button>
                      </div>
                    </div>

                  </div>
              </div>

              {
                posts.map((data,index)=>
                     <Post post={data} key={index}/>
                  )
              }
            

         
            </div>


            <div className="col-md-2 static">
              <NewUsers />
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-wrapper">
              <div className="col-md-3 col-sm-3">
                <a href="#"><img src="images/logo-black.png" alt="" className="footer-logo" /></a>
                <ul className="list-inline social-icons">
                  <li><a href="#"><i className="icon ion-social-facebook"></i></a></li>
                  <li><a href="#"><i className="icon ion-social-twitter"></i></a></li>
                  <li><a href="#"><i className="icon ion-social-googleplus"></i></a></li>
                  <li><a href="#"><i className="icon ion-social-pinterest"></i></a></li>
                  <li><a href="#"><i className="icon ion-social-linkedin"></i></a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h5>For individuals</h5>
                <ul className="footer-links">
                  <li><a href="#">Signup</a></li>
                  <li><a href="#">login</a></li>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">Finder app</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Language settings</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h5>For businesses</h5>
                <ul className="footer-links">
                  <li><a href="#">Business signup</a></li>
                  <li><a href="#">Business login</a></li>
                  <li><a href="#">Benefits</a></li>
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">Advertise</a></li>
                  <li><a href="#">Setup</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h5>About</h5>
                <ul className="footer-links">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-3">
                <h5>Contact Us</h5>
                <ul className="contact">
                  <li><i className="icon ion-ios-telephone-outline"></i>+1 (234) 222 0754</li>
                  <li><i className="icon ion-ios-email-outline"></i>info@thunder-team.com</li>
                  <li><i className="icon ion-ios-location-outline"></i>228 Park Ave S NY, USA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Thunder Team © 2016. All rights reserved</p>
        </div>
      </footer>

   
        </>      
    )    
}

export default Home;