import React from "react";

class Time extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            time : props.start
        }
    }

    // lifecycle
    componentDidMount(){
        this.addInterval = setInterval( () => this.increase(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.addInterval)
    }

    increase(){
        //digunakan untuk update state time setiap detik
        this.setState((state,props) => ({
            time : parseInt(state.time) + 1
        }))
    }

    render(){
        return (
            <div>Sekarang waktu {this.state.time} Detik setelah di refresh</div>
        )
    }
}

export default Time