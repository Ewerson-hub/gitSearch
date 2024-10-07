import { useState } from 'react'
import './assets/css/form.css'

const Form = (props) => {
  const [user, setUser] = useState('Ewerson-hub');

  const saveData = async () => {
  setUser(document.getElementById('search').value)

   await fetch(`http://localhost:3000/${user}`).then(
      response => response.json()
    ).then(user => {
       props.getDataUpdate(JSON.parse(user))
    }) 
  }
  return (
    <div id='form-container'>  
        <input type="text" name="search" id="search"/>
        <button onClick={saveData}>Search</button>
    </div>
  )
}

export default Form
