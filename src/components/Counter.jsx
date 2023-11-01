import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count=>count +1)
  }
  // let handleClick = (event)=>{
  //  - setCount(count+1)
  // }
  return (
    <div>
      <span className="number">{count}</span>
      <button className="btn" onClick={() => {
        handleClick();
        handleClick();
      }}>Add +2</button>
      <button className="btn" onClick={() => {
        handleClick();
      }}>Add +1</button>
    </div>
  );
}
// export default function Counter(){
//   let count = 0;
//   return(
//     <div>
//       <span className="number">{count}</span>
//       <button className="btn" onClick={(event)=>{count++}}>Add +</button>
//     </div>
//   );
// }