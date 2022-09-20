import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

const Product = ({ type, name, path, price, img, label }) => {

    console.log(img)
    return (
        <div className='product'>
            <div className={`product__label ${label === undefined ? '' : label}`}>
                <p>{label}</p>
            </div>
            <div className="product__img" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
                <Button path={path} size='md' content='view' animate='false' mode='dark' />
            </div>
            <div className="product__text">
                <div className="product__text__type">{type}</div>
                <div className="product__text__name">
                    <Link to={path}>{name}</Link>
                </div>
                <div className="product__text__price">${price}</div>
            </div>
        </div>
    )
}

Product.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    label: PropTypes.string,

}

export default Product