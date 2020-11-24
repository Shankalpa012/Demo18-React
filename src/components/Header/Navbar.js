import React from 'react'
import '../Header/Navbar.scss'

function Navbar() {
    return (
        <div>
            <div className='navbar-container'>
                <ul>
                    <li> <a className='current' href='#'>home</a></li>
                    <li> <a href='#'>shop</a></li>
                    <li><a href='#'>pages</a></li>
                    <li><a href='#'>blog</a></li>
                    <li><a href='#'>portfolio</a></li>
                    <li><a href='#'>women</a></li>
                    <li><a href='#'>men</a></li>
                    <li><a href='#'>buy theams!</a></li>  
                </ul>
            
            </div>
        </div>
    )
}

export default Navbar
