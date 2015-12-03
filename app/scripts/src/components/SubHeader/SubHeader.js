import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='SubHeader'>
        <div className="top-bar">
          <div className='row'>
            <div className="top-bar-left">
              <ul className="menu">
                <li>
                  <a href="#">Garanhões</a>
                </li>
                <li>
                  <a href="#">Potros</a>
                </li>
                <li>
                  <a href="#">Potras</a>
                </li>
                <li>
                  <a href="#">Matrizes</a>
                </li>
                <li>
                  <a href="#">Castrados</a>
                </li>
                <li>
                  <a href="#">À venda</a>
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
