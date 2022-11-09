import React from 'react'
import { useLocation } from 'react-router-dom'
import UserTools from '../component/UserTools'
import TitlePage from '../component/TitlePage'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'
const User = (props) => {

  const [title, setTitle] = useState("")

  const pathname = useLocation().pathname

  const [change, setChange] = useState(false)
  //console.log(props.children)
  const Funct = () => setChange(!change)

  useEffect(() => {
    let check = title.indexOf('/')
    
    setTitle(pathname.slice(pathname.indexOf("/") + 12))

    if (check >= 0) setTitle(title.slice(title.indexOf('/')))   

    
  }, [change])


  const title_ = (title === 'order' || title === 'profile' || title === 'addresses') ? "your " + title : "CUSTOMER - ORDER DETAIL"

  const description = (title === 'order') ? 'Your orders in one place.' : (title === 'profile') ? "Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt ante vitae massa. Cras pede libero, dapibus nec, retium sit amet, tempor quis. Fusce dui leo, imperdiet in." : (title === 'addresses') ? '' : ''

  return (
    <div className='user'>
      <div className="container">
        <TitlePage link1='home' path1='/home' link2={title_} />
        <div className="user__title">
          {title_}
        </div>
        <div className="user__description">
          {description}
        </div>
        <div className="user__body">
          <div className="user__body__item">
            {props.children }
          </div>
          <div className="user__body__item">
            <UserTools change={Funct} />
          </div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  element: PropTypes.element,
}

export default User