import React from 'react'
import logo from '../../img/logo.png'
import '../Header/Headertop.scss'
import HeaderIcons from './HeaderIcons' ;



function Headertop() {
    return (
        <div className='topHeader'>
            <div className='headertop-container'>
                <img className='img' src={logo}/>
            </div>
            <HeaderIcons/>
        </div>
    )
}

export default Headertop
