import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import AllColleges from "../Pages/AllColleges/AllColleges";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            loader: ({params}) => fetch(`https://college-clutch-server.vercel.app/colleges/${params.id}`)
        },
        {
            path: '/colleges',
            element:<AllColleges></AllColleges>,
            loader: () => fetch('https://college-clutch-server.vercel.app/colleges')
        },
        {
            path: '/admission',
            element:<Admission></Admission>,
            loader: () => fetch('https://college-clutch-server.vercel.app/colleges')
        },
        {
            path: '/admissionForm/:id',
            element: <AdmissionForm></AdmissionForm>,
            loader: ({params}) => fetch(`https://college-clutch-server.vercel.app/colleges/${params.id}`)
        },
        {
            path: '/booking',
            element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
            
        }
      ]
    },
  ]);

  export default router;