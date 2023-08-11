import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import LayoutPrivete from "../layout/LayoutPrivete";
import Dashboard from "../pages/Dashboard";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/dashboard',
                element: <LayoutPrivete/>,
                children:[
                    {
                        index:true,
                        element: <Dashboard/>,
                    }
                ]
            }
        ]
    }
])