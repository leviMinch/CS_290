import React, { useState } from 'react';

function RegistrationInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for registering, ${name}! We will send promotions to ${email}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign Up</legend>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br/>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default RegistrationInfo;