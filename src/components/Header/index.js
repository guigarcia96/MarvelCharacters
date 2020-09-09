import React from 'react';
import CaptainAmerica from '../../assets/img/captain-america.png'
import './index.css';
import {Link} from 'react-router-dom';


const Header = (props) => {

  return(
    <header>
      <Link to='/'>
        <h1>{props.title}</h1>
      </Link>
      <img src={CaptainAmerica} alt="Black Panther"/>
    </header>
  )

}
export default Header