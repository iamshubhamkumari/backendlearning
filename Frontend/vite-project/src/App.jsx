import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h3>Jokes: {jokes.length}</h3>
      {
        jokes.map((joke, index) =>{
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
          </div>
        })
      }

    </>
  )
}

export default App
