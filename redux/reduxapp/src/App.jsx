import React from 'React'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';
import { inputStr } from './actions';

const App = () => {
  const counter = useSelector(state => state.changeTheNumber)
  const dispatch = useDispatch()

  const [inputArea, setInputArea] = useState('')

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(decNumber())}>-</button>
      <button onClick={() => dispatch(incNumber(5))}>+</button>
      <input type="text" onChange={(e) => setInputArea(e.target.value)} placeholder='Enter Text...' />
      <button onClick={() => dispatch(inputStr(inputArea))}>Submit</button>
    </div>
  )
}

export default App
