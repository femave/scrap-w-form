import React, { Component } from 'react'
// import styles from './main.scss'
// import Seeker from '../Seeker'
import services from '../../services/localService'

class Main extends Component {
    constructor () {
      super()
      this.state = {
        users: []
      }
    }
  
    componentDidMount() {
        services.getData()
        // .then(console.log)
        // .then(res => res.json())
        .then(users =>{
          console.log(users)
           this.setState({ users })
           console.log("2", this.state)
          })
        // .then(console.log("1", this.state))
    }
  
    render() {
      return (
        <div>
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </div>
      );
    }
  }
  
  export default Main;