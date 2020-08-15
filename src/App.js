import React from 'react';
import './App.css';

class  App extends React.Component {
  state = { advice : ''};
  componentDidMount(){
    this.fetchAdvice();
  }
    
    fetchAdvice = ()=>{
      fetch(`https://api.adviceslip.com/advice`)
      .then(data => data.json())
      .then((data) =>{
        const { advice } = data.slip;
          this.setState({ advice });
      } )
      .catch(err => console.log(err));
    }
    render(){
  return (
    <div className="App">
      <div className="card">
       <h1 className="heading"> {this.state.advice}</h1>
       <button  onClick={this.fetchAdvice}>Hit me up!</button>
      </div>

    </div>
  );
}
}
export default App;
