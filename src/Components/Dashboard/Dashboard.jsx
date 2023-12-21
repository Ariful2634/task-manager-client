import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from 'react-lottie';
import loti from '../../lottie/Animation - 1703166073696.json'


const Dashboard = () => {

    const { user } = useContext(AuthContext)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="drawer lg:drawer-open max-w-6xl mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-10 lg:mx-28">
                {/* Page content here */}
                <div className="-mt-10">
                    <Outlet></Outlet>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary w-20 mx-auto mt-2 lg:mt-6 drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <div className="w-44 ">
                    <div className="bg-indigo-200 p-2 rounded-lg lg:mt-10">
                        <div className="flex justify-center">
                            {
                                user && <img className="w-32  rounded-full" src={user.photoURL} />
                            }
                        </div>
                        <div className="text-center">
                            <button className="btn btn-sm text-blue-600 font-bold text-xl mt-1  btn-ghost">{
                                user && <p>{user.displayName}</p>
                            }</button>
                        </div>
                    </div>
                    <ul className="menu  italic font-bold bg-sky-200 rounded-lg mt-4">

                        
                            <>
                                <li >
                                    <NavLink to={'/'}><FaHome></FaHome>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addTask'> Add Task</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/todoList'> To-do List</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/myProducts'> My Products</NavLink>
                                </li>

                            </>
                        

                    </ul>

                    <div className="bg-pink-100 rounded-lg mt-4">
                    <Lottie options={defaultOptions}
                        height={150}
                        width={150}
                    />
                </div>
                </div>
               

            </div>

        </div>
    );
};

export default Dashboard;