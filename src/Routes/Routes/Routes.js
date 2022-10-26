import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../layouts/pages/Blog/Blog/Blog";
import FAQ from "../../layouts/pages/FAQ/FAQ/FAQ";
import Home from "../../layouts/pages/Home/Home/Home";
import Register from "../../layouts/pages/Register/Register/Register";
import Login from "../../layouts/pages/Login/Login/Login";
import Courses from "../../layouts/pages/Courses/Courses/Courses";
import CoursesDetails from "../../layouts/pages/CoursesDetails/CoursesDetails/CoursesDetails";
import Category from "../../layouts/pages/Courses/Category/Category";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/courses',
                 loader: ({params}) => fetch('http://localhost:5000/courses'),
                element:<Courses></Courses>
            },
            {
                path: '/catagory/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element:<CoursesDetails></CoursesDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/faq',
                element:<FAQ></FAQ>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/',
                element:<Home></Home>
            },
        ]
    },
    {
        path: '*',
        element:<h1>Page not found: 404</h1>
    }
]) 

