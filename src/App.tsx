import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [words, setWords] = useState([
    "install",
    "rhythm",
    "slope",
    "opinion",
    "mean",
    "crowded",
    "full",
    "irritating",
    "amusing"
  ])
  function getarandomWord () {
    let randomletter = Math.floor(Math.random() * words.length)
    return words[randomletter]
  }

  let state = {
    word: getarandomWord(),
    characters: [],
    maxmistakes: 5,
    streak: 0
  }
  function restart () {
    state.word = getarandomWord()
    state.characters = []
  }
  function getthewrongasnwers () {
    return state.characters.filter(char => !state.word.includes(char))
  }
  function getthewrongasnwersCount () {
    let mistakes = getthewrongasnwers()
    return mistakes.length
  }

function getthecorrectanswers () {
  return state.characters.filter(char => state.word.includes(char))
}

function ifWon () {
  for (let char of state.word) {
    if (!state.characters.includes(char)) return false
  }
  return true
}
function ifLost () {
  return getthewrongasnwersCount() >= state.maxmistakes
}


return(
 <div className='App'>
  <div className='header'>
  <h1>The World of Games</h1>
  <h2>Hangman</h2>
  </div>
  <div className='main'>
  <h3>{getarandomWord().toUpperCase()}</h3>
  <div className='input'>
  <input ></input>
  <button onClick={()=>{{ifWon}
    return (
      <div>
        Congrats
      </div>
    )
  }} > GO </button>

  </div>
  </div>
 </div>
)
  
}

export default App
