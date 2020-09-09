import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card'
import './index.css'

function Characters() {
  return (
    <div id="characters-container">
      <Header title='Marvel Characters' />
      <div className="cards">
        <Card title='Hulk' description='shhsuhuds' route='characters-description' />
        <Card title='Capitão America' description='shhsuhuds' route='characters-description' />
        <Card title='Viuva Negra' description='shhsuhuds' route='characters-description' />
        <Card title='Black Panther' description='shhsuhuds' route='characters-description' />
      </div>

    </div>
  )
}

export default Characters;