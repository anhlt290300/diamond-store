import { faCircleDollarToSlot, faHeadset, faTruckFast, faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from 'react'

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