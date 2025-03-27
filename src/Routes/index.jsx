import AuthContext from "../contexts/authContext";
import HomePage from "../pages/Home";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoute } from "./ProtectedRoute";


export function MainRoutes() {
  const authContext = useContext(AuthContext)
  return (
    <>
      {authContext.isLogged ? <NavBar />: null}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        } />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register}/>
        <Route path="/transactions" Component={() => (<h1>Página de Transações</h1>)} />
        <Route path="/subscription" Component={() => (<h1>Página de Assinaturas</h1>)} />
      </Routes>
      {/* <button onClick={authContext.signIn}>Teste</button> */}
    </>
  )
}