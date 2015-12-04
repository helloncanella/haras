import React from 'react';

class Galeria extends React.Component {
  render() {
    return (
      <section className='Galeria'>

        <div className='row'>
          <div className='title column'>
            <h4>GALERIA</h4>
          </div>

          <div className='large-3 column'>
            <img src='images/7.png'/>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
          </div>
        </div>
        <div className='row video'>
          <div className='large-12 column'>
            <img src='images/horse.jpg'/>
          </div>
        </div>

      </section>
    );
  }
}

export default Galeria;
