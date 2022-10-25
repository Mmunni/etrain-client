import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../layouts/pages/Home/Home/Home";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    },
    {
        path: '*',
        element:<h1>Page not found: 404</h1>
    }
]) 

