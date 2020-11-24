import React from 'react'
import './Login.scss'
import {TiSocialFacebook} from 'react-icons/ti';
import {RiTwitterLine} from 'react-icons/ri';
import {IoLogoGoogle} from 'react-icons/io';
import {FaInstagram} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';

function LogIn() {
    return (
            <div className="footer-top">
            <div className="footer-container">
                <h3>Newsletter signup</h3>
                <p>
                    Sign up for our e-mail and be the first who know our special offers! Furthermore, we will give a 15%
                    <br/> discount on the next order after you sign up.
                </p>    
                <div className="footer-login">
                    <input className="form" type="text" placeholder="Enter your e-mail"/>
                    <button className="btn">join us</button>
                </div>
        
                <ul>
                    <li><TiSocialFacebook/></li>
                    <li><RiTwitterLine/></li>
                    <li><IoLogoGoogle/></li>
                    <li><FaInstagram/></li>
                    <li><FaPinterest/></li>
                </ul>
            </div>
        </div>   
    )
}

export default LogIn
