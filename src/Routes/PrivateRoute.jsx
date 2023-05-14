import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from '../Pages/Shared/LoadingSpinner';
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  

  if (loading) {
    return <LoadingSpinner/>
  }
  if (user?.email) {
    return children
  }
  return (
    <Navigate state={{from:location}} to="/login" replace></Navigate>
  )
}

export default PrivateRoute