import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddTask = () => {

    const {user} = useContext(AuthContext)
    // const mailUser = user?.email
    const {
        register,
        handleSubmit,
        
        reset,
        // formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        axios.post("http://localhost:5000/tasks",data)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                reset
                Swal.fire(
                    'Congratulations',
                    'Task added Successfully!',
                    'success'
                  )
            }
         })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email" name="email" {...register("email")} className="input input-bordered" defaultValue={user?.email} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title" name="title" {...register("title")} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    {/* <input type="text" placeholder="PhotoURl" name="photoURL" {...register("photoURL")} className="input input-bordered" required /> */}
                    <textarea className="textarea textarea-bordered" placeholder="Description" name="description" {...register("description")} required></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" placeholder="Deadline" name="deadline" {...register("deadline")} className="input input-bordered" required />
                </div>
                <label>Priority</label>
                <select {...register("priority")}>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>

                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default AddTask;