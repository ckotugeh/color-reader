import { useState } from 'react'
import viteLogo from '/vite.svg'
import ColorScanner from './color-scanner'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 ColorScanner()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Object Color scanner</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          The application will used to identy color of any object
        </p>
      </div>
      
    </>
  )
}

export default App
