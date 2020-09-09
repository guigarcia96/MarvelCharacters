import React from 'react';
import './index.css';
import Header from '../../components/Header';
import Pantera from '../../assets/img/pantera.jpeg'

function CharacterDescription() {
  return (

    <div id='description-container'>
      <Header title='Marvel Characters' />
      <div className='character'>
        <div className='description-theme'>
          <img src={Pantera} alt="Black Panther" />
          <h1>Pantera Negra</h1>
        </div>

        <div className='description-desc'>
          <p>lorem ipsum bijsiajiajsiajsaijsiajsaijsisaijsai</p>
        </div>

        <div className='appears-on'>
          <p> Aparece em:</p>
          <ul>
            <li>Filme 1</li>
            <li>Filme 2</li>
            <li>Filme 3</li>
            <li>Filme 4</li>
            
          </ul>
        </div>
      </div>

    </div>

  )
}
export default CharacterDescription;