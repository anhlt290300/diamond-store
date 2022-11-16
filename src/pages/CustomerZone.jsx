import React from 'react'
import Helmet from '../component/Helmet'
import TitlePage from '../component/TitlePage'
import Grid from '../component/Grid'
import Login from '../component/Login'
import Register from '../component/Register'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { db_ } from '../firebase/config'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'


const CustomerZone = () => {

  const navigate = useNavigate()
  const currentUser = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')
  const auth = getAuth()

  // const cleanInput = () => {
  //   setEmail('')
  //   setPass('')
  // }

  const cleanError = () => {
    setEmailError('')
    setPassError('')
  }

  const getuser = async (id) => {
    const noteSnapshot = await getDoc(doc(db_, 'users', id))
    if (noteSnapshot.exists()) {

        return (noteSnapshot.data())
    } else {
        console.log("data not found");
    }
}


  const handleLogin = async () => {
    cleanError()
    try {

      const singin = await signInWithEmailAndPassword(auth, email, pass)


      const human = await getuser( singin.user.uid)

      //console.log(human)
      if(human.key ==='user'){
        navigate('/nguoi-dung/order')
      }else{
        navigate('/quan-li/dashboard')
      }
      



      
    } catch (error) {
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
    }
  }

  const handleRegister = async () => {
    cleanError()
    try {

      const res = await createUserWithEmailAndPassword(auth, email, pass)


      await setDoc(doc(db_, "users", res.user.uid), {
        uid: res.user.uid,
        name: name,
        email: email,
        bills: [],
        key: 'user'
      })
      navigate('/nguoi-dung/order')
      console.log('aaa')
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message)
          break
        case "auth/weak-password":
          setPassError(error.message)
          break
      }
    }

  }


  return <div className='customerzone'>
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
              name={name}
              setName={setName}
            />
          </Grid>
        </div>
      </div>
    </Helmet>
  </div>

}

export default CustomerZone