/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    console.log('User Role:', user?.role); 
    if (user?.role === "Admin") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}