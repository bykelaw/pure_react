import React from 'react'
// import { render } from 'react-dom'

 class Author extends React.Component{
   
      
        state = {
            age:2
        }


     increase=(action)=>{
        this.setState({
            age:this.state.age + 1
        }
        )
    }
    
    decrease(word){
        this.setState({age:this.state.age - 1})
        console.log(word)
    }
    
    
    render(){
        console.log(this.state.age)
        return (
            <div>
            <p>name: {this.props.name}</p>
            <p>Age: {this.state.age}</p>
            <button onClick={this.increase}>Increase age</button>
            <button onClick={()=>this.decrease()}>decrease age</button>
        </div>
    )
}
}
export default Author
