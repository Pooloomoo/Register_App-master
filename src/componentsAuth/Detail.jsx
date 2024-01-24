// Detail.jsx
import React,{useEffect, useState} from 'react';
import "../../StyleComponent/list.css";
import { ListUser } from '../service/UserService';
import axios from 'axios';



export default function Detail({id}) {
    const [user,setUser] = useState([]) 

    useEffect(() => {
        axios.get("http://localhost:8200/api/user/")
        .then(Response => {
            setUser(Response.data)
            console.log(Response.data)
        }).catch(error => {
            console.log(error) 
        })
    },[id])

    if(id == 1){
        return (
        <div className="Head_detail">
            <div className="detail_Profile"><p>Profile <span><button>Edit</button><button>Delete</button></span></p></div>
            <div className='eiei'>
                <div className="detail-left">
                    <p>Project : </p>
                    <p>Description : </p>
                    <br />
                </div>
                <div className="detail-center"></div>
            </div>
        </div>
        );
    } 
    else {
        return (
            <div className="Head_detail">
                <div className='eiei'>
                    {
                        user.map(user => (
                            <div></div>
                        ))
                    }
                    <div className="detail-left">
                        <p>Name: </p>
                        <p>Email: </p>
                        <p>Address: </p>
                    </div>
                    
                    <div className="detail-center">
                        <p>Last Name: </p>
                        <p>Education: </p>
                        <p>Phone: </p>
                    </div>
                </div>
                <button className='btn_edit'>Edit</button>
            </div>
        );
    }
}
