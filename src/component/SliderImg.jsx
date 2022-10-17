import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const SliderImg = ({ arr }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='sliderimg' style={{maxWidth:'45vw', border:'1px solid rgba(0,0,0,0.2)'}}>
            <Slider {...settings}>
                {
                    arr.map((item,index)=>{
                        return(
                            <img key={index} src={item.data}/>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

SliderImg.propTypes = {
    arr: PropTypes.object.isRequired
}

export default SliderImg