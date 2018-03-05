'use strict';

import React from 'react';
import axios from 'axios';

import FilterComponent from './FilterComponent'
import EventItemComponent from './EventItemComponent'

require('styles/search/Search.css');

class SearchComponent extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      EventItems: <div></div>,
      sortDirection: 'asc'
    }

    this._onClickAscending = this._onClickAscending.bind(this)
    this._onClickDescending = this._onClickDescending.bind(this)
  }
  componentDidMount () {

    this._getEvents()
  }

  _getEvents() {
    axios.get('/sample-data.json').then((response) => {
      if(response.status === 200){
        const events = response.data.data.eventSearch.edges

        this._setEventsDivs(events)
      }
    })
  }

  _setEventsDivs(events) {
    const EventItems = events.map((event, index) => {
     return <EventItemComponent key={index} eventItem={event} />
    })

    this.setState({events, EventItems})
  }


  _onClickAscending() {

    const sortDirection = 'asc'

    const sortedEvents = this._getSortedEvents(sortDirection)

    this._setEventsDivs(sortedEvents)
    this.setState({sortDirection})


  }

  _onClickDescending() {
    const sortDirection = 'desc'

    const sortedEvents = this._getSortedEvents(sortDirection)

    this._setEventsDivs(sortedEvents)
    this.setState({sortDirection})


  }

  _getSortedEvents (sortDirection) {
    const {events} = this.state

    return events.sort((a,b) => {
      if (sortDirection === 'asc') {
        if (new Date(a.node.start) > new Date(b.node.start)) return 1
        if (new Date(a.node.start) < new Date(b.node.start)) return -1
        return 0
      } else {
        if (new Date(a.node.start) > new Date(b.node.start)) return -1
        if (new Date(a.node.start) < new Date(b.node.start)) return 1
        return 0
      }
    })

  }

  render() {
    const {EventItems, sortDirection} = this.state

    return (
      <div className="container">
        <FilterComponent
          currentDirection={sortDirection}
          onClickAscending={this._onClickAscending}
          onClickDescending={this._onClickDescending} />
        <div className="search-component">
            {EventItems}
        </div>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchSearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
