import { useEffect, useState } from "react";
import Detail from "../../../components/user/Detail";
import Table from "../../../components/user/UserStatusTable";
import { getCurrentUser } from "../../../util/APIUtils";
import { useParams } from "react-router-dom";
import axios from "axios";

//<Table id={0}></Table>

function UserProfile() {
    const [userProjects, setUserProjects] = useState([]);
    const [status, setStatus] = useState({
        score: null,
        userStatus: null
    });

    const [currentUser, setCurrentUser] = useState(null);
  
    const { id } = useParams();
    useEffect(() => {
      async function fetchCurrentUser() {
        try {
          const user = await getCurrentUser();
          setCurrentUser(user);
        } catch (error) {
          // Handle error fetching user data
          console.error("Error fetching current user:", error);

        }

        axios.get('http://localhost:8080/api/userproject/')
        .then(res => {
          setUserProjects(res.data);   
          console.log("Fetched userProject data successfully!");
        })
        .catch(err => console.log("Fecting userProject error: " + err));
      }
    
      fetchCurrentUser();
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