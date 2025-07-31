import React, { use, useEffect, useState } from 'react'

const Home = () => {
  const [value, setvalue] = useState('');
  const [inputValue, setInputValue] = useState(2);
  const [show,setShow]=useState(true);

  const handelInput = (event) => {
    setInputValue(event.target.value)
  }
  const handelvalue = () => {
    setvalue(inputValue);
  }
  const handelchange=()=>{
    setShow(!show)
  }
  const handelDouble = () => {
    setInputValue(inputValue*2)
  }
  useEffect(()=>{
    document.title=`clicked ${inputValue} times`
  },[inputValue])
  return (
    <div>
      <h1>You Types is : {inputValue}</h1>
      <h1>Value is : {value}</h1>
      <button onClick={handelDouble}>Double</button>
      <input type="text" onChange={handelInput} />
      <button onClick={handelvalue}>submit</button>
      <button onClick={handelchange} style={{backgroundColor: show? 'red':'green', color:'white'}}>{show?'Hide':'Show'}</button>
      {show && <h1>Welcome to React</h1>}
      
    </div>
  )
}

export default Home
