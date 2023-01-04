import React from 'react'
import Helmet from '../component/Helmet'
import TitlePage from '../component/TitlePage'
import Grid from '../component/Grid'
import productData from '../assets/product'
import Product from '../component/Product'
import InfinityList from '../component/InfinityList'
import Filter from '../component/Filter'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const Products = () => {
  const [dataProduct, setDataProduct] = useState([])

  const [filter, setFilter] = useState([])

  console.log(filter)

  const updateFilter = (key) => {

    var arr = [...filter]

    if (arr.includes(key)) {
      arr = arr.filter((value) => {
        return value !== key
      })
    } else {
      arr.push(key)
    }

    setFilter(arr)

  }

  const clearfilter = (string) => {
    let arr = [...filter]
    if (string !== 'clearall') {
      arr = arr.filter((value) => value !== string)
    } else {
      arr = []
    }
    setFilter(arr)
  }

  useEffect(() => {
    if (filter.length > 0) {
      setDataProduct(productData.getProductsByType(filter))
    }
    else {
      setDataProduct(productData.getAllProduct())
    }
  }, [filter])

  return (
    <Helmet title='Products'>
      <section className='products'>
        <div className="products__title">
          <TitlePage link1='Home' link2='Product' path1='/' path2='danh-muc' />
          <div className='products__title__name item'>products</div>
          <div className='products__title__description item'>Id commodo velit ullamco dolore non eiusmod deserunt.</div>
        </div>
        <div className="products__body">
          <div className="container">
            <div className="products__body__inner">
              <div className="products__body__left">
                <Filter arr={filter} fun={updateFilter} />
                {
                  filter.map((item, index) => {
                    return (
                      <div className='filter-chose' key={index}>
                        {item}
                        <FontAwesomeIcon icon={faX} className='icon x' onClick={() => clearfilter(item)} />
                      </div>
                    )
                  })
                }
                {
                  (filter.length > 1) && (<div className='filter-chose clearall' >
                    clear all
                    <FontAwesomeIcon icon={faX} className='icon x' onClick={() => clearfilter('clearall')} />
                  </div>)
                }
              </div>
              <div className="products__body__right">
                <InfinityList
                  Data={dataProduct} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  )
}



export default Products