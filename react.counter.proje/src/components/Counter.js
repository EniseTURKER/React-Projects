import React, { Component } from 'react';

export default class Counter extends Component {
  state = { count: 0 }
  
  increase = () => this.setState({ count: ++this.state.count })
  decrease=()=> this.setState({count:--this.state.count})
  
  render() {
    return <div className='card' >
      <h1 className='pop'>{ this.state.count}</h1>
      <br></br>
      <div >
      <button className='corn' onClick={this.increase}>increase(+)</button>
      <button className='corn' onClick={this.decrease}>decrease(-)</button>
      </div>
    </div>;
  }
}
























// export default class Counter extends Component {
//   state = { number: 0 };
  
//     incrementState = () => {
//       this.setState({ number: ++this.state.number });
//     };
//     decrementState = () => {
//       this.setState({ number: this.state.number - 1 });
//     };
//     render() {
//       return (
//         <div>

//           Counter : {this.state.number} <br />
//           <button onClick={this.decrementState}>-</button>
//           <button onClick={this.incrementState} style={{ marginLeft: "5px" }}>
//             +
//           </button>
//         </div>
//       );
//     }
// }