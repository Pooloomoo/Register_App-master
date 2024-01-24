import "../../StyleComponent/table.css";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Detail from "./Detail";

const FormHead = ({ colHead }) => {
  return (
    <th>
      <div>{colHead}</div>
    </th>
  );
};

export default function Table(props) {

  const {userProjects, currentUser} = props;
  const [userID, setUserID] = useState(0);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/project/")
  //     .then(Response => {
  //       setUserProject(Response.data)
  //       console.log(Response.data)
  //     }).catch(error => {
  //       console.log(error)
  //     });


  const userProjectRow = userProjects.map((userProject) => ((currentUser.email == userProject.user.email) ? 
    <tr key={userProject.id}>
      <td>{userProject.project.projectName}</td>
      <td>{userProject.project.projectDetail}</td>
      <td>{userProject.status.score}</td>
      <td>{userProject.status.userStatus}</td>
      {/* {setUserID = (
        // () => (
        userProject.user.id
      // )
      )} */}
    </tr> :
    null
  ));

  // console.log("userID: " + userID)
  // console.log("userproject.user.id: " + userProject.user.id)
// 

    return (
      <div className="Table_wrapper">
        <Detail userProjects={userProjects} currentUser={currentUser} userID={userID}/>
        <div className="Table_project">
          <table className="table">
            <thead>
              <tr>
                <FormHead colHead="Project Name" />
                <FormHead colHead="Job Detail" />
                <FormHead colHead="Score" />
                <FormHead colHead="Status" />
              </tr>
            </thead>
            <tbody>
            {userProjectRow}
            </tbody>
          </table>
        </div>
      </div>
    )
  
}
