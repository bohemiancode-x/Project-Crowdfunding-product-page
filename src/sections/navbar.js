import React from 'react';
import hamburger from './hamburger.svg'
import logo from './projectlogo.svg'
import closemenu from './iconclosemenu.svg'


const Navbar = () => {

    const navTop = document.querySelector('.navtop');
    const overLay = document.querySelector('.navmenu');
    const openBtn = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close');

        const openNav = function () {
            document.querySelector('.navmenu').style.display = 'block';
            document.querySelector('.navtop').style.display = 'none';
        }
    
    const closeNav = function () {
        document.querySelector('.navmenu').style.display = 'none';
        document.querySelector('.navtop').style.display = 'flex';
    }


    return ( 
        <div className="navbar">
            <div className='navtop'>
                <div className="logo"><img src={logo} alt="" /></div>
                <div onClick={openNav} className="hamburger"><img src={hamburger} alt="" /></div>
            </div>
            <div className="navmenu">
                <div className="navmenutop">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div onClick={closeNav} className="close"><img src={closemenu} alt="" /></div>
                </div>
                <ul>
                    <li>About</li>
                    <span></span>
                    <li>Discover</li>
                    <span></span>
                    <li>Get Started</li>
                </ul>
            </div>
        </div>
     );
     
}
 
export default Navbar;