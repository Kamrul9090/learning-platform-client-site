import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import RightSideNav from "../components/RightSideNav/RightSideNav";
import Error from "../layout/Error/Error";
import Main from '../layout/Main'
import SignUp from "../components/SignUp/SignUp";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Checkout from "../components/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/home',
                element: <Courses></Courses>
            },

            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/public',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

        ],
    },
    {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <SignUp></SignUp>
    },
])