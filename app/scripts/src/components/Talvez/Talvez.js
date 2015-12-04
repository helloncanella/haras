import React from 'react';

class Talvez extends React.Component {
  render() {
    return (
      <section className='Talvez'>

        <div className='row'>
          <div className='title column'>
            <h3>Talvez se interesse</h3>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
            <Separador/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore saepe facere, iure aspernatur expedita.</p>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
            <Separador/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore saepe facere, iure aspernatur expedita.</p>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
            <Separador/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore saepe facere, iure aspernatur expedita.</p>
          </div>
          <div className='large-3 column'>
            <img src='images/7.png'/>
            <Separador/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore saepe facere, iure aspernatur expedita.</p>
          </div>
        </div>
      </section>
    );
  }
}

class Separador extends React.Component {

  render(){
    return(
      <div className='Separador'>
        <div className='Linha'></div>
        <div className='Badge'>
          <img src='images/5.png'/>
        </div>
      </div>
    );
  }

}


export default Talvez;
