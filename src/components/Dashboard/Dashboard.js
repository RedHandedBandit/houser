import React, {Component} from 'react';
import House from './../House/House'
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            property: [],
        }
        
    }

    componentDidMount(){
        axios.get('/api/houses').then( response => {
            this.setState({property: response.data})
        })
    }


    render(){
        let houseProperty = this.state.property.map((house, i) => {
            return (
                <House key={i} info={house}/>
            )
        })
        return (
            <div> 
              <h3> Dashboard </h3>
              {houseProperty}
            </div>
        )
    }
}

export default Dashboard