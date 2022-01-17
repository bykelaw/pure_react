import React from "react";
import ReactDOM from "react-dom";

/** 
class ErrorCatcher extends React.Component{
  state= {
    error:null
  }

  componentDidCatch(error,info){
    console.log('[componentDidCatch]',error)
    this.state({error:info.componentStack})
  }


  render(){

    if(this.state.error){
      return(
        <div>A error occurred: {this.state.error}</div>
      )
    }

    else{
      return this.props.children
    }

  }
}

class LifeCycleDemo extends React.Component{
  constructor(props){
    super(props)
    console.log('[constructor]')
  }
// getDerivedStateFromProps(nextProps,prevState){
//   console.log('[getDerivedStateFromProps]')
//   console.log('[nextProps]',nextProps)
//   console.log('[prevState]',prevState)
// }
static getDerivedStateFromProps(nextProps,prevState){
  console.log('[getDerivedStateFromProps]')
  console.log('[nextProps]',nextProps)
  console.log('[prevState]',prevState)
}
componentDidMount(){
  console.log('[componentDidMount]')
}
shouldComponentUpdate(nextProps,nextState){
  console.log('[shouldComponentUpdate]')
  console.log('[nextProps]',nextProps)
  console.log('[nextState]',nextState)
}
  render(){
    console.log('[render]')
    return(
      <div>Hello</div>
    )
  }
}


ReactDOM.render(<ErrorCatcher>
  <LifeCycleDemo/>
</ErrorCatcher>,document.querySelector('#root'))
**/

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state={
      date : new Date()
    }
  }
  componentDidMount(){

    this.blah=setInterval(
    ()=>this.tick(),
      1000
      )
      console.log('[componentDidMount]')
  }
  componentWillUnmount(){
    console.log('[componentWillUnmount]')
    clearInterval(this.blah)
  }
  tick = ()=>{
    this.setState({date:new Date()})
  }
  render(){
    return(
      <div>
        <h1>Hello World</h1> 
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
const element = <Clock/>
ReactDOM.render(element,document.querySelector('#root'))