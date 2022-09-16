import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from './Sliders';
import sliderImg from '../assets/slidershow'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const nextArrow = () => {
  return (
    <div className='nextarrow'>
      <FontAwesomeIcon icon={faChevronRight} className='icon chevronright' />
    </div>
  )
}

const preArrow = () => {
  return (
    <div className='prearrow'>

    </div>
  )
}

const SliderShow = () => {

  const slider = React.useRef(null);

  const settings = {

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,

    //autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "linear",
    pauseOnHover: true,

    customPaging: function (i) {
      return (
        <div className={`dots`} />
      );
    }
  };

  return (
    <div className='slidershow'>
      <Slider {...settings} ref={slider}>
        {
          sliderImg.map((item, index) => {
            return (
              <Sliders
                key={index}
                type={item.type}
                title={item.title}
                colortitle={item.colortitle}
                name={item.name}
                content={item.content}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                contentBtn={item.contentBtn}
                sizeBtn={item.sizeBtn}
                path={item.path}
              />
            )
          })
        }
      </Slider>
      <button onClick={() => slider?.current?.slickPrev()} className='pre'>
        <FontAwesomeIcon icon={faChevronLeft} className='icon chervonleft' />
      </button>
      <button onClick={() => slider?.current?.slickNext()} className='next'>
        <FontAwesomeIcon icon={faChevronRight} className='icon chervonright' />
      </button>
    </div>
  )
}


export default SliderShow