import React from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';

import CardButton from '../../components/CardButton';


function CharacterDescription() {
  let character = useLocation().state;
  const series = character.series.items;
  const stories = character.stories.items;




  return (

    <div id='description-container'>
      <Header title='Marvel Characters' />
      <div className='character'>
        <div className='description-theme'>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Black Panther" />
          <h1>{character.name}</h1>
        </div>

        <div className='description-desc'>
          <p>{character.description}</p>
        </div>

        <div className='appears-on'>
          <p> Series:</p>
          <ul>


            {
              series.map((element, index) => (
                <CardButton key={index} movie={element.name} path={element.resourceURI} />
              ))
            }


          </ul>
        </div>

        <div className='appears-on'>
          <p> Stories:</p>
          <ul>


            {
              stories.map((element, index) => (
                <CardButton key={index} movie={element.name} path={element.resourceURI} />
              ))
            }


          </ul>
        </div>



      </div>

    </div>

  )
}
export default CharacterDescription;