import React, ( Component ) from 'react';
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
          <div>
            
          </div>


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

componentDidMount()(
  console.log("Component Mounted")
 //dat to be retreived from backend  
)


export default Menu;