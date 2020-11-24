import React from 'react'
import './ProductList.scss'
import Product1 from '../../img/women_product/product1.png'
import Product2 from '../../img/women_product/product2.png'
import Product3 from '../../img/women_product/product3.png'
import Product4 from '../../img/women_product/product4.png'
import Product5 from '../../img/women_product/product5.png'
import Product6 from '../../img/women_product/product6.png'


import {AiOutlineStar} from 'react-icons/ai'
import {RiHandbagFill} from 'react-icons/ri'

function ProductList(props) {
    return (
    <div className="product-section-container">
        <div className="product-items-container">
            <div className="product-image-container">
                <img className="img" src={Product1} alt=""/>
            </div>

            <div className="product-details">
                <span className="product-title">polo</span>
                <ul>
                    <li><AiOutlineStar/></li>
                    <li><AiOutlineStar/></li>
                    <li><AiOutlineStar/></li>
                    <li><AiOutlineStar/></li>
                    <li><AiOutlineStar/></li>
                </ul>
                <span className="description">this is a shirt</span>
                <span className="price">$500.00</span>
                <button className="btn"> <RiHandbagFill/> Add to Cart </button>
            </div>
        </div>
        
        <div className="product-items-container">
                <div className="product-image-container">
                    <img className="img" src={Product2} alt=""/>
                </div>
    
                <div className="product-details">
                    <span className="product-title">polo</span>
                    <ul>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                    </ul>
                    <span className="description">this is a shirt</span>
                    <span className="price">$500.00</span>
                    <button className="btn"> <RiHandbagFill/> Add to Cart </button>
                </div>
            </div>

           

            <div className="product-items-container">
                <div className="product-image-container">
                    <img className="img" src={Product3} alt=""/>
                </div>
    
                <div className="product-details">
                    <span className="product-title">polo</span>
                    <ul>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                    </ul>
                    <span className="description">this is a shirt</span>
                    <span className="price">$500.00</span>
                    <button className="btn"> <RiHandbagFill/> Add to Cart </button>
                </div>
            </div>


            <div className="product-items-container">
                <div className="product-image-container">
                <img className="img" src={Product5} alt=""/>
                </div>
    
                <div className="product-details">
                    <span className="product-title">polo</span>
                    <ul>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                    </ul>
                    <span className="description">this is a shirt</span>
                    <span className="price">$500.00</span>
                    <button className="btn"> <RiHandbagFill/> Add to Cart </button>
                </div>
            </div>

             

            <div className="product-items-container">
                <div className="product-image-container">
                    <img className="img" src={Product4}alt=""/>
                </div>
    
                <div className="product-details">
                    <span className="product-title">polo</span>
                    <ul>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>   
                    </ul>
                    <span className="description">this is a shirt</span>
                    <span className="price">$500.00</span>
                    <button className="btn"> <RiHandbagFill/> Add to Cart </button>
                </div>
            </div>

              

              <div className="product-items-container">
                <div className="product-image-container">
                    <img className="img" src={Product6} alt=""/>
                </div>
    
                <div className="product-details">
                    <span className="product-title">polo</span>
                    <ul>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><AiOutlineStar/></li>
                    </ul>
                    <span className="description">this is a shirt</span>
                    <span className="price">$500.00</span>
                    <button className="btn"> <RiHandbagFill/> Add to Cart </button>
                </div>
            </div>
    </div>
    )
}

export default ProductList
