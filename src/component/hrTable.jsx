import { React, useState, useEffect } from "react";
import "../../StyleComponent/index.css";
import Hr from "./hr";
import { Link } from "react-router-dom";
import axios from "axios";

export default function hrTable() {
    const [hrs, setHrs] = useState([]);
    const [reloadTable, setReloadTable] = useState(false);

    useEffect(() => {
        // console.log("Component Mounted");
        loadData();
        return () => {
            console.log("Component Unmounted");
        };
    }, [reloadTable]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/api/hr/' + id)
            .then(res => {
                console.log("HR ID " + id + " deleted");
                // window.location.reload();
                setReloadTable(prev => !prev);
            })
            .catch(err => console.log(err.response.data))
    }

    const loadData = () => {
        fetch('http://localhost:8080/api/hr/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON data
            })
            .then((data) => {
                setHrs(data); // Update the state with the parsed data
                console.log("Fetched HR data:", data);
            })
            .catch((error) => console.error('Error fetching hr:', error));
    }

                // let newList = hrData.map((data) =>
                // ({
                //     id: data.id,
                //     item1: data.firstName,
                //     item2: data.lastName,
                //     item3: data.email,
                //     item4: data.password,
                //     item5: data.project.id,
                //     item6: data.project.pName
                // })

    // const hrList = hrs.map((hr) =>
    //     <Hr key={hr.id} data={hr}></Hr>
    // );

    return (
        <div className="card mb-4 border-0">
            <h1 className="card-header d-flex justify-content-between align-items-center mb-4 border-0 col-sm-11">HR LIST
                <Link className="btn-group text-decoration-none" to={`/adminUser`}>
                    <button id="button1" type="button" className="btn btn-warning text-light">Switch to User Table</button>
                    <Link className="btn-group text-decoration-none" to={`/create/hr`}>
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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { hrs.map((hr) => <Hr key={hr.id} hr={hr} handleDelete={handleDelete}></Hr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

