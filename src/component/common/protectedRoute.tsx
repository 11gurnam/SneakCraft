import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const ProtectedRoute = ({children}: any) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;
    console.log(user, 'user found!')
    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};

export default ProtectedRoute;
