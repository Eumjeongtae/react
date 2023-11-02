import React, { useState } from "react";

export default function Counter({onClick,total}) {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count +1)
  }
  // let plus = (event)=>{
  //  - setCount(count+1)
  // }
  return (
    <div>
      <span className="number">{count}/ <b>{total}</b> </span>
      {/* <button className="btn" onClick={() => {
        plus();
        plus();
      }}>Add +2</button> */}
      <button className="btn" onClick={() => {
        plus();
        onClick();

      }}>Add +1</button>
    </div>
  );
}
