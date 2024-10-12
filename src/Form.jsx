import { useState } from 'react'
import './assets/css/form.css'

const Form = (props) => {
  const [user, setUser] = useState('Ewerson-hub');

  const saveData = async () => {
  props.updateAwaitDataLoading(true)
  setUser(document.getElementById('search').value)

   await fetch(`http://localhost:3000/${user}`).then(
      response => response.json()
    ).then(user => {
       props.getDataUpdate(JSON.parse(user))
       props.updateAwaitDataLoading(false)
    }) 
  }
  return (
    <div id='form-container'>  
        <input type="text" name="search" id="search" required/>
        <button onClick={saveData} type='button'>Search</button>
    </div>
  )
}

export default Form
