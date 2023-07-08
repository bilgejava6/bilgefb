
export default function NewUsers(props) {

    const newUserList = [
        {
            username: 'Muhammet',
            img: 'images/users/user-11.jpg'
        },
        {
            username: 'Canan',
            img: 'images/users/user-12.jpg'
        },
        {
            username: 'Deniz',
            img: 'images/users/user-13.jpg'
        },
        {
            username: 'Bahar',
            img: 'images/users/user-14.jpg'
        },
        {
            username: 'Hülya',
            img: 'images/users/user-15.jpg'
        },
        
    ]

    return(
        <div className="suggestions" id="sticky-sidebar">
                <h4 className="grey">Who to Follow</h4>
                {
                    newUserList.map((data,index)=>                        
                            <div className="follow-user" key={index}>
                                <img src={data.img} alt="" className="profile-photo-sm pull-left" />
                                <div>
                                    <h5><a href="timeline.html">{data.username}</a></h5>
                                    <a href="/add" className="text-green">Add friend</a>
                                </div>
                            </div>
                        )
                }
        </div>
    )
}