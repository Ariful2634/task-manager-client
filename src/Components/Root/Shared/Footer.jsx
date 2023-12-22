import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/TaskManagerLogo-Final-removebg-preview.png"
import moment from 'moment';

const Footer = () => {

    const time = moment()
    const date = time.format('YYYY');

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
                        <a href="https://www.facebook.com/arifulislam.ariful.37/"><span><FaFacebook className="text-3xl text-white"></FaFacebook></span></a>
                        <a href="https://www.linkedin.com/in/mai25cse/"><span><FaLinkedin className="text-3xl text-white"></FaLinkedin></span></a>
                    </div>
                    <h2 className="mt-6 font-bold ml-8 text-xl">{date}, Task Manager. All rights reserved</h2>
                </nav>
                
            </footer>
        </div>
    );
};

export default Footer;