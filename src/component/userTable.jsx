import { React, useState, useEffect } from "react";
import "../../StyleComponent/index.css";
import User from "./user";
import { Link } from "react-router-dom";

export default function userTable() {

    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        // console.log("Component Mounted");
        loadData();

        return unMounted;
    }, []);

    function unMounted() {
        // console.log("Component Unmounted");
    }

    function loadData() {
        fetch('http://localhost:8080/api/user/')
            .then(response => response.json())
            .then(userData => {
                let newList = userData.map((data) =>
                ({
                    id: data.id,
                    item1: data.fName,
                    item2: data.lName,
                    item3: data.email,
                    item4: data.password,
                    item5: data.phone,
                    item6: data.education,
                    item7: data.address
                })
                );
                setList(newList);
            });
    }

    const userList = list.map((item, index) =>
        <User key={item.id} data={item} index={index}></User>
    );

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
                        {userList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

