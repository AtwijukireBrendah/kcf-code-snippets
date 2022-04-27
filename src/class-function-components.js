import React from 'react';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      count: 0
    }
  }

  increaseCount=()=>{
    this.setState({
      count: this.state.count + 1 
    })
  }

  render(){
   return (
    <div>
      <p>Hello, {this.props.name} click button to increase count</p>
      <h1>{this.state.count}</h1>
      <button onClick={this.increaseCount}>Increase</button>
    </div>
   )
 }
}

export default App;




function App(props){

  const [count,setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
  } 

  return (
    <div>
      <p>Hello, {props.name} click button to increase count</p>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;