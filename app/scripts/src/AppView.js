import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Cavalo from './components/Cavalo/Cavalo';
import Galeria from './components/Galeria/Galeria';
import Divisoria from './components/Divisoria/Divisoria';
import Talvez from './components/Talvez/Talvez';
import Extra from './components/Extra/Extra';
import Footer from './components/Footer/Footer';

class AppView extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <SubHeader/>
        <Cavalo/>
        <Divisoria/>
        <Galeria/>
        <Talvez/>
        <Extra/>
        <Footer/>
      </div>
    );
  }

}

ReactDOM.render(
  <AppView/>, document.getElementById('cointainer'));
