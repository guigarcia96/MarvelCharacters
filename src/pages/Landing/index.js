import React from 'react';
import Input from '../../components/Input';
import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';

function Landing() {
  return (
    <div id="app-container">

      <Header title='Marvel Characters' />

      <section>
        <p>Insert your favorite character and see the informations</p>
      </section>


      <form>

        <Input placeholder='Text your favorite Character' />
      </form>

      <Button name='Submit' path='/characters' />

      

    </div>
  )
}
export default Landing;