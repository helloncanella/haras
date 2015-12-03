import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';

class AppView extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <SubHeader/>
      </div>
    );
  }

}

ReactDOM.render(
  <AppView/>, document.getElementById('cointainer'));
