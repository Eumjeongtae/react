import { useState } from 'react';
import './App.css';
import Counter from '../components/Counter';

function App() { // 리턴할떄 반드시 하나의 태그만 출력
  const [total, setTotal] = useState(0);
  const handleClick = (event)=> setTotal((count)=> count +1);

  return (
    <>
      <div className='container'>
        <div className='banner'>Total : {total}</div>
        <Counter onClick= {handleClick} total = {total} /> 
        <Counter onClick= {handleClick} total = {total} />
      </div>

    </>
  );
}

export default App;
