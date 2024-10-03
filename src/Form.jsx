import { useCallback, useEffect, useState } from 'react'
import './assets/css/Form.css'
import DataContainer from './DataContainer';

function Form(props) {
  const {activateDataContainer} = props

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/Ewerson-hub').then(
      response => response.json()
    ).then(user => {
      
      let x = JSON.parse(user);
      
      setData({
        "name": x.name,
        "avatar":x.avatar,
        "bio": x.bio,
        "github_link":x.github_link,
        "repos": x.repos
      })
    })
    
  },[]);

  console.log(Object.keys(data).length)
  return (
    <>  
        <input type="text" name="search" id="search"/>
        <button onClick={saveData}>Search</button>
        <button onClick={clearData}>Clear</button>

        {(Object.keys(data).length != 0)? <DataContainer setVisible={true} data={data}/> : <DataContainer setVisible={false} />}
    </>
  )
}

export default Form
