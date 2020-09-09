import React from 'react';
import './index.css';
import {Link} from 'react-router-dom'

const Button = (props) => {
  return(
    <div id="button">
       <Link to={
          {
            pathname: props.path,
             state: props.title         
           }
       }>
        {props.name}
        </Link>
    </div>
  )
}
export default Button;