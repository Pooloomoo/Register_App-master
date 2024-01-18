import { React, useState, useEffect } from "react";
import "../../StyleComponent/index.css";
import Hr from "./hr";
import { Link } from "react-router-dom";

export default function hrTable() {
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
        fetch('http://localhost:8080/api/hr/')
            .then(response => response.json())
            .then(hrData => {
                let newList = hrData.map((data) =>
                ({
                    id: data.id,
                    item1: data.firstName,
                    item2: data.lastName,
                    item3: data.email,
                    item4: data.password,
                    item5: data.project.id,
                    item6: data.project.pName
                })
                );
                setList(newList);
            });
    }

    const hrList = list.map((item, index) =>
        <Hr key={item.id} data={item} index={index}></Hr>
    );

    return (
        <div className="card mb-4 border-0">
            <h1 className="card-header d-flex justify-content-between align-items-center mb-4 border-0 col-sm-11">HR LIST
                <Link className="btn-group text-decoration-none" to={`/adminUser`}>
                    <button id="button1" type="button" className="btn btn-warning text-light">Switch to User Table</button>
                    <Link className="btn-group text-decoration-none" to={`/create/hr/`}>
                        <button id="button1" type="button" className="btn btn-warning text-light">ADD +</button>
                    </Link>
                </Link>
            </h1>
            <div className="card-body mb-4 border-0">
                <table id="example1" className="table table-hover table-dark rounded-4 overflow-hidden ">
                    <thead>
                        <tr>
                            <th scope="col">HR ID</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Project ID</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hrList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

