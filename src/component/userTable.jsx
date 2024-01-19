import { React, useState, useEffect } from "react";
import "../../StyleComponent/index.css";
import User from "./user";
import { Link } from "react-router-dom";
import axios from "axios";

export default function userTable() {

    const [users, setUsers] = useState([]);
    const [reLoadTable, setReloadTable] = useState(false);

    useEffect(() => {
        loadData();
        
        return () => console.log("Component Mounted");
    }, [reLoadTable]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/api/user/' + id)
            .then(res => {
                console.log("User ID " + id + " deleted");
                setReloadTable(prev => !prev);
            })
            .catch(err => console.log(err.response.data))
    }

    const loadData = () => {
        axios.get('http://localhost:8080/api/user/')
          .then((response) => {
            setUsers(response.data); // Update the state with the data
            console.log("Fetched user data successfully!");
          })
          .catch((error) => {
            console.error('Error fetching user:', error);
          });
    };

    return (
        <div className="card mb-4 border-0">
            <h1 className="card-header d-flex justify-content-between align-items-center mb-4 border-0 col-sm-11">USER LIST
                <Link className="btn-group text-decoration-none" to={`/`}>
                    <button id="button1" type="button" className="btn btn-warning text-light d-md-block">Switch to HR Table</button>
                    <Link className="btn-group text-decoration-none" to={`/create/user/`}>
                        <button id="button1" type="button" className="btn btn-warning text-light d-md-block">CREATE</button>
                    </Link>
                </Link>
            </h1>
            <div className="card-body mb-4 border-0">
                <table id="example1" className="table table-hover table-dark rounded-4 overflow-hidden">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Education</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => <User key={user.id} user={user} handleDelete={handleDelete}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

