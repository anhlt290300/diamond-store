import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faMapLocation, faShoppingBag, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRef } from 'react'
import avatar from '../image/products/avatar.jpg'
import PropTypes from 'prop-types'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/user'
import { useContext } from 'react'
import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db_ } from '../firebase/config'
import { AuthContext } from '../AuthContext'
const UserTools = ({ change }) => {

  const auth = getAuth()

  const navigate = useNavigate()

  const dispatch = useDispatch()
  //console.log(navigate)
  const {currentUser} = useContext(AuthContext) 

  const [numberOrder, setNumberOrder] = useState(0)

  const updateNumberOrder = async () => {
    const uid = JSON.parse(localStorage.getItem('user_'))
    const data = (await getDoc(doc(db_, 'users', uid))).data().bills
    setNumberOrder(data.length)
  }

  useEffect(() => {
    updateNumberOrder()
  }, [])

  //console.log(currentUser)

  const handleLogout = () => {
    auth.signOut()
    dispatch(deleteUser())
    navigate("/")
  }

  const title = useLocation().pathname.slice(useLocation().pathname.indexOf("/") + 12)

  const orderRef = useRef(null)
  const profileRef = useRef(null)
  const addressRef = useRef(null)

  const cleanActive = () => {
    orderRef.current.classList.remove('active')
    profileRef.current.classList.remove('active')
    addressRef.current.classList.remove('active')
  }

  const moveTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    title === 'order' ? orderRef.current.classList.add('active') : title === 'profile' ? profileRef.current.classList.add('active') : addressRef.current.classList.add('active')
  }, [])

  const handleClick = (ref) => {
    cleanActive()
    ref.current.classList.add("active")
  }

  return (
    <div className='usertools'>
      <div className="usertools__header">
        <div className="usertools__header__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="usertools__header__name">
          {(!currentUser) ? '' : currentUser.name}
        </div>
      </div>
      <div className="usertools__body">
        <Link to='order' onClick={() => {
          moveTotop()
          change()
        }}>
          <div className="usertools__body__item" ref={orderRef} onClick={() => handleClick(orderRef)}>
            <span><FontAwesomeIcon icon={faShoppingBag} className='icon bag' />orders</span>
            <span>{numberOrder}</span>
          </div>
        </Link>
        <Link to='profile' onClick={() => {
          moveTotop()
          change()
        }}>
          <div className="usertools__body__item" ref={profileRef} onClick={() => handleClick(profileRef)}>
            <span><FontAwesomeIcon icon={faUserCircle} className='icon user' />profile</span>
          </div>
        </Link>
        <Link to='addresses' onClick={() => {
          moveTotop()
          change()
        }}>
          <div className="usertools__body__item" ref={addressRef} onClick={() => handleClick(addressRef)}>
            <span><FontAwesomeIcon icon={faMapLocation} className='icon location' />addresses</span>
          </div>
        </Link>
        <div className="usertools__body__item" onClick={() => { handleLogout() }}>
          <span><FontAwesomeIcon icon={faSignOut} className='icon logout' />log out</span>
        </div>
      </div>
    </div>
  )
}

UserTools.propTypes = {
  change: PropTypes.func

}

export default UserTools