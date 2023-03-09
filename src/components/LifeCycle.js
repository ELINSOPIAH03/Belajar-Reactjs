import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name : '',
            stillType : '', 
        }
        this.setStillType = this.setStillType.bind(this)
    }

    setName = (e) =>{
        let name = e.target.value
        this.setState({
            name : name,
            stillType: true,
        })
    }

    setStillType(){
        this.setState({
            stillType : false,
        })
    }

    componentDidMount(){
        // console.log(' componenn melakukan set');
        this.setState({
            stillType: false,
        })
    }

    componentDidUpdate(){
        console.log('componen melakukan update');
    }
    
    render() {
        if (this.state.stillType===true) {
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    <input
                        onChange={this.setName}
                    />
                    <button onClick={this.setStillType}>Add</button>
                    <p>
                        Loading ...
                    </p>
                </div>
            );
        }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input
                    onChange={this.setName}
                />
                <p>
                    hallo {this.state.name}
                </p>
                
            </div>
        );
    }
}

export default LifeCycle;