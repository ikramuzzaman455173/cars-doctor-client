import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from '../Pages/Shared/LoadingSpinner';
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const {user,loading}=useContext(AuthContext)
  if (loading) {
    return <LoadingSpinner/>
  }
  if (user?.email) {
    return children
  }
  return (
    <Navigate to="/login" replace></Navigate>
  )
}

export default PrivateRoute