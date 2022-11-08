import React from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'
import { useEffect, useState, useRef } from 'react'
import Product from './Product'
const InfinityList = ({Data}) => {

    const perLoad = 5

    const listRef = useRef(null)


    return (
        <div ref={listRef}>

            <Grid
                col={3}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {
                    Data.map((item, index) => (
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
                    ))
                }
            </Grid>
        </div>
    )
}

InfinityList.propTypes = {
    Data: PropTypes.array.isRequired,
    //catalog: PropTypes.bool.isRequired
}

export default InfinityList