import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import RightSideNav from "../components/RightSideNav/RightSideNav";
import Error from "../layout/Error/Error";
import Main from '../layout/Main'
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Checkout from "../components/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
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
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <SignUp></SignUp>
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])