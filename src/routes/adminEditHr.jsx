import NavBar from "../component/navBar";
import HrTableEdit from "../component/hrTableEdit";
import Footer from "../component/footer";
function adminMainHr() {
    return (
    <div className="Body">
        <NavBar/>
        <HrTableEdit/>
        <br/>
        <br/>
        <Footer/>
    </div>
    )
}
export default adminMainHr;