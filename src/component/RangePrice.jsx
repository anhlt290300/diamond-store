import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import InputRange from 'react-input-range'
import { useState } from 'react'

const RangePrice = props => {

  const [value4,setvalue4] = useState({ min: 5, max: 10 })

  return (
    // <div className='rangeprice'>
    //   <input type="range" min='1000' max='5000' step='500' name="" id="" ref={slides1} />
    //   <input type="range" min='1000' max='5000' step='500' name="" id="" ref={slides2} />
    // </div>
    <InputRange
      maxValue={20}
      minValue={0}
      formatLabel={value => `${value} kg`}
      value={value4}
      onChange={value => setvalue4({ value })}
      onChangeComplete={value => console.log(value)}
    />
  )
}

RangePrice.propTypes = {}

export default RangePrice