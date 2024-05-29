import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1)
  }
  const minusCount = () => {
    setCount(count - 1)
  }
  return (
    <div className='wrap'>
      <p>현재 카운트 : {count}</p>
      <div>
        <button className='btn' onClick={plusCount}> + </button>
        <button className='btn' onClick={minusCount}> - </button>
      </div>
    </div>
  )
}

export default App
