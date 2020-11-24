import React from 'react'
import './FooterLogo.scss'
import logo from '../../img/logo.png'
import logo1 from '../../img/footer_img/logo1.png'
import logo2 from '../../img/footer_img/logo2.png'
import logo3 from '../../img/footer_img/logo3.png'
import logo4 from '../../img/footer_img/logo4.png'
import logo5 from '../../img/footer_img/logo5.png'
import logo6 from '../../img/footer_img/logo6.png'
import logo7 from '../../img/footer_img/logo7.png'
import logo8 from '../../img/footer_img/logo8.png'

function FooterLogo() {
    return (
     <div className="footer-bottom">
        <div className="footer-logo">
            <img src={logo} alt=""/>
            <p>© Wokiee 2019. All Rights Reserved</p>
        </div>

        <ul>
            <li><img src={logo1} alt=""/></li>
            <li><img src={logo2} alt=""/></li>
            <li><img src={logo3} alt=""/></li>
            <li><img src={logo4} alt=""/></li>
            <li><img src={logo5} alt=""/></li>
            <li><img src={logo6} alt=""/></li>
            <li><img src={logo7} alt=""/></li>
            <li><img className="logo8" src={logo8} alt=""/></li>
        </ul>
    </div>
       
    )
}

export default FooterLogo
