import React from 'react'
import SliderShow from '../component/SliderShow'

import PreviewItem from '../component/PreviewItem'
import previewData from '../assets/preview'

import HotEvent from '../component/HotEvent'
import hoteventData from '../assets/hotevent'

import SliderProductView from '../component/SliderProductView'
import productData from '../assets/product'

import Helmet from '../component/Helmet'
const Home = () => {

  const preview = previewData
  const hotevent = hoteventData
  const product = productData.getProducts(12)
  console.log(product[0].img[0].data)
  return (
    <Helmet title='Home'>
      <div className='home'
        style={{ zIndex: 1, overflowX: 'hidden' }}>
        <section className='section-slider'>
          <SliderShow />
        </section>
        <section className='section-preview'>
          <div className="container">
            <div className="title">
              <p className="preview__title">TOP CHOICES</p>
              <p className="preview__highlight">Popular this week</p>
              <p className="preview__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <PreviewItem
              obj1={preview[0][0]}
              obj2={preview[0][1]}
              type='left' />
            <PreviewItem
              obj1={preview[1][1]}
              obj2={preview[1][0]}
              type='right' />
            <PreviewItem
              obj1={preview[2][0]}
              obj2={preview[2][1]}
              type='left' />
          </div>
        </section>
        <section className='section-hotevent'>
          <HotEvent
            title={hotevent.title}
            content={hotevent.content}
            btncontent={hotevent.btnContent}
            img={hotevent.img} />
        </section>
        <section className='section-productview'>
          <SliderProductView
            title='Best sellers'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            arr={product} />
        </section>
      </div>
    </Helmet>
  )
}

export default Home