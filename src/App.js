import { useState } from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0)
  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }
  function reset(){
    setCount(0)
  }
  return (
   
    <div>

<div className='container'>
        <table className=''>
          <tr>
            <td colSpan={3} className='text-center pt-5'>{count}</td>
          </tr>
          <tr className='pt-5'>
            <td className='pt-3'><button onClick={increment} className='btn btn-primary'>Increment</button></td>
            <td className='pt-3'><button onClick={reset} className='btn btn-danger'>Reset</button></td>
            <td className='pt-3'><button onClick={decrement} className='btn btn-primary'>Drecrement</button></td>
          </tr>
        </table>
  
  
</div>   
 </div>
  );
}

export default App;
