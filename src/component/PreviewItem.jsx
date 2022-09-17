import React from 'react'
import PropTypes from 'prop-types'

const PreviewItem = props => {

  const type = props.type === undefined ? 'left' : props.type
  return (
    <div className={`previewitem ${type}`}>
      <div className={`previewitem__item ${type === 'left' ? 'small' : 'big'}`}>
        <div className="previewitem__item__text">
          <div className="previewitem__item__text__title">
            {props.obj1.name}
          </div>
          <div className="previewitem__item__text__price">${props.obj1.price}</div>
          <div className="previewitem__item__text__btn">SHOP NOW</div>
        </div>
        <div className="previewitem__item__img">
          <img src={props.obj1.img} alt="" />
        </div>
      </div>
      <div className={`previewitem__item ${type === 'left' ? 'big' : 'small '}`}>
        <div className="previewitem__item__text">
          <div className="previewitem__item__text__title">
            {props.obj2.name}
          </div>
          <div className="previewitem__item__text__price">${props.obj2.price}</div>
          <div className="previewitem__item__text__btn">SHOP NOW</div>
        </div>
        <div className="previewitem__item__img">
          <img src={props.obj2.img} alt="" />
        </div>
      </div>
    </div>
  )
}

PreviewItem.propTypes = {
  obj1: PropTypes.object,
  obj2: PropTypes.object,
  type: PropTypes.string
}

export default PreviewItem