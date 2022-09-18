import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StoreSample } from './components/StoreSample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to={`/`}></Link>
              <Link to={`/store-sample`}>store-sample</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path={`/store-sample`} element={<StoreSample></StoreSample>} />
        </Routes>
        <div className="App">
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
