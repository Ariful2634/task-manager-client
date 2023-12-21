import {  Link, NavLink } from "react-router-dom";
import logo from "../../../assets/TaskManagerLogo-Final-removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        <li><NavLink to='/booking'>My Booking</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 mt-3 border-b border-pink-500  shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                    <img className="w-[150px]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">

                    {/* for image drop down */}
                    <div>
                        {
                            user?.email ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-16 rounded-full">
                                        {
                                            user && <img src={user.photoURL} />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm text-blue-600 font-bold  btn-ghost">{
                                            user && <p>{user.displayName}</p>
                                        }</button>

                                    </li>
                                    <li>
                                        <button onClick={handleOut} className="btn btn-sm text-green-600 font-bold btn-ghost">Logout</button>

                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to='/login'>
                                    <button className="btn  mr-2  bg-gradient-to-r from-pink-500 to-yellow-500  ">Login</button>
                                </Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;