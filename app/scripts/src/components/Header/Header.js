import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <div className="top-bar">
          <div className='row'>
            <div className="top-bar-left" id='logo'>
              <img src='images/logo-horizontal.png'/>
            </div>

            <div className="top-bar-right">
              <ul className="menu">
                <li>
                  <a href="#">MENU</a>
                </li>
                <li>
                  <a href="#">MENU</a>
                </li>
                <li>
                  <a href="#">MENU</a>
                </li>
                <li>
                  <a href="#">MENU</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
