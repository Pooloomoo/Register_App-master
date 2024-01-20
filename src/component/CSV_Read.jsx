import { useEffect, useState } from "react";
import axios from "axios";

export default function Tutorial() {

    const [users,setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/")
        .then(res => { 
            setUsers(res.data)
            // console.log(res.data)
            console.log("fetch user successfully!")
        }).catch(error => {
            console.log(error)
        })
    },[])
    return( 
        <div>
            <h1>HELLO</h1>
            <input type="text" />
        </div>
    )
}