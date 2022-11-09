import React from 'react'
import Helmet from './Helmet'
import Grid from './Grid'
import Button from './Button'
import { useEffect } from 'react'
import { useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db_ } from '../firebase/config'
const UserOrder = () => {

  const [listOrder, setListOrder] = useState([])

  const getData = async () => {
    try {
      const uid = JSON.parse(localStorage.getItem('user_'))
      const data = await getDoc(doc(db_, 'users', uid))
      //console.log(data.data().bills)
      setListOrder(data.data().bills)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='userorder'>
      <Helmet title='Customer - Order'>
        <div className="userorder__header">
          <Grid col={5} mdCol={5} smCol={5} gap={5}>
            <div className="userorder__header__item">
              order #
            </div>
            <div className="userorder__header__item">
              date
            </div>
            <div className="userorder__header__item">
              total
            </div>
            <div className="userorder__header__item">
              status
            </div>
            <div className="userorder__header__item">
              action
            </div>
          </Grid>
        </div>
        <div className="userorder__body">
          {listOrder.map((item, index) => {
            return (
              <div className="userorder__body__item" key={index}>
                <Grid col={5} mdCol={5} smCol={5} gap={5}>
                  <div className="userorder__body__item__id">
                    # {index}
                  </div>
                  <div className="userorder__body__item__date">
                    {item.date}
                  </div>
                  <div className="userorder__body__item__total">
                    {item.quantity}
                  </div>
                  <div className="userorder__body__item__status prepared">
                    <p>being prepared</p>
                  </div>
                  <div className="userorder__body__item__btn">
                    <Button content='view' size='sm' animate={false} path={`${index}`} />
                  </div>
                </Grid>
              </div>
            )
          })}

        </div>
      </Helmet>
    </div>
  )
}

export default UserOrder