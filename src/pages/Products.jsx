import React from 'react'
import Helmet from '../component/Helmet'
import TitlePage from '../component/TitlePage'
import Grid from '../component/Grid'
import productData from '../assets/product'
import Product from '../component/Product'
import InfinityList from '../component/InfinityList'
const Products = () => {
  const dataProduct = productData.getAllProduct()

  return (
    <Helmet title='Products'>
      <section className='products'>
        <div className="products__title">
          <TitlePage link1='Home' link2='Product' path1='/' path2='danh-muc' />
          <div className='products__title__name item'>products</div>
          <div className='products__title__description item'>Id commodo velit ullamco dolore non eiusmod deserunt.</div>
        </div>
        <div className="products__body">
          {/* <div className="products__body__filter">
                    <div className="products__body__filter__item">
                        <div className="products__body__filter__item__widget">
                          Categories
                        </div>
                        <div className="products__body__filter__item__content">

                        </div>
                    </div>
                </div> */}
          <div className="container">
            {/* <Grid col={4} mdCol={2} smCol={1} >
              {
                dataProduct.map((item, index) => {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Product
                        size='md'
                        key={index}
                        type={item.type}
                        name={item.name}
                        path={item.path}
                        price={item.price}
                        img={item.img[0].data}
                        label={item.label}
                      />
                    </div>
                  )
                })
              }
            </Grid> */}
            <InfinityList 
              Data={dataProduct}/>

          </div>
        </div>
      </section>
    </Helmet>
  )
}



export default Products