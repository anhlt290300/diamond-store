import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import productData from '../assets/product'
import data from '../converse'

const BillDetailAdmin = ({ object, active, setActive }) => {

    var total = 0

    const multi = (price, quantity) => {

        return data.converseTotal({ price, quantity })

    }

    const GetData = (arr) => {
        const kq = []

        arr.forEach(element => {
            const item = {
                item: productData.getProductsByPath(element.path),
                quantity: element.quantity
            }
            kq.push(item)
        });

        return kq
    }

    const listItems = (object === null) ? [] : GetData(object.listItems)

    listItems.forEach(element => {
        let price = element.item.price
        let quantity = element.quantity
        total += data.conversePrice(price) * quantity
    })


    //console.log(data.check(total))

    return (
        <div className={(active) ? 'absolute w-4/5 h-screen bg-mark flex opacity-100' : 'opacity-0'}>
            <div className='w-2/3 h-2/3 visible bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 relative' >
                <div className='py-[1rem] px-[2rem] bg-black w-[5rem] float-right hover:cursor-pointer hover:shadow-xl'
                    onClick={() => setActive(false)}
                >
                    <FontAwesomeIcon
                        icon={faX}
                        className='text-white text-xl transition-all duration-300 ease-in-out hover:scale-125'
                    />
                </div>

                <div className='grid grid-cols-2 gap-8 mt-16 h-5/6 px-8'>
                    <div className='h-full bg-backgrounditem px-4'>
                        <div className='text-center font-semibold text-base uppercase my-4'>Bill Detail</div>
                        <div className='mt-8 h-[28rem] overflow-y-scroll' >
                            {
                                listItems.map((item, index) => {
                                    return (
                                        <div key={index} className='h-[8rem]  flex mb-4 border-b border-black pb-4 last:border-none'>
                                            <div className='h-full w-3/5 mr-4'>
                                                <img src={item.item.img[0].data} alt="" className='h-full' />
                                            </div>
                                            <div className='flex flex-col items-start justify-between w-full'>
                                                <p><span className='font-semibold'>Name:</span> {item.item.name}</p>
                                                <p><span className='font-semibold'>Price:</span> ${item.item.price}</p>
                                                <p><span className='font-semibold'>Quantity:</span> {item.quantity}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='h-full bg-backgrounditem p-4 text-white_'>

                        <p className='uppercase font-semibold mb-8'>ORDER SUMMARY</p>
                        <p className='mb-4 '>Shipping and additional costs are calculated based on values you have entered.</p>
                        <div className='flex justify-between items-center py-8 border-white_ border-b'>
                            <p>Order Subtotal</p>
                            <p>$390.00</p>
                        </div>
                        <div className='flex justify-between items-center py-8 border-white_ border-b'>
                            <p>Shipping and handling</p>
                            <p>$10.00</p>
                        </div>
                        <div className='flex justify-between items-center py-8 border-white_ border-b'>
                            <p>Tax</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex justify-between items-center py-8'>
                            <p>Total</p>
                            <p className='font-semibold text-2xl'>${data.check(total + 400)}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

BillDetailAdmin.propTypes = {
    object: PropTypes.object,
    active: PropTypes.bool,
    setActive: PropTypes.func
}

export default BillDetailAdmin