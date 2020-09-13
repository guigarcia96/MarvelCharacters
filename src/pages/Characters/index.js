import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card'
import LoadingOverlay from 'react-loading-overlay';
import './index.css'
import { useLocation } from 'react-router-dom';
import CryptoJs from 'crypto-js';
import axios from 'axios';

function Characters() {

  const name = useLocation().state;
  const [characters, setCharacters] = useState([]);
  const [unavailable, setUnavailable] = useState(false)
  const [loading, setLoading] = useState(true)

  let timestamp = Date.now().toString();

  const pubk = process.env.REACT_APP_PUBLIC_KEY;
  const priK = process.env.REACT_APP_PRIVATE_KEY;
  const maxCharacters = 100;
  let hash = CryptoJs.MD5(timestamp + priK + pubk);
  

  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&limit=${maxCharacters}&ts=${timestamp}&apikey=${pubk}&hash=${hash}`)
      .then(resp => {
        
        const array = resp.data.data.results;
        setCharacters(array)
        if(array.length <1) {
          setUnavailable(true)
        }
        setLoading(false)

      }).catch(erro => {
        console.log(erro)
      })
  },[])

  if (loading) {

      return (
      <div id="characters-container">
        <Header title='Marvel Characters' />
        <div className="unavailable">
          <LoadingOverlay
            active={true}
            spinner
            text='Loading...'
          >
            
          </LoadingOverlay>
        </div>
      </div>
    ) 
    

  } else {
    if(unavailable) {

      return (
        <div id="characters-container">
          <Header title='Marvel Characters' />
          <div className="unavailable">
            <p>Character Unavailable</p>
          </div>
        </div>
      ) 
      
    } else {
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

}

export default Characters;