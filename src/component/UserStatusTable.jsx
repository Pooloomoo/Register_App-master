import "../../StyleComponent/table.css";
import React, { useEffect, useState } from "react";
import { ListUser } from "../service/UserService";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
};

const FormHead = ({ colHead }) => {
  return (
    <th>
      <div>{colHead}</div>
    </th>
  );
};

export default function Table({ id }) {

  const [userProject, setUserProject] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8200/api/Project/")
      .then(Response => {
        setUserProject(Response.data)
        console.log(Response.data)
      }).catch(error => {
        console.log(error)
      });
    axios.get("http://localhost:8200/api/Status/")
      .then(res => {
        setStatus(res.data)
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  }, [id])

  if (id === 1) {
    return (
      <div className="Table_wrapper">
        <div className="Table_project">
          <table className="table">
            <thead>
              <tr>
                <FormHead colHead="Project" />
                <FormHead colHead="Due_Date" />
                <FormHead colHead="Position" />
                <FormHead colHead="Score" />
                <FormHead colHead="Status" />
              </tr>
            </thead>
            <tbody>
              {userProject.map(userProject => (
                <tr key={userProject.id}>
                  <td>{userProject.id}</td>
                  <td>{userProject.id}</td>
                  <td>{userProject.id}</td>
                  <td>{userProject.id}</td>
                  <td>{userProject.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div className="Table_wrapper">
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
              {userProject.map((userProject, idx) => (
                <tr key={userProject.id}>
                  <td>{userProject.projectName}</td>
                  <td>{userProject.projectDetail}</td>
                  {/*<td>{userProject.status.score}</td>*/}
                  {/*<td>{userProject.status.userStatus}</td>*/}
                  <td>{status[idx].score}</td>
                  <td>{status[idx].userStatus}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
