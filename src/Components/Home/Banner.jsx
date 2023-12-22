/* eslint-disable react/no-unescaped-entities */
// import banner from '../../assets/task banner.png'
import { useContext } from "react";
import {  Link} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Banner = () => {

    const {user}=useContext(AuthContext)

    return (
        <div className="mt-3">
            <div className="bg-[url('https://i.ibb.co/n1tYkxn/tbanner-removebg-preview.png')] bg-cover bg-center bg-no-repeat w-[350px] h-[300px] lg:w-[700px] mx-auto lg:h-[450px] relative">
                <div className="text-center">
                   {
                    user ?  <Link to='/dashboard/addTask'><button className="btn absolute top-[280px] lg:top-[420px]  bg-gradient-to-r from-sky-500 to-purple-500  font-bold">Let's Explore</button></Link> :
                    <Link to='/login'><button className="btn absolute top-[280px] lg:top-[420px]  bg-gradient-to-r from-sky-500 to-purple-500 text-white font-bold">Let's Explore</button></Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default Banner;