import { useEffect, useState } from "react";
import axios from "axios";

export default function Tutorial() {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8200/api/User/")
        .then(res => { 
            setData(res.data)
            console.log(res.data)
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