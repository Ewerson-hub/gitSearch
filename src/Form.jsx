import { useState } from 'react'
import './assets/css/form.css'

const Form = (props) => {

  const checkIfInputIsEmpty = () => {
    props.getDataUpdate(null)

    if(document.getElementById('search').value){
      props.updateAwaitDataLoading(true)
      saveData()
    }
  }

  const saveData = async () => {
  
   await fetch(`http://localhost:3000/${document.getElementById('search').value}`).then(
      response => response.json()
    ).then(user => {
       props.getDataUpdate(JSON.parse(user))
       props.updateAwaitDataLoading(false)
    }) 
  }

  return (
    
    <div id='form-container'> 
        <h1>Git Search</h1>
        <div>
          <input type="text" name="search" id="search" required/>
          <button onClick={checkIfInputIsEmpty} type='button'>Search</button>
        </div>
    </div>
  )
}

export default Form
