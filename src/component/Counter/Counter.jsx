import React, { useReducer } from 'react';
import './Counter.css';
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.value };
    case 'DECREMENT':
      return { count: state.count - action.value };
    default:
      return { count: state.count };
  }
};

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <p>{state.count}</p>
      <div className="btnContainer">
        <button
          className="btn"
          onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}
        >
          +
        </button>

        <button
          className="btn"
          onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}
        >
          -
        </button>
      </div>
      <div className="btnContainer">
        <button
          className="btn"
          onClick={() => dispatch({ type: 'INCREMENT', value: 10 })}
        >
          +10
        </button>

        <button
          className="btn"
          onClick={() => dispatch({ type: 'DECREMENT', value: 10 })}
        >
          -10
        </button>
      </div>
    </div>
  );
};

export default Counter;
