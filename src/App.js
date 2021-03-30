import React, { useState } from 'react'

import './App.css';
import slova from './data'

function App() {

  const [mode, setMode] = useState(true)
  const [searchVal, setSearch] = useState('')
  const [display, setDisplay] = useState(slova)

  // const filterData = (data, lan) => {
  //   if(lan){
  //     let res = slova.filter(slovo => {
  //       console.log(slovo)
  //       slovo[0].includes(search)
  //     })
  //     console.log(res)
  //   }
  // }

  // let test = filterData(slova, mode)
  let handleChange = (e) => {
    let search = e.target.value
    let res;
    if(mode){
      res = slova.filter(slovo => slovo[0].toLowerCase().includes(search.toLowerCase()))
    }
    else{
      res = slova.filter(slovo => slovo[1].toLowerCase().includes(search.toLowerCase()))
    }
    
    if(search === ''){
      console.log("empty")
      res = slova
    }
    setSearch(search)
    setDisplay(res)
  }


  return (
    <div className='main'>
      <h1>Deutsche Slovniken Pisomken</h1>
      <div className='lanOpt'>
        <p>Jazyk: {mode ? 'Nemčina' : 'Slovina'} </p>
        <button className='lanChange' onClick={() => setMode(!mode)}>Zmeň na {mode ? 'slovinu' : 'nemčinu'}</button>
      </div>
      <div>
        <input type="text" name="search" id="search" value={searchVal} onChange={handleChange}/>
        <button className='inputRem' onClick={() => handleChange({target: {value: ''}})}>Vymazať</button>
      </div>
      
      
      <p className='searchTerm'>Hľadané: {searchVal}</p>

      <div className="results">
        {
          display.map(slovo => {
            return <p key={slovo[0]} >{slovo[0]} - {slovo[1]}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
