import NavBar from "../component/navBar";
import UserTable from "../component/userTable";
import Footer from "../component/footer";
function adminMainUser() {
    return (
    <div className="Body">
        <NavBar/>
        <UserTable/>
        <Footer/>
    </div>
    )
}
export default adminMainUser;