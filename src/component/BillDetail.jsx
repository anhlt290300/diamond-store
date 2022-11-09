import React from 'react'
import Grid from './Grid'
import { useLocation } from 'react-router-dom'
import { db_ } from '../firebase/config'
import { useEffect } from 'react'
import { useState } from 'react'
import productData from '../assets/product'
import data from '../converse'
import { getDoc, doc } from 'firebase/firestore'

const BillDetail = () => {

    const pathname = useLocation().pathname

    const idBill = pathname.slice(pathname.lastIndexOf('/') + 1)

    const [listItem, setListItem] = useState([])

    const multi = (price, quantity) => {

        return data.converseTotal({ price, quantity })

    }

    const getData = async () => {
        try {
            const uid = JSON.parse(localStorage.getItem('user_'))
            const data = (await getDoc(doc(db_, 'users', uid))).data().bills

            const bill = data[idBill]

            const listItemOfBill = bill.listItems

            const listItem_ = []

            listItemOfBill.forEach(element => {
                const item = productData.getProductsByPath(element.path)

                const itemImg = item.img[0].data
                const itemName = item.name
                const quantity = element.quantity
                const price = element.price


                const newItem = {
                    itemImg: itemImg,
                    itemName: itemName,
                    quantity: quantity,
                    price: price
                }
                listItem_.push(newItem)
            })
            
            setListItem([...listItem_])

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='billdetail'>
            <div className="billdetail__header">
                <Grid col={4} mdCol={4} smCol={4} gap={20}>
                    <div className="billdetail__header__item">
                        item
                    </div>
                    <div className="billdetail__header__item">
                        price
                    </div>
                    <div className="billdetail__header__item">
                        quantity
                    </div>
                    <div className="billdetail__header__item">
                        total
                    </div>
                </Grid>
            </div>
            <div className="billdetail__body">
                {
                    listItem.map((item, index) => {
                        return (
                            <div className="billdetail__body__item" key={index}>
                                <Grid col={4} mdCol={4} smCol={4} gap={40}>
                                    <div className="billdetail__body__item__content">
                                        <div className="billdetail__body__item__content__img">
                                            <img src={item.itemImg} alt="" />
                                        </div>
                                        <div className="billdetail__body__item__content__name">
                                            {item.itemName}
                                        </div>
                                    </div>
                                    <div className="billdetail__body__item__price">
                                        ${item.price}
                                    </div>
                                    <div className="billdetail__body__item__quantity">
                                        {item.quantity}
                                    </div>
                                    <div className="billdetail__body__item__total">
                                        ${multi(item.price, item.quantity)}
                                    </div>
                                </Grid>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default BillDetail