import DataContainer from './DataContainer.jsx'
import Form from './Form.jsx'
import React, { Component, useState } from 'react'

const MainRender = () => {
    const [data, setData] = useState(null);
    
    const handleDataUpdate = (newData) => {
      setData(newData);
    }
    // console.log((data)?data:'na')
    return (
      <>
        <Form getDataUpdate={handleDataUpdate}/>
        <DataContainer setVisible={(data === null)? false : true} data={data}/>
      </>
    )
    
}

export default MainRender