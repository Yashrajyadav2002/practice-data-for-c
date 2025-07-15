
import  { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); 

  const increase = () => {
    setCount(count + 1); 
  };

  const decrease = () => {
    setCount(count - 1 )
    if (count<=0){
      setCount(0)

    } 
  };
  const reset = ()=>{
    setCount (0)
  }


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counting Value: {count}</h2>
      <button onClick={increase} style={{ marginRight: '20px' }}>Increase</button>
      <button onClick={decrease} style={{marginRight:'20px'}}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;