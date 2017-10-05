import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);

    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: 0,
    }

    this.updateValues = this.updateValues.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateValues(event) {
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    })
  }

  calculate() {
    let r = this.state.rate *.01 / 12;
    let b = this.state.balance;
    let t = this.state.term;
    let n = t * 12;
    let top = Math.pow((1+r), n) * r;
    let bottom = Math.pow((1+r), n) -1;

    this.setState({
      output: (b * (top/bottom)).toFixed(2)
    });    
  }
  
  render() {
    return (
      <div className='container'>
        {/* your JSX goes here */}
        <h3>Mortgage Calculator</h3>
        <input type='number' name='balance' value={this.state.balance} onChange={this.updateValues} />
        <input name='rate' type='number' step="0.01" value={this.state.rate} onChange={this.updateValues} />
        <br/>
        <select name='term' value={this.state.term} onChange={this.updateValues}> 
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <br/>
        <button name='submit' onClick={this.calculate} >Calculate</button>
        <div id="output" name='output'>
          {`$${this.state.output} is your payment.`}
        </div>
      </div>
    );
  }
}