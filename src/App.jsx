import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>count is: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </>
  )
}

export default App
