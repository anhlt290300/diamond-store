import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Register = ({ email, setEmail, password, setPassword, handleRegister, emailError, passwordError }) => {
    return (
        <div className='register'>
            <div className="register__title">register</div>
            <div className="register__description">
                <p>Not our registered customer yet?</p>
                <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                <p>If you have any questions, please feel free to contact us, our customer service center is working for you 24/7.</p>
            </div>
            <div className="register__name">
                <p>name</p>
                <input
                    type="text"
                />
            </div>
            <div className="register__email">
                <p>email</p>
                <input
                    type="email"
                    autoFocus
                    required
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className="register__password">
                <p>password</p>
                <input
                    type="password"
                    autoFocus
                    required
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </div>
            <div className="register__btn">
                <Button content='register' size='lg' animate={false} mode='dark' onClick={handleRegister} />
            </div>
        </div>
    )
}

Register.propTypes = {
    email: PropTypes.string,
    setEmail: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    handleRegister: PropTypes.func,
    emailError: PropTypes.string,
    passwordError: PropTypes.string
}

export default Register