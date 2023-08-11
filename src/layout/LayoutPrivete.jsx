import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivete = () => {
    const {user} = useUserContext();
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     if(!user){
    //         navigate('/');
    //     }
    // },[user])
    return (<> 
               {
                user? <Outlet/> :<Navigate to="/"/> 
               }   
            </>)
}

export default LayoutPrivete;