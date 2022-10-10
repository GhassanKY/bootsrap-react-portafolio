import React from 'react'
import '../Styles/Navbar.css'
import Logo from '../img/LogoNav.svg'


export const Navbar = () => {
    return (
        <div>

            <nav className="navbar color">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="google.com">
                        <img src={Logo} alt="Logo" width="120"  className="d-inline-block align-text-top"/>
                        <p className='textNav'>GhassanKY</p>
                    </a>
                    
                </div>
            </nav>

        </div>
    )
}
