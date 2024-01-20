import UserTable from "../../component/admin/userTable";
import NavBar from "../../component/์NavBar";

function adminMainUser() {
    return (
    <div className="Body">
        <NavBar/>
        <UserTable/>
    </div>
    )
}
export default adminMainUser;