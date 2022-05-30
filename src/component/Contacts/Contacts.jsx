import React, { useReducer, useState } from 'react';
import './Contacts.css';
const initialState = [{ id: Date.now(), name: 'Add a contact', email: '' }];
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });
    default:
      return state;
  }
};
const Contacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    dispatch({ type: 'ADD', payload: contact });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <button>ADD CONTACT</button>
      </form>
      <hr />
      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <button
                  onClick={() =>
                    dispatch({ type: 'DELETE', payload: { id: contact.id } })
                  }
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
