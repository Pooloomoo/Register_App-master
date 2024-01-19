import { Form, Link } from "react-router-dom";

function user(props) {
    const user= props.user;
    const handleDelete = props.handleDelete;

    // let status = index % 2;
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.educationLevel}</td>
            <td>{user.address}</td>
            <td>
                <Link className="text-decoration-none" to={`/edit/user/${user.id}`}>
                    <button className="btn btn-warning text-light d-md-block" type="submit">Edit</button>
                </Link>
                <button className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}>Delete</button>

            </td>
        </tr>
    )
}

export default user;