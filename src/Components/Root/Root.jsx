import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <><div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div><Footer></Footer></>
    );
};

export default Root;