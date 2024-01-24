import axios from "axios";

import { ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import { useEffect, useState } from "react";
import "../../StyleComponent/list.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { getCurrentUser } from './../../util/APIUtils';

export default function Detail({currentUser1, userProjects1}) {
    let currentUser = [];
    let userProjects = [];
    const [data, setData] = useState([]);
    const [userID, setUserID] = useState(0);
    

//     const userId = userProjects.map((userProject, index) => 
//     (userID === 0) 
//       ? (currentUser.email === userProject.user.email) 
//           ? setUserID(userProject.user.id) 
//           : null 
//       : null
//   );

   

    useEffect(() => {
        //getData();
        let token = localStorage.getItem(ACCESS_TOKEN);

        axios.get('http://localhost:8080/api/userproject/')
        .then(res=> {
            userProjects = res.data;
            console.log( "User Project ", userProjects);
            axios.get('http://localhost:8080/api/user_auth/me' , {headers: {"Content-Type": 'application/json', "Authorization" : `Bearer ${token}`}})
            .then( res2=>{
                currentUser = res2.data;

                let uid = 0;
                console.log("User project length " ,userProjects.length , currentUser);
                for (let i = 0; i < userProjects.length; i++) {
                    uid = userProjects[i].user.id;
                    console.log(currentUser.email , userProjects[i].user.email);
                    if (currentUser.email === userProjects[i].user.email) {
                        setUserID(uid);
                        break;
                    }
                }    
                console.log(uid);
                if ( uid !== 0) {
                axios.get("http://localhost:8080/api/user/" + uid)
                    .then(res => {
                        setData(res.data)
                        console.log(res.data)
                    }).catch(error => {
                        console.log(error)
                    })
                }




            }) 
        })
        
        

        
    }, []);



    return (
        <div className="main_detail">
            <div className="inner_detail">
                <div className="table_detail">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name :</td>
                                <td>{data.firstName}</td>
                                <td>Last Name :</td>
                                <td>{data.lastName}</td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td>{data.email}</td>
                                <td>Phone :</td>
                                <td>{data.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td>Education :</td>
                                <td>{data.educationLevel}</td>
                                <td>Address :</td>
                                <td>{data.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-warning lh-1 mt-3">Edit</button>
            </div>
        </div>
    )
}
