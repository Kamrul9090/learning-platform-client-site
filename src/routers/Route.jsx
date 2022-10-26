import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import RightSideNav from "../components/RightSideNav/RightSideNav";
import Error from "../layout/Error/Error";
import Main from '../layout/Main'
import SignUp from "../components/SignUp/SignUp";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home> 
            // },
            {
                path: '/courses',
                element: <Courses></Courses>
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
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ],
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])