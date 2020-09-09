import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card'
import './index.css'
import { useLocation } from 'react-router-dom';
import CryptoJs from 'crypto-js';
import axios from 'axios';

function Characters() {

  const name = useLocation().state;
  const [characters, setCharacters] = useState([]);

  let timestamp = Date.now().toString();

  const publicKey = '145ddbf92c598028adbd37280fca398b';
  const privateKey = 'fe34d571db8241d4961eef238845439e625f8c21';
  let hash = CryptoJs.MD5(timestamp + privateKey + publicKey)

  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${timestamp}&apikey=145ddbf92c598028adbd37280fca398b&hash=${hash}`)
      .then(resp => {
        const array = resp.data.data.results;
        setCharacters(array)


      }).catch(erro => {
        console.log(erro)
      })
  }, [])

  if(characters.length < 1) {
    return (
      <div id="characters-container">
      <Header title='Marvel Characters' />
      <div className="unavailable">
        <p>Unavailable Character with this name</p>
      </div>
      </div>
    )
  }else {
    return (
      <div id="characters-container">
        <Header title='Marvel Characters' />
        <div className="cards">
          {
  
            characters.map((element) => (
  
              <Card title={element.name} key={element.id} description={element.description}
                photo={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                route='characters-description' value={element}
              />
  
            ))
          }
  
        </div>
  
      </div>
    )
  }


 
}

export default Characters;