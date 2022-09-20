import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Slider from 'react-slick'
const SliderProductView = ({ title, description, arr }) => {

    const slider = React.useRef(null);

    console.log(arr[0])

    const settings = {

        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        speed: 1000,

        //autoplay: true,
        //autoplaySpeed: 9000,
        cssEase: "linear",
        pauseOnHover: true,

        customPaging: function (i) {
            return (
                <div className={`dots productview`} />
            );
        }
    };

    return (
        <div className='sliderproductview'>
            <div className="sliderproductview__title">{title}</div>
            <div className="sliderproductview__description"><p>{description}</p></div>
            <div className="sliderproductview__slider">
                <div className="container">
                    <Slider {...settings} ref={slider}>
                        {
                            arr.map((item, index) => {

                                console.log(123)
                                return (
                                    <Product
                                        key={index}
                                        type={item.type}
                                        name={item.name}
                                        path={item.path}
                                        price={item.price}
                                        img={item.img.img1}
                                        label='sale'
                                    />

                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

SliderProductView.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    arr: PropTypes.array,

}

export default SliderProductView