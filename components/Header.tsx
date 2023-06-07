import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <nav className="header bg">
      <div className="menu-sidebar">
        <i className="bi bi-list"></i>
      </div>
      <div className="title">
        <h2>Dashboard</h2>
      </div>
      <div className="search-box flex-vertical bg-white">
        <label htmlFor="search">
          <i className="bi bi-search"></i>
        </label>
        <input id="search" type="text" name="search" placeholder="Search..." />
      </div>
      <ul className="header-action flex-vertical">
        <li className="search-mobile action-btn">
          <i className="bi bi-search"></i>
        </li>
        <li id="mobile-action" className="action-btn">
          <i className="bi bi-three-dots"></i>
        </li>
        <li className="notify action-btn">
          <i className="bi bi-bell"></i>
          <span id="notification-badge-count" className="badge bg-error circle flex-center">10</span>
        </li>
        <li className="cart action-btn">
          <i className="bi bi-cart"></i>
          <span id="cart-badge-count" className="badge bg-error circle flex-center">5</span>
        </li>
        <li className="cart-box bg-white rounded">
          <div className="cart-title">Shopping Cart</div>
          <ul id="list-cart" className="scrollable scroll-visible">
            <li className="card-product">
              <a href="#" className="product-image">
                <Image
                  src="/assets/products/3.jpg"
                  alt="product-image"
                  width={80}
                  height={80} />
              </a>
              <div className="product-infor">
                <a href="#" className="name hover">Digital clock</a>
                <span className="quantity">1</span>
                <span>x</span>
                <span className="price">$125.58</span>
              </div>
              <a href="#" className="product-action">
                <i className="bi bi-trash"></i>
              </a>
            </li>
            <li className="card-product">
              <a href="#" className="product-image">
                <Image
                  src="/assets/products/4.jpg"
                  alt="product-image"
                  width={80}
                  height={80} />
              </a>
              <div className="product-infor">
                <a href="#" className="name hover">Toy car</a>
                <span className="quantity">1</span>
                <span>x</span>
                <span className="price">$15.80</span>
              </div>
              <a href="#" className="product-action">
                <i className="bi bi-trash"></i>
              </a>
            </li>
            <li className="card-product">
              <a href="#" className="product-image">
                <Image
                  src="/assets/products/6.jpg"
                  alt="product-image"
                  width={80}
                  height={80} />
              </a>
              <div className="product-infor">
                <a href="#" className="name hover">Cake</a>
                <span className="quantity">3</span>
                <span>x</span>
                <span className="price">$4.125</span>
              </div>
              <a href="#" className="product-action">
                <i className="bi bi-trash"></i>
              </a>
            </li>
            <li className="card-product">
              <a href="#" className="product-image">
                <Image
                  src="/assets/products/7.jpg"
                  alt="product-image"
                  width={80}
                  height={80} />
              </a>
              <div className="product-infor">
                <a href="#" className="name hover">Drinks</a>
                <span className="quantity">2</span>
                <span>x</span>
                <span className="price">$14.52</span>
              </div>
              <a href="#" className="product-action">
                <i className="bi bi-trash"></i>
              </a>
            </li>
            <li className="card-product">
              <a href="#" className="product-image">
                <Image
                  src="/assets/products/10.jpg"
                  alt="product-image"
                  width={80}
                  height={80} />
              </a>
              <div className="product-infor">
                <a href="#" className="name hover">Donut</a>
                <span className="quantity">2</span>
                <span>x</span>
                <span className="price">$10.02</span>
              </div>
              <a href="#" className="product-action">
                <i className="bi bi-trash"></i>
              </a>
            </li>
          </ul>
          <div className="cart-total">
            <span>Sub Total:</span>
            <span className="total">$1254.26</span>
          </div>
        </li>
      </ul>
      <a className="primary-btn rounded flex-center" href="#">
        <i className="bi bi-plus-circle"></i>
        <span>Add Product</span>
      </a>
    </nav>
  )
}

export default Header