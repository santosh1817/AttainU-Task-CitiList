import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Account extends React.Component{
    constructor(){
        super()
        this.state={
            user:{}
        }
    }
    // tokens are sending to server
    componentDidMount(){
        axios.get('http://localhost:3005/users/account',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }) 
        .then (response=>{
            const user=response.data
            this.setState({user}) //when our current value doesn't depend on previous value, that time 

        })
    }
    
    render(){

        return(
            
            <div>
                <h2>Welcome  {this.state.user.username}</h2>
                <p> You are successfully logged in </p>
                <p> Below are your email & username </p>
                <h3>Email</h3><p>{this.state.user.email}</p>
                <h3>Username</h3><p>{this.state.user.username}</p>
              
                <br/>

                <Link to={`/users/edit/${this.state.user._id}`}>edit user details </Link>
                
            </div>
        )
    }
}
export default Account