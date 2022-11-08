import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Login = ({ email, setEmail, password, setPassword, handleLogin, emailError, passwordError }) => {


    return (
        <div className='login'>
            <div className="login__title">login</div>
            <div className="login__description">
                <p>Already our customer?</p>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
            <div className="login__email">
                <p>email</p>
                <input
                    type="email"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='errorEmail'>{emailError}</p>
            </div>
            <div className="login__password">
                <p>password</p>
                <input
                    type="password"
                    autoFocus
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='errorPassword'>{passwordError}</p>
            </div>
            <div className="login__btn">
                <Button content='log in' size='lg' animate={false} mode='dark'  onClick={handleLogin} />
            </div>
        </div>
    )
}

Login.propTypes = {
    email: PropTypes.string,
    setEmail: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    handleLogin: PropTypes.func,
    emailError: PropTypes.string,
    passwordError: PropTypes.string


}

export default Login