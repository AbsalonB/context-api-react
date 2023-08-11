import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
    const {user} = useUserContext();
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Bienvenido: {user.name}</h2>
            <h3>Email: {user.email}</h3>
        </>
    )
}

export default Dashboard;