import UserCard from '../../component/Home/UserCard';
import ChatBlock from '../../component/Home/ChatBlock';
import NewUsers from '../../component/Home/NewUsers';
import Post from '../../component/Home/Post';
function Home() {

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

    return(
        <>
	    <header id="header">
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


      <div id="page-contents">
        <div class="container">
          <div class="row">


            <div class="col-md-3 static">
              <UserCard img="/images/users/user-14.jpg" username="Muhammet" followers="5.255k"/>
              <ul class="nav-news-feed">
                <li><i class="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
                <li><i class="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
                <li><i class="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
                <li><i class="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
                <li><i class="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
                <li><i class="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
              </ul>
             <ChatBlock />
            </div>
            <div class="col-md-7">

            <div class="create-post">
                  <div class="row">
                    <div class="col-md-8 col-sm-7">
                      <div class="form-group">
                        <img src="images/users/user-1.jpg" alt="" class="profile-photo-md" />
                       
                        <textarea name="content" id="exampleTextarea" cols="50" rows="1" class="form-control" placeholder="Write what you wish">

                        </textarea>
                        <div className='hide' hidden>
                           <input type="file" name="file" id="file" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-5">
                      <div class="tools">
                        <ul class="publishing-tools list-inline" style={{marginRight:5}}>                         
                          <li><a href="#"><i class="ion-images"></i></a></li>                    
                        </ul>
                        <button class="btn btn-primary pull-right" type="submit" >Publish</button>
                      </div>
                    </div>

                  </div>
              </div>

              {
                posts.map(data=>
                     <Post post={data} />
                  )
              }
            

         
            </div>


            <div class="col-md-2 static">
              <NewUsers />
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="footer-wrapper">
              <div class="col-md-3 col-sm-3">
                <a href="#"><img src="images/logo-black.png" alt="" class="footer-logo" /></a>
                <ul class="list-inline social-icons">
                  <li><a href="#"><i class="icon ion-social-facebook"></i></a></li>
                  <li><a href="#"><i class="icon ion-social-twitter"></i></a></li>
                  <li><a href="#"><i class="icon ion-social-googleplus"></i></a></li>
                  <li><a href="#"><i class="icon ion-social-pinterest"></i></a></li>
                  <li><a href="#"><i class="icon ion-social-linkedin"></i></a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2">
                <h5>For individuals</h5>
                <ul class="footer-links">
                  <li><a href="#">Signup</a></li>
                  <li><a href="#">login</a></li>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">Finder app</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Language settings</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2">
                <h5>For businesses</h5>
                <ul class="footer-links">
                  <li><a href="#">Business signup</a></li>
                  <li><a href="#">Business login</a></li>
                  <li><a href="#">Benefits</a></li>
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">Advertise</a></li>
                  <li><a href="#">Setup</a></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2">
                <h5>About</h5>
                <ul class="footer-links">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-3">
                <h5>Contact Us</h5>
                <ul class="contact">
                  <li><i class="icon ion-ios-telephone-outline"></i>+1 (234) 222 0754</li>
                  <li><i class="icon ion-ios-email-outline"></i>info@thunder-team.com</li>
                  <li><i class="icon ion-ios-location-outline"></i>228 Park Ave S NY, USA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>Thunder Team © 2016. All rights reserved</p>
        </div>
      </footer>

   
        </>      
    )    
}

export default Home;