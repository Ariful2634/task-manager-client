import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

import { useLoaderData, useParams } from "react-router-dom";


const UpdateTask = () => {

    const {user} = useContext(AuthContext)
    
    const {
        register,
        handleSubmit,
        
      
    } = useForm()

    const data = useLoaderData()
    const {id}=useParams()

    const tasks = data.find(task=>task._id==id)
    const {_id}=tasks


    const onSubmit = (data) => {
        console.log(data)
        axios.put(`http://localhost:5000/update/${_id}`, data)
        .then(res => {
            if (res.data.modifiedCount > 0) {
             
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " Task updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
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
                    <input type="text" placeholder="Title" name="title" {...register("title")} className="input input-bordered" defaultValue={tasks.title} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    
                    <textarea className="textarea textarea-bordered" placeholder="Description" name="description" {...register("description")} defaultValue={tasks.description} required></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" placeholder="Deadline" name="deadline" {...register("deadline")} className="input input-bordered" defaultValue={tasks.deadline} required />
                </div>
                <label>Priority</label>
                <select {...register("priority")}>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>

                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-indigo-500 to-yellow-500 font-bold text-lg">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default UpdateTask;