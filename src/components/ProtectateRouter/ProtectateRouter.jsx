import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Profile from "../../Pages/Profile";
import { Navigate } from "react-router-dom";

const ProtectateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default ProtectateRouter;
