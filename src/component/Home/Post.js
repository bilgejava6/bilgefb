
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
        
        <div class="post-content">                
            <img src={post.postimage} alt="post-image" class="img-responsive post-image" />
            <div class="post-container">
            <img src={post.userimg} alt="user" class="profile-photo-md pull-left" />
            <div class="post-detail">
                <div class="user-info">
                <h5><a href="timeline.html" class="profile-link">{post.username}</a> <span class="following">{post.isfollow && 'following'}</span></h5>
                <p class="text-muted">Published a photo about {post.sharedtime}</p>
                </div>
                <div class="reaction">
                <a href="/post/like" class="btn text-green"><i class="icon ion-thumbsup"></i> {post.likecount}</a>
                <a href="/post/dislike" class="btn text-red"><i class="fa fa-thumbs-down"></i> {post.dislikecount}</a>
                </div>
                <div class="line-divider"></div>
                <div class="post-text">
                <p>{post.usercomment}<i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                </div>
                <div class="line-divider"></div>

                {
                    comments.map(data=>
                         <div class="post-comment">
                            <img src={data.img} alt="" class="profile-photo-sm" />
                            <p><a href="timeline.html" class="profile-link">{data.username} </a><i class="em em-laughing"></i>{data.comment}</p>
                         </div>
            
                        )
                }

                
                <div class="post-comment">
                <img src={props.currentuserimage} alt="" class="profile-photo-sm" />
                <input type="text" class="form-control" placeholder="Post a comment" />
                </div>
            </div>
            </div>
      </div>

    )
}