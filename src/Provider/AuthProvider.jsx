import React, { createContext, useState,useEffect } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleAuth=new GoogleAuthProvider()

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

  {/* ====google login===== */ }
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth,googleAuth)
  }

  const logOut = () => {
    // setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log(currentUser);
      setLoading(false)
      if (currentUser && currentUser.email) {
      const loggedUser = { email:currentUser.email }
        fetch(`http://localhost:4000/jwt`, {
          method: "POST",
          headers: {
            'content-type':'application/json'
          },
          body:JSON.stringify(loggedUser)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            //set jwt token store localstore not a best pactise (this is the store jwt token second choice)
            localStorage.setItem('token', data.token)

          }).catch(error=>console.log(`404 page not found error:${error.message}`))
      } else {
        localStorage.removeItem('token')
      }
    })
    return ()=>{
      return unsubscribed()
    }
    },[])
  const authInfo={user,loading,createUser,signInUser,logOut,googleLogin}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider