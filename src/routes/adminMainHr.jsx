import NavBar from "../component/navBar";
import HrTable from "../component/hrTable";
import Footer from "../component/footer";
function adminMainHr() {
    return (
    <div className="Body">
        <NavBar/>
        <HrTable/>
        <Footer/>
    </div>
    )
}
export default adminMainHr;