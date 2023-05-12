import React, { createContext, useState,useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  {/* ====create user firebase===== */ }
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  {/* ====sign in user firebase===== */ }
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    // setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log(currentUser);
      setLoading(false)
    })
    return ()=>{
      return unsubscribed()
    }
    },[])
  const authInfo={user,loading,createUser,signInUser,logOut}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider