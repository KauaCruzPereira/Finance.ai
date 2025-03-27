import { createContext, useState } from "react";
import { baseUrl } from "../Utils/api";

const AuthContext = createContext({
  user: {},
  isLogged: false,
  signIn: Function,
  signOut: Function,
  register: Function
})

export const AuthProvider = function ({
  children }) {
  const [isLogged, setIslogged] = useState(false)
  function signIn() {
    setIslogged(!isLogged)
  }
  async function register(name, email, password) {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
   
    const json = await res.json()
    if (res.status !== 201){
    return {success: false, message: json.message}
   }
    
   return {success: true, message: ""}
  }
  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signIn,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
