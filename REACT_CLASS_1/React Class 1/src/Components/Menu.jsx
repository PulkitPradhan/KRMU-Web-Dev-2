import React from 'react';

function Menu(props) {
  return (
    <>
      <div>Menu</div>
      <ul>
        <li>Entertainment</li>
        <li>Politics</li>
        <li>Tech</li>
      </ul>
      <button 
        className="counter" 
        onClick={() => props.setCount((count) => count + 1)}
      >
        Count is {props.count}
      </button>
    </>
  );
}

export default Menu;