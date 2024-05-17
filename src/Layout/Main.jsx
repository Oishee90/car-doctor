import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;