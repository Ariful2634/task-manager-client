import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FaTrash } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";


const TodoList = () => {

    const {user} = useContext(AuthContext)

    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/tasks')
            return res.data

        }

    })

    const todo = tasks.filter(task=>task?.email == user?.email)

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/tasks/${id}`)
                    .then(res => {
                        // console.log(data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })


            }
        })
    }

    return (
        <div>
            {
                todo.map(task => (<div key={task._id} className="card w-[370px] mx-auto border-b border-pink-500 shadow-2xl lg:mx-0 grid-cols-1 mt-10 bg-transparent ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{task.title}</h2>
                        <p>{task.description}</p>
                        <p>{task.deadline}</p>
                        <div className="card-actions justify-center">
                            <button onClick={() => { handleDelete(task._id) }} className="btn bg-gradient-to-r from-pink-500 to-yellow-500  border-none font-bold "><FaTrash></FaTrash>Delete</button>
                            <Link to={`/dashboard/taskUpdate/${task._id}`}><button className="btn bg-gradient-to-r from-indigo-500 to-purple-500  border-none font-bold"><GrDocumentUpdate></GrDocumentUpdate>Update</button></Link>
                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default TodoList;