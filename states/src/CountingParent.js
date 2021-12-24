import React, { Component } from 'react'

/**
class CountingParent extends React.Component{
    constructor(props){
      super(props)
  
      this.state = {
        actionCount: 0
      }
  
      this.handleAction = this.handleAction.bind(this)
      this.handleReset = this.handleReset.bind(this)
    }
  
  
    handleAction(action){
      console.log("Child says ",action)
      this.setState((state,props)=>{
        return{
        actionCount: this.state.actionCount + 1
      }})

    }
    

    handleReset(action){
      console.log("Has been reset")
      this.setState((state,props)=>{
        return{
        actionCount:0
      }})
      console.log(this.state.actionCount)
    }
  render(){
    return(
      <div>
        <p>The button was clicked {this.state.actionCount} times</p>
        <button onClick={this.handleAction}>Click</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
  }
**/

class CountingParent extends React.Component{
  state={
    actionCount: 0
  }
  handleAction= (action)=>{
    this.setState({
      actionCount: this.state.actionCount + 1
    })
  }
  render(){
    return(
      <div>
        <p>This button was clicked {this.state.actionCount}</p>
        <button onClick={this.handleAction}>Click</button>
      </div>
    )
  }
}













  export default CountingParent;