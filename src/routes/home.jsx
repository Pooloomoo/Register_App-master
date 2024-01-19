import NavBar from "../component/navBar";
import ProjectBox from "../component/projectBox";
import Footer from "../component/footer";
function Home() {
    return (
    <div className="Body">
        <NavBar/>
        <ProjectBox/>
        <Footer/>
    </div>
    )
}
export default Home;