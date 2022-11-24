import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productData from '../assets/product'
import data from '../converse'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons'

const CartBox = () => {

    const [isOut, setIsOut] = useState(false)

    var total = 0

    const dispatch = useDispatch()

    const products = useSelector((state) => state.cartItems.value)

    var listProducts = []

    products.forEach(element => {
        let item = productData.getProductsByPath(element.path)
        listProducts = [...listProducts, { ...item, quantity: element.quantity }]
    });

    products.forEach(element => {
        let price = element.price
        let quantity = element.quantity
        total += data.conversePrice(price) * quantity
    })

    total = data.check(total)

    console.log(listProducts)
    return (
        <div
            className='w-[28rem] absolute top-[3rem] -left-[25rem] transition-transform delay-300 ease-in-out duration-300 shadow-2xl bg-white py-2 px-8 animate-fadeUp'
        >
            {
                listProducts.length < 1 ?
                    <div className='flex items-center justify-center py-8 border-b-[1px] border-zinc-300 text-xl text-zinc-500'>
                        There are no products in the cart yet
                    </div> :

                    <div className=''>
                        {
                            listProducts.map((item,index)=>{
                                return(
                                    <div className='flex justify-between items-center py-4 border-b-[1px] border-zinc-300 ' key={index}>

                                        <div className='flex'>

                                            <img src={item.img[0].data} alt="" className='w-[6rem]' />

                                            <div className='flex flex-col justify-between'>
                                                <p className='font-semibold'>{item.name}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p className='font-semibold'>${item.price}</p>
                                            </div>

                                        </div>

                                        <FontAwesomeIcon icon={faX} className='text-zinc-500 hover:text-black cursor-pointer text-sm'/>

                                    </div>
                                )
                            })
                        }
                    </div>
            }

            <div className='px-4 py-6 flex justify-between items-center border-b-[1px] border-zinc-300 text-xl'>
                <div className='text-zinc-500'>TOTAL</div>
                <div className='font-semibold'>${total}</div>
            </div>

            <div className='px-4 py-6 flex justify-center items-center text-xl'>
                <Link to="/gio-hang" className=' border-none_ text-zinc-500 tracking-[0.5rem] border-b-[2px]  hover:border-black hover:text-black'>VIEW CART <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>

        </div >
    )
}

export default CartBox