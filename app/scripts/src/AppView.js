import React from 'react';
import ReactDOM from 'react-dom';

function getAppStates () {}


class AppView extends React.Component {

  render () {
    return (
      <div className='App'>
        <h1>Helllo</h1>
      </div>
    );
  }


}

ReactDOM.render(<AppView/>, document.getElementById('cointainer'));
