import React from "react";

class Handlerevent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggleStatus : true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(state => ({
            toggleStatus : !state.toggleStatus
        }))
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.toggleStatus ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Handlerevent