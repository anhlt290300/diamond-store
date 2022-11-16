import React from 'react'
import TitlePage from './TitlePage'
import Helmet from './Helmet'
import productData from '../assets/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { useState } from 'react'

const ProductsAdmin = () => {

  const [active, setActive] = useState(false)

  const [selectitem, setSelectitem] = useState('none')

  const Products = selectitem === 'none' ? productData.getAllProduct() : productData.getProductsByType(selectitem)

  return (
    <div className='w-4/5 h-screen'>
      <Helmet title='Admin - Products'>

        <div className='py-[3rem]'>

          <TitlePage
            link1='dashboard'
            path1='/quan-li/dashboard'
            link2='products'
          />

          <p className='uppercase text-[2.25rem] text-center font-semibold'>Products management</p>

          <div className='flex justify-start items-center px-[3rem] py-[0rem]'>
            <Button content='add product' size='lg' animate={false} />

            <div className='ml-[3rem] w-[11rem] relative border border-black' onMouseLeave={() => { setActive(false) }}>
              <div className={`p-[0.7rem] text-lg w-full flex justify-between items-center ${(active) ? 'shadow-lg' : ''}`}
                onClick={() => { setActive(!active) }}>
                <span className='font-semibold'>{selectitem}</span>
                <FontAwesomeIcon
                  icon={(!active) ? faArrowRight : faArrowRight}
                  className={(!active) ? 'ml-5 cursor-pointer transition-all duration-150  ease-in' : 'ml-5 cursor-pointer transition-all duration-150 rotate-90 ease-in'}
                />
              </div>
              {(active) ?
                (
                  <div className='w-[11rem] absolute left-0 top-[3rem]'>
                    <div className='h-4'></div>
                    <p className='px-[0.7rem] py-[0.3rem] border border-black bg-white hover:font-semibold'
                      onClick={() => {
                        setSelectitem('watches')
                        setActive(false)
                      }}
                    >watches</p>
                    <p className='px-[0.7rem] py-[0.3rem] border border-black bg-white hover:font-semibold'
                      onClick={() => {
                        setSelectitem('rings')
                        setActive(false)
                      }}
                    >rings</p>
                    <p className='px-[0.7rem] py-[0.3rem] border border-black bg-white hover:font-semibold'
                      onClick={() => {
                        setSelectitem('necklaces')
                        setActive(false)
                      }}
                    >necklaces</p>
                    <p className='px-[0.7rem] py-[0.3rem] border border-black bg-white hover:font-semibold'
                      onClick={() => {
                        setSelectitem('none')
                        setActive(false)
                      }}
                    >none</p>
                  </div>
                )
                : null}
            </div>

            <span className='inline-block ml-[2rem] uppercase font-semibold'>number of Product Now : {Products.length}</span>

          </div>

          <div className='px-[3rem] mt-[3rem] '>

            <div className='grid grid-cols-5 gap-8 p-[2rem] bg-backgrounditem font-semibold text-center mb-[2rem] w-[89%]'>
              <p>INDEX</p>
              <p>ITEM</p>
              <p>TYPE</p>
              <p>PRICE</p>
              <p>DESCRIPTION</p>
            </div>

            <div className='overflow-y-scroll bg-backgrounditem h-[53vh] px-[2rem]'>
              {Products.map((item, index) => {
                return (
                  <div className='relative w-full' key={index} >

                    <div className='grid grid-cols-5 gap-8  text-center h-[15rem] text-xl w-[90%] pt-[2rem]'>

                      <div className='flex justify-center items-center text-2xl'>
                        {index}
                      </div>

                      <div className='flex justify-center items-center text-[1rem]'>
                        <img src={item.img[0].data} alt="" className='w-[8rem] h-[8rem]' />
                        <p>{item.name}</p>
                      </div>

                      <div className='flex justify-center items-center'>
                        {item.type}
                      </div>

                      <div className='flex justify-center items-center'>
                        {item.price}
                      </div>

                      <div className='text-ellipsis overflow-scroll flex justify-center items-center text-start h-4/5 text-[1rem]'>
                        {item.description}
                      </div>

                    </div>

                    <div className='w-[3rem] absolute right-[2rem] top-[40%]'>
                      <FontAwesomeIcon icon={faDeleteLeft} className='text-[2rem] cursor-pointer transition-all duration-300 ease-in hover:scale-125' />
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </Helmet>
    </div>
  )
}

export default ProductsAdmin