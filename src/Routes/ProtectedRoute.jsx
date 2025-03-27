import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

export function ProtectedRoute(props) {
  const authContext = useContext(AuthContext)
  if (!authContext.isLogged) {
    return <Navigate to={"/login"} replace />
  }
  return props.children
}