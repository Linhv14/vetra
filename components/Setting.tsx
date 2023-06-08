import React from 'react'

const Setting = () => {
  return (
    <div
      id="setting"
      className="flex bg-white">
      <div className="header flex-vertical">
        <div className="gear">
          <i className="bi bi-gear"></i>
        </div>
        <h2 className="title">Settings</h2>
        <div className="close">
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
      <ul className="setting-list scrollable scroll-visible flex column grow">
        <li className="setting-item-box hover pointer flex-vertical">
          <input
            type="checkbox"
            name="theme-color"
            id="theme-color"
          />
          <label htmlFor="theme-color">Enable dark mode</label>
        </li>
        <li className="setting-item-box hover pointer flex-vertical">
          <input
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label htmlFor="remember">Remember next visits</label>
        </li>
        <li className="setting-item-box hover pointer flex-vertical">
          <input
            type="checkbox"
            name="allow-notify"
            id="allow-notify"
          />
          <label htmlFor="allow-notify">Allow notifications</label>
        </li>
        <li className="setting-item-box hover pointer flex-vertical">
          <input
            type="checkbox"
            name="hide-menu"
            id="hide-menu"
          />
          <label htmlFor="hide-menu">Hide menus</label>
        </li>
      </ul>
      <div className="action">
        <a
          className="btn"
          href="#">
          All Settings
        </a>
      </div>
    </div>
  )
}

export default Setting
