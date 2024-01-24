import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit_user() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8200/api/User/")
        .then(res => { 
            setData(res.data)
            console.log(res.data)
            console.log(res.data[0])
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const handleInput = (event) => {
        const newData = [...data];
        newData[0] = { ...newData[0], [event.target.name]: event.target.value };
        setData(newData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Assuming the user ID is available in the first element of the array

        if (userId) {
            axios.put(`http://localhost:8200/api/User/${userId}`, data[0])
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            console.log("User ID not available");
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Edit Your Profile</h1>
                <p>Name</p>
                <input type="text" onChange={handleInput} name="firstName"/>
                <p>Last Name</p>
                <input type="text" onChange={handleInput} name="lastName"/>
                <p>Email</p>
                <input type="text" onChange={handleInput} name="email"/>
                <p>Password</p>
                <input type="text" onChange={handleInput} name="password"/>
                <p>Phone Number</p>
                <input type="text" onChange={handleInput} name="phoneNumber"/>
                <p>Education</p>
                <input type="text" onChange={handleInput} name="educationLevel"/>
                <p>Address</p>
                <input type="text" onChange={handleInput} name="address"/>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
