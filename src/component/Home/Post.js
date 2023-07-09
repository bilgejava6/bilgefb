
export default function Post(props) {
    /**
     * props bir tag olarak kullanılan funtion ın içine geçilen properties olarak nitelendirilir.
     * ancak çok fazla özelliğiniz ve dataniz var ise bütün bilgileri props a geçmek zahmetli ve anlamsızdır.
     */
    const {post} = props;

    const comments = [
        {
            username: 'Muhammet',
            img: 'images/users/user-4.jpg',
            comment: 'yorum yoooooooooooooooooooooooooooooooooooo rum'
        },
        {
            username: 'Muhammet',
            img: 'images/users/user-14.jpg',
            comment: 'yorum yoooooooooooooooooooooooooooooooooooo rum'
        },
        {
            username: 'Muhammet',
            img: 'images/users/user-2.jpg',
            comment: 'yorum yoooooooooooooooooooooooooooooooooooo rum'
        },
        {
            username: 'Muhammet',
            img: 'images/users/user-9.jpg',
            comment: 'yorum yoooooooooooooooooooooooooooooooooooo rum'
        },
        
    ]

    return(
        
        <div className="post-content" key={props.key}>                
            <img src={post.postimage} alt="post-image" className="img-responsive post-image" />
            <div className="post-container">
            <img src={post.userprofileimage === null ? '/images/users/user-2.jpg' : post.userprofileimage} alt="user" className="profile-photo-md pull-left" />
            <div className="post-detail">
                <div className="user-info">
                <h5><a href="timeline.html" className="profile-link">{post.username}</a> <span className="following">{post.isfollow && 'following'}</span></h5>
                <p className="text-muted">Published a photo about {post.sharedtime}</p>
                </div>
                <div className="reaction">
                <a href="/post/like" className="btn text-green"><i className="icon ion-thumbsup"></i> {post.likecount}</a>
                <a href="/post/dislike" className="btn text-red"><i className="fa fa-thumbs-down"></i> {post.dislikecount}</a>
                </div>
                <div className="line-divider"></div>
                <div className="post-text">
                <p>{post.comment}<i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                </div>
                <div className="line-divider"></div>

                {
                    comments.map((data,index)=>
                         <div className="post-comment" key={index}>
                            <img src={data.img} alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">{data.username} </a><i className="em em-laughing"></i>{data.comment}</p>
                         </div>
            
                        )
                }

                
                <div className="post-comment">
                <img src={props.currentuserimage} alt="" className="profile-photo-sm" />
                <input type="text" className="form-control" placeholder="Post a comment" />
                </div>
            </div>
            </div>
      </div>

    )
}