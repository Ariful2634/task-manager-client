import { Outlet,useLocation } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";



const Root = () => {
    
    const location = useLocation()
    

    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')


    return (
        <div className="max-w-6xl mx-auto">
             { noHeaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;