import React, {useState} from 'react';

function Counter(props){

  const [count,setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
  } 

  return (
    <div>
      <p>Hello, {props.name} click button to increase count</p>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <hr/>
    </div>
  );
}

export default Counter;