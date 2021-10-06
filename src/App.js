import React, { useCallback, useRef } from 'react';
import './style.css';

const persons = [
  {
    id: 1,
    name: 'Dominik',
    email: 'dominik@dorfmeister.cc',
  },
  {
    id: 2,
    name: 'John',
    email: 'john@doe.com',
  },
];

export default function App() {
  const [selected, setSelected] = React.useState(persons[0]);
  const selectedRef = useRef(0);

  return (
    <div>
      {persons.map((person) => (
        <button
          type="button"
          key={person.id}
          onClick={() => {
            setSelected(person);
            selectedRef.current = Math.random();
            console.log('REF Value: ', selectedRef.current);
          }}
        >
          {person.id === selected.id ? person.name.toUpperCase() : person.name}
        </button>
      ))}
      <br />
      <DetailView key={selectedRef.current} initialEmail={selected.email} />
    </div>
  );
}

function DetailView({ initialEmail }) {
  const [emailInput, setEmailInput] = React.useState(null);

  const emailRef = useCallback((node) => {
    if (node) {
      console.log('Node: ', node);
      node.value = initialEmail;
    }

    setEmailInput(node);
  }, []);

  console.log('rendered');
  return (
    <div style={{ marginTop: 30 }}>
      <input
        type="text"
        ref={emailRef}
        // value={email}
        // onChange={(event) => setEmail(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          console.log('REF: ', emailInput);
          console.log('Alert: ', emailInput.value);
        }}
      >
        Apply
      </button>
    </div>
  );
}
