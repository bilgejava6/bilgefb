
export default function ChatBlock(props) {
    /**
     * 
     * props içinden online olan kişilerin listesini alabiliriz. ancak burada şöyle bir yönteme de gidilebilir.
     * bu component içinde sunucuya istek atılarak güncel kişilerin listesi çekilebilir.
     * 
     */
    const userList = [
        {
            username: 'Muhammet',
            image: 'images/users/user-10.jpg'
        },
        {
            username: 'Hakan',
            image: 'images/users/user-11.jpg'
        },
        {
            username: 'Bahar',
            image: 'images/users/user-12.jpg'
        }
    ];
    return(
        <div id="chat-block">
            <div class="title">Chat online</div>
            <ul class="online-users list-inline">
                {
                    userList.map(data=>
                        <li>
                            <a href="newsfeed-messages.html" title={data.username}>
                                <img src={data.image} alt="user" class="img-responsive profile-photo" />
                                <span class="online-dot"></span>
                            </a>
                        </li>
                    )
                }
                
            </ul>
        </div>
    )
}