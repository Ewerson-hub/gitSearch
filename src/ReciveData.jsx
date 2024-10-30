import DataContainer from './DataContainer.jsx'
import Form from './Form.jsx'
import React, { Component, useState } from 'react'

const MainRender = () => {
    const [data, setData] = useState(null);
    const [awaitDataLoading, setAwaitDataLoading] = useState(true);
    
    const handleDataUpdate = (newData) => {
      setData(newData);
    }
    
    const handleUpdateAwaitDataLoading = (boolean) => {
      setAwaitDataLoading(boolean)
    }
    
    return (
      <>
        <Form getDataUpdate={handleDataUpdate} updateAwaitDataLoading = {handleUpdateAwaitDataLoading}/>
        <DataContainer setVisible={(data === null)? false : true} data={data} awaitDataLoading={awaitDataLoading}/>
      </>
    )
    
}

export default MainRender