import React from 'react';
import './index.css';
import {Link} from 'react-router-dom'

const Button = (props) => {
  return(
    <div id="button">
       <Link to={props.path}>
        {props.name}
        </Link>
    </div>
  )
}
export default Button;