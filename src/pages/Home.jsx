import React from 'react'
import SliderShow from '../component/SliderShow'
import PreviewItem from '../component/PreviewItem'
import productData from '../assets/product'
const Home = () => {
  const arr__products = productData.getProducts(6)

  return (
    <div className='home' style={{ zIndex: 1 }}>
      <section className='section-slider'>
        <SliderShow />
      </section>
      <section className='section-preview'>
        <div className="title">
          <p className="preview__title">TOP CHOICES</p>
          <p className="preview__highlight">Popular this week</p>
          <p className="preview__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <PreviewItem obj1={arr__products[0]} obj2={arr__products[1]} type='left' />
        <PreviewItem obj1={arr__products[2]} obj2={arr__products[3]} type='right' />
        <PreviewItem obj1={arr__products[4]} obj2={arr__products[5]} type='left' />
      </section>
    </div>
  )
}

export default Home