import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { loginUser, googleIn } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError("")

        loginUser(email, password)
            .then(res => {
                const loggedInUser = res.user;
                console.log(loggedInUser)
                navigate(location?.state ? location.state : '/dashboard/addTask')

                Swal.fire(
                    'Congratulations',
                    'You Logged In Successfully!',
                    'success'
                )


            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })

    }

    const handleGoogle = () => {
        googleIn()
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire(
                    'Congratulations',
                    'You Logged In Successfully!',
                    'success'
                )
                navigate(location?.state ? location.state : '/dashboard/addTask')
            })
            .catch(error => {

                console.log(error)
            })
    }


    return (
        <div>
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0  w-96 max-w-sm  border border-purple-800">

                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="Password" className="input input-bordered" required />
                                <span className='absolute top-[53px] left-[280px]' onClick={() => (setShow(!show))}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    error && <p className="text-red-600 font-bold">{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button

                                    className=" text-white font-[700] rounded-lg py-4 px-6 w-full bg-gradient-to-r from-pink-500 to-yellow-500 "
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <h3 className='text-center mb-3 font-bold'>Or Sign In with</h3> <hr />
                        <div className='text-center mb-3 mt-3'>

                            <button onClick={handleGoogle} className='btn btn-outline'><FaGoogle></FaGoogle>Google</button>
                        </div>
                        <div>
                            <p className='text-center mb-4'>Already have an account? <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;