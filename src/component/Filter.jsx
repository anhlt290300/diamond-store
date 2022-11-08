import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'react-custom-checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import RangePrice from './RangePrice'
import { useState } from 'react'
import { useRef } from 'react'
const catagory = [
    {
        type: 'rings'
    },
    {
        type: 'watches'
    },
    {
        type: 'necklaces'
    }
]

const Filter = ({ arr, fun }) => {


    const Check = (name) => {           

        const newArr = arr.filter((value) => value === name)

        return (newArr.length > 0) ?  true : false
    }

    return (
        <div className='filter'>
            <div className="filter__category">
                {
                    catagory.map((item, index) => {
                        return (
                            <div className="filter__category__item" key={index}>
                                <div className="filter__category__item__checkbox">
                                    <Checkbox icon={<FontAwesomeIcon icon={faCheck} />} borderColor="#174A41" checked={() => Check(item.type)} style={{ backgroundColor: 'white' }} size={25} onChange={() => {
                                        fun(item.type)
                                    }} />
                                </div>
                                <div className="filter__category__item__content">
                                    {item.type}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="filter__rangePrice">
                {/* <RangePrice /> */}
            </div>
        </div>
    )
}

Filter.propTypes = {
    arr: PropTypes.array,
    fun: PropTypes.func,
}

export default Filter