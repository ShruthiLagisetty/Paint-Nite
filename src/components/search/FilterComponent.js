'use strict';

import React from 'react';

require('styles/search/Filter.css');

const FilterComponent = ({currentDirection, onClickAscending, onClickDescending}) => {
  return (
    <div className="filter-component">
      <span className="col-md-3"></span>
      <button className={`col align-self-center col-md-2 btn btn-block ${currentDirection === 'desc' ?  'btn-success' : 'btn-primary'} ml-1`}
              disabled={currentDirection === 'desc'}
              data-dismiss='modal'
              onClick={onClickDescending}>Sort Descending
      </button>
      <span className='space-between'></span>
      <button className={`col align-self-center col-md-2 btn btn-block ${currentDirection === 'asc' ?  'btn-success' : 'btn-primary'} ml-1`}
              disabled={currentDirection === 'asc'}
              data-dismiss='modal'
              onClick={onClickAscending}>Sort Ascending
      </button>
    </div>
  )
}

FilterComponent.displayName = 'FilterComponent';

// Uncomment properties you need
// FilterComponent.propTypes = {};
// FilterComponent.defaultProps = {};

export default FilterComponent;
