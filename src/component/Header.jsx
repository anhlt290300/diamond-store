import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDollarSign, faLanguage, faPhone, faSearch, faShoppingCart, faUserCircle,  } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import logo from '../image/logo.png'

const menuNav = [
  {
    display : 'TRANG CHU',
    path : '/'
  },
  {
    display : 'SAN PHAM',
    path : '/danh-muc'
  },
  {
    display : 'GIOI THIEU',
    path : '/gioi-thieu'
  },
  {
    display : 'LIEN HE',
    path : '/lien-he'
  }
]

const Header = () => {
  const LanguageRef = useRef(null)

  const CoinRef = useRef(null)

  const Change = (Ref) => Ref.current.classList.toggle('active') 

  // console.log(LanguageRef.current   )

  console.log(useLocation().pathname)

  const activeNav = useLocation().pathname

  return (
    <div className='header'>
      <div className="menu-top">
          <div className="topmenu-right">
              <div className="box-contact">
                <div className="box-phone">
                    <FontAwesomeIcon icon={faPhone} className='icon phone'/>
                </div>
                <div className="phone-number"><span>08 6690 3551</span></div> 
              </div>
              <div className="box-text">
                 <span>Miễn phí vận chuyển cho đơn hàng từ 149k</span>
              </div>
          </div>
          <div className="topmenu-left">
              <div className="box-language" ref={LanguageRef} onClick={()=>Change(LanguageRef)}>
                  <FontAwesomeIcon icon={faLanguage} className='icon language' />
                  <div className="languege-text">VietNamese</div>
                  <FontAwesomeIcon icon={faChevronDown} className='icon chevrondown' />
              </div>
              <div className="box-coin" ref={CoinRef} onClick={()=>Change(CoinRef)}>
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
                      menuNav.map((item,index)=>{
                        return(
                          <li key={index} className='item'>
                            <Link  to={item.path} className={`link ${item.path === activeNav ? 'active' : ''}`}>
                                {item.display}
                                <FontAwesomeIcon icon={faChevronDown} className='icon chevrondown'/>
                            </Link>
                          </li>
                        )
                      })
                    } 
                </ul>
            </div>
            <div className="box-tool">
                <div className="tool-search">
                    <FontAwesomeIcon icon={faSearch} className='icon search'/>
                </div>
                <div className="tool-user">
                    <FontAwesomeIcon icon={faUserCircle} className='icon search'/>
                </div>
                <div className="tool-cart">
                    <div className="cart-number">3</div>
                    <FontAwesomeIcon icon={faShoppingCart} className='icon search'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header