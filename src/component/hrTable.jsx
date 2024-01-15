import { React, useState, useEffect } from "react";
import "../../StyleComponent/index.css";
import Hr from "./hr";
import {Link} from "react-router-dom";

export default function hrTable() {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log("Component Mounted");
        loadData();

        return unMounted;
    }, []);

    function unMounted() {
        console.log("Component Unmounted");
    }

    function loadData() {
        fetch('http://localhost:8080/hr/')
            .then(response => response.json())
            .then(hrData => {
                let newList = hrData.map((data) =>
                ({
                    id: data.id,
                    item1: data.firstName,
                    item2: data.lastName,
                    item3: data.email,
                    item4: data.password
                })
                );
                setList(newList);
            });
    }

    function deleteRow(index) {
        list.splice(index, 1);
        const newList = [...list];
        setList(newList);
    }

    function changeRow(index, newItem) {
        const newList = [...list];
        newList[index] = newItem;
        setList(newList);
    }


    const hrList = list.map((item, index) =>
        <Hr key={item.id} data={item} index={index} deleteHandler={deleteRow} changeHandler={changeRow}></Hr>
    );

    return (
        <div class="card mb-4 border-0">
            <h1 class="card-header d-flex justify-content-between align-items-center mb-4 border-0 w-75">HR LIST
            <div className="btn-group">
                <Link id="button1" type="button" class="btn btn-warning text-light btn-sm d-md-block">ADD +</Link>
            </div>
                
            </h1>
            <div class="card-body mb-4 border-0">
                <table id="example1" class="table table-hover table-dark rounded-4 overflow-hidden w-75">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FirstName</th>
                            <th class="w-25" scope="col">LastName</th>
                            <th class="w-25" scope="col">Email</th>
                            <th scope="col">Password</th>
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

