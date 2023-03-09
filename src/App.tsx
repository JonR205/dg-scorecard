import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ScoreTable from './components/ScoreTable'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <ScoreTable />
    <Card />
    </div>
  )
}

export default App
