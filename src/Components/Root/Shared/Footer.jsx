import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/TaskManagerLogo-Final-removebg-preview.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-8 mb-2 rounded bg-gradient-to-r from-sky-300 to-purple-500 text-neutral-content">
                <aside>
                <img className="w-[200px]" src={logo} alt="" />
                    <p className="ml-8 text-white font-bold text-xl italic">Task Manager Ltd.<br />Your Task Note Partner</p>
                </aside>
                <nav>
                    <header className="footer-title text-2xl text-white ml-8">Social</header>
                    <div className="grid grid-flow-col gap-4 ml-8">
                        <a href=""><span><FaFacebook className="text-3xl text-white"></FaFacebook></span></a>
                        <a href=""><span><FaLinkedin className="text-3xl text-white"></FaLinkedin></span></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;