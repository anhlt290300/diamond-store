import React from 'react'
import Helmet from '../component/Helmet'
import TitlePage from '../component/TitlePage'
import Grid from '../component/Grid'
import Login from '../component/Login'
import Register from '../component/Register'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import Cart from './Cart'
import User from './User'

const CustomerZone = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)
  const auth = getAuth()

  const cleanInput = () => {
    setEmail('')
    setPass('')
  }

  const cleanError = () => {
    setEmailError('')
    setPassError('')
  }


  const handleLogin = () => {
    cleanError()
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user)
        // ...
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message)
            break
          case "auth/wrong-password":
            setPassError(error.message)
            break
        }
      })
  }

  const handleRegister = () => {
    cleanError()
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user)
        // ...
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message)
            break
          case "auth/weak-password":
            setPassError(error.message)
            break
        }
      })
  }

  const handleLogout = () => {
    auth().signOut()
  }

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        cleanInput()
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className='customerzone'>
      {!user ? (
        <Helmet title='Customer Zone'>
          <TitlePage link1='home' path1='/home' link2='Customer Zone' />
          <div className="customerzone__title">
            CUSTOMER ZONE
          </div>
          <div className="customerzone__content">
            <div className="container">
              <Grid
                col={2}
                mdCol={2}
                smCol={1}
                gap={40}>
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={pass}
                  setPassword={setPass}
                  handleLogin={handleLogin}
                  emailError={emailError}
                  passwordError={passError}
                />
                <Register
                  email={email}
                  setEmail={setEmail}
                  password={pass}
                  setPassword={setPass}
                  handleRegister={handleRegister}
                  emailError={emailError}
                  passwordError={passError}
                />
              </Grid>
            </div>
          </div>


        </Helmet>
      ) : (
        <User/>
      )
      }
    </div>
  )
}

export default CustomerZone