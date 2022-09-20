import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const HotEvent = ({title,content,btncontent,img}) => {

  return (
    <div className='hotevent'>
        <div className="hotevent__text">
            <div className="hotevent__text__title">
                {title}
            </div>
            <div className="hotevent__text__content">
                <div className="line">{content.isUpto}</div>
                <div className="line bigtext">{content.percentDiscount}</div>
                <div className="line">{content.description}</div>
            </div>
            <div className="hotevent__text__btn">
                <Button content={btncontent} size='md' animate='false' mode='light'/>
            </div>
        </div>
        <div className="hotevent__img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

HotEvent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    btncontent: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default HotEvent