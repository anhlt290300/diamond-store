import { faCircleDollarToSlot, faHeadset, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from '../component/Grid'

import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__slogan">
        <div className="footer__slogan__item">
          <div className="footer__slogan__item__img">
            <FontAwesomeIcon icon={faTruckFast} className='icon truckfast' />
          </div>
          <div className="footer__slogan__item__text">
            <div className="footer__slogan__item__text__title">
              FREE SHIPPING & RETURN
            </div>
            <div className="footer__slogan__item__text__content">
              Free Shipping over $300
            </div>
          </div>
        </div>
        <div className="footer__slogan__item">
          <div className="footer__slogan__item__img">
            <FontAwesomeIcon icon={faCircleDollarToSlot} className='icon circledollar' />
          </div>
          <div className="footer__slogan__item__text">
            <div className="footer__slogan__item__text__title">
              MONEY BACK GUARANTEE
            </div>
            <div className="footer__slogan__item__text__content">
              30 Days Money Back Guarantee
            </div>
          </div>
        </div>
        <div className="footer__slogan__item">
          <div className="footer__slogan__item__img">
            <FontAwesomeIcon icon={faHeadset} className='icon headset' />
          </div>
          <div className="footer__slogan__item__text">
            <div className="footer__slogan__item__text__title">
              020-800-456-747
            </div>
            <div className="footer__slogan__item__text__content">
              24/7 Available Support
            </div>
          </div>
        </div>
      </div>
      <div className="footer__content">
        <div className="container">
          <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={10}
          >
            <div>
              <div className="footer__content__title">
                <img src={logo} alt="" />
              </div>
              <div className="footer__content__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              </div>
              <div className="footer__content__icon">

              </div>
            </div>
            <div className='footer__item'>
              <div>
                <div className="footer__content__title">
                  SHOP
                </div>
                <div className="footer__content__text">
                  <p>
                    <Link to='/'>For Women</Link>
                  </p>
                  <p>                    
                    <Link to='/'>For Men</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Stores</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Our Blog</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Shop</Link>
                  </p>
                </div>
              </div>
              <div>
                <div className="footer__content__title">
                  COMPANY
                </div>
                <div className="footer__content__text">
                  <p>                    
                    <Link to='/'>Login</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Register</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Wishlist</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Our Products</Link>
                  </p>
                  <p>                    
                    <Link to='/'>Checkouts</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="footer__content__title">
                DAILY OFFERS & DISCOUNTS
              </div>
              <div className="footer__content__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.
                </p>
              </div>
              <div className="footer__content__email">

              </div>
            </div>
          </Grid>
        </div>
      </div>
      <div className="footer__note">
        <div className="container">
          <div className="footer__note__left">
            © 2021, Your company. All rights reserved.
          </div>
          <div className="footer__note__right">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer