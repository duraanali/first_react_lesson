import React, {useState} from "react";
import './index.css';

function App() {
  const initialState = 0;
  const [count, setCount] = useState(0)


  return (
    <div>
     <h2>React Counter</h2>
     
     <p className="click_desc">
       You clicked <span>{count}</span>
     </p>

     <button onClick={ () => setCount(count + 1) }>Add 1</button>
     <button onClick={ () => setCount(count * 5)}>Multiply by 5</button>
     <button onClick={ () => setCount(initialState)}>Reset</button>
    </div>
  );
}

export default App;
