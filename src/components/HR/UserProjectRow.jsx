import { Link } from "react-router-dom";

const UserProjectRow = (props) => {
  const userProject = props.userProject;
  const handleDelete = props.handleDelete;

  return (
    <tr key={userProject.id}>
      <td>{userProject.id}</td>
      <td>{userProject.user.id}</td>
      <td>{userProject.user.firstName}</td>
      <td>{userProject.user.lastName}</td>
      <td>{userProject.user.educationLevel}</td>
      <td>{userProject.status.id}</td>
      <td>{userProject.status.score || "Null"}</td>
      <td>{userProject.status.userStatus}</td>
      <td>
        <Link className="text-decoration-none" to={`/hr/edit/userproject/${userProject.id}`} >
          <button className="btn btn-warning text-light d-md-block">
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(userProject.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserProjectRow;
