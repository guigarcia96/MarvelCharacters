import React, {useState} from 'react';
import Input from '../../components/Input';
import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';


function Landing() {

  const [name, setName] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  

  return (
    <div id="app-container">

      <Header title='Marvel Characters' />

      <section>
        <p>Insert your favorite character and see the informations</p>
      </section>


      <form onSubmit={(event) => {return event.preventDefault()}} >

        <Input value={name} onChangeValue={event => handleChange(event)} placeholder='Text your favorite Character' />
      </form>

      <Button name='Submit'  path='/characters' title={name} />

      

    </div>
  )
}
export default Landing;