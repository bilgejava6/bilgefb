
export default function UserCars(props) {

     const {data} = props;   
      
    return(              
            <div className="profile-card">
                    <img src={data?.profileUrl} alt="user" className="profile-photo" />
                    <h5><a href="/profile" className="text-white">{data?.username}</a></h5>
                    <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> {data?.followerCount} followers</a>
            </div>
       
         )
    
}