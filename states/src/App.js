import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };


class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
          temperature: '',
          value:'garri'
    };
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />

            <select value={this.state.value} onChange={()=>this.setState({value:event.target.value})} name="foods" id="foods">
                <option value="garri">Garri</option>
                <option value="beans">Beans</option>
                <option value="rice">Rice</option>
            </select>
        </fieldset>
      );
    }
  }
  const BoilingVerdict = (props)=>{
     return   props.celsius >= 100 ?
      (<div>
          The water would boil
      </div>) : (<div>
        The water would not boil
      </div>)
  }
  
  const App = ()=>(
      <div>
         <Calculator scale='c'/>
      </div>
  )
  export default App;