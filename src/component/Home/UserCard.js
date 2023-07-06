
export default function UserCars(props) {


    return(              
            <div class="profile-card">
                    <img src={props.img} alt="user" class="profile-photo" />
                    <h5><a href="timeline.html" class="text-white">{props.username}</a></h5>
                    <a href="#" className="text-white"><i class="ion ion-android-person-add"></i> {props.followers} followers</a>
            </div>
       
         )
    
}