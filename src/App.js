import React, {useState} from 'react';
import './App.css';


function App() {
  const [count,setCount] = useState(0);

    function increaseCount() {
      setCount(count+1);

    }

    function decreaseCount() {
      setCount(count-1);

    }
  function changedValue(e){
    //get target.value
    let inputvalue=parseInt(e.target.value);
    //update state with value
    setCount(inputvalue);
    
  }


    return (
      <div className="App">
        <h1>Counter App</h1>
        <input type="number" value={count} onChange={changedValue} />
        <div className="btn-container">
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
        </div>

      </div>
    );
    }

  export default App;


  
