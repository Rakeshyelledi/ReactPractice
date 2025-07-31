import React, { useState } from 'react'

const Home = () => {
  const [value, setvalue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handelInput = (event) => {
    setInputValue(event.target.value)
  }
  const handelvalue = () => {
    setvalue(inputValue);
  }
  return (
    <div>
      <h1>You Types is : {inputValue}</h1>
      <h1>Value is : {value}</h1>
      <input type="text" onChange={handelInput} />
      <button onClick={handelvalue}>submit</button>
    </div>
  )
}

export default Home
