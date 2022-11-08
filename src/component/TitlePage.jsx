import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TitlePage = ({ link1, link2, link3, path1, path2, path3 }) => {
  return (
    <div className='titlepage'>
      <div className="titlepage__item">
        <Link to={path1}>{link1}</Link>
      </div>
      {(link2 && <p>/</p>)}
      <div className="titlepage__item">
        {
          (link3 ===undefined) ? link2 : <Link to={path2}>{link2}</Link> 
        }
      </div>
      {(link3 && <p>/</p>)}
      {
        (link3) && <div className="titlepage__item">
          {link3}
        </div>
      }
    </div>
  )
}

TitlePage.propTypes = {
  link1: PropTypes.string.isRequired,
  path1: PropTypes.string.isRequired,
  link2: PropTypes.string,
  path2: PropTypes.string,
  link3: PropTypes.string,
  path3: PropTypes.string,
}

export default TitlePage