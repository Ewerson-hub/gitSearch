import DataContainer from './DataContainer.jsx'
import Form from './Form.jsx'
import React, { Component } from 'react'

class MainRender extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        enableDataContainer: false,

        dataApi: {
          name:"",
          avatar:"",
          bio:"",
          github_link:"",
          repositories: ""
        }
      }
      
      this.activateDataContainer = this.activateDataContainer.bind(this)
    }

    activateDataContainer(){
      this.setState({enableDataContainer: true})
    }
    
    render(){
      return (
        <>
          <Form activateDataContainer={this.activateDataContainer}/>
          {/* <DataContainer setVisible={this.state.enableDataContainer}/> */}
        </>
      )
    }
  }

export default MainRender