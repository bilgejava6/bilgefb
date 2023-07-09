
export default function NewUsers(props) {

    const {newUserList} = props;

    return(
        <div className="suggestions" id="sticky-sidebar">
                <h4 className="grey">Who to Follow</h4>
                {
                    newUserList.map((data,index)=>                        
                            <div className="follow-user" key={index}>
                                <img src={data.profileUrl} alt="" className="profile-photo-sm pull-left" />
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