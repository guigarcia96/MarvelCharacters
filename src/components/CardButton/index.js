import React from 'react';
import './index.css';



function CardButton(props) {
  return(
    <li className="btn effect01" target="_blank">
      {props.movie}
    </li>
  )
}

export default CardButton;