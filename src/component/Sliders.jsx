import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Sliders = props => {

    return (
        <div className={`slider ${props.type === undefined ? 'left' : props.type}`}>
            <div className="slider-content">
                <div className="title" style={{ color: `${props.colortitle}` }}>
                    {props.title}
                </div>
                <div className="name">
                    {props.name}
                </div>
                <div className="slider__content">
                    {props.content}
                </div>
                <Button size={props.sizeBtn} content={props.contentBtn} />
            </div>
            <div className={`background`}>
                <div className="sliderImg img1">
                    <img src={props.img1} alt="" />
                </div>
                <div className="sliderImg img2">
                    <img src={props.img2} alt="" />
                </div>
                <div className="sliderImg img3">
                    <img src={props.img3} alt="" />
                </div>
            </div>
        </div>
    )
}

Sliders.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    colortitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
    contentBtn: PropTypes.string.isRequired,
    sizeBtn: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default Sliders