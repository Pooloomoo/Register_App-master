import NavBar from "../component/navBar";
import Footer from "../component/footer";
import Edit_user from "../component/Edit_user";
import Detail from "../component/detail";
import Tutorial from "../component/CSV_Read";
import CsvUploader from "../component/CSV_Read";
import Table from "../component/UserStatusTable";

//<Table id={0}></Table>

function UserProfile() {
    return (
    <div className="Body">
        <br />
        <Detail />
        <Table id={0}/>
        
    </div> 
    )
}
export default UserProfile;