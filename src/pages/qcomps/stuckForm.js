import { useState } from 'react';

export default function Form() {

  const [firstName, setfn] = useState(0);
  const [lastName, setln] = useState(0);
  let firstName = '';
  let lastName = '';

  function handleFirstNameChange(e) {
    setfn(e.target.value);
  }

  function handleLastNameChange(e) {
    setfn(e.target.value);
  }

  function handleReset() {
    firstName = '';
    lastName = '';
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
