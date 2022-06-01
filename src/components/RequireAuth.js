import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const location = useLocation();
    const { auth } = useAuth();
    console.log('allowed',allowedRoles)
    
    return(
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.email
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{from: location}} replace />
    )
   
}

export default RequireAuth;