import React from 'react';

export default function ChatBlock(props) {

    const [userList,setUserList] = React.useState([]);
    /**
     * 
     * props içinden online olan kişilerin listesini alabiliriz. ancak burada şöyle bir yönteme de gidilebilir.
     * bu component içinde sunucuya istek atılarak güncel kişilerin listesi çekilebilir.
     * 
     */
    const getOnlineList = ()=>{
        fetch('http://localhost:9090/api/v1/online/onlineUsers',{
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                token : localStorage.getItem('TOKEN')
            })
        })
        .then(res=>res.json())
        .then(res=>{
            setUserList(res.data);
        })
    }
   
    React.useEffect(()=>{
        setInterval(()=>{
            getOnlineList();
        },500);        
    },[]);

    return(
        <div id="chat-block">
            <div className="title">Chat online</div>
            <ul className="online-users list-inline">
                {
                    userList?.map((data,index)=>
                        <li key={index}>
                            <a href="newsfeed-messages.html" title={data.username}>
                                <img src={data.profileUrl} alt="user" className="img-responsive profile-photo" />
                                <span className="online-dot"></span>
                            </a>
                        </li>
                    )
                }
                
            </ul>
        </div>
    )
}