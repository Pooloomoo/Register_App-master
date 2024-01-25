import axios from "axios";
import { useEffect, useState } from "react";
import "../../StyleComponent/list.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from "react-router-dom";

export default function Detail({currentUser, userProjects}) {
    const [data, setData] = useState([]);
    // const [userID, setUserID] = usesState(0);
    

//     const userId = userProjects.map((userProject, index) => 
//     (userID === 0) 
//       ? (currentUser.email === userProject.user.email) 
//           ? setUserID(userProject.user.id) 
//           : null 
//       : null
//   );


    useEffect(() => {
        // let uid = 0;
        // console.log("User project length " ,userProjects.length);
        // for (let i = 0; i < userProjects.length; i++) {
        //     uid = userProjects[i].user.id;
        //     console.log(currentUser.email , userProjects[i].user.email);
        //     if (currentUser.email === userProjects[i].user.email) {
        //         setUserID(uid);
        //         break;
        //     }
        // }    
        // console.log(uid);
        axios.get("http://localhost:8080/api/user/" + 1)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(error => {
                console.log(error)
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
                <Link className="text-decoration-none me-2" to={`/user/edit/user-detail/${1}`}>
                    <button className="btn btn-warning lh-1 mt-3">Edit</button>
                </Link>
            </div>
        </div>
    )
}
