import { React, useState, useEffect } from "react";
import "../../StyleComponent/index.css";
import User from "./user";

export default function userTable() {
    
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
        fetch('http://localhost:8080/user/')
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


    const userList = list.map((item, index) =>
        <User key={item.id} data={item} index={index} deleteHandler={deleteRow} changeHandler={changeRow}></User>
    );

    return (
        <div class="card mb-4 border-0">
            <h1 class="card-header d-flex justify-content-between align-items-center mb-4 border-0 col-sm-11">USER LIST
            <button id="button1" type="button" class="btn btn-warning text-light d-md-block ">CREATE</button>
            </h1>
            <div class="card-body mb-4 border-0">
                <table id="example1" class="table table-hover table-dark rounded-4 overflow-hidden">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Education</th>
                            <th class="w-25" scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
            </div>
            <br/>
            <br/>
        </div>
    )
}

