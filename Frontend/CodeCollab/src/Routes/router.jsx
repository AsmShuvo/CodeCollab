import { createBrowserRouter } from "react-router-dom"
import Main from "../Main/Main"
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"
import Error from "../Components/Error"
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
])