'use strict';

import React from 'react';
import {Route, withRouter} from 'react-router-dom'

import SearchComponent from './search/SearchComponent'

require('styles/App.css');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app-component">

        <Route exact path={'/search'} render={({}) => {
          return <SearchComponent {...this.props}/>
        }} />
      </div>
    );
  }
}

AppComponent.displayName = 'AppComponent';

// Uncomment properties you need
// AppComponent.propTypes = {};
// AppComponent.defaultProps = {};

export default withRouter(AppComponent);
