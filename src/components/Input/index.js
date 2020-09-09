import React from 'react';
import './index.css';

const Input = (props) => {


  return (
   <input value={props.value} onChange={props.onChangeValue} type="text" placeholder={props.placeholder}/>
  )
}
export default Input;