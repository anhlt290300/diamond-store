import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <button className={`button ${props.size}`} onClick={props.onClick ? () => props.onClick():null}>
        <div className="content">
            {props.content}
        </div>
    </button>
  )
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button