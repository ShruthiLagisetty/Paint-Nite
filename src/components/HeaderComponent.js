'use strict';

import React from 'react';

require('styles/Header.css');
const logoImage = require('../images/logo.png');

let HeaderComponent = () => (
  <div className="header-component">
    <div className='row'>
      <img className='logo-image' src={logoImage} alt="Plant Nite" />
      <div className='events'>Events</div>
    </div>
  </div>
);

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
