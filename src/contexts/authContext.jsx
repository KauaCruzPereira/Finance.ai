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

  const [user, setUser] = useState()

  async function checkUser() {
    const token = localStorage.getItem('API_TOKEN')
    if(!user && token){
    const res = await fetch(`${baseUrl}/auth/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const json = await res.json()
      setUser(json)
      return true
    }
  }

  async function signIn(email, password) {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await res.json()

    if (res.status !== 200) {
      return { success: false, message: json.message }
    }

    setUser(json.user)
    localStorage.setItem('API_TOKEN', json.token)
    return { success: true, message: "" }
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

    if (res.status !== 201) {
      return { success: false, message: json.message }
    }

    return { success: true, message: "" }
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user,
        signIn,
        register,
        checkUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
