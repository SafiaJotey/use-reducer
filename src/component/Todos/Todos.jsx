import React, { useReducer, useState } from 'react';
import '../Contacts/Contacts.css';

const Action = {
  ADD: 'add',
  DELETE: 'delete',
  TOGGLE: 'toggle',
};
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case Action.ADD:
      return [...state, newTodos(action.payload.name)];
    case Action.DELETE:
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    case Action.TOGGLE:
      return state.filter((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return state;
  }
};
const newTodos = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  const handleTodos = (e) => {
    e.preventDefault();
    dispatch({ type: Action.ADD, payload: { name: name } });
    setName('');
  };

  return (
    <div className="container">
      <form onSubmit={handleTodos}>
        <input
          type="text"
          value={name}
          placeholder="enter new todos"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>ADD</button>
      </form>
      <hr />
      <div>
        {state.map((todo) => {
          return (
            <div key={todo.id}>
              <h2 style={{ color: todo.complete ? 'black' : 'red' }}>
                {todo.name}
              </h2>
              <button
                onClick={() =>
                  dispatch({
                    type: Action.TOGGLE,
                    payload: { id: todo.id },
                  })
                }
              >
                toggle
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: Action.DELETE,
                    payload: { id: todo.id },
                  })
                }
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
