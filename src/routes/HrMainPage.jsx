import NavBar from "../component/navBar";
import Footer from "../component/footer";
import BasicTable from "../component/table";
import Edit_user from "../component/Edit_user";
import Table from "../component/table";
import Detail from "../component/Detail";

function HrMainPage() {
    return (
    <div className="Body">
        <NavBar/>
        <Detail id={1}/>
        <Table id={1}/>
        <br />
        <Footer/>
        
    </div>
    )
}
export default HrMainPage;