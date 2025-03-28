import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

export function ProtectedRoute(props) {
  const authContext = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (authContext) {
      authContext.checkUser().then(() => {
        setLoading(false)
      })
    }
  }, [authContext])

  if (loading) {
    return <h1 style={{ color: 'white' }}>Carregando</h1>
  }

  if (!loading && authContext.isLogged) {
    return props.children
  }

  return <Navigate to={"/login"} replace />
}