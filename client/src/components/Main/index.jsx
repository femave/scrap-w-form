import React, { Component } from 'react'
import services from '../../services/localService'

class Main extends Component {
    constructor () {
      super()
    }
  
    componentDidMount() {
        services.getData()
        
    }
    
    work = () => {
      console.log('click')
      services.getData()
    }
  
    render() {
      return (
        <div>
          <h1>Users</h1>
          <button onClick={this.work}>Click!</button>
        </div>
      );
    }
  }
  
  export default Main;