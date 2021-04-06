import React from 'react'
import axios from 'axios'

class UserUpdate extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
                username:'',
               
                notice:''
        
        }
    }

    handleChange = (e) => {
        e.persist() 
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            
            username:this.state.username,
            
        }
       
        
        const id=this.props.match.params.id

        axios.put(`http://localhost:3005/users/edit/${id}`, formData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }

        })
        .then(response => {

            if(response.data.errors) {
                this.setState(() => ({
                    errors: response.data.errors
                }))
                
            } else {
                
                this.props.history.push('/users/account')
            }   
        })
        
    }

    render() {
        return(
            <div className="row">
            <div className="col-md-6 offset-3">

                <h2>Edit username </h2>
                
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>
                            Username
                            <input type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="update username"
                            />
                        </label>
                        
                    </div>

                   
                    {this.state.notice && <p> { this.state.notice } </p>}
                    <input type="submit" className="btn btn-primary" />
                   

                </form>
            </div>
        </div> 
        )
    }
}

export default UserUpdate