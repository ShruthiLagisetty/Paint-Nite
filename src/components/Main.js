require('bootstrap/dist/css/bootstrap.css');
require('normalize.css/normalize.css');
require('styles/Main.css');

import React from 'react';
import {BrowserRouter} from 'react-router-dom'


import AppComponent from './AppComponent'
import HeaderComponent from './HeaderComponent'

class MainComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <HeaderComponent />
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </div>
    );
  }
}

MainComponent.defaultProps = {
};

export default MainComponent;
