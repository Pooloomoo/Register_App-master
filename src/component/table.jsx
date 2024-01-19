import "../../StyleComponent/table.css"
import React,{useEffect, useState} from "react";
import { ListUser } from "../service/UserService";
import axios from "axios";

const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
};

const FormHead = ({colHead}) => {
    return(
        <th>
            <div>{colHead}</div>
        </th>
    )
}

export default function Table({id}) { 

    const [userProject, setUserProject] = useState([]);

    /*
    useEffect(() => {
        ListUser().then((Response) => {
            setUsers(Response.data);
        }).catch(error => {
            console.log(error)
        })
    }, [])
    */

    useEffect(() => {
        axios.get("http://localhost:8200/api/User/")
        .then(Response => {
            setUserProject(Response.data)
            console.log(Response.data)
        }).catch(error => {
            console.log(error) 
        })
    },[id])

    if (id == 1){
    return(
        <div className="Table_wrapper">
            <div className="Table_project">
                <table className="Table_head">
                <tr>
                    <FormHead colHead="Project"/>
                    <FormHead colHead="Due_Date"/>
                    <FormHead colHead="Position"/>
                    <FormHead colHead="Score"/>
                    <FormHead colHead="Status"/>
                </tr>
                {
                    userProject.map(userProject => {
                    return (    <tr key={userProject.id}>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                </tr>
                        )
                    })
                }
            </table>
            </div>
        </div>
    )
    }
    else {
        return(
            <div className="Table_wrapper">
                <div className="Table_project">
                    <table className="Table_head">
                        <tr>
                            <FormHead colHead="ID"/>
                            <FormHead colHead="First Name"/>
                            <FormHead colHead="Last Name"/>
                            <FormHead colHead="Email"/>
                            <FormHead colHead="Score"/>
                            <FormHead colHead="Status"/>
                        </tr>
                        {
                            userProject.map(userProject => (
                                <tr key={userProject.id}>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <td>{userProject.id}</td>
                                    <br/>
                                    <br/>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        )
    }
}