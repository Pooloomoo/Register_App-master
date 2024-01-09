import React from "react";
import "../../StyleComponent/index.css";

export default function userTable() {
    
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
                            <th class="w-25" scope="col">Education</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>user1@gmail.com</td>
                            <td>*****</td>
                            <td>*****</td>
                            <td>*****</td>
                            <td class="vert-align">
                                <div class="btn-group" role="group">
                                    <button id="button2" type="button" class="btn btn-warning text-light">Edit</button>
                                </div>
                                <div class="btn-group" role="group">
                                    <button id="button2" type="button" class="btn btn-danger text-light">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>*****</td>
                            <td>*****</td>
                            <td>*****</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <button id="button2" type="button" class="btn btn-warning text-light">Edit</button>
                                </div>
                                <div class="btn-group" role="group">
                                    <button id="button2" type="button" class="btn btn-danger text-light">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>James</td>
                            <td>@LJames</td>
                            <td>************</td>
                            <td>*****</td>
                            <td>*****</td>
                            <td>
                                <div class="btn-group" role="group">
                                    <button id="button2" type="button" class="btn btn-warning text-light">Edit</button>
                                </div>
                                <div class="btn-group" role="group">
                                    <button id="button2" type="button" class="btn btn-danger text-light">Delete</button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

