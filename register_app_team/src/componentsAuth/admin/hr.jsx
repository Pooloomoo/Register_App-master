import { Form, Link } from "react-router-dom";
import axios from "axios";



function hr(props) {
    const hr = props.hr;
    const handleDelete = props.handleDelete;

    // let status = index % 2;
    return (
        <tr key={hr.id}>
            <td>{hr.id}</td>
            <td>{hr.firstName}</td>
            <td>{hr.lastName}</td>
            <td>{hr.email}</td>
            <td>{hr.password}</td>
            <td>
                <Link className="text-decoration-none" to={`/edit/hr/${hr.id}`}>
                    <button className="btn btn-warning text-light d-md-block" type="submit">Edit</button>
                </Link>

                <button className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(hr.id)}>Delete</button>

            </td>
        </tr>
    )
}

export default hr;