import React from 'react';
import '../Header/HeaderIcons.scss'
import {BsSearch} from 'react-icons/bs';
import {BsBag} from 'react-icons/bs';
import {BsPerson} from 'react-icons/bs';
import {GiSettingsKnobs} from 'react-icons/gi';

function HeaderIcons() {
    return (
        <div> 
            <div className='icons-container'>
                <ul>
                    <li><BsSearch className='icons'/></li>
                    <li> <BsBag className='icons'/></li>
                    <li><BsPerson className='icons'/></li>
                    <li><GiSettingsKnobs className='icons'/></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderIcons
