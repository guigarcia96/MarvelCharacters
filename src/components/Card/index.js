import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="center">
      <div className="property-card">
        <Link to={
           {
            pathname: `/${props.route}`,
             state: props.value      
           }
        }  >
          <div className="property-image" style={{ backgroundImage: `url(${props.photo})` }} >


          </div></Link>
        <div className="property-description">
          <h5> {props.title} </h5>
          <p>{props.description}</p>
        </div>

      </div>
    </div>
  )
}
export default Card;