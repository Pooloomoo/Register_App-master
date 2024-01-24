import axios from "axios";
import { useEffect, useState } from "react";
import "../../StyleComponent/list.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Detail() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8200/api/User/3")
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="main_detail">
            <div className="inner_detail">
                <div className="table_detail">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name :</td>
                                <td>{data.firstName}</td>
                                <td>Last Name :</td>
                                <td>{data.lastName}</td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td>{data.email}</td>
                                <td>Phone :</td>
                                <td>{data.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td>Education :</td>
                                <td>{data.educationLevel}</td>
                                <td>Address :</td>
                                <td>{data.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-warning lh-1 mt-3">Edit</button>
            </div>
        </div>
    )
}
