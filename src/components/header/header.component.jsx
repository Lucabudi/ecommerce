import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'


const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="option-container">
            <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>Sign out</div> :
                <Link className="option" to="/signin">Sign in</Link>
            }
            
            </div>
        </div>

    </div>
)


export default Header