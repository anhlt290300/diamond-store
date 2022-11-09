import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDollarSign, faLanguage, faPhone, faSearch, faShoppingCart, faUserCircle, } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import logo from '../image/logo.png'
import { useSelector } from 'react-redux'
import avatar from '../image/products/avatar.jpg'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'


const menuNav = [
  {
    display: 'HOME',
    path: '/'
  },
  {
    display: 'PRODUCTS',
    path: '/danh-muc'
  },
  {
    display: 'ABOUT US',
    path: '/gioi-thieu'
  },
  {
    display: 'CONTACT',
    path: '/lien-he'
  }
]

const Header = () => {


  const LanguageRef = useRef(null)

  const CoinRef = useRef(null)

  const Change = (Ref) => Ref.current.classList.toggle('active')

  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)

  const activeNav = useLocation().pathname

  const numberItem = useSelector((state) => state.cartItems.value.length)


  return (
    <div className='header'>
      <div className="menu-top">
        <div className="topmenu-right">
          <div className="box-contact">
            <div className="box-phone">
              <FontAwesomeIcon icon={faPhone} className='icon phone' />
            </div>
            <div className="phone-number"><span>08 6690 3551</span></div>
          </div>
          <div className="box-text">
            <span>Miễn phí vận chuyển cho đơn hàng từ 149k</span>
          </div>
        </div>
        <div className="topmenu-left">
          <div className="box-language" ref={LanguageRef} onClick={() => Change(LanguageRef)}>
            <FontAwesomeIcon icon={faLanguage} className='icon language' />
            <div className="languege-text">VietNamese</div>
            <FontAwesomeIcon icon={faChevronDown} className='icon chevrondown' />
          </div>
          <div className="box-coin" ref={CoinRef} onClick={() => Change(CoinRef)}>
            <FontAwesomeIcon icon={faDollarSign} className='icon coin' />
            <div className="coin-text">VND</div>
            <FontAwesomeIcon icon={faChevronDown} className='icon chevrondown' />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="menu-bottom">
          <div className="box-logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="box-menu">
            <ul className='listitem'>
              {
                menuNav.map((item, index) => {
                  return (
                    <li key={index} className='item'>
                      <Link to={item.path} className={`link ${item.path === activeNav ? 'active' : ''}`}>
                        {item.display}
                        <FontAwesomeIcon icon={faChevronDown} className='icon chevrondown' />
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="box-tool">
            <div className="tool-search">
              <FontAwesomeIcon icon={faSearch} className='icon search' />
            </div>
            <div className="tool-user">
              <Link to={currentUser ? '/nguoi-dung/order' : '/dang-nhap'}>
                {currentUser ? (<img src={avatar}></img>) : (<FontAwesomeIcon icon={faUserCircle} className='icon search' />)}
              </Link>
            </div>
            <div className="tool-cart">
              <Link to='/gio-hang'>
                <div className="cart-number">{numberItem}</div>
                <FontAwesomeIcon icon={faShoppingCart} className='icon search' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header