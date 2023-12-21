import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AuthProvider from './Components/Provider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import AddTask from './Components/Dashboard/AddTask';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TodoList from './Components/Dashboard/TodoList';
import UpdateTask from './Components/Dashboard/UpdateTask';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'addTask',
        element: <AddTask></AddTask>
      },
      {
        path: 'todoList',
        element: <TodoList></TodoList>
      },
      {
        path:'taskUpdate/:id',
        element:<UpdateTask></UpdateTask>,
        loader:()=>fetch("http://localhost:5000/tasks")
        
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
