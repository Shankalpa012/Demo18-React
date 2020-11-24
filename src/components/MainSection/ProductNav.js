import React from 'react'
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import './ProductNav.scss'

function ProductNav() {
    return (
        <div className='product-navbar'>
            <h2 class="product-logo">women's</h2>
            <ul class="product-navbar-list">                 
                <li class="active"> NEW ARRIVALS</li>
                <li>SPECIALS</li>
                <li>BESTSELLERS</li>
                <li>MOST VIEWED</li>
                <li>FEATURED PRODUCTS</li>
            </ul>
            <ul class="product-arrow">
                <li><BsChevronLeft className="arrow-icon"/></li>
                <li><BsChevronRight className="arrow-icon"/></li>
            </ul>
        </div>
    )
}

export default ProductNav