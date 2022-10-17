import React from 'react'
import Helmet from '../component/Helmet'
import productData from '../assets/product'
import SliderImg from '../component/SliderImg'
import TitlePage from '../component/TitlePage'
import Grid from '../component/Grid'
import Button from '../component/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const ProductType = () => {

  const key = useLocation().pathname.slice(10)

  const product = productData.getProductsByType(key)

  const [number, setNumber] = useState(1)

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setNumber(number + 1)
    } else {
      setNumber(number - 1 < 1 ? 1 : number - 1)
    }
  }

  return (
    <Helmet title={product.name}>
      <div className="container">
        <div className="producttype">
          <Grid
            col={2}
            mdCol={2}
            smCol={1}
            gap={40}
          >
            <div className="producttype__item">
              <SliderImg arr={product.img} />
            </div>
            <div className="producttype__item">
              <div className="producttype__item__link">
                <TitlePage
                  link1='Home'
                  path1='/'
                  link2={product.type}
                  path2='/danh-muc'
                  link3={product.name}
                />
              </div>
              <div className="producttype__item__content">
                <div className="producttype__item__content__title">
                  {product.name}
                </div>
                <div className="producttype__item__content__price">
                  ${product.price}
                </div>
                <div className="producttype__item__content__description">
                  {product.description}
                </div>
              </div>
              <div className="producttype__item__quantity">
                <div className="producttype__item__quantity__minus" onClick={() => updateQuantity('minus')}>
                  <FontAwesomeIcon icon={faMinus} className='icon minus' />
                </div>
                <div className="producttype__item__quantity__number">
                  {number}
                </div>
                <div className="producttype__item__quantity__plus" onClick={() => updateQuantity('plus')}>
                  <FontAwesomeIcon icon={faPlus} className='icon plus'  />
                </div>
              </div>
              <div className="producttype__item__btn">
                <Button content='add to cart' size='lg' animate='false' mode='dark' />
              </div>
            </div>
          </Grid>

        </div>
      </div>
    </Helmet>
  )
}

export default ProductType