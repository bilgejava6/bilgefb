import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchCreateComment, fetchGetCommentList } from "../../store/features/commentSlice";
export default function Post(props) {
    /**
     * props bir tag olarak kullanılan funtion ın içine geçilen properties olarak nitelendirilir.
     * ancak çok fazla özelliğiniz ve dataniz var ise bütün bilgileri props a geçmek zahmetli ve anlamsızdır.
     */
    const dispatch = useDispatch();
    const {post,profile} = props;
    let textComment = React.useRef();
    const [comment,setComment] = React.useState('');
    const [commentList,setCommentList] = React.useState([]);

    const token = useSelector((state)=> state.auth.token);
    
    const getCommentList= ()=>{
        dispatch(fetchGetCommentList({token, postid: parseInt(post.id)})).then(data=>setCommentList(data.payload))
    };
    const createComment = (event)=>{
        if(event.key==='Enter')
            dispatch(fetchCreateComment({
                token: token,
                postid: parseInt(post.id),
                userid: parseInt(profile.userid),
                comment: comment
            })).then(()=>{
                textComment.current.value = '';
                getCommentList()
            });    
    };

    React.useEffect(()=>{
        getCommentList();
    },[]);
    console.log(commentList);
    return(
        
        <div className="post-content" key={post.id}>                
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
                <p>{post.comment}</p>
                </div>
                <div className="line-divider"></div>

                {
                    commentList?.map((data,index)=>
                         <div className="post-comment" key={index}>
                            <img src={data?.profileurl} alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">{data?.username} </a>{data?.comment}</p>
                         </div>
            
                        )
                }

                
                <div className="post-comment">
                <img src={profile?.profileUrl} alt="" className="profile-photo-sm" />
                <input type="text" className="form-control" onKeyDown={createComment} onChange={event=>setComment(event.target.value)} 
                    placeholder="Post a comment" ref={textComment}/>
                </div>
            </div>
            </div>
      </div>

    )
}