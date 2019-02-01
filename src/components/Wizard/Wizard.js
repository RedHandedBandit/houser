import React, {Component} from 'react';
import axios from 'axios'

class Wizard extends Component {
    constructor(){
        super()
        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0
        }
    }

    createHouse(){
        axios.post('/api/houses', this.state).then( response => {
            console.log('worked!', response)
        }).catch(
            error => {console.log('this didnt work', error)}
        )
    }

    // handleChange(field, value) {
    //     this.setState({[`${field}`]: value})
    //     console.log(field)
    // }

    handleName(value){
        this.setState({name: value})
        console.log(value)
    }
    handleAddress(value){
        this.setState({address: value})
        console.log(value)
    }
    handleCity(value){
        this.setState({city: value})
        console.log(value)
    }
    handleState(value){
        this.setState({state: value})
        console.log(value)
    }
    handleZip(value){
        this.setState({zipCode: value})
        console.log(value)
    }


    render(){
        return (
            <div> 
             <h3> 
                 <input  onChange={(e) => this.handleName( e.target.value)} 
                 value={this.state.name} 
                 placeholder="name of property"/>
             </h3>
             <h3> 
                 <input onChange={(e) => this.handleAddress( e.target.value)} 
                 value={this.state.address}  
                 placeholder="address"/>
             </h3>
             <h3> 
                 <input onChange={(e) => this.handleCity( e.target.value)} 
                 value={this.state.city}  
                 placeholder="city"/>
             </h3>
             <h3> 
                 <input onChange={(e) => this.handleState( e.target.value)} 
                 value={this.state.state} 
                 placeholder="state"/>
             </h3>
             <h3> 
                 <input onChange={(e) => this.handleZip( e.target.value)} 
                 value={this.state.zipCode} 
                 placeholder="zipcode"/>
             </h3>
             <button onClick={() => {this.createHouse()}}> Complete </button>
            </div>
        )
    }
}

export default Wizard

