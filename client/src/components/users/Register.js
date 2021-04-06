import React from 'react'
import axios from 'axios'
import data from './cities.json'
class Register extends React.Component
{
    constructor()
    {
        super()
        this.state={
            username: '', 
            email: '',
            password:'',
            cities:[],
            city:''


        }
    }

    componentDidMount(){
        this.setState(()=>({
            cities:data
        }))
       
    }
    handleChange = (e) => {
        e.persist() 
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.cities)
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        
    
        axios.post('http://localhost:3005/users/register', formData)
        .then(response => {
            if(response.data.errors) {
                this.setState(() => ({
                    errors: response.data.errors
                }))
                
            } else {
            // programmatically change from one to another component
                this.props.history.push('/users/login')
            }   
        })
    
        
    }
    
    
    render()
    {
        return(
            <div className="row">
            <div className="col-md-6 offset-3">
                <h2>Register with us </h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>
                            Username 
                            <input type="text" 
                                   name="username"
                                   value={this.state.username} 
                                   onChange={this.handleChange} 
                                   className="form-control" 
                                   placeholder="Enter username"
                            />
                        </label>
                        
                    </div>

                    <div className="form-group">
                        <label>
                            Email
                            <input type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </label>
                        
                    </div>

                  

                    

                    <div className="form-group">
                        <label>
                            Select City
                            <select name="city"   value={this.state.city}   onChange={this.handleChange} className="form-control">
                                <option value="">Select</option>
                                {
                                    this.state.cities.map((city)=>{
                                    return <option key={city.id}
                                    value={city.id}>{city.name}</option>
                                })}
                            </select>

                        </label>
                    
                  
                    </div>

                    

                    <div className="form-group">
                        <label>
                            Password
                            <input type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   className="form-control"
                                   placeholder="Enter password"
                            />
                        </label>
                        
                    </div>
                    
                   

                    <input type="submit" className="btn btn-primary" />
                   

                </form>
            </div>
        </div> 
        )
    }
}
export default Register