import { Form, Link } from "react-router-dom";
import axios from "axios";

const handleDelete = (id) => {
    axios.delete('http://localhost:8080/api/hr/' + id)
        .then(res => {
            alert("HR ID " + id + " deleted");
            window.location.reload();
        })
        .catch(err => console.log(err.response.data))
}

function hr(props) {
    const { index, data } = props;

    // let status = index % 2;
    return (
        <tr key={index}>
            <td>{data.id}</td>
            <td>{data.item1}</td>
            <td>{data.item2}</td>
            <td>{data.item3}</td>
            <td>{data.item4}</td>
            <td>{data.item5}</td>
            <td>{data.item6}</td>
            <td>
                <Link className="text-decoration-none" to={`/admin/edit/hr/${data.id}`}>
                    <button className="btn btn-warning text-light d-md-block" type="submit">Edit</button>
                </Link>

                <button className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(data.id)}>Delete</button>

            </td>
        </tr>
    )
}

export default hr;