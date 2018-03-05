'use strict';

import React from 'react';
import moment from 'moment'

require('styles/search/EventItem.css');
let EventItemComponent = ({eventItem}) => {
  return (
    <div className='eventitem-component'>
      <div className='card'>
        <div className='card-banner'>
          <div>
            <span>{moment(eventItem.node.start).format('MMM DD')}</span>
            <br/>
            <span className='time'>{moment(eventItem.node.start).format('ddd, h:mm a')}</span>
          </div>
        </div>
        <img className='card-img-top' src={eventItem.node.painting.images[0].thumb_url}
             alt={eventItem.node.venue.name}/>
        <div className='location-tickets'>
          <span className='maps'>{`${Math.round(eventItem.distance * 100) / 100} MI`}</span>
          <span className='tickets'>{`${Math.round(eventItem.node.tickets_available)} TX`}</span>

          {/*<img className='maps' src={mapsImage} />*/}
        </div>
        <div className='card-block'>
          <div className='card-title'>{eventItem.node.painting.title}</div>
          <div
            className='card-location'>{`${eventItem.node.venue.name} ${eventItem.node.venue.address.city}, ${eventItem.node.venue.address.state}`}</div>
          <div className='artist-section'>
            <div>
              <img className='img-circle' src={eventItem.node.artist.images[0].thumb_url}
                   alt={eventItem.node.artist.first_name}/>
            </div>
            <div className='rate'>
              <span className='artist-name'>{`${eventItem.node.artist.first_name} ${eventItem.node.artist.last_name}`}</span>
              <br/>
              <input type='radio' id='star5' name='rate' value='5'/><label htmlFor='star5' title='text'>5 stars</label>
              <input type='radio' id='star4' name='rate' value='4'/><label htmlFor='star4' title='text'>4 stars</label>
              <input type='radio' id='star3' name='rate' value='3'/><label htmlFor='star3' title='text'>3 stars</label>
              <input type='radio' id='star2' name='rate' value='2'/><label htmlFor='star2' title='text'>2 stars</label>
              <input type='radio' id='star1' name='rate' value='1'/><label htmlFor='star1' title='text'>1 star</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

EventItemComponent.displayName = 'SearchEventItemComponent';


export default EventItemComponent;
