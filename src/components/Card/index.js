import React from 'react';
import './index.css'
import {Link } from 'react-router-dom'

function Card(props) {
  return (
    <div class="center">
      <div class="property-card">
        <Link to={`/${props.route}`}  >
          <div class="property-image">

          </div></Link>
        <div class="property-description">
          <h5> {props.title} </h5>
          <p>{props.description}</p>
        </div>

      </div>
    </div>
  )
}
export default Card;