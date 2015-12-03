import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <hgroup className='SubHeader'>
        <div className="top-bar">
          <div className='row'>
            <div className='columns'>
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
      </hgroup>

    );
  }
}

export default Header;
