import { useNavigate} from 'react-router-dom'
export default function UserCars(props) {
        const navigation = useNavigate();
        const {data} = props;   
        const logout = ()=>{
                fetch('http://localhost:9090/api/v1/user/logout',{
                headers:{
                        'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify({
                        token: localStorage.getItem('TOKEN')
                })

                }).then(res=>res.json())
                .then(res=>{
                        alert("Baraşı ile çıkış yapıldı");
                        navigation("/login");
                })
        }
    return(              
            <div className="profile-card">
                    <img src={data?.profileUrl} alt="user" className="profile-photo" />
                    <h5><a href="/profile" className="text-white">{data?.username}</a></h5>
                    <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> {data?.followerCount} followers</a>
                    <button onClick={logout} style={{color:'red', borderRadius:5,marginTop:5}}> Oturumu kapat</button>
            </div>
       
         )
    
}