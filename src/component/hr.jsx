import { Form, Link} from "react-router-dom";

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
            <td>
                <Link className="" to={`/edit/${data.id}`}>
                    <button className="btn btn-warning text-light d-md-block" type="submit">Edit</button>
                </Link>
                <Form
                    method="post"
                    action="destroy"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to delete this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button className="btn btn-danger btn-sm" type="submit">Delete</button>
                </Form></td>
        </tr>
    )
}

export default hr;