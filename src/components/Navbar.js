import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import'./Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
    };

    useEffect(() => {   //supuestamente arregla el problema con el boton del SIGN UP pero no me funciono
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
       <>
         <nav className='navbar'>
          <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick=
            {closeMobileMenu}>
                TRVL <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='niv-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='niv-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='niv-item'>
                <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className='niv-item'>
                <Link to='/sing-up' className='nav-links' onClick={closeMobileMenu}>
                  Sing-up
                </Link>
              </li>
            </ul>
            {Button && <Button buttonStyle='btn--outline'>SING UP</Button>}
          </div>
          </nav>
       </>

    );
}

export default Navbar
