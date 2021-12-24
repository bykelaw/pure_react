import React, { Component } from 'react'

 class HouseControl extends Component {
    state={
        kitchen: true,
        bathroom:false,
        livingRoom:true,
        bedroom:false,
    }
    render() {
        return (
            <div>
                <div>{this.state.kitchen}</div>
                <div>{this.state.bathroom}</div>
                <div>{this.state.livingRoom} </div>
                <div>{this.state.bedroom} </div>
            </div>
        )
    }
}

export default HouseControl;
