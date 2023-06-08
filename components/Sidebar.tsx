import React from 'react'
import Image from 'next/image'
const Sidebar = () => {
  return (
    <aside className="sidebar reverse">
      <div className="logo-box flex-vertical">
        <a
          href="#"
          className="logo flex-vertical">
          <Image
            className="image"
            src="/assets/logo.svg"
            width={200}
            height={100}
            alt="Vetra logo"
          />
        </a>
        <div className="close-sidebar">
          <i className="bi bi-x"></i>
        </div>
      </div>
      <div className="sidebar-box scrollable scroll-visible">
        <div className="account rounded bg-white flex-vertical">
          <div className="account-image circle">
            <Image
              className="image"
              src="/assets/users/avatar.jpg"
              width={40}
              height={40}
              alt="avatar"
            />
          </div>
          <div className="account-infor">
            <h4 className="name">Van Linh</h4>
            <span className="role">Sales Manager</span>
          </div>
          <ul className="account-action bg-white rounded">
            <li className="account-action-item">
              <a href="#">
                <i className="bi bi-person"></i>
                Profile
              </a>
            </li>
            <li className="account-action-item">
              <a href="#">
                <i className="bi bi-envelope"></i>
                Inbox
              </a>
            </li>
            <li className="account-action-item setting">
              <a href="#">
                <i className="bi bi-gear"></i>
                Setting
              </a>
            </li>
            <li className="account-action-item">
              <a href="#">
                <i className="bi bi-box-arrow-right"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-group">
          <span className="sidebar-title">E-Commerce</span>
          <ul className="sidebar-list">
            <li className="sidebar-item active">
              <a href="#">
                <i className="bi bi-bar-chart"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-receipt"></i>
                <span>Orders</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">List</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Detail</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-truck"></i>
                <span>Products</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">List View</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Grid View</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Product Detail</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Shopping Cart</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Checkout</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-wallet"></i>
                <span>Buyer</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Orders</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Addresses</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#">
                <i className="bi bi-person-badge"></i>
                <span>Customer</span>
              </a>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-receipt-cutoff"></i>
                <span>Invoices</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">List</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Detail</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sidebar-group">
          <span className="sidebar-title">Apps</span>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <a href="#">
                <i className="bi bi-chat-square"></i>
                <span>Chats</span>
                <span className="sidebar-badge badge flex-center bg-success count circle">
                  15
                </span>
              </a>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-envelope"></i>
                <span>Email</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">Inbox</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Detail</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-check-circle"></i>
                <span>Todo App</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">List</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Detail</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sidebar-group">
          <span className="sidebar-title">Pages</span>
          <ul className="sidebar-list">
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-person"></i>
                <span>Profile</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">Post</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Connections</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#">
                <i className="bi bi-person-circle"></i>
                <span>Users</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="sidebar-dropdown-item">
                  <a href="#">List View</a>
                </li>
                <li className="sidebar-dropdown-item">
                  <a href="#">Grid View</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#">
                <i className="bi bi-gear"></i>
                <span>Settings</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#">
                <i className="bi bi-postcard"></i>
                <span>Pricing Table</span>
                <span className="sidebar-badge bg-success text rounded">
                  New
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#">
                <i className="bi bi-search"></i>
                <span>Search Page</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#">
                <i className="bi bi-question-circle"></i>
                <span>FAQ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
