import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TodoList = () => {

    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/tasks')
            return res.data

        }

    })

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
                tasks.map(task => (<div key={task._id} className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{task.title}</h2>
                        <p>{task.description}</p>
                        <p>{task.deadline}</p>
                        <div className="card-actions justify-center">
                            <Link to={`/dashboard/taskUpdate/${task._id}`}><button className="btn btn-primary">Update</button></Link>
                            <button onClick={() => { handleDelete(task._id) }} className="btn btn-primary">Delete</button>

                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default TodoList;