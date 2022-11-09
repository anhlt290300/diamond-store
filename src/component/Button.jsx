import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Button = props => {
  return (
    <Link to={`${props.path === undefined ? '' : props.path}`} className='link-btn'>
      <button className={`button ${props.size} ${props.mode === undefined ? 'dark' : props.mode} ${props.animate === undefined ? 'true' : props.animate}`} onClick={props.onClick ? () => props.onClick() : null}>
        <div className="content">
          {props.content}
        </div>
      </button>
    </Link>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  mode: PropTypes.string,
  animate: PropTypes.bool,
  path: PropTypes.string
}

export default Button