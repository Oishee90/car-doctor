import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="w-1/2"><span className="loading loading-spinner text-info"></span></div>
    }
    if(user?.email){
        return children
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;