import { useEffect, useState } from "react";
import { ACCESS_TOKEN, API_BASE_URL } from '../../../constants';
import Detail from "../../../components/user/Detail";
import Table from "../../../components/user/UserStatusTable";
import { getCurrentUser } from "../../../util/APIUtils";
import { useParams } from "react-router-dom";
import axios from "axios";

//<Table id={0}></Table>

function UserProfile() {
    let u;
    const [userProjects, setUserProjects] = useState([]);
    const [status, setStatus] = useState({
        score: null,
        userStatus: null
    });

    const [currentUser, setCurrentUser] = useState(null);
  
    const { id } = useParams();
   useEffect(() => {
      async function getData() {
        const res1 =   await axios.get('http://localhost:8080/api/userproject/')
        console.log(res1.data);
        setUserProjects(res1.data);   
       
      let token = localStorage.getItem(ACCESS_TOKEN);

       const res2 = await axios.get('http://localhost:8080/api/user_auth/me' , {headers: {"Content-Type": 'application/json', "Authorization" : `Bearer ${token}`}})
        setCurrentUser(res2.data); 
        console.log(res1.data , res2.data);  
        
      }
    //getData();
//fetchCurrentUser();
    }, []);

    return (
    <div className="Body">
        <br />
        <Detail userProjects={userProjects} currentUser={currentUser} />
      
        <Table userProjects={userProjects} currentUser={currentUser}/>
    </div> 
    )
}
export default UserProfile;