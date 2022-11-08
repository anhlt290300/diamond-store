import React from 'react'
import Helmet from '../component/Helmet'
import TitlePage from '../component/TitlePage'
import productData from '../assets/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faArchive, faChevronLeft, faMinus, faX } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateItems, deleteItems } from '../redux/cart'
import data from '../converse'
import Button from '../component/Button'
import { Link } from 'react-router-dom'

import { db, ref, onValue, push } from '../firebase/config.js'
import { useEffect } from 'react'

const Cart = () => {

  useEffect(() => {
    push(ref(db, "abc"), {
      name: "tuan anh",
      ms: "anh yeu em"
    })

    onValue(ref(db, "user"), (data) => {
      let message = []
      data.forEach((item) => {
        message.push(item.val())
      })

      console.log(message)
    })
  }, [])

  var total = 0

  const dispatch = useDispatch()

  const products = useSelector((state) => state.cartItems.value)

  var listProducts = []

  products.forEach(element => {
    let item = productData.getProductsByPath(element.path)
    listProducts = [...listProducts, { ...item, quantity: element.quantity }]
  });

  const notNull = products.length > 0 ? true : false

  products.forEach(element => {
    let price = element.price
    let quantity = element.quantity
    total += data.conversePrice(price) * quantity
    //console.log(element ) 
  })

  total = data.check(total)


  const updateItem = (key, path, quantity) => {
    if (key === 'add') {
      dispatch(updateItems({ path: path, quantity: quantity + 1 }))
    } else {
      dispatch(updateItems({ path: path, quantity: (quantity === 1) ? 1 : quantity - 1 }))
    }
  }

  const deleteItem = (path) => {
    dispatch(deleteItems(path))

  }

  const multi = (price, quantity) => {

    return data.converseTotal({ price, quantity })

  }

  return (
    <div className='cart'>
      <Helmet title='Cart'>
        <div className="container">
          <div className="cart__inner">
            <div className="cart__item">
              <TitlePage
                link1='Home'
                path1='/'
                link2="Shopping Cart" />
            </div>
            <div className="cart__item">
              <div className="cart__title">SHOPPING CART</div>
            </div>
            <div className="cart__item">
              <div className="cart__description">Id commodo velit ullamco dolore non eiusmod deserunt.</div>
            </div>
            <div className="cart__item">
              <div className="cart__content">
                <div className="cart__content__left">
                  <div className="cart__content__left__header">
                    <p className="cart__content__left__header__item item">ITEM</p>
                    <p className="cart__content__left__header__item price">PRICE</p>
                    <p className="cart__content__left__header__item quantity">QUANTITY</p>
                    <p className="cart__content__left__header__item total">TOTAL</p>
                  </div>
                  <div className="cart__content__left__body">
                    {
                      (notNull) && listProducts.map((item, index) => {
                        return (
                          <div className="cart__content__left__body__item" key={index}>
                            <div className="cart__content__left__body__item__item">
                              <div className="cart__content__left__body__item__item__img">
                                <img src={item.img[0].data} alt="" />
                              </div>
                              <div className="cart__content__left__body__item__item__name">
                                {item.name}
                              </div>
                            </div>
                            <div className="cart__content__left__body__item__price">
                              ${item.price}
                            </div>
                            <div className="cart__content__left__body__item__quantity">
                              <FontAwesomeIcon icon={faMinus} className='icon minus' onClick={() => updateItem('minus', item.path, item.quantity)} />
                              <div className="cart__content__left__body__item__quantity__box">
                                {item.quantity}
                              </div>
                              <FontAwesomeIcon icon={faAdd} className='icon add' onClick={() => updateItem('add', item.path, item.quantity)} />
                            </div>
                            <div className="cart__content__left__body__item__total">
                              ${multi(item.price, item.quantity)}
                            </div>
                            <div className="cart__content__left__body__item__delete" onClick={() => deleteItem(item.path)}>
                              <FontAwesomeIcon icon={faX} className='icon x' />
                            </div>
                          </div>
                        )
                      })
                    }
                    {
                      (!notNull) && `GIO HANG DANG TRONG`
                    }
                  </div>
                </div>
                <div className="cart__content__right">
                  <div className="cart__content__right__title">ORDER SUMMARY</div>
                  <div className="cart__content__right__description">Shipping and additional costs are calculated based on values you have entered.</div>
                  <div className="cart__content__right__item">
                    <div className="cart__content__right__item__content">Order Subtotal</div>
                    <div className="cart__content__right__item__value">$390.00</div>
                  </div>
                  <div className="cart__content__right__item">
                    <div className="cart__content__right__item__content">Shipping and handling</div>
                    <div className="cart__content__right__item__value">$10.00</div>
                  </div>
                  <div className="cart__content__right__item">
                    <div className="cart__content__right__item__content">Tax</div>
                    <div className="cart__content__right__item__value">$0.00</div>
                  </div>
                  <div className="cart__content__right__item">
                    <div className="cart__content__right__item__content">Total</div>
                    <div className="cart__content__right__item__value">${data.check(Number(data.conversePrice(total)) + 390.00 + 10.00)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__item">
              <div className="cart__item__back">
                <Link to='/danh-muc'>
                  <FontAwesomeIcon icon={faChevronLeft} className='icon chevronleft' />
                  <p className="cart__item__back__content">continue shopping</p>
                </Link>
              </div>
              <div className="cart__item__checkout">
                <Button content='proceed to checkout' size='lg' mode='dark' animate={false} />
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </div>
  )
}

export default Cart