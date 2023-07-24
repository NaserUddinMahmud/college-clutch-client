import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import AllColleges from "../Pages/AllColleges/AllColleges";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/collegeDetails/:id',
            element: <CollegeDetails></CollegeDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        },
        {
            path: '/colleges',
            element:<AllColleges></AllColleges>,
            loader: () => fetch('http://localhost:5000/colleges')
        },
        {
            path: '/admission',
            element:<Admission></Admission>,
            loader: () => fetch('http://localhost:5000/colleges')
        },
        {
            path: '/admissionForm/:id',
            element: <AdmissionForm></AdmissionForm>,
            loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        }
      ]
    },
  ]);

  export default router;