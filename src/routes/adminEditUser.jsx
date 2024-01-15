import NavBar from "../component/navBar";
import UserTableEdit from "../component/userTableEdit";
import Footer from "../component/footer";
function adminMainUser() {
    return (
    <div className="Body">
        <NavBar/>
        <UserTableEdit/>
        <br/>
        <br/>
        <Footer/>
        
    </div>
    )
}
export default adminMainUser;